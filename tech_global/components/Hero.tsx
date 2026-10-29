import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative py-16 md:py-24 px-6 border-b border-[#222222] overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18vw] font-black text-[#191C24] select-none pointer-events-none z-0 opacity-40 leading-none">
          TG
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-[#707C27] text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#707C27] inline-block"></span>
            <span>CIVIL CONTRACTING · MASONRY · FINISHES · REMODELLING</span>
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-10 text-[#F5F4EF] uppercase">
            WE BUILD.<br />
            <span className="text-[#707C27]">WE FINISH.</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7 border-l-2 border-[#707C27] pl-6 py-1">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                Turnkey civil construction, structural wall assembly, plastering, high-durability epoxy flooring systems, commercial waterproofing, and complete property remodelling.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col sm:flex-row justify-start md:justify-end gap-4">
              <a 
                href="#projects" 
                className="bg-[#F5F4EF] text-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-widest border border-[#F5F4EF] text-center"
              >
                View Selected Work
              </a>
              <a 
                href="#services" 
                className="border border-[#707C27] text-[#707C27] px-8 py-4 text-xs font-bold uppercase tracking-widest text-center hover:bg-[#707C27] hover:text-white transition-colors"
              >
                Our Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

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