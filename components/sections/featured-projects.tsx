import { ProjectCard } from "@/components/sections/project-card";
import { SectionShell } from "@/components/ui/section-shell";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Featured work"
      title="Selected projects across software, embedded systems, AI, and simulation"
    >
      <div className="space-y-6">
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Dedicated case study pages are available for the strongest
          long-form projects.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
