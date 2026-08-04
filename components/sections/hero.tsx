import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
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
          I&apos;m looking for an 8-week internship in software, cloud, AI, or
          embedded systems. I hold a UAE Golden Visa, so no sponsorship is
          needed.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#projects" className="sm:w-fit">
            View projects
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
    </section>
  );
}
