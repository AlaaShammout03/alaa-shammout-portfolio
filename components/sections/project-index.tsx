"use client";

import { projects } from "@/data/projects";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const cardIds = projects.map((project) => `project-${project.slug}`);

export function ProjectIndex() {
  const activeId = useActiveSection(cardIds);

  return (
    <ol className="mt-8 hidden space-y-1 lg:block">
      {projects.map((project, index) => {
        const id = cardIds[index];
        const isActive = id === activeId;

        return (
          <li key={project.slug}>
            <a
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "flex gap-3 rounded-md border-l-2 py-1.5 pl-3 pr-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
                isActive
                  ? "border-teal-700 font-medium text-teal-800"
                  : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-950",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "font-mono text-xs leading-5",
                  isActive ? "text-teal-700" : "text-slate-400",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{project.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
