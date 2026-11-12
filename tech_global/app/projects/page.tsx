
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";
import { MEDIA_MANIFEST } from "@/data/media";

export const metadata = {
  title: "Selected Projects | Tech Global Contractors",
  description:
    "Explore completed industrial flooring, civil works, and exterior finishing projects by Tech Global Contractors.",
};

const projectImageAltText: Record<string, string> = {
  [MEDIA_MANIFEST.projectFeatured.src]:
    MEDIA_MANIFEST.projectFeatured.alt,

  [MEDIA_MANIFEST.servicePaverCourtyard.src]:
    MEDIA_MANIFEST.servicePaverCourtyard.alt,
};

function hasConfirmedLocation(location: string) {
  return (
    Boolean(location) &&
    !location.toLowerCase().includes("to be confirmed")
  );
}

export default function ProjectsListingPage() {
  const featuredProject = projectsData[0];

  const remainingProjects = projectsData.slice(1);

  return (
    <main className="min-h-screen bg-[#111111] text-[#F5F4EF]">
      <Navbar />

      {/* Editorial Header */}
      <section className="border-b border-[#222222] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-xs font-mono uppercase text-gray-500 mb-6">
            <span className="text-[#707C27] font-bold">
              [ 01 / PORTFOLIO ]
            </span>

            <span>COMPLETED PROJECTS</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none mb-6">
            SELECTED PROJECTS
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            A selection of completed industrial flooring, civil works,
            and exterior finishing projects delivered by Tech Global.
          </p>

        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="border-b border-[#222222] py-16 px-6 bg-[#1E2330]/20">
          <div className="max-w-7xl mx-auto">

            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
              FEATURED PROJECT / 01
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch border border-[#222222] bg-[#1E2330]">

              {/* Project Image */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[450px] bg-[#0D0E12]">

                <Image
                  src={featuredProject.coverImage}
                  alt={
                    projectImageAltText[featuredProject.coverImage] ||
                    `${featuredProject.title} project photograph`
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />

                <div className="absolute top-0 left-0 bg-[#707C27] text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase font-mono">
                  COMPLETED PROJECT
                </div>

              </div>

              {/* Project Overview */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#222222]">

                <div>

                  <div className="flex flex-wrap justify-between gap-2 text-xs font-mono text-[#707C27] mb-4">
                    <span>{featuredProject.category}</span>

                    {hasConfirmedLocation(featuredProject.location) && (
                      <span>{featuredProject.location}</span>
                    )}
                  </div>

                  <h2 className="font-display text-3xl font-bold uppercase text-[#F5F4EF] mb-4 leading-tight">
                    {featuredProject.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-[#222222]">

                    {featuredProject.specs.map((spec, idx) => (
                      <div
                        key={`${spec.label}-${idx}`}
                        className="flex flex-wrap justify-between gap-2 text-xs font-mono"
                      >
                        <span className="text-gray-500">
                          {spec.label}
                        </span>

                        <span className="text-gray-200">
                          {spec.value}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest py-4 px-6 text-center border border-[#707C27] hover:bg-[#5F6920] transition-colors"
                >
                  VIEW PROJECT DETAILS ↗
                </Link>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* Remaining Projects */}
      {remainingProjects.length > 0 && (
        <section className="py-20 px-6 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest mb-10 pb-4 border-b border-[#222222]">
              <span>
                MORE COMPLETED PROJECTS (
                {remainingProjects.length.toString().padStart(2, "0")}
                )
              </span>

              <span>PROJECT ARCHIVE</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {remainingProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="bg-[#1E2330] border border-[#222222] flex flex-col overflow-hidden"
                >

                  <div className="h-[260px] relative bg-[#0D0E12]">

                    <Image
                      src={project.coverImage}
                      alt={
                        projectImageAltText[project.coverImage] ||
                        `${project.title} project photograph`
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute top-0 right-0 bg-[#111111] text-gray-400 border-l border-b border-[#222222] px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase">
                      PROJECT {String(index + 2).padStart(2, "0")}
                    </div>

                  </div>

                  <div className="p-6 flex flex-col flex-grow border-t border-[#222222]">

                    <span className="text-[10px] font-mono tracking-widest text-[#707C27] uppercase block mb-2">
                      {project.category}
                    </span>

                    <h3 className="font-display text-xl font-bold uppercase text-[#F5F4EF] mb-4">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-6">
                      {project.scope}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#222222]/60 flex justify-between items-center text-xs font-mono">

                      {hasConfirmedLocation(project.location) ? (
                        <span className="text-gray-500">
                          {project.location}
                        </span>
                      ) : (
                        <span className="text-gray-500">
                          COMPLETED WORK
                        </span>
                      )}

                      <span className="text-[#707C27]">
                        VIEW DETAILS ↗
                      </span>

                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* Inquiry Section */}
      <section className="py-16 px-6 border-b border-[#222222] bg-[#1E2330]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F5F4EF] mb-2">
              PLANNING YOUR NEXT PROJECT?
            </h3>

            <p className="text-gray-400 text-sm max-w-2xl font-sans">
              Get in touch with our team to discuss your civil construction
              and finishing requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27] whitespace-nowrap hover:bg-[#5F6920] transition-colors"
          >
            CONTACT OUR TEAM ↗
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
