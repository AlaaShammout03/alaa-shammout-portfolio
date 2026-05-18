import { SectionShell } from "@/components/ui/section-shell";

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Computer engineering background with practical systems work"
    >
      <div className="max-w-3xl space-y-5 text-base leading-7 text-slate-600">
        <p>
          I am a Computer Engineering graduate from the American University of
          Sharjah. My work spans web applications, backend services, embedded
          systems, AI/computer vision, and engineering simulations.
        </p>
        <p>
          This portfolio is structured to show how each project was built, what
          role I played, which technologies were used, and what can be shared
          publicly without exposing private or company-sensitive details.
        </p>
      </div>
    </SectionShell>
  );
}
