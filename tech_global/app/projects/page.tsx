import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Selected Projects | Tech Global Contractors",
  description: "Verified civil construction, industrial epoxy flooring, and structural coating site execution logs.",
};

export default function ProjectsListingPage() {
  const featuredProject = projectsData[0];

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Editorial Header Banner */}
      <section className="border-b border-[#222222] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mb-6">
            <span className="text-[#707C27] font-bold">[ 01 / PORTFOLIO LOGS ]</span>
            <span>VERIFIED FIELD EXECUTION</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none mb-6">
            SELECTED PROJECTS
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            A comprehensive record of civil contracting, specialized epoxy installations, structural masonry, and protective industrial coatings executed across commercial and industrial facilities.
          </p>
        </div>
      </section>

      {/* Featured Project Case Study Banner */}
      {featuredProject && (
        <section className="border-b border-[#222222] py-16 px-6 bg-[#1E2330]/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6 block">
              FEATURED SITE EXECUTION LOG
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch border border-[#222222] bg-[#1E2330]">
              
              {/* Media Container */}
              <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] bg-[#0D0E12] overflow-hidden">
                <Image
                  src={featuredProject.coverImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-0 left-0 bg-[#707C27] text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase font-mono">
                  VERIFIED CASE STUDY
                </div>
              </div>

              {/* Technical Overview Container */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#222222]">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-[#707C27] mb-4">
                    <span>{featuredProject.category}</span>
                    <span>LOCATION: {featuredProject.location}</span>
                  </div>

                  <h2 className="font-display text-3xl font-bold uppercase text-[#F5F4EF] mb-4 leading-tight">
                    {featuredProject.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-[#222222]">
                    {featuredProject.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-mono">
                        <span className="text-gray-500">{spec.label}:</span>
                        <span className="text-gray-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest py-4 px-6 text-center border border-[#707C27] hover:bg-opacity-90 transition-opacity block"
                >
                  INSPECT FULL CASE STUDY ↗
                </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-20 px-6 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest mb-10 pb-4 border-b border-[#222222]">
            <span>ALL RECORDED FACILITY LOGS ({projectsData.length.toString().padStart(2, "0")})</span>
            <span>SORT: CHRONOLOGICAL</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="bg-[#1E2330] border border-[#222222] flex flex-col justify-between group overflow-hidden"
              >
                <div className="h-[260px] relative bg-[#0D0E12] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-0 right-0 bg-[#111111] text-gray-400 border-l border-b border-[#222222] px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase">
                    LOG 0{index + 1}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow border-t border-[#222222]">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#707C27] uppercase block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] group-hover:text-[#707C27] transition-colors mb-3">
                      {project.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-[#222222]/60 flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>{project.location}</span>
                    <span className="text-[#707C27]">VIEW DETAILS ↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Callout */}
      <section className="py-16 px-6 border-b border-[#222222] bg-[#1E2330]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mb-2">
              NEED CUSTOM CIVIL OR EPOXY SPECIFICATIONS FOR YOUR FACILITY?
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl font-sans">
              Our engineering team provides comprehensive bill of quantities (BOQ) evaluations and material datasheets upon request.
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27] hover:bg-opacity-90 transition-opacity whitespace-nowrap"
          >
            INITIATE TECHNICAL INQUIRY ↗
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}