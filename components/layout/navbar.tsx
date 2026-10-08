"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CommandPalette } from "@/components/layout/command-palette";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

const sectionIds = navItems.map((item) => item.href.replace("/#", ""));

export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-shadow duration-300",
          isScrolled && "shadow-sm shadow-slate-950/5",
        )}
      >
        <div
          aria-hidden="true"
          className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-teal-700"
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-2 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-3 md:py-3">
          <Link
            href="/#home"
            className="w-fit rounded-md text-base font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            {siteConfig.name}
          </Link>
          <nav
            aria-label="Main navigation"
            className="-mx-2 flex items-center gap-1 overflow-x-auto px-2 text-sm md:mx-0 md:flex-wrap md:justify-end md:overflow-visible md:px-0"
          >
            {navItems.map((item) => {
              const id = item.href.replace("/#", "");
              const isActive = id === activeId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-md px-3 py-2 transition after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:bg-slate-100 hover:after:scale-x-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
                    isActive
                      ? "font-semibold text-teal-700 after:scale-x-100"
                      : "text-slate-600",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setIsPaletteOpen(true)}
              aria-label="Open command palette"
              className="ml-1 hidden items-center rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-400 transition hover:border-slate-300 hover:text-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 md:inline-flex"
            >
              ⌘K
            </button>
          </nav>
        </div>
      </header>
      <CommandPalette open={isPaletteOpen} onOpenChange={setIsPaletteOpen} />
    </>
  );
}
