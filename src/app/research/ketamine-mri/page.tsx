import type { Metadata } from "next";
import { ProjectView } from "@/components/project-view";
import { getProject } from "@/lib/projects";

const project = getProject("ketamine-mri");

export const metadata: Metadata = {
  title: project.title,
  description: project.researchQuestion,
};

export default function KetamineMriPage() {
  return <ProjectView project={project} />;
}
