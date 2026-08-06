"use client";

import { useLayoutEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delayMs = 0,
  durationMs = 300,
  distancePx = 12,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(true);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    setIsRevealed(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
        transform: isRevealed ? "translateY(0)" : `translateY(${distancePx}px)`,
      }}
      className={cn(
        "transition-[opacity,transform] ease-out",
        isRevealed ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
