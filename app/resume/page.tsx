import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ResumeActions } from "@/components/sections/resume-actions";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { resume, type ResumeEntry } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const description = `Resume of ${siteConfig.name}: software engineering internship at Emagine Solutions, Computer Engineering at the American University of Sharjah, and projects in React, Spring Boot, and PyTorch.`;

export const metadata: Metadata = {
  title: "Resume",
  description,
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description,
    url: "/resume",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alaa Shammout, full stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${siteConfig.name}`,
    description,
    images: ["/opengraph-image"],
  },
};

const contactLinks = [
  { label: siteConfig.phone, href: `tel:${siteConfig.phone.replaceAll(" ", "")}` },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, external: true },
  { label: "GitHub", href: siteConfig.githubUrl, external: true },
];

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal
      as="section"
      durationMs={400}
      // Sections below the fold start hidden until scrolled to; printing
      // must show them regardless.
      className="border-t border-slate-200 py-8 print:break-inside-avoid-page print:py-4 print:opacity-100! print:transform-none!"
    >
      <h2 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-teal-700">
        <span aria-hidden="true" className="h-px w-6 bg-teal-700" />
        {title}
      </h2>
      <div className="mt-5 print:mt-3">{children}</div>
    </Reveal>
  );
}

function EntryList({ entries }: { entries: ResumeEntry[] }) {
  return (
    <div className="space-y-8 print:space-y-4">
      {entries.map((entry) => (
        <article
          key={entry.title}
          className="relative border-l-2 border-slate-200 pl-5 transition-colors duration-200 hover:border-teal-700 print:border-l-0 print:pl-0"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg font-semibold text-slate-950">{entry.title}</h3>
            <p className="shrink-0 text-sm font-medium text-slate-500">{entry.dates}</p>
          </div>
          <p className="mt-1 text-sm font-medium text-slate-700">{entry.subtitle}</p>
          {entry.context ? (
            <p className="mt-1 text-sm text-slate-500">{entry.context}</p>
          ) : null}
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-slate-600 marker:text-teal-700 print:space-y-1 print:text-sm print:leading-6">
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {entry.linkUrl || entry.caseStudySlug ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium print:hidden">
              {entry.linkUrl ? (
                <a
                  href={entry.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-teal-700 transition hover:text-teal-900"
                >
                  {entry.linkLabel ?? entry.linkUrl} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {entry.caseStudySlug ? (
                <Link
                  href={`/projects/${entry.caseStudySlug}`}
                  className="link-underline text-teal-700 transition hover:text-teal-900"
                >
                  Read the case study <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function ActionRow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden",
        className,
      )}
    >
      <Link
        href="/"
        className="link-underline group/link inline-flex w-fit items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover/link:-translate-x-0.5"
        >
          &larr;
        </span>
        Back to portfolio
      </Link>
      <ResumeActions />
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 print:bg-white">
      {/* `contents` keeps the wrapper out of layout so the navbar can still
          stick to the viewport instead of to a navbar-sized box. */}
      <div className="contents print:hidden">
        <Navbar />
      </div>
      <main id="main" className="px-5 py-10 sm:px-6 sm:py-14 print:p-0">
        <div className="mx-auto max-w-3xl">
          <ActionRow className="pb-6" />

          <article className="rounded-lg border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-slate-950/[0.03] sm:px-10 print:border-0 print:p-0 print:shadow-none">
            <header className="animate-rise pb-8 print:pb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 print:hidden">
                Updated {resume.updated}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl print:mt-0 print:text-3xl">
                {siteConfig.name}
              </h1>
              <p className="mt-2 text-lg text-slate-700">Full Stack Developer</p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                <li>{resume.location}</li>
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="link-underline font-medium text-teal-700 transition hover:text-teal-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </header>

            <ResumeSection title="Summary">
              <p className="text-base leading-7 text-slate-700 print:text-sm print:leading-6">
                {resume.summary}
              </p>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-slate-950">
                  {resume.education.school}
                </h3>
                <p className="shrink-0 text-sm font-medium text-slate-500">
                  {resume.education.dates}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {resume.education.degree} · {resume.education.location}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600 print:text-sm">
                <span className="font-medium text-slate-700">Relevant coursework:</span>{" "}
                {resume.education.coursework}
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <EntryList entries={resume.experience} />
            </ResumeSection>

            <ResumeSection title="Projects">
              <EntryList entries={resume.projects} />
            </ResumeSection>

            <ResumeSection title="Skills">
              <dl className="grid gap-5 sm:grid-cols-2 print:gap-2">
                {resume.skills.map((group) => (
                  <div key={group.title}>
                    <dt className="text-sm font-semibold text-slate-950">{group.title}</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Badge key={item} className="print:min-h-0 print:border-0 print:bg-transparent print:p-0 print:after:content-[','] print:last:after:content-['']">
                          {item}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </ResumeSection>
          </article>
          <ActionRow className="pt-6" />
        </div>
      </main>
      <div className="contents print:hidden">
        <Footer />
      </div>
    </div>
  );
}
