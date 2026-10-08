"use client";

import { experience } from "@/data/experience";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const cardIds = experience.map((role) => `experience-${role.slug}`);

export function ExperienceTimeline() {
  const activeId = useActiveSection(cardIds);

  return (
    <ol className="mt-8 hidden border-l border-slate-200 lg:block">
      {experience.map((role, index) => {
        const id = cardIds[index];
        const isActive = id === activeId;

        return (
          <li key={role.slug} className="relative pb-6 pl-5 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-700 ring-4 ring-slate-50 transition-[background-color,transform] duration-200",
                isActive ? "scale-125 bg-teal-700" : "bg-white",
              )}
            />
            <a
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className="group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              <span
                className={cn(
                  "block text-sm font-semibold transition group-hover:text-teal-800",
                  isActive ? "text-teal-800" : "text-slate-950",
                )}
              >
                {role.company}
              </span>
              <span className="mt-0.5 block text-sm text-slate-600">
                {role.title}
              </span>
              <span className="mt-0.5 block text-xs text-slate-500">
                {role.dates}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
