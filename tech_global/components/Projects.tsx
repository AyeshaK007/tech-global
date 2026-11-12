
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { MEDIA_MANIFEST } from "@/data/media";

export default function Projects() {
  const primaryProject = projectsData[0];
  const paverProject = projectsData.find(
    (project) => project.slug === "interlocking-paver-installation"
  );

  if (!primaryProject || !paverProject) {
    return null;
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 border-b border-[#222222] bg-[#111111] text-[#F5F4EF]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222] pb-8 gap-6">

          <div>
            <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">
              [ 03 / SELECTED WORK ]
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-[#F5F4EF] leading-none">
              COMPLETED PROJECTS.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">

            <p className="text-gray-400 text-sm md:text-base max-w-md">
              A selection of completed industrial flooring, civil works,
              and exterior finishing projects by Tech Global.
            </p>

            <Link
              href="/projects"
              className="text-xs font-mono text-[#707C27] uppercase tracking-widest hover:text-[#F5F4EF] transition-colors"
            >
              VIEW ALL PROJECTS ↗
            </Link>

          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">

          {/* Project 01: Industrial Facility */}
          <Link
            href={`/projects/${primaryProject.slug}`}
            className="md:col-span-7 bg-[#1E2330] border border-[#222222] flex flex-col overflow-hidden"
          >

            <div className="h-[320px] sm:h-[400px] relative bg-[#0D0E12]">

              <Image
                src={MEDIA_MANIFEST.projectFeatured.src}
                alt={MEDIA_MANIFEST.projectFeatured.alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute top-0 right-0 bg-[#707C27] text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                COMPLETED PROJECT
              </div>

            </div>

            <div className="p-8 flex justify-between items-end border-t border-[#222222] bg-[#1E2330]">

              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#707C27] uppercase block mb-1">
                  PROJECT 01 / INDUSTRIAL FLOORING
                </span>

                <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF]">
                  {primaryProject.title}
                </h3>
              </div>

              <span className="text-xs text-[#707C27] uppercase tracking-widest font-mono">
                VIEW ↗
              </span>

            </div>
          </Link>

          {/* Project 02: Paver Installation */}
          <Link
            href={`/projects/${paverProject.slug}`}
            className="md:col-span-5 bg-[#1E2330] border border-[#222222] flex flex-col overflow-hidden"
          >

            <div className="h-[320px] sm:h-[400px] relative bg-[#0D0E12]">

              <Image
                src={MEDIA_MANIFEST.servicePaverCourtyard.src}
                alt={MEDIA_MANIFEST.servicePaverCourtyard.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute top-0 right-0 bg-[#111111] text-gray-400 border-l border-b border-[#222222] px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                COMPLETED PROJECT
              </div>

            </div>

            <div className="p-8 flex justify-between items-end border-t border-[#222222] bg-[#1E2330]">

              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#707C27] uppercase block mb-1">
                  PROJECT 02 / EXTERIOR FINISHING
                </span>

                <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF]">
                  {paverProject.title}
                </h3>
              </div>

              <span className="text-xs text-[#707C27] uppercase tracking-widest font-mono">
                VIEW ↗
              </span>

            </div>
          </Link>

        </div>

        {/* Portfolio Enquiry */}
        <div className="mt-12 p-8 border border-[#222222] bg-[#1E2330] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          <div>
            <h4 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-1">
              HAVE A PROJECT IN MIND?
            </h4>

            <p className="text-gray-400 text-sm">
              Get in touch with our team to discuss your project requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 border border-[#707C27] whitespace-nowrap hover:bg-[#5F6920] transition-colors"
          >
            CONTACT OUR TEAM ↗
          </Link>

        </div>

      </div>
    </section>
  );
}
