import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { StatusBadge } from "@/components/status-badge";
import { getLearningModule, learningModules } from "@/lib/foundations";

export function generateStaticParams() {
  return learningModules.map((module) => ({ topic: module.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const learningModule = getLearningModule(topic);
  if (!learningModule) {
    return { title: "Learning module" };
  }
  return {
    title: learningModule.title,
    description: learningModule.summary,
  };
}

export default async function FoundationTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const learningModule = getLearningModule(topic);
  if (!learningModule) {
    notFound();
  }

  return (
    <PageFrame>
      <p className="text-sm text-muted">
        <Link href="/foundations" className="text-accent underline underline-offset-4">
          Learning foundations
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <StatusBadge status={learningModule.status} />
      </div>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">{learningModule.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8">{learningModule.summary}</p>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-serif text-2xl">Concepts</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 leading-7">
          {learningModule.concepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 border-t border-line pt-8">
        <h2 className="font-serif text-2xl">Related projects</h2>
        <p className="mt-3 max-w-3xl leading-7">{learningModule.relatedProjects.join(", ")}.</p>
        <p className="mt-3 max-w-3xl leading-7">No project experiment is linked yet, because none has been run.</p>
      </section>

      <section className="mt-8 border-t border-line pt-8">
        <h2 className="font-serif text-2xl">Completed artifacts</h2>
        <p className="mt-3 max-w-3xl leading-7">None. Notes, exercises, and notebooks will be linked here when they exist.</p>
      </section>
    </PageFrame>
  );
}
