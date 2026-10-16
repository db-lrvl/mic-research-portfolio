export type AcademicOutput = {
  title: string;
  kind: string;
  project: string;
  status: "planned";
  note: string;
};

export const academicOutputs: AcademicOutput[] = [
  {
    title: "Hand radiograph technical report",
    kind: "Student research report",
    project: "Hand radiographs",
    status: "planned",
    note: "Will be written after the first completed experiment. It will not be described as peer-reviewed.",
  },
  {
    title: "Longitudinal MRI reproducibility report",
    kind: "Student research report",
    project: "Brain MRI",
    status: "planned",
    note: "Will be written after registration experiments exist.",
  },
  {
    title: "Airway CT methodological report",
    kind: "Student research report",
    project: "Chest CT",
    status: "planned",
    note: "Will state the dataset scope, including any limit if the data are not asthma-specific.",
  },
  {
    title: "Comparative research manuscript",
    kind: "Working paper",
    project: "Across the three projects",
    status: "planned",
    note: "A later comparison of methods and limits. Working paper, not a journal publication.",
  },
  {
    title: "Research poster",
    kind: "Poster",
    project: "Selected completed experiment",
    status: "planned",
    note: "Prepared only from results that have actually been computed.",
  },
];
