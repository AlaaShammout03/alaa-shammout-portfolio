import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">{siteConfig.name}</p>
          <p className="mt-1">Copyright 2026. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <p className="max-w-md text-left md:text-right">
            Full-stack, embedded, cloud, and AI-powered systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-slate-700 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Email
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-700 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-700 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
