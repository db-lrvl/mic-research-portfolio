import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { TopicBrowser } from "@/components/topic-browser";

export const metadata: Metadata = {
  title: "Scientific library",
  description: "Topic index for the medical image computing reading library. No papers are published yet.",
};

export default function LibraryPage() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl md:text-5xl">Scientific library</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8">
        The library will hold papers and educational sources for foundational subjects, MIC
        specializations, and the three research projects. A record is added only with its authors,
        year, venue, DOI or source URL, and a checked free-access link when one exists.
      </p>
      <p className="mt-4 max-w-3xl border border-line bg-paper px-4 py-3 text-sm leading-6">
        Published papers: 0. Reading notes stay private until they are intentionally written for
        this site. Copyrighted PDFs will not be copied into the site.
      </p>
      <div className="mt-10">
        <TopicBrowser />
      </div>
    </PageFrame>
  );
}
