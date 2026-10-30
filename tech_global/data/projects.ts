export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  headline: string;
  description: string;
  coverImage: string;
  supportingImages: string[];
  specs: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "industrial-facility-expansion",
    title: "Commercial Industrial Facility Expansion",
    category: "CIVIL & HEAVY EPOXY COATING",
    location: "KARACHI INDUSTRIAL AREA",
    scope: "Epoxy Flooring, Structural Plastering & Protective Wall Coatings",
    headline: "HIGH-END INDUSTRIAL FACILITY FEATURING SEAMLESS CHEMICAL-RESISTANT EPOXY SURFACES.",
    description:
      "A complete structural and protective surface application for an industrial production and corridor facility. Works included subfloor preparation, heavy-duty anti-slip epoxy flooring execution, structural wall leveling, and protective weather-shield exterior coatings.",
    coverImage: "/projects/epoxy-floor.jpg",
    supportingImages: ["/projects/hero-site.jpg", "/projects/epoxy-floor.jpg"],
    specs: [
      { label: "AREA COVERAGE", value: "45,000 SQ. FT." },
      { label: "SURFACE SYSTEM", value: "HEAVY-DUTY EPOXY SLURRY" },
      { label: "EXECUTION PERIOD", value: "VERIFIED FIELD LOG" },
    ],
  },
];