import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Software isn't done when it works on my machine"
    >
      <div className="max-w-3xl space-y-5 text-base leading-7 text-slate-600">
        <p>
          I graduated from the American University of Sharjah in June 2026
          with a degree in Computer Engineering. Since then, I automated
          permit processing at a logistics company well enough that it became
          part of daily operations, then interned as a software engineer at
          Emagine Solutions, where I built the company&apos;s live WattsWhere
          website. At university, my team projects included the frontend for
          an EV charging platform Emagine sponsored, a Spring Boot booking
          microservice I fixed a real race condition in, a PyTorch
          re-implementation of CSRNet, and a FreeRTOS game running on bare
          ESP32 hardware.
        </p>
        <p>
          The main thing the internship taught me is that software isn&apos;t
          done when it works on my machine. It&apos;s done when it works under
          real conditions, with real data, over time. The audits made that
          concrete: contact forms that showed a success message while sending
          nothing, and a charger map that one malformed record could crash.
        </p>
        <p>
          Outside engineering, I swam for the AUS men&apos;s team and won
          bronze in 2022.
        </p>
      </div>
      <Card className="mt-8 max-w-3xl">
        <dl className="grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[140px_1fr] sm:gap-y-4 [&>dt:not(:first-child)]:mt-3 sm:[&>dt:not(:first-child)]:mt-0">
          <dt className="font-semibold text-slate-950">Degree</dt>
          <dd className="text-slate-600">
            B.S. Computer Engineering, American University of Sharjah, June
            2026
          </dd>
          <dt className="font-semibold text-slate-950">Coursework</dt>
          <dd className="text-slate-600">
            Data Structures &amp; Algorithms, Operating Systems, Computer
            Networks, Computer Vision
          </dd>
          <dt className="font-semibold text-slate-950">Clubs</dt>
          <dd className="text-slate-600">
            AI Club, IEEE EMBS, Computer Engineering Club
          </dd>
        </dl>
      </Card>
    </SectionShell>
  );
}
