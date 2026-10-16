import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { academicOutputs } from "@/lib/academic";
import { learningModules } from "@/lib/foundations";
import { libraryTopics } from "@/lib/library";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <PageFrame>
      <p className="font-mono text-xs tracking-wide text-muted">
        {site.programme} · intended entry {site.academicYear}
      </p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
        A research portfolio in medical image computing
      </h1>
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8">
        <p>
          {site.authorName ? `${site.authorName} is preparing` : "This site documents preparation"}{" "}
          for graduate study in medical image computing, moving from professional software
          engineering into reproducible image analysis.
        </p>
        <p>
          The work follows three stages: foundations, a classical or established baseline, and one
          narrow research question. Sophisticated models wait until the simpler method is
          understood and measured.
        </p>
      </div>
      <p className="mt-6 max-w-3xl border border-line bg-paper px-4 py-3 text-sm leading-6">
        Official programme dates still need to be confirmed on the University of Girona site.
        Everything experimental on this portfolio is educational. It is not clinical software.
      </p>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl">Research projects</h2>
          <Link href="/research" className="text-sm text-accent underline underline-offset-4">
            All projects
          </Link>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Scientific library</h2>
          <p className="mt-3 max-w-xl leading-7">
            {libraryTopics.length} topic categories are in place, grouped by foundational subjects,
            MIC specializations, and the three projects. Papers will be added one verified record
            at a time.
          </p>
          <p className="mt-3 text-sm text-muted">Published papers: 0</p>
          <Link href="/library" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
            Browse topics
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Academic production</h2>
          <ul className="mt-3 space-y-3">
            {academicOutputs.slice(0, 3).map((output) => (
              <li key={output.title} className="flex items-start justify-between gap-3">
                <span>{output.title}</span>
                <StatusBadge status={output.status} />
              </li>
            ))}
          </ul>
          <Link href="/academic" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
            Planned outputs
          </Link>
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-serif text-3xl">Learning foundations</h2>
        <p className="mt-3 max-w-3xl leading-7">
          Modules follow the preparatory subjects for the first year of medical image analysis.
          Status records whether the work has started. There is no score and no progress bar.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {learningModules.map((module) => (
            <li key={module.slug}>
              <Link
                href={`/foundations/${module.slug}`}
                className="flex items-center justify-between gap-3 border border-line bg-paper px-4 py-3 hover:border-accent"
              >
                <span>{module.title}</span>
                <StatusBadge status={module.status} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-serif text-3xl">Profiles</h2>
        <ul className="mt-3 space-y-2">
          <li>
            {site.githubUrl ? (
              <a href={site.githubUrl} className="text-accent underline underline-offset-4">
                GitHub
              </a>
            ) : (
              "GitHub profile not configured."
            )}
          </li>
          <li>
            {site.linkedinUrl ? (
              <a href={site.linkedinUrl} className="text-accent underline underline-offset-4">
                Professional profile
              </a>
            ) : (
              "Professional profile not configured."
            )}
          </li>
        </ul>
      </section>
    </PageFrame>
  );
}
