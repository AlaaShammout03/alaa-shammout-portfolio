import { HeroBackgroundNodeGraph } from "@/components/sections/hero-background-node-graph";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-fade-slow [animation-delay:300ms] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      >
        <HeroBackgroundNodeGraph />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/10 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="flex max-w-2xl animate-rise items-center gap-2.5 text-xs font-semibold uppercase tracking-normal text-teal-700 md:tracking-wide">
          <span aria-hidden="true" className="h-px w-6 bg-teal-700" />
          Software Engineer · Computer Engineering, AUS ’26
        </p>
        <h1 className="mt-5 max-w-3xl animate-rise text-4xl font-semibold leading-tight text-slate-950 [animation-delay:80ms] sm:text-5xl lg:text-6xl">
          Alaa Shammout
        </h1>
        <p className="mt-5 max-w-2xl animate-rise text-lg leading-8 text-slate-800 [animation-delay:160ms] md:text-2xl md:leading-9">
          {siteConfig.positioning}
        </p>
        <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:flex-wrap sm:items-center">
          <LinkButton
            href={siteConfig.resumeUrl}
            download
            icon="down"
            className="sm:w-fit"
          >
            Download resume
          </LinkButton>
          <LinkButton
            href="#experience"
            variant="secondary"
            icon="down"
            className="sm:w-fit"
          >
            See my work
          </LinkButton>
          <div className="flex gap-1">
            <LinkButton
              href={siteConfig.githubUrl}
              variant="ghost"
              icon="external"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </LinkButton>
            <LinkButton
              href={siteConfig.linkedinUrl}
              variant="ghost"
              icon="external"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </LinkButton>
          </div>
        </div>
        <p className="mt-8 flex animate-rise items-center gap-2.5 text-sm text-slate-600 [animation-delay:320ms]">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available immediately for software engineering roles in the UAE
        </p>
      </div>
    </section>
  );
}
