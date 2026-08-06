"use client";

import { useEffect, useRef } from "react";

// Matches --accent in globals.css (teal-700).
const ACCENT_RGB = "15, 118, 110";
const NODE_OPACITY = 0.4;
const LINE_OPACITY = 0.4;
const CONNECT_DISTANCE = 140;
const AREA_PER_NODE = 9000;
const MIN_NODES = 12;
const MAX_NODES = 60;
const NODE_RADIUS = 1.6;
const SPEED = 0.02; // px per ms

type Node = { x: number; y: number; vx: number; vy: number };

function createNodes(width: number, height: number): Node[] {
  const count = Math.min(
    MAX_NODES,
    Math.max(MIN_NODES, Math.floor((width * height) / AREA_PER_NODE)),
  );

  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * SPEED,
      vy: Math.sin(angle) * SPEED,
    };
  });
}

export function HeroBackgroundNodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodes.length === 0) {
        nodes = createNodes(rect.width, rect.height);
      } else if (width > 0 && height > 0) {
        const scaleX = rect.width / width;
        const scaleY = rect.height / height;
        for (const node of nodes) {
          node.x *= scaleX;
          node.y *= scaleY;
        }
      }

      width = rect.width;
      height = rect.height;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let isVisible = document.visibilityState === "visible";
    let lastTime = performance.now();
    let frameId: number;

    const step = (time: number) => {
      frameId = requestAnimationFrame(step);
      if (!isVisible) {
        lastTime = time;
        return;
      }

      const dt = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx * dt;
        node.y += node.vy * dt;

        if (node.x < NODE_RADIUS || node.x > width - NODE_RADIUS) {
          node.vx *= -1;
          node.x = Math.min(Math.max(node.x, NODE_RADIUS), width - NODE_RADIUS);
        }
        if (node.y < NODE_RADIUS || node.y > height - NODE_RADIUS) {
          node.vy *= -1;
          node.y = Math.min(Math.max(node.y, NODE_RADIUS), height - NODE_RADIUS);
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DISTANCE) {
            const opacity = LINE_OPACITY * (1 - distance / CONNECT_DISTANCE);
            ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${ACCENT_RGB}, ${NODE_OPACITY})`;
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    frameId = requestAnimationFrame(step);

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      lastTime = performance.now();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
