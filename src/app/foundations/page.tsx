import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { StatusBadge } from "@/components/status-badge";
import { learningModules } from "@/lib/foundations";

export const metadata: Metadata = {
  title: "Learning foundations",
  description: "Preparatory modules for medical image computing. None have been started.",
};

export default function FoundationsPage() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl md:text-5xl">Learning foundations</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8">
        These modules match the preparatory material for medical image analysis: physics,
        mathematics, image processing, scientific Python, statistics, introductory machine
        learning, and responsible research practice. A module changes status when there is a
        notebook, exercise, or note to show.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {learningModules.map((module) => (
          <li key={module.slug} className="flex flex-col gap-2 py-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl">
                <Link href={`/foundations/${module.slug}`} className="hover:text-accent">
                  {module.title}
                </Link>
              </h2>
              <p className="mt-2 leading-7">{module.summary}</p>
            </div>
            <StatusBadge status={module.status} />
          </li>
        ))}
      </ul>
    </PageFrame>
  );
}
