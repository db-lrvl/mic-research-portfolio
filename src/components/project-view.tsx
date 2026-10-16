import type { ResearchProject } from "@/lib/projects";
import { PageFrame } from "@/components/page-frame";
import { StatusBadge } from "@/components/status-badge";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <div className="mt-3 max-w-3xl space-y-3 leading-7">{children}</div>
    </section>
  );
}

export function ProjectView({ project }: { project: ResearchProject }) {
  return (
    <PageFrame>
      <p className="font-mono text-xs tracking-wide text-muted">{project.modality}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <span className="text-sm text-muted">Stage 1 has not started</span>
      </div>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8">{project.researchQuestion}</p>

      <Section title="Clinical motivation">
        <p>{project.clinicalMotivation}</p>
        <p className="border border-line bg-accent-soft px-4 py-3 text-sm leading-6">
          {project.scopeBoundary}
        </p>
      </Section>

      <Section title="Anatomy and acquisition">
        <p>{project.anatomyAndAcquisition}</p>
      </Section>

      <Section title="Dataset">
        <p>{project.datasetStatus}</p>
      </Section>

      <Section title="Methods">
        <ul className="list-disc space-y-1 pl-5">
          {project.methods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
      </Section>

      <Section title="Learning prerequisites">
        <ul className="list-disc space-y-1 pl-5">
          {project.prerequisites.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Progression">
        <ol className="space-y-6">
          {project.stages.map((stage) => (
            <li key={stage.id}>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-xl">
                  Stage {stage.id} — {stage.title}
                </h3>
                <StatusBadge status={stage.status} />
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {stage.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Experimental design">
        <p>{project.experimentalDesign}</p>
      </Section>

      <Section title="Figures">
        <p>No figures yet. The first figure will be a captioned result from a permitted image.</p>
      </Section>

      <Section title="Evaluation metrics">
        <p>These metrics are intended. None have been measured.</p>
        <ul className="list-disc space-y-1 pl-5">
          {project.intendedMetrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </Section>

      <Section title="Results and limitations">
        <p>No experimental results yet. Limitations will be written with the first completed run.</p>
      </Section>

      <Section title="Related papers">
        <p>None linked yet. A paper will appear here after its bibliographic record and access link are checked.</p>
      </Section>

      <Section title="Code, notebook, and report">
        <dl className="space-y-3">
          <div>
            <dt className="font-medium text-foreground">GitHub repository</dt>
            <dd>Not created. Intended name: {project.intendedRepository}.</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Colab notebook</dt>
            <dd>Not available yet.</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Technical report</dt>
            <dd>Not written. It will be labeled as a student research report.</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Reproducibility</dt>
            <dd>
              The intended record for each run is the code commit, dataset version, parameters,
              random seed, software environment, split, metrics, and a short limitations note.
              Heavy training will not run on the website host.
            </dd>
          </div>
        </dl>
      </Section>
    </PageFrame>
  );
}
