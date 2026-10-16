import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { StatusBadge } from "@/components/status-badge";
import { academicOutputs } from "@/lib/academic";

export const metadata: Metadata = {
  title: "Academic production",
  description: "Planned student research reports, a working paper, and a poster. None are written or peer-reviewed.",
};

export default function AcademicPage() {
  return (
    <PageFrame>
      <h1 className="font-serif text-4xl md:text-5xl">Academic production</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8">
        This section will hold technical reports, one comparative working paper, a poster, and the
        reproducibility notes that belong with them. Student research reports stay labeled as
        student research reports.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {academicOutputs.map((output) => (
          <li key={output.title} className="py-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-serif text-2xl">{output.title}</h2>
              <StatusBadge status={output.status} />
            </div>
            <p className="mt-2 text-sm text-muted">
              {output.kind} · {output.project}
            </p>
            <p className="mt-2 max-w-3xl leading-7">{output.note}</p>
          </li>
        ))}
      </ul>
    </PageFrame>
  );
}
