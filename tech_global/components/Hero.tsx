import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <section className="relative py-20 md:py-28 px-6 border-b border-[#222222] overflow-hidden bg-[#111111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Main Typography Column */}
          <div className="md:col-span-8">
            <div className="text-[#707C27] text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#707C27]" aria-hidden="true"></span>
              <span>CIVIL CONTRACTING · MASONRY · FINISHES · REMODELLING</span>
            </div>
            
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.88] mb-8 text-[#F5F4EF] uppercase tracking-tight">
              WE BUILD.<br />
              <span className="text-[#707C27]">WE FINISH.</span>
            </h1>

            <div className="border-l-2 border-[#707C27] pl-6 py-1 mb-10 max-w-2xl">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Turnkey civil construction, structural masonry, high-durability epoxy flooring systems, commercial waterproofing, and complete property remodelling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">
                Request a Quote
              </Button>
              <Button href="#projects" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Integrated Monogram Column */}
          <div className="hidden md:flex md:col-span-4 justify-end items-center relative">
            <div className="border-l border-[#222222] pl-12 py-12 flex flex-col justify-between h-full">
              <span className="font-display text-9xl font-black text-[#1A1E29] select-none leading-none tracking-tighter">
                TG
              </span>
              <div className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold space-y-2 mt-8">
                <div>SPECIFICATION: CIVIL & FINISHING</div>
                <div>LOCATION: PAKISTAN</div>
                <div className="text-[#707C27]">TECH GLOBAL CONTRACTORS</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hero Photography Split */}
      <section className="border-b border-[#222222] bg-[#1E2330]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 border-x border-[#222222]">
          <div className="md:col-span-8 h-[380px] sm:h-[480px] md:h-[560px] relative border-b md:border-b-0 md:border-r border-[#222222] bg-[#111111] overflow-hidden group">
            <Image 
              src="/projects/hero-site.jpg" 
              alt="Tech Global Civil Construction Project Site" 
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute bottom-0 left-0 bg-[#111111] border-t border-r border-[#222222] px-5 py-3 text-[11px] font-bold tracking-widest uppercase text-[#707C27] z-10">
              FEATURED SITE / CIVIL CONTRACTING WORK
            </div>
          </div>

          <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-[#1E2330]">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#707C27] uppercase block mb-4">
                01 / CORE STANDARDS
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#F5F4EF] leading-snug uppercase">
                BUILT FOR COMMERCIAL & INDUSTRIAL SPECIFICATIONS
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                From structural masonry and wall plastering to specialized epoxy coatings and full civil remodelling, Tech Global delivers heavy-duty technical standards tailored for commercial facilities.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A3040] flex justify-between items-center text-xs text-gray-400 uppercase tracking-widest font-semibold">
              <span>PROJECT QUALITY CHECKED</span>
              <span className="text-[#707C27]">TG — 2026</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}