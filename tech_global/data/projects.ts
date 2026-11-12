
import { MEDIA_MANIFEST } from "./media";

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
    title: "Industrial Facility Flooring & Finishing",
    category: "INDUSTRIAL FLOORING & CIVIL WORKS",
    location: "",
    scope: "Industrial Flooring & Facility Finishing",
    headline: "INDUSTRIAL FLOORING AND FACILITY FINISHING.",
    description:
      "Completed industrial facility work featuring epoxy flooring and associated interior finishing. The project gallery presents selected views of the completed facility.",
    coverImage: MEDIA_MANIFEST.projectFeatured.src,
    supportingImages: [
      MEDIA_MANIFEST.projectCorridorDoors.src,
      MEDIA_MANIFEST.detailFloorWallJunction.src,
      MEDIA_MANIFEST.detailFloorCove.src,
    ],
    specs: [
      { label: "PROJECT TYPE", value: "INDUSTRIAL FACILITY" },
      { label: "FEATURED WORK", value: "EPOXY FLOORING" },
      { label: "STATUS", value: "COMPLETED" },
    ],
  },
  {
    slug: "interlocking-paver-installation",
    title: "Interlocking Paver Installation",
    category: "EXTERIOR FINISHING",
    location: "",
    scope: "Exterior Paver Installation",
    headline: "EXTERIOR PAVING AND SURFACE FINISHING.",
    description:
      "Completed exterior finishing work featuring the installation of interlocking concrete pavers. The project gallery highlights the finished paved courtyard.",
    coverImage: MEDIA_MANIFEST.servicePaverCourtyard.src,
    supportingImages: [],
    specs: [
      { label: "PROJECT TYPE", value: "EXTERIOR FINISHING" },
      { label: "FEATURED WORK", value: "INTERLOCKING PAVERS" },
      { label: "STATUS", value: "COMPLETED" },
    ],
  },
];
