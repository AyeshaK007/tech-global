export interface Service {
  slug: string;
  number: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  scope: string[];
  specs: string[];
  heroImage: string;
}

export const servicesData: Service[] = [
  {
    slug: "epoxy-flooring",
    number: "04",
    title: "Epoxy Flooring Solutions",
    category: "INDUSTRIAL FLOORING SYSTEMS",
    headline: "HIGH-PERFORMANCE INDUSTRIAL SURFACES ENGINEERED FOR HEAVY-TRAFFIC ENDURANCE.",
    description:
      "Industrial-grade seamless floor coatings, heavy-traffic anti-slip finishes, chemical-resistant protection, and high-durability anti-dust surfaces built for factories, warehouses, and commercial corridors.",
    scope: [
      "Heavy-duty chemical-resistant epoxy coatings",
      "Anti-slip & textured surface treatments",
      "High-gloss commercial corridor finishes",
      "Subfloor repair & surface preparation",
      "Anti-static & anti-dust industrial sealants",
    ],
    specs: ["Seamless Finish", "Chemical Resistant", "Heavy Load Capable"],
    heroImage: "/projects/epoxy-floor.jpg",
  },
  {
    slug: "complete-construction",
    number: "01",
    title: "Complete Construction",
    category: "CIVIL WORKS",
    headline: "TURNKEY COMMERCIAL AND INDUSTRIAL GREY-STRUCTURE PROJECTS.",
    description:
      "Commercial and industrial construction from foundational ground-breaking to grey structure execution with complete structural engineering integrity.",
    scope: [
      "Turnkey grey structure development",
      "Reinforced cement concrete (RCC) frames",
      "Commercial building foundations",
      "Industrial site civil works",
    ],
    specs: ["Structural Grade", "Engineering Checked", "Turnkey Execution"],
    heroImage: "/projects/hero-site.jpg",
  },
  {
    slug: "masonry-plastering",
    number: "02",
    title: "Masonry & Plastering",
    category: "STRUCTURAL FINISHES",
    headline: "PRECISION BRICKWORK, BLOCKWORK, AND HIGH-GRADE SURFACE PLASTERING.",
    description:
      "Precision structural masonry, blockwork assembly, interior/exterior plastering, and smooth RCC finishing engineered for maximum longevity.",
    scope: [
      "Structural brickwork & concrete block masonry",
      "Interior wall plastering & leveling",
      "Exterior protective plaster coatings",
      "RCC surface preparation & finishing",
    ],
    specs: ["Precision Alignment", "High-Grade Mortar", "Damp Protection"],
    heroImage: "/projects/hero-site.jpg",
  },
  {
    slug: "industrial-painting",
    number: "03",
    title: "Industrial Painting",
    category: "PROTECTIVE COATINGS",
    headline: "WEATHER-RESISTANT BARRIERS AND DAMP-PROOF INDUSTRIAL COATINGS.",
    description:
      "Commercial interior and exterior painting, textured architectural finishes, weather-shield protection, and specialized damp-proof coatings.",
    scope: [
      "Exterior weather-shield protective painting",
      "Interior commercial surface finishing",
      "Textured decorative paint systems",
      "Anti-fungal & damp-proof wall coatings",
    ],
    specs: ["Weatherproof", "Damp-Proof", "Textured / Smooth"],
    heroImage: "/projects/hero-site.jpg",
  },
  {
    slug: "waterproofing",
    number: "05",
    title: "Waterproofing Systems",
    category: "MEMBRANE & CHEMICAL BARRIERS",
    headline: "SUBTERRANEAN & ROOF WATERPROOFING PROTECTING STRUCTURAL INTEGRITY.",
    description:
      "Comprehensive roof, basement, and wet structural area waterproofing using liquid chemical sealants and elastomeric membrane systems.",
    scope: [
      "Elastomeric membrane roof waterproofing",
      "Basement & foundation chemical sealing",
      "Wet area & bathroom moisture barriers",
      "Crack injection & structural leak repairs",
    ],
    specs: ["Subterranean Sealed", "Elastomeric Membrane", "Liquid Applied"],
    heroImage: "/projects/hero-site.jpg",
  },
  {
    slug: "restoration-remodelling",
    number: "06",
    title: "Restoration & Remodelling",
    category: "COMMERCIAL REHABILITATION",
    headline: "STRUCTURAL ALTERATIONS AND COMPLETE COMMERCIAL PROPERTY MODERNIZATIONS.",
    description:
      "Building rehabilitation, structural modifications, layout refitting, and complete commercial interior and exterior modernizations.",
    scope: [
      "Commercial building rehabilitation",
      "Structural wall modifications & refitting",
      "Exterior facade upgrades",
      "Facility modernization & layout changes",
    ],
    specs: ["Civil Retrofitting", "Structural Alteration", "Turnkey Upgrade"],
    heroImage: "/projects/hero-site.jpg",
  },
  {
    slug: "additional-services",
    number: "07",
    title: "Additional Finishing Works",
    category: "SITE FINISHING",
    headline: "INTEGRATED TILING, MARBLE FITTING, PAVERS, AND COMMERCIAL PLUMBING.",
    description:
      "Interlocking pavers, ceramic tiling, marble fitting, complete floor laying, and integrated commercial sanitary plumbing solutions.",
    scope: [
      "Interlocking paver installation",
      "Ceramic tile & marble floor laying",
      "Commercial sanitary & drainage plumbing",
      "Custom site finishing details",
    ],
    specs: ["Precision Tile Laying", "Heavy-Duty Pavers", "Sanitary Plumbing"],
    heroImage: "/projects/hero-site.jpg",
  },
];