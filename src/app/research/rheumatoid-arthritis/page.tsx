import type { Metadata } from "next";
import { ProjectView } from "@/components/project-view";
import { getProject } from "@/lib/projects";

const project = getProject("rheumatoid-arthritis");

export const metadata: Metadata = {
  title: project.title,
  description: project.researchQuestion,
};

export default function RheumatoidArthritisPage() {
  return <ProjectView project={project} />;
}
