"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => {
      setIsVisible(true);
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      setIsVisible(false);
      previouslyFocused.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full size: ${alt}`}
        className="block w-full cursor-zoom-in transition duration-200 ease-out hover:opacity-90"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "h-auto w-full rounded-lg shadow-lg shadow-slate-950/10",
            className,
          )}
        />
      </button>

      {isOpen
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6 transition-opacity duration-200 ease-out",
                isVisible ? "opacity-100" : "opacity-0",
              )}
              onClick={() => setIsOpen(false)}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-md p-2 text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ×
              </button>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onClick={(event) => event.stopPropagation()}
                className={cn(
                  "h-auto max-h-[90vh] w-auto max-w-[90vw] cursor-zoom-out rounded-lg object-contain transition-transform duration-200 ease-out",
                  isVisible ? "scale-100" : "scale-95",
                )}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
