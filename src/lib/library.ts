export type TopicGroup = "foundations" | "specializations" | "projects";

export type LibraryTopic = {
  slug: string;
  name: string;
  group: TopicGroup;
  summary: string;
  foundationSlug?: string;
};

export const topicGroups: { id: TopicGroup | "all"; label: string }[] = [
  { id: "all", label: "All topics" },
  { id: "foundations", label: "MAIA foundations" },
  { id: "specializations", label: "MIC specializations" },
  { id: "projects", label: "Research projects" },
];

export const libraryTopics: LibraryTopic[] = [
  {
    slug: "medical-imaging-physics",
    name: "Medical imaging physics",
    group: "foundations",
    summary: "How X-ray, MRI, and CT signals are formed, and what the pixel or voxel values mean.",
    foundationSlug: "imaging-physics",
  },
  {
    slug: "applied-mathematics",
    name: "Applied mathematics",
    group: "foundations",
    summary: "Linear algebra and the transforms used when images are filtered, registered, or compared.",
    foundationSlug: "applied-mathematics",
  },
  {
    slug: "digital-image-processing",
    name: "Digital image processing",
    group: "foundations",
    summary: "Histograms, filtering, edges, thresholding, and morphology on digital images.",
    foundationSlug: "digital-image-processing",
  },
  {
    slug: "scientific-python",
    name: "Scientific Python",
    group: "foundations",
    summary: "NumPy, SciPy, scikit-image, and readable experiment code.",
    foundationSlug: "scientific-python",
  },
  {
    slug: "probability-statistics",
    name: "Probability and statistics",
    group: "foundations",
    summary: "Uncertainty, evaluation metrics, and what a comparison can support.",
    foundationSlug: "probability-statistics",
  },
  {
    slug: "machine-learning",
    name: "Machine learning",
    group: "foundations",
    summary: "Features, baselines, splits, and leakage, before any deep model.",
    foundationSlug: "machine-learning",
  },
  {
    slug: "deep-learning",
    name: "Deep learning",
    group: "foundations",
    summary: "Convolutional models used only after a classical baseline exists.",
    foundationSlug: "machine-learning",
  },
  {
    slug: "image-segmentation",
    name: "Image segmentation",
    group: "specializations",
    summary: "Assigning image regions to anatomy or tissue, and scoring that assignment.",
  },
  {
    slug: "image-registration",
    name: "Image registration",
    group: "specializations",
    summary: "Aligning images that differ in pose, session, or acquisition.",
  },
  {
    slug: "computer-aided-diagnosis",
    name: "Computer-aided diagnosis",
    group: "specializations",
    summary: "How image measurements are studied in diagnostic research, kept separate from clinical use.",
  },
  {
    slug: "medical-robotics",
    name: "Medical robotics",
    group: "specializations",
    summary: "Image guidance and spatial reasoning in the broader MIC curriculum.",
  },
  {
    slug: "ehealth",
    name: "eHealth",
    group: "specializations",
    summary: "Health-data systems, interoperability, and the boundary around research software.",
  },
  {
    slug: "research-methods",
    name: "Research methods and scientific writing",
    group: "foundations",
    summary: "Study design, limitations, citations, and the difference between a report and a publication.",
    foundationSlug: "scientific-thinking",
  },
  {
    slug: "ethics-trustworthy-ai",
    name: "Ethics and trustworthy medical AI",
    group: "foundations",
    summary: "Privacy, licensing, de-identification, and claims that match the evidence.",
    foundationSlug: "responsible-medical-ai",
  },
  {
    slug: "rheumatoid-arthritis-imaging",
    name: "Rheumatoid arthritis imaging",
    group: "projects",
    summary: "Reading that supports the hand-radiograph project. Diagnosis is not assumed.",
  },
  {
    slug: "ketamine-neuroimaging",
    name: "Ketamine neuroimaging",
    group: "projects",
    summary: "Reading that supports the longitudinal MRI project. Causal claims are not assumed.",
  },
  {
    slug: "asthma-airway-imaging",
    name: "Asthma and airway imaging",
    group: "projects",
    summary: "Reading that supports the chest-CT project. Measurements are not treated as biomarkers.",
  },
];

export function getLibraryTopic(slug: string): LibraryTopic | undefined {
  return libraryTopics.find((topic) => topic.slug === slug);
}
