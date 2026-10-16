export type WorkStatus = "planned" | "in_progress" | "completed";

export type ProjectStage = {
  id: 1 | 2 | 3;
  title: string;
  status: WorkStatus;
  goals: string[];
};

export type ResearchProject = {
  slug: "rheumatoid-arthritis" | "ketamine-mri" | "lung-ct";
  href: "/research/rheumatoid-arthritis" | "/research/ketamine-mri" | "/research/lung-ct";
  title: string;
  summary: string;
  modality: string;
  researchQuestion: string;
  clinicalMotivation: string;
  anatomyAndAcquisition: string;
  scopeBoundary: string;
  datasetStatus: string;
  methods: string[];
  prerequisites: string[];
  stages: ProjectStage[];
  experimentalDesign: string;
  intendedMetrics: string[];
  intendedRepository: string;
  status: WorkStatus;
};

export const projects: ResearchProject[] = [
  {
    slug: "rheumatoid-arthritis",
    href: "/research/rheumatoid-arthritis",
    title: "From Hand Radiographs to Quantitative Joint Image Analysis",
    summary:
      "Preprocessing, joint-region analysis, and segmentation on hand radiographs, with rheumatoid arthritis as the clinical motivation.",
    modality: "X-ray",
    researchQuestion:
      "How do classical image-processing choices change the quantitative description of joint regions in hand radiographs, and how do those baselines compare with a lightweight learned segmentation model?",
    clinicalMotivation:
      "Hand radiographs are used in the assessment of joint damage in rheumatoid arthritis. This project uses that clinical setting to learn acquisition, preprocessing, and segmentation. Diagnosis is outside the present scope.",
    anatomyAndAcquisition:
      "The images are projectional radiographs of the hand. Pixel intensity reflects attenuation of an X-ray beam. Contrast, noise, and positioning vary with acquisition settings. Those properties are part of the Stage 1 study, before any model is trained.",
    scopeBoundary:
      "Rheumatoid arthritis diagnosis is outside the current scope. The work studies preprocessing, joint-region analysis, segmentation, and quantitative evaluation.",
    datasetStatus:
      "No dataset is selected. A public hand-radiograph collection will be added only after its license, annotation quality, access conditions, and de-identification status are checked.",
    methods: [
      "Histogram analysis",
      "Gaussian filtering",
      "Edge detection",
      "Thresholding",
      "Mathematical morphology",
      "Classical segmentation baselines",
      "A lightweight U-Net only after the classical baselines exist",
    ],
    prerequisites: [
      "X-ray image formation",
      "Pixel intensity and contrast",
      "Convolution and filtering",
      "Thresholding and morphology",
      "Segmentation metrics, including Dice and IoU",
      "Train, validation, and test separation without patient-level leakage",
    ],
    stages: [
      {
        id: 1,
        title: "Foundations",
        status: "planned",
        goals: [
          "Explain X-ray acquisition in enough detail to interpret pixel intensities.",
          "Implement histogram analysis, Gaussian filtering, edge detection, thresholding, and mathematical morphology.",
          "Visualize each transformation on one permitted demonstration image.",
        ],
      },
      {
        id: 2,
        title: "Applied experiment",
        status: "planned",
        goals: [
          "Select an annotated public hand-radiograph dataset and record its license.",
          "Load and visualize the annotations.",
          "Implement classical segmentation baselines and inspect failure cases.",
        ],
      },
      {
        id: 3,
        title: "Focused comparison",
        status: "planned",
        goals: [
          "Train a lightweight U-Net only if the data and compute budget support it.",
          "Compare classical and learned segmentation with Dice, IoU, and at least one additional appropriate metric.",
          "Test sensitivity to preprocessing and keep patient-level splits intact.",
        ],
      },
    ],
    experimentalDesign:
      "No experiment has been run. The intended comparison is classical segmentation against a lightweight U-Net, evaluated on a patient-level split. Preprocessing variants will be recorded as separate configurations, with code commit, parameters, and seed stored for each run.",
    intendedMetrics: ["Dice", "Intersection over Union", "One additional overlap or surface metric, chosen when the annotations are known"],
    intendedRepository: "medical-xray-joint-analysis",
    status: "planned",
  },
  {
    slug: "ketamine-mri",
    href: "/research/ketamine-mri",
    title: "Reproducibility of Longitudinal Brain MRI Measurements",
    summary:
      "Structural MRI, spatial orientation, registration, and the stability of longitudinal measurements. Ketamine studies are the clinical motivation.",
    modality: "Structural MRI",
    researchQuestion:
      "How much do reasonable preprocessing and registration choices change quantitative measurements in longitudinal structural brain MRI?",
    clinicalMotivation:
      "Ketamine research uses longitudinal brain MRI. This project uses that setting to learn MRI contrast, NIfTI geometry, and registration. Causal claims about ketamine are outside the present scope.",
    anatomyAndAcquisition:
      "The intended modality is structural MRI, most likely T1-weighted volumes. Functional MRI will be used only if a later question requires it. Stage 1 covers T1 and T2 contrast, voxel spacing, orientation, and axial, sagittal, and coronal display.",
    scopeBoundary:
      "Causal claims about ketamine and brain structure or function are outside the current scope. The work studies whether measurements stay stable when processing choices change.",
    datasetStatus:
      "No dataset is selected. OpenNeuro and other open longitudinal MRI collections, including ketamine-related studies, will be reviewed for participant structure, sessions, modalities, and usage conditions before any download.",
    methods: [
      "NIfTI loading and orthogonal slice display",
      "Intensity distribution analysis",
      "Rigid registration",
      "Affine registration",
      "Comparison of processing configurations",
    ],
    prerequisites: [
      "Basic MRI physics and T1/T2 contrast",
      "Voxel spacing and image orientation",
      "3D coordinate systems",
      "Rigid and affine transformations",
      "What a reproducibility study can and cannot claim",
    ],
    stages: [
      {
        id: 1,
        title: "Foundations",
        status: "planned",
        goals: [
          "Explain T1 and T2 contrast at an introductory level.",
          "Load a NIfTI volume and display axial, sagittal, and coronal slices.",
          "Inspect voxel spacing, orientation, and intensity distributions.",
        ],
      },
      {
        id: 2,
        title: "Applied experiment",
        status: "planned",
        goals: [
          "Select an open longitudinal MRI dataset and record its usage conditions.",
          "Register sessions with rigid and affine methods from established libraries.",
          "Compare images before and after alignment and record registration quality.",
        ],
      },
      {
        id: 3,
        title: "Focused comparison",
        status: "planned",
        goals: [
          "Compare several reasonable preprocessing and registration configurations.",
          "Measure how those choices move a quantitative longitudinal measurement.",
          "Report uncertainty and the limits of the design.",
        ],
      },
    ],
    experimentalDesign:
      "No experiment has been run. The intended design compares more than one defensible processing configuration on the same longitudinal series and reports the spread of the resulting measurements.",
    intendedMetrics: [
      "A registration-quality measure chosen with the dataset",
      "Stability of one pre-specified longitudinal measurement across configurations",
    ],
    intendedRepository: "ketamine-brain-mri-analysis",
    status: "planned",
  },
  {
    slug: "lung-ct",
    href: "/research/lung-ct",
    title: "Quantitative Airway Analysis from Chest CT",
    summary:
      "CT numbers, windowing, lung and airway segmentation, and the stability of geometric measurements. Asthma is the clinical motivation.",
    modality: "CT",
    researchQuestion:
      "How stable are introductory airway measurements from chest CT when segmentation method and windowing choices change?",
    clinicalMotivation:
      "Asthma care and research use chest CT to look at airway structure. This project uses that setting to learn CT physics and quantitative measurement. The measurements are not presented as validated asthma biomarkers.",
    anatomyAndAcquisition:
      "Chest CT represents attenuation as Hounsfield units. Windowing changes what is visible. Stage 1 covers acquisition, Hounsfield units, lung anatomy, thresholding, and morphological operations on volumes or selected slices.",
    scopeBoundary:
      "Validated asthma biomarkers are outside the current scope. If an asthma-specific annotated dataset is unavailable, a general annotated airway dataset will be used and the limitation will be stated on this page.",
    datasetStatus:
      "No dataset is selected. A lung or airway CT collection will be added only after license, annotation availability, and redistribution limits are checked. Full CT studies will not be served to every site visitor.",
    methods: [
      "Hounsfield-unit windowing",
      "Thresholding",
      "Morphological operations",
      "Classical lung or airway segmentation",
      "Geometric and intensity features",
      "A lightweight learned baseline only after the classical baseline exists",
    ],
    prerequisites: [
      "CT acquisition and Hounsfield units",
      "Windowing",
      "Lung and airway anatomy at an introductory level",
      "3D connected components and morphology",
      "Patient-level evaluation splits",
    ],
    stages: [
      {
        id: 1,
        title: "Foundations",
        status: "planned",
        goals: [
          "Explain CT acquisition and Hounsfield units.",
          "Implement windowing and display selected slices.",
          "Apply thresholding and morphological operations.",
        ],
      },
      {
        id: 2,
        title: "Applied experiment",
        status: "planned",
        goals: [
          "Select an accessible annotated lung or airway dataset and record its license.",
          "Implement a classical segmentation baseline.",
          "Extract geometric and intensity features and check measurement stability.",
        ],
      },
      {
        id: 3,
        title: "Focused comparison",
        status: "planned",
        goals: [
          "Compare the classical baseline with a lightweight learned model if the data supports it.",
          "Evaluate on a patient-level split.",
          "Report robustness limits and uncertainty.",
        ],
      },
    ],
    experimentalDesign:
      "No experiment has been run. The intended design compares segmentation configurations on a patient-level split and tracks both overlap metrics and the stability of a small set of airway measurements.",
    intendedMetrics: [
      "Segmentation overlap, chosen when the annotation type is known",
      "Stability of geometric measurements across configurations",
    ],
    intendedRepository: "lung-ct-airway-analysis",
    status: "planned",
  },
];

export function getProject(slug: ResearchProject["slug"]): ResearchProject {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }
  return project;
}
