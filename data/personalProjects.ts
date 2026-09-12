export const personalProjects = [
  {
    slug: "litlens-ai", name: "LitLens AI", subtitle: "LLM Research Paper Intelligence Assistant", status: "Active",
    description: "An LLM-powered research intelligence platform that extracts structured evidence from research papers and uses retrieval-augmented generation with page-level citations for cross-paper Q&A, comparison, and research-gap analysis.",
    technology: ["Python", "FastAPI", "OpenAI", "RAG", "BM25", "Next.js", "React", "TypeScript", "Pydantic", "PyMuPDF", "SQLite"], githubUrl: "", demoUrl: "",
    screenshots: [
      { src: "/projects/litlens/04-dashboard.png", alt: "LitLens research dashboard" },
      { src: "/projects/litlens/05-matrix.png", alt: "LitLens structured literature matrix" },
      { src: "/projects/litlens/01-ask.png", alt: "Ask LitLens research assistant" },
      { src: "/projects/litlens/02-add-papers.png", alt: "LitLens research paper upload screen" },
      { src: "/projects/litlens/03-new-project.png", alt: "Create a project in LitLens" },
    ],
  },
  {
    slug: "trainiq", name: "TrainIQ", subtitle: "Workout Analytics & Progress Tracker", status: "Completed / Iterating",
    description: "A cross-platform workout tracking application designed to combine fitness data, exercise history, progression tracking, and downloadable workout reporting.",
    technology: ["React", "TypeScript", "Python", "Apple HealthKit", "Garmin FIT SDK", "Capacitor"], githubUrl: "", demoUrl: "", screenshots: [] as { src: string; alt: string }[],
  },
  {
    slug: "sipsync", name: "SipSync", subtitle: "Social Hydration Tracking & Progress Experience", status: "Built / Iterating",
    description: "A shared hydration experience for tracking daily intake, logging past drinks, comparing weekly progress, and staying accountable with private friend groups across time zones.",
    technology: ["Responsive Web App", "Progress Analytics", "Data Visualization", "Group Tracking", "Timezone Support"], githubUrl: "", demoUrl: "",
    screenshots: [
      { src: "/projects/sipsync/01-today.png", alt: "SipSync daily hydration dashboard" },
      { src: "/projects/sipsync/02-history.png", alt: "SipSync water history and logging flow" },
      { src: "/projects/sipsync/03-insights.png", alt: "SipSync weekly hydration insights" },
      { src: "/projects/sipsync/04-friends.png", alt: "SipSync private friend group screen" },
      { src: "/projects/sipsync/05-settings.png", alt: "SipSync settings screen" },
    ],
  },
];
