import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Research projects",
  description: "Three planned medical image computing projects: hand radiographs, brain MRI, and chest CT.",
};

export default function ResearchPage() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl md:text-5xl">Research projects</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8">
        Each project starts with the imaging physics and classical methods for its modality. A
        learned model is a later comparison, and only when a public dataset and a classical
        baseline already exist.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
        The three research repositories are not created yet. Intended names:{" "}
        {projects.map((project) => project.intendedRepository).join(", ")}.
      </p>
    </PageFrame>
  );
}
