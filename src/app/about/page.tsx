import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background and motivation for graduate study in medical image computing.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl md:text-5xl">About</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8">
        <p>
          {site.authorName ?? "The author"} is a software engineer preparing for the {site.programme},
          with {site.academicYear} as the intended entry year, subject to admission and to the dates
          published by the university.
        </p>
        <p>
          The professional background is full-stack and backend engineering: Python data workflows,
          SQL, PostgreSQL, Docker, APIs, and continuous delivery. Academic training includes data
          science and artificial intelligence, plus earlier academic writing. There is no formal
          medical education, and medical imaging is a new field of study.
        </p>
        <p>
          That engineering background is useful here because medical image computing depends on
          reproducible code, careful data handling, and experiments that can be rerun. The missing
          piece is the imaging science itself: how the pictures are acquired, what the numbers mean,
          and how to evaluate a method without overclaiming.
        </p>
        <p>
          The research interests are medical image analysis, computer-aided diagnosis as a research
          topic, image registration, image segmentation, and the practice of writing up a result
          with its limits.
        </p>
      </div>
      <section className="mt-10 max-w-3xl border-t border-line pt-8">
        <h2 className="font-serif text-2xl">Public links</h2>
        <ul className="mt-3 space-y-2 leading-7">
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
        <p className="mt-4 text-sm leading-6 text-muted">
          The name and profile links come from local environment variables. They are omitted until
          those values are set.
        </p>
      </section>
    </PageFrame>
  );
}
