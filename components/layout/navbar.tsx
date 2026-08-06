"use client";

import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-2 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-3 md:py-3">
        <Link
          href="/#home"
          className="w-fit rounded-md text-base font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="-mx-2 flex gap-1 overflow-x-auto px-2 text-sm md:mx-0 md:flex-wrap md:justify-end md:overflow-visible md:px-0"
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
                  "link-underline whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
                  isActive ? "font-semibold text-teal-700" : "text-slate-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
