import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { caseStudySlugs } from "@/data/case-studies";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasCaseStudy = caseStudySlugs.includes(project.slug);

  return (
    <Card
      className={`flex h-full flex-col ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        <p className="text-sm font-medium text-teal-700">{project.type}</p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-slate-950">
          {project.title}
        </h3>
        {project.role ? (
          <p className="mt-2 text-sm font-medium text-slate-600">
            Role: {project.role}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{project.summary}</p>

      {project.highlights.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Technical highlights
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {project.privacyNote ? (
        <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500">
          {project.privacyNote}
        </p>
      ) : null}

      {hasCaseStudy || project.repoUrl ? (
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-5">
          {hasCaseStudy ? (
            <LinkButton
              href={`/projects/${project.slug}`}
              variant="secondary"
              className="w-full sm:w-fit"
            >
              Read case study
            </LinkButton>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-800"
            >
              {project.repoLabel ?? "View source"}
              <span aria-hidden="true">&#8599;</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
