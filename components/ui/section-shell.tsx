import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "white" | "muted";
  stickyHeading?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  tone = "muted",
  stickyHeading = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`border-t border-slate-200 ${
        tone === "white" ? "bg-white" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-12 lg:py-20">
        <Reveal
          className={
            stickyHeading ? "lg:sticky lg:top-24 lg:self-start" : undefined
          }
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
        </Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
