
export interface MediaAsset {
  id: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  caption: string;
  subject: string;
  assignedTo: string;
}

export const MEDIA_MANIFEST = {
  // Homepage Hero
  heroPrimary: {
    id: "P05",
    src: "/images/hero/tech-global-cleanroom-corridor-p05-hero-desktop.webp",
    mobileSrc:
      "/images/hero/tech-global-cleanroom-corridor-p05-hero-mobile.webp",
    alt: "Long commercial facility corridor with white walls, ceiling lighting, and polished floor",
    caption: "INDUSTRIAL FACILITY INTERIOR",
    subject: "Commercial Facility Corridor",
    assignedTo: "Homepage Hero",
  },

  // Verified Industrial Facility Project
  projectFeatured: {
    id: "P22",
    src: "/images/projects/tech-global-corridor-glossy-floor-p22-featured-desktop.webp",
    alt: "High-gloss industrial corridor floor with steel doors along white walls",
    caption: "INDUSTRIAL CORRIDOR FLOOR FINISHING",
    subject: "Glossy Industrial Corridor Flooring",
    assignedTo: "Industrial Facility Project Cover",
  },

  projectCorridorDoors: {
    id: "P02",
    src: "/images/projects/tech-global-corridor-doors-p02-supporting-desktop.webp",
    alt: "Commercial facility corridor with framed openings and steel doors",
    caption: "COMMERCIAL FACILITY CORRIDOR",
    subject: "Commercial Corridor & Framing",
    assignedTo: "Industrial Facility Project Gallery",
  },

  detailFloorWallJunction: {
    id: "P11",
    src: "/images/services/tech-global-floor-wall-junction-p11-service-landscape.webp",
    alt: "Close view of floor-to-wall junction and surface finish",
    caption: "FLOOR-TO-WALL JUNCTION DETAIL",
    subject: "Floor-to-Wall Junction Detail",
    assignedTo: "Industrial Facility Project Gallery (Service Verification Pending)",
  },

  detailFloorCove: {
    id: "P09",
    src: "/images/services/tech-global-floor-cove-detail-p09-service-landscape.webp",
    alt: "Curved floor-to-wall cove detail along smooth white wall",
    caption: "CURVED FLOOR-TO-WALL DETAIL",
    subject: "Curved Floor-to-Wall Junction",
    assignedTo: "Industrial Facility Project Gallery (Service Verification Pending)",
  },

  // Verified Paver Installation Project
  servicePaverCourtyard: {
    id: "P31",
    src: "/images/services/tech-global-paver-courtyard-p31-service-landscape.webp",
    alt: "Exterior courtyard paved with interlocking concrete blocks",
    caption: "EXTERIOR INTERLOCKING PAVER INSTALLATION",
    subject: "Interlocking Paver Courtyard",
    assignedTo: "Interlocking Paver Project Cover & Additional Finishing Works",
  },
} as const satisfies Record<string, MediaAsset>;
