import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] text-[#F5F4EF] border-b border-[#222222]">
      
      {/* Editorial Header Block */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 border-b border-[#222222]">
        <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase text-gray-500 mb-6">
          <span>TECH GLOBAL / CAPABILITIES</span>
          <span>01 — 07</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none tracking-tight">
              WHAT WE <span className="text-[#707C27]">DO.</span>
            </h2>
          </div>
          <div className="md:col-span-4 text-gray-400 text-sm leading-relaxed">
            Civil construction, protective coatings, and industrial finishing solutions engineered around unyielding material standards.
          </div>
        </div>
      </div>

      {/* Architectural Grid Container */}
      <div className="max-w-7xl mx-auto border-x border-[#222222]">
        
        {/* Row 1: 01 Construction & 02 Masonry */}
        <div className="grid md:grid-cols-12 border-b border-[#222222]">
          
          {/* 01 / Construction */}
          <div className="md:col-span-7 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-8">
                <span className="text-[#707C27] font-bold">01 / CONSTRUCTION</span>
                <span>CIVIL WORKS</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-[#F5F4EF]">
                Complete Construction
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                Turnkey commercial and industrial grey-structure projects built from the ground up, with full structural compliance and engineering integrity.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-8">
              TURNKEY & GREY STRUCTURES
            </div>
          </div>

          {/* 02 / Masonry */}
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-8">
                <span>02 / MASONRY</span>
                <span>STRUCTURAL FINISHES</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                Masonry & Plastering
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Interior and exterior plaster work, structural brickwork, block masonry, slope finishing, and RCC structural finishing.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-8">
              BRICKWORK · BLOCKWORK · RCC
            </div>
          </div>

        </div>

        {/* Row 2: Featured Dominant Anchor — 04 Epoxy Flooring Systems */}
        <div className="grid md:grid-cols-12 border-b border-[#222222] bg-[#1E2330]">
          
          {/* Photographic Anchor Container */}
          <div className="md:col-span-7 relative min-h-[360px] border-b md:border-b-0 md:border-r border-[#222222] overflow-hidden group">
            <Image 
              src="/projects/epoxy-floor.jpg" 
              alt="Industrial Epoxy Flooring Installation" 
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-[#111111]/90 border border-[#222222] px-3 py-1.5 text-[10px] font-mono uppercase text-[#707C27] tracking-widest z-10">
              FEATURED SPECIALIZATION
            </div>
          </div>

          {/* 04 / Epoxy Flooring Text Column */}
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-400 mb-8">
                <span className="text-[#707C27] font-bold">04 / INDUSTRIAL FLOORING</span>
                <span>HIGH PERFORMANCE</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mb-4 text-[#F5F4EF]">
                Epoxy Flooring Solutions
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Seamless, high-gloss industrial epoxy floors. Anti-slip, chemical-resistant, and anti-dust coatings engineered for warehouses, workshops, and commercial facilities.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A3040] space-y-1 mt-6">
              <div className="text-[11px] font-mono text-[#707C27] uppercase tracking-widest">
                SPEC: HIGH-LOAD SURFACE PROTECTION
              </div>
              <div className="text-xs text-gray-400">
                Seamless application for heavy traffic endurance.
              </div>
            </div>
          </div>

        </div>

        {/* Row 3: 03 Industrial Painting & 05 Waterproofing */}
        <div className="grid md:grid-cols-12 border-b border-[#222222]">
          
          {/* 03 / Industrial Painting */}
          <div className="md:col-span-6 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>03 / INDUSTRIAL FINISHES</span>
                <span>PROTECTIVE COATINGS</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                Industrial Painting
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Commercial interior and exterior painting, textured coatings, weather-shield protection, and damp-proof paint systems.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              PROTECTIVE & DECORATIVE COATINGS
            </div>
          </div>

          {/* 05 / Waterproofing */}
          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>05 / PROTECTION</span>
                <span>MEMBRANE SYSTEMS</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                Waterproofing Services
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Specialized chemical coatings and elastomeric membrane applications for roofs, basements, and wet structural areas.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              MOISTURE & CHEMICAL BARRIERS
            </div>
          </div>

        </div>

        {/* Row 4: 06 Restoration & 07 Additional Services */}
        <div className="grid md:grid-cols-12">
          
          {/* 06 / Restoration */}
          <div className="md:col-span-7 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#222222] flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>06 / REHABILITATION</span>
                <span>CIVIL ALTERATIONS</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                Restoration & Remodelling
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Building rehabilitation, structural upgrades, civil modifications, and complete commercial interior and exterior remodelling for existing facilities.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              RESTRUCTURING & COMMERCIAL REHABILITATION
            </div>
          </div>

          {/* 07 / Additional Services */}
          <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex justify-between items-start text-xs font-mono text-gray-500 mb-6">
                <span>07 / COMPLEMENTARY WORKS</span>
                <span>TECHNICAL FINISHING</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase mb-4 text-[#F5F4EF]">
                Additional Finishing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precision paver, ceramic tile, and marble floor installations paired with complete commercial plumbing solutions.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1E2330] text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-6">
              PAVERS · TILE · MARBLE · PLUMBING
            </div>
          </div>

        </div>

      </div>

      {/* Footer Link Divider */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#222222] flex justify-between items-center text-xs font-mono uppercase">
        <span className="text-gray-500">SPECIFICATION ASSISTANCE AVAILABLE</span>
        <Link 
          href="#contact" 
          className="text-[#707C27] hover:text-[#F5F4EF] font-bold tracking-widest transition-colors flex items-center gap-2"
        >
          <span>DISCUSS YOUR SCOPE OF WORK</span>
          <span>↗</span>
        </Link>
      </div>

    </section>
  );
}