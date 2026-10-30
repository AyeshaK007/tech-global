import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#111111] text-[#F5F4EF] border-b border-[#222222] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222] gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-3">
              [ 04 / COMPANY PROFILE ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-none">
              THE PEOPLE BEHIND THE WORK.
            </h2>
          </div>
          
          <Link
            href="/about"
            className="text-xs font-mono text-gray-400 hover:text-[#F5F4EF] uppercase tracking-widest flex items-center gap-2 transition-colors border border-[#222222] px-6 py-3 self-start md:self-auto bg-[#1E2330]/20"
          >
            <span>EXPLORE OUR COMPANY ↗</span>
          </Link>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center border border-[#222222] bg-[#1E2330]/20 p-6 sm:p-10">
          
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] font-mono text-[#707C27] uppercase tracking-widest">
              CIVIL CONTRACTING & INDUSTRIAL FINISHES
            </div>
            
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight text-[#F5F4EF]">
              UNCOMPROMISING TECHNICAL STANDARDS IN CIVIL CONSTRUCTION AND FACILITY FINISHING.
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              Tech Global is an established civil contracting and specialized industrial finishing firm. We execute commercial infrastructure, heavy-duty epoxy flooring, masonry, and protective weather-shield coatings with rigorous adherence to verified architectural and engineering specifications.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Our operational model relies on direct site supervision, disciplined material procurement, and verified structural logs rather than generic marketing promises.
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-gray-400 border-t border-[#222222]">
              <div>LOCATION: KARACHI, PAKISTAN</div>
              <div>FOCUS: INDUSTRIAL & COMMERCIAL</div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 relative aspect-[16/10] bg-[#0D0E12] border border-[#222222] overflow-hidden group">
            <Image
              src="/projects/hero-site.jpg"
              alt="Tech Global Site Operations"
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 right-4 bg-[#111111]/90 border border-[#222222] px-3 py-1 text-[10px] font-mono text-[#707C27] uppercase tracking-widest">
              VERIFIED SITE LOG
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}