import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Two roles since graduating in June 2026"
      aside={<ExperienceTimeline />}
      stickyHeading
    >
      <div className="space-y-4">
        {experience.map((role, index) => (
          <Reveal
            key={role.slug}
            delayMs={Math.min(index * 80, 240)}
            durationMs={400}
            distancePx={20}
          >
            <Card
              id={`experience-${role.slug}`}
              className="group/card relative scroll-mt-24 overflow-hidden transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-950/10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-teal-700 transition-transform duration-300 ease-out-soft group-focus-within/card:scale-y-100 group-hover/card:scale-y-100"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-slate-950">
                  {role.title}, {role.company}
                </h3>
                <span className="text-sm text-slate-500">
                  {role.dates} · {role.location}
                </span>
              </div>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                {role.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              {role.linkUrl ? (
                <a
                  href={role.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 underline-offset-4 transition hover:text-teal-900 hover:underline hover:decoration-2"
                >
                  {role.linkLabel ?? role.linkUrl}
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                    &#8599;
                  </span>
                </a>
              ) : null}
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
