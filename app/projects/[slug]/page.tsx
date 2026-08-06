import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import {
  caseStudySlugs,
  getCaseStudy,
} from "@/data/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Project Not Found | Alaa Shammout",
    };
  }

  return {
    title: caseStudy.project.title,
    description: caseStudy.project.summary,
    openGraph: {
      title: `${caseStudy.project.title} | Alaa Shammout`,
      description: caseStudy.project.summary,
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Alaa Shammout computer engineering portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.project.title} | Alaa Shammout`,
      description: caseStudy.project.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const { project } = caseStudy;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main id="main">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 pb-6 text-sm">
              <Link
                href="/#projects"
                className="link-underline inline-flex items-center gap-1.5 font-medium text-slate-500 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <span aria-hidden="true">&larr;</span>
                Back to projects
              </Link>
              {project.repoUrl ? (
                <>
                  <span className="text-slate-300" aria-hidden="true">
                    |
                  </span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1.5 font-medium text-teal-700 transition hover:text-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {project.repoLabel ?? "View source"}
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                </>
              ) : null}
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Case study
                </p>
                <h1 className="mt-4 max-w-3xl break-words text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  {project.summary}
                </p>
              </Reveal>
              <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-950/[0.03]">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-950">Type</dt>
                    <dd className="mt-1 text-slate-600">{project.type}</dd>
                  </div>
                  {project.role ? (
                    <div>
                      <dt className="font-semibold text-slate-950">Role</dt>
                      <dd className="mt-1 text-slate-600">{project.role}</dd>
                    </div>
                  ) : null}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
            <Reveal
              as="article"
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                Challenge
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {caseStudy.challenge}
              </p>
            </Reveal>
            <Reveal
              as="article"
              delayMs={60}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                Outcome
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {caseStudy.outcome}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:py-16">
            <div className="space-y-10">
              {caseStudy.sections.map((section, index) => (
                <Reveal
                  key={section.title}
                  as="section"
                  delayMs={Math.min(index * 60, 240)}
                >
                  <h2 className="text-2xl font-semibold text-slate-950">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.images && section.images.length > 0 ? (
                    <div className="mt-6 space-y-6">
                      {section.images.map((image) => (
                        <figure key={image.src}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-auto w-full rounded-lg shadow-lg shadow-slate-950/10"
                          />
                          {image.caption ? (
                            <figcaption className="mt-2 text-sm text-slate-500">
                              {image.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </div>

            <aside className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Technologies
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>

              {project.privacyNote ? (
                <div className="rounded-lg border border-teal-200 bg-teal-50 p-5">
                  <h2 className="text-sm font-semibold text-teal-950">
                    Privacy note
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-teal-900">
                    {project.privacyNote}
                  </p>
                </div>
              ) : null}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
