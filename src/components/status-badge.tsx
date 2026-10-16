const labels = {
  planned: "Planned",
  in_progress: "In progress",
  completed: "Completed",
  not_started: "Not started",
} as const;

export function StatusBadge({ status }: { status: keyof typeof labels }) {
  return (
    <span className="inline-flex items-center border border-line bg-background px-2 py-0.5 font-mono text-xs tracking-wide text-foreground">
      {labels[status]}
    </span>
  );
}
