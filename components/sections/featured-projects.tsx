import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Featured work"
      title="Selected projects across software, embedded systems, AI, and simulation"
      stickyHeading
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            delayMs={Math.min(index * 60, 240)}
            className={index === 0 ? "lg:col-span-2" : undefined}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
