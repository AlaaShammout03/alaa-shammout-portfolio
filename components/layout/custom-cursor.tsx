"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a[href], button, [role="button"], [role="option"], summary, label, select';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';
// How quickly the ring catches up with the pointer each frame (0 to 1).
const RING_FOLLOW = 0.2;

type CursorState = "default" | "hover" | "press" | "hover-press" | "text";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!root || !dot || !ring) return;

    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const html = document.documentElement;
    html.classList.add("custom-cursor");

    const pointer = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let isHovering = false;
    let isPressed = false;
    let isText = false;
    let frameId = 0;

    const updateState = () => {
      let state: CursorState = "default";
      if (isText) state = "text";
      else if (isHovering) state = isPressed ? "hover-press" : "hover";
      else if (isPressed) state = "press";
      root.dataset.state = state;
    };

    const show = (visible: boolean) => {
      root.dataset.visible = String(visible);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;

      if (root.dataset.visible !== "true") {
        ringPos.x = pointer.x;
        ringPos.y = pointer.y;
        show(true);
      }
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      isText = target.closest(TEXT_INPUT) !== null;
      isHovering = target.closest(INTERACTIVE) !== null;
      root.dataset.dark = String(target.closest('[role="dialog"]') !== null);
      updateState();
    };

    const handleDown = () => {
      isPressed = true;
      updateState();
    };

    const handleUp = () => {
      isPressed = false;
      updateState();
    };

    const handleLeave = () => show(false);

    const step = () => {
      frameId = requestAnimationFrame(step);
      const dx = pointer.x - ringPos.x;
      const dy = pointer.y - ringPos.y;
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return;

      ringPos.x += dx * RING_FOLLOW;
      ringPos.y += dy * RING_FOLLOW;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    html.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);
    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      html.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      html.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-state="default"
      data-visible="false"
      data-dark="false"
      className="group/cursor pointer-events-none fixed inset-0 z-[200] hidden transition-opacity duration-200 data-[state=text]:opacity-0 data-[visible=false]:opacity-0 [.custom-cursor_&]:block"
    >
      <div ref={ringRef} className="absolute left-0 top-0 will-change-transform">
        <span className="block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-teal-700/40 transition-[scale,background-color,border-color] duration-300 ease-out-soft group-data-[state=hover]/cursor:scale-[1.75] group-data-[state=hover]/cursor:border-teal-700/70 group-data-[state=hover]/cursor:bg-teal-700/10 group-data-[state=hover-press]/cursor:scale-[1.45] group-data-[state=hover-press]/cursor:border-teal-700 group-data-[state=hover-press]/cursor:bg-teal-700/20 group-data-[state=press]/cursor:scale-75 group-data-[dark=true]/cursor:border-teal-300/60 group-data-[dark=true]/cursor:bg-teal-300/10" />
      </div>
      <div ref={dotRef} className="absolute left-0 top-0 will-change-transform">
        <span className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-700 transition-[scale] duration-200 group-data-[state=hover-press]/cursor:scale-0 group-data-[state=hover]/cursor:scale-0 group-data-[dark=true]/cursor:bg-teal-300" />
      </div>
    </div>
  );
}
