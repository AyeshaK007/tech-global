
import Image from "next/image";
import Link from "next/link";
import { MEDIA_MANIFEST } from "@/data/media";

export default function About() {
  const aboutImage = MEDIA_MANIFEST.heroPrimary;

  return (
    <section
      id="about"
      className="bg-[#111111] text-[#F5F4EF] border-b border-[#222222] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222] gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-3">
              COMPANY PROFILE
            </span>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-none">
              THE PEOPLE BEHIND THE WORK.
            </h2>
          </div>

          <Link
            href="/about"
            className="text-xs font-mono text-gray-400 hover:text-[#F5F4EF] uppercase tracking-widest flex items-center gap-2 transition-colors border border-[#222222] px-6 py-3 self-start md:self-auto"
          >
            <span>EXPLORE OUR COMPANY</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center border border-[#222222] p-6 sm:p-10">

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">

            <div className="text-[11px] font-mono text-[#707C27] uppercase tracking-widest">
              CIVIL CONTRACTING & INDUSTRIAL FINISHES
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight text-[#F5F4EF]">
              PRACTICAL CONSTRUCTION AND FINISHING SOLUTIONS FOR COMMERCIAL AND INDUSTRIAL SPACES.
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              Tech Global provides civil construction, masonry, plastering,
              epoxy flooring, waterproofing, protective coatings, and
              additional finishing services for commercial and industrial
              projects.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              From grey-structure construction to surface finishing and
              building restoration, the company offers a range of services
              supporting different stages of construction and facility work.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400 border-t border-[#222222]">
              <div>SECTOR: CIVIL CONSTRUCTION</div>
              <div>FOCUS: INDUSTRIAL & COMMERCIAL</div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 relative aspect-[16/10] bg-[#1E2330] border border-[#222222] overflow-hidden">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute top-4 right-4 bg-[#111111]/90 border border-[#222222] px-3 py-1 text-[10px] font-mono text-[#707C27] uppercase tracking-widest">
              INDUSTRIAL FACILITY
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
