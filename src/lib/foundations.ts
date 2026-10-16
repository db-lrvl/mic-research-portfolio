export type LearningModule = {
  slug: string;
  title: string;
  summary: string;
  concepts: string[];
  relatedProjects: string[];
  status: "not_started";
};

export const learningModules: LearningModule[] = [
  {
    slug: "imaging-physics",
    title: "Medical imaging physics and acquisition",
    summary: "What an X-ray, MR, or CT image is measuring, before any algorithm is applied.",
    concepts: ["X-ray attenuation", "T1 and T2 contrast", "Hounsfield units", "Resolution and noise"],
    relatedProjects: ["Hand radiographs", "Brain MRI", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "applied-mathematics",
    title: "Linear algebra and applied mathematics",
    summary: "The operations underneath filtering, registration, and simple image models.",
    concepts: ["Vectors and matrices", "Convolution", "Linear transforms", "Spatial coordinates"],
    relatedProjects: ["Hand radiographs", "Brain MRI"],
    status: "not_started",
  },
  {
    slug: "digital-image-processing",
    title: "Digital image processing",
    summary: "Classical operations that will become the first baselines in each project.",
    concepts: ["Histograms", "Smoothing", "Edges", "Thresholding", "Morphology"],
    relatedProjects: ["Hand radiographs", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "scientific-python",
    title: "Scientific Python",
    summary: "Reproducible image code with a declared environment and small tests.",
    concepts: ["NumPy arrays", "scikit-image", "Figures with captions", "Environment files"],
    relatedProjects: ["Hand radiographs", "Brain MRI", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "probability-statistics",
    title: "Probability and statistics",
    summary: "How to score a result and how wide the uncertainty is.",
    concepts: ["Distributions", "Overlap metrics", "Comparison design", "Overfitting"],
    relatedProjects: ["Hand radiographs", "Brain MRI", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "machine-learning",
    title: "Introductory machine learning",
    summary: "Baselines, splits, and leakage. Deep models come after this module is in use.",
    concepts: ["Features", "Baselines", "Patient-level splits", "Generalization"],
    relatedProjects: ["Hand radiographs", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "scientific-thinking",
    title: "Scientific and critical thinking",
    summary: "Separating a hypothesis, a finished experiment, and future work.",
    concepts: ["Research questions", "Limitations", "Citation practice", "Reproducibility"],
    relatedProjects: ["Hand radiographs", "Brain MRI", "Chest CT"],
    status: "not_started",
  },
  {
    slug: "responsible-medical-ai",
    title: "Responsible medical AI",
    summary: "Licenses, de-identification, and language that does not overclaim clinical use.",
    concepts: ["Dataset licenses", "De-identification", "Non-clinical scope", "Open-access links"],
    relatedProjects: ["Hand radiographs", "Brain MRI", "Chest CT"],
    status: "not_started",
  },
];

export function getLearningModule(slug: string): LearningModule | undefined {
  return learningModules.find((module) => module.slug === slug);
}
