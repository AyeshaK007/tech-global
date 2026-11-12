
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";
import { MEDIA_MANIFEST } from "@/data/media";

// Keep the existing route rendering configuration
export const instant = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Use descriptive alt text for the known project images
  const imageAltText: Record<string, string> = {
    [MEDIA_MANIFEST.projectFeatured.src]:
      MEDIA_MANIFEST.projectFeatured.alt,
    [MEDIA_MANIFEST.projectCorridorDoors.src]:
      MEDIA_MANIFEST.projectCorridorDoors.alt,
    [MEDIA_MANIFEST.detailFloorWallJunction.src]:
      MEDIA_MANIFEST.detailFloorWallJunction.alt,
    [MEDIA_MANIFEST.detailFloorCove.src]:
      MEDIA_MANIFEST.detailFloorCove.alt,
    [MEDIA_MANIFEST.servicePaverCourtyard.src]:
      MEDIA_MANIFEST.servicePaverCourtyard.alt,
  };

  const hasLocation =
    project.location &&
    !project.location.toLowerCase().includes("to be confirmed");

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Editorial Header */}
      <section className="border-b border-[#222222] pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs font-mono uppercase text-gray-500 mb-6">
            <Link
              href="/projects"
              className="text-[#707C27] hover:text-[#F5F4EF] transition-colors flex items-center gap-1 font-bold"
            >
              ← ALL PROJECTS
            </Link>

            <span>CATEGORY: {project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-none mb-6">
            {project.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
            {project.headline}
          </p>

        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="border-b border-[#222222] bg-[#0D0E12]">
        <div className="max-w-7xl mx-auto relative aspect-[21/9] min-h-[280px] sm:min-h-[350px] w-full border-x border-[#222222]">

          <Image
            src={project.coverImage}
            alt={
              imageAltText[project.coverImage] ||
              `${project.title} project photograph`
            }
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />

        </div>
      </section>

      {/* Project Overview & Details */}
      <section className="py-16 px-6 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

          {/* Main Description & Scope */}
          <div className="lg:col-span-7 space-y-8 text-gray-300 leading-relaxed font-sans">

            <div>
              <h2 className="text-xs font-mono text-[#707C27] uppercase tracking-widest mb-3">
                [ 01 / PROJECT OVERVIEW ]
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-8 border-t border-[#222222]">
              <h2 className="text-xs font-mono text-[#707C27] uppercase tracking-widest mb-3">
                [ 02 / SCOPE OF WORK ]
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {project.scope}
              </p>
            </div>

          </div>

          {/* Project Details Sidebar */}
          <aside className="lg:col-span-5 bg-[#1E2330]/30 border border-[#222222] p-6 sm:p-8 h-fit space-y-6 font-mono">

            <span className="text-xs text-[#707C27] uppercase tracking-widest block pb-3 border-b border-[#222222]">
              PROJECT DETAILS
            </span>

            <div className="space-y-4 text-xs">

              {hasLocation && (
                <div className="flex justify-between items-start gap-4 border-b border-[#222222]/60 pb-2">
                  <span className="text-gray-500 shrink-0">
                    LOCATION:
                  </span>

                  <span className="text-gray-200 text-right">
                    {project.location}
                  </span>
                </div>
              )}

              {project.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start gap-4 border-b border-[#222222]/60 pb-2"
                >
                  <span className="text-gray-500 shrink-0">
                    {spec.label}:
                  </span>

                  <span className="text-gray-200 text-right">
                    {spec.value}
                  </span>
                </div>
              ))}

            </div>

            <div className="pt-4">
              <Link
                href="/#contact"
                className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 text-center border border-[#707C27] hover:bg-[#5F6920] transition-colors block w-full"
              >
                DISCUSS YOUR PROJECT ↗
              </Link>
            </div>

          </aside>

        </div>
      </section>

      {/* Supporting Photographic Gallery */}
      {project.supportingImages &&
        project.supportingImages.length > 0 && (
          <section className="py-16 px-6 border-b border-[#222222]">

            <div className="max-w-7xl mx-auto">

              <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8 pb-3 border-b border-[#222222]">
                PROJECT GALLERY (
                {project.supportingImages.length
                  .toString()
                  .padStart(2, "0")}
                )
              </h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

                {project.supportingImages.map((img, idx) => (
                  <div
                    key={img}
                    className="relative aspect-[16/10] bg-[#0D0E12] border border-[#222222] overflow-hidden"
                  >

                    <Image
                      src={img}
                      alt={
                        imageAltText[img] ||
                        `${project.title} project view ${idx + 1}`
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute bottom-0 left-0 bg-[#111111]/90 px-3 py-2 text-[10px] font-mono text-gray-400 border-t border-r border-[#222222]">
                      PROJECT VIEW {String(idx + 1).padStart(2, "0")}
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </section>
        )}

      {/* Navigation Footer CTA */}
      <section className="py-12 px-6 bg-[#1E2330]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">

          <Link
            href="/projects"
            className="text-[#707C27] hover:text-[#F5F4EF] transition-colors uppercase tracking-widest"
          >
            ← BACK TO ALL PROJECTS
          </Link>

          <Link
            href="/#contact"
            className="text-gray-400 hover:text-[#F5F4EF] transition-colors uppercase tracking-widest"
          >
            DISCUSS A SIMILAR PROJECT ↗
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
