import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const primaryProject = projectsData[0];

  return (
    <section id="projects" className="py-24 px-6 border-b border-[#222222] bg-[#111111] text-[#F5F4EF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222] pb-8 gap-6">
          <div>
            <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">
              [ 03 / SELECTED WORK ]
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-[#F5F4EF] leading-none">
              VERIFIED SITE EXECUTION.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              A curated look at recent civil contracting, specialized epoxy installations, and industrial finishing projects.
            </p>
            <Link
              href="/projects"
              className="text-xs font-mono text-[#707C27] hover:text-[#F5F4EF] uppercase tracking-widest transition-colors flex items-center gap-1"
            >
              <span>VIEW ALL PROJECTS ↗</span>
            </Link>
          </div>
        </div>

        {/* Asymmetric Project Cards Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Facility Card */}
          <Link
            href={`/projects/${primaryProject?.slug || "industrial-facility-expansion"}`}
            className="md:col-span-7 bg-[#1E2330] border border-[#222222] flex flex-col justify-between group overflow-hidden block"
          >
            <div className="h-[320px] sm:h-[400px] relative bg-[#0D0E12] overflow-hidden">
              <Image 
                src={primaryProject?.coverImage || "/projects/hero-site.jpg"}
                alt="Industrial Facility Epoxy & Civil Renovation" 
                fill
                className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-0 right-0 bg-[#707C27] text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                COMPLETED WORK
              </div>
            </div>
            <div className="p-8 flex justify-between items-end border-t border-[#222222] bg-[#1E2330]">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#707C27] uppercase block mb-1">
                  PROJECT 01 / EPOXY & CIVIL
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] group-hover:text-[#707C27] transition-colors">
                  {primaryProject?.title || "Commercial Facility Flooring & Masonry"}
                </h3>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">2026</span>
            </div>
          </Link>

          {/* Secondary Facility Card */}
          <Link
            href={`/projects/${primaryProject?.slug || "industrial-facility-expansion"}`}
            className="md:col-span-5 bg-[#1E2330] border border-[#222222] flex flex-col justify-between group overflow-hidden block"
          >
            <div className="h-[320px] sm:h-[400px] relative bg-[#0D0E12] overflow-hidden">
              <Image 
                src={primaryProject?.supportingImages?.[0] || "/projects/hero-site.jpg"}
                alt="Industrial Protective Paint & Waterproofing" 
                fill
                className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-0 right-0 bg-[#111111] text-gray-400 border-l border-b border-[#222222] px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                PROTECTIVE COATINGS
              </div>
            </div>
            <div className="p-8 flex justify-between items-end border-t border-[#222222] bg-[#1E2330]">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#707C27] uppercase block mb-1">
                  PROJECT 02 / FINISHING
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] group-hover:text-[#707C27] transition-colors">
                  Industrial Exterior Coating & Waterproofing
                </h3>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">2026</span>
            </div>
          </Link>

        </div>

        {/* Portfolio PDF Request Banner */}
        <div className="mt-12 p-8 border border-[#222222] bg-[#1E2330] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-1">
              NEED DETAILED SITE SPECIFICATIONS OR REFERENCES?
            </h4>
            <p className="text-gray-400 text-sm">
              We maintain documented site logs and technical material specs for commercial reviews.
            </p>
          </div>
          <Link 
            href="/#contact" 
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 border border-[#707C27] whitespace-nowrap hover:bg-opacity-90 transition-opacity"
          >
            Request Portfolio PDF
          </Link>
        </div>

      </div>
    </section>
  );
}