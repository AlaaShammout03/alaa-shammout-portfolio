import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { caseStudySlugs } from "@/data/case-studies";

const statusLabels = {
  "case-study-planned": "Case study",
  "project-card": "Featured project",
};

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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
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
        <Badge className="w-fit shrink-0 text-xs">
          {statusLabels[project.status]}
        </Badge>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{project.summary}</p>

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

      {hasCaseStudy ? (
        <div className="mt-auto pt-5">
          <LinkButton
            href={`/projects/${project.slug}`}
            variant="secondary"
            className="w-full sm:w-fit"
          >
            Read case study
          </LinkButton>
        </div>
      ) : null}
    </Card>
  );
}
