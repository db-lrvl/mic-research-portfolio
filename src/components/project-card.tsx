import Link from "next/link";
import type { ResearchProject } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";

export function ProjectCard({ project }: { project: ResearchProject }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-muted">{project.modality}</p>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground">
        <Link href={project.href} className="hover:text-accent">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-7 text-foreground">{project.summary}</p>
      <Link href={project.href} className="mt-5 text-sm text-accent underline underline-offset-4">
        Project page
      </Link>
    </article>
  );
}
