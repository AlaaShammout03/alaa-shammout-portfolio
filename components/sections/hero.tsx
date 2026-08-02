import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/data/site";

const focusAreas = [
  "Full-stack applications",
  "Embedded systems",
  "Cloud/backend services",
  "AI-powered software",
  "Engineering simulations",
];

export function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div>
          <p className="max-w-2xl text-xs font-semibold uppercase tracking-wide text-teal-700">
            Computer Engineering Graduate - American University of Sharjah
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Alaa Shammout
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-800 sm:text-2xl sm:leading-9">
            {siteConfig.positioning}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A public portfolio of selected software, embedded, AI, and
            simulation projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#projects" className="sm:w-fit">
              View Projects
            </LinkButton>
            <LinkButton href="#resume" variant="secondary" className="sm:w-fit">
              Resume
            </LinkButton>
            <LinkButton
              href={siteConfig.githubUrl}
              variant="ghost"
              className="sm:w-fit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </LinkButton>
          </div>
        </div>
        <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-950/[0.03]">
          <p className="text-sm font-semibold text-slate-950">
            Portfolio focus
          </p>
          <div className="mt-5 grid gap-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {area}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
