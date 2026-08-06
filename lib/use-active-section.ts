"use client";

import { useEffect, useRef, useState } from "react";

// Shrinks the observed viewport to a thin band just below the sticky navbar
// (96px, matching globals.css's scroll-margin-top) so a section is marked
// active around natural reading position, not the instant it touches the
// bottom edge of the screen.
const ROOT_MARGIN = "-96px 0px -60% 0px";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const visibleIds = useRef(new Set<string>());

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.current.add(entry.target.id);
          } else {
            visibleIds.current.delete(entry.target.id);
          }
        }
        setActiveId(
          sectionIds.find((id) => visibleIds.current.has(id)) ?? null,
        );
      },
      { rootMargin: ROOT_MARGIN },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
