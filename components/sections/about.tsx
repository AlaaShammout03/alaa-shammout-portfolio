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
          I graduated from the American University of Sharjah in June 2026
          with a degree in Computer Engineering. Across four team projects, I
          built a production-style frontend for an EV charging platform
          sponsored by Emagine Solutions, a Spring Boot booking microservice I
          fixed a real race condition in, a PyTorch re-implementation of
          CSRNet, and a FreeRTOS game running on bare ESP32 hardware. Outside
          of coursework, I automated permit processing at a logistics job well
          enough that the company still uses it today.
        </p>
        <p>
          The projects that stuck with me most were the ones where
          application code met the system underneath it: routing logic
          against live traffic data on one, and game state shared across
          FreeRTOS tasks on another. I want to keep working across that range
          rather than settle into just one.
        </p>
      </div>
    </SectionShell>
  );
}
