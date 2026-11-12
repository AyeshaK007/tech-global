
import { MEDIA_MANIFEST } from "./media";

export interface Service {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  heroImage?: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const servicesData: Service[] = [
  {
    slug: "complete-construction",
    number: "01",
    title: "Complete Civil Construction",
    category: "CIVIL WORKS",
    description:
      "Turnkey grey-structure construction for commercial and industrial projects, covering core civil works from foundations to structural execution.",
    features: [
      "Foundation and excavation works",
      "Reinforced concrete construction",
      "Structural slab and reinforcement works",
      "Commercial and industrial grey structures",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "TURNKEY CIVIL CONSTRUCTION" },
      { label: "PROJECT SCOPE", value: "GREY STRUCTURE WORKS" },
      { label: "APPLICATION", value: "COMMERCIAL & INDUSTRIAL" },
    ],
  },

  {
    slug: "masonry-plastering",
    number: "02",
    title: "Masonry & Plastering",
    category: "MASONRY & FINISHES",
    description:
      "Interior and exterior plastering, brickwork, block masonry, and RCC finishing for commercial and industrial facilities.",
    features: [
      "Brickwork and block masonry",
      "Interior and exterior plastering",
      "Wall and surface finishing",
      "Slope and RCC finishing works",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "MASONRY & PLASTERING" },
      { label: "APPLICATION", value: "INTERIOR & EXTERIOR" },
      { label: "WORK SCOPE", value: "WALLS & STRUCTURAL FINISHES" },
    ],
  },

  {
    slug: "industrial-painting",
    number: "03",
    title: "Industrial Painting & Protective Coatings",
    category: "PROTECTIVE COATINGS",
    description:
      "Interior and exterior painting, decorative finishes, and protective coating applications for commercial and industrial spaces.",
    features: [
      "Interior and exterior painting",
      "Decorative and textured finishes",
      "Weather-shield coatings",
      "Damp-proof paint applications",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "INDUSTRIAL & COMMERCIAL PAINTING" },
      { label: "FINISH OPTIONS", value: "DECORATIVE & TEXTURED" },
      { label: "PROTECTION", value: "WEATHER & DAMP RESISTANCE" },
    ],
  },

  {
    slug: "epoxy-flooring",
    number: "04",
    title: "Epoxy Flooring & Surface Systems",
    category: "INDUSTRIAL FLOORING",
    description:
      "Seamless epoxy flooring solutions for industrial and commercial environments, with surface options for high traffic, chemical resistance, and easier maintenance.",
    heroImage: MEDIA_MANIFEST.projectFeatured.src,
    features: [
      "High-gloss epoxy flooring",
      "Anti-slip surface options",
      "Chemical-resistant coating options",
      "Anti-dust flooring applications",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "EPOXY FLOORING" },
      { label: "SURFACE OPTIONS", value: "HIGH-GLOSS & ANTI-SLIP" },
      { label: "APPLICATION", value: "WAREHOUSES & WORKSHOPS" },
    ],
  },

  {
    slug: "waterproofing",
    number: "05",
    title: "Waterproofing Systems",
    category: "WATERPROOFING",
    description:
      "Waterproofing solutions for roofs, basements, bathrooms, and other areas exposed to moisture.",
    features: [
      "Roof waterproofing",
      "Basement waterproofing",
      "Bathroom and wet-area protection",
      "Chemical coatings and membrane applications",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "WATERPROOFING SYSTEMS" },
      { label: "APPLICATION", value: "ROOFS & BASEMENTS" },
      { label: "PROTECTION", value: "MOISTURE BARRIERS" },
    ],
  },

  {
    slug: "restoration-remodelling",
    number: "06",
    title: "Restoration & Commercial Rehabilitation",
    category: "REHABILITATION",
    description:
      "Building rehabilitation, structural modifications, and interior and exterior remodelling for existing commercial facilities.",
    features: [
      "Building restoration and rehabilitation",
      "Structural modifications",
      "Civil alterations",
      "Commercial interior and exterior remodelling",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "RESTORATION & REMODELLING" },
      { label: "APPLICATION", value: "EXISTING BUILDINGS" },
      { label: "PROJECT SCOPE", value: "COMMERCIAL FACILITIES" },
    ],
  },

  {
    slug: "additional-services",
    number: "07",
    title: "Additional Finishing Works & Pavers",
    category: "EXTERIOR FINISHING",
    description:
      "Additional finishing and civil works covering paver installation, tile and marble flooring, and plumbing solutions.",
    heroImage: MEDIA_MANIFEST.servicePaverCourtyard.src,
    features: [
      "Interlocking paver installation",
      "Ceramic tile installation",
      "Marble flooring",
      "Plumbing works",
    ],
    specs: [
      { label: "SERVICE TYPE", value: "ADDITIONAL FINISHING WORKS" },
      { label: "FLOORING", value: "PAVERS, TILE & MARBLE" },
      { label: "ADDITIONAL WORK", value: "PLUMBING" },
    ],
  },
];
