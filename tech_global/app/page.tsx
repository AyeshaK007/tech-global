import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F4EF] selection:bg-[#707C27] selection:text-white">
      {/* Structural Top Navigation */}
      <header className="border-b border-[#222222] bg-[#1E2330] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 relative bg-[#111111] border border-[#333333] flex items-center justify-center overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="Tech Global Logo" 
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-wider text-[#F5F4EF] leading-none">
                TECH GLOBAL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#707C27] font-semibold mt-1">
                Civil Contractors
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-gray-300">
            <Link href="#about" className="hover:text-[#707C27] transition-colors">About</Link>
            <Link href="#services" className="hover:text-[#707C27] transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-[#707C27] transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-[#707C27] transition-colors">Contact</Link>
          </nav>

          <a 
            href="#contact" 
            className="bg-[#707C27] text-white text-xs uppercase tracking-widest font-bold px-6 py-3 border border-[#707C27] hover:bg-opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Architectural Hero Section */}
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

      {/* Editorial 7-Service Capability Layout */}
      <section id="services" className="py-24 px-6 border-b border-[#222222] bg-[#F5F4EF] text-[#111111]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#111111] pb-8 gap-6">
            <div>
              <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-2">
                [ 01 / CORE CAPABILITIES ]
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-[#111111] leading-none">
                BUILT FOR THE WORK THAT MATTERS.
              </h2>
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-md">
              Civil construction, industrial finishing solutions, and complete property rehabilitation built around unyielding material standards.
            </p>
          </div>

          {/* Asymmetric 7-Service Editorial Grid */}
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Service 01: Featured Large Spanning Block */}
            <div className="md:col-span-8 bg-[#111111] text-[#F5F4EF] p-8 md:p-12 border border-[#222222] flex flex-col justify-between relative overflow-hidden group">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27]">
                  01 / CONSTRUCTION
                </span>
                <span className="text-xs tracking-widest text-gray-500 uppercase">CIVIL WORKS</span>
              </div>
              <div className="relative z-10 max-w-xl">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 text-[#F5F4EF]">
                  Construction & Civil Works
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Turnkey commercial and industrial grey-structure projects built from the ground up, with full structural compliance and engineering integrity.
                </p>
              </div>
            </div>

            {/* Service 02: Vertical Accent Block */}
            <div className="md:col-span-4 bg-[#1E2330] text-[#F5F4EF] p-8 border border-[#222222] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27] block mb-6">
                  02 / MASONRY
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">
                  Plastering & Masonry
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Interior and exterior plaster work, structural brickwork, block masonry, slope finishing, and RCC structural finishing.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#2B3242] text-[11px] text-gray-400 uppercase tracking-widest">
                STRUCTURAL INTERIORS & EXTERIORS
              </div>
            </div>

            {/* Service 03: Mid-size Block */}
            <div className="md:col-span-4 bg-white border border-[#111111] p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27] block mb-6">
                  03 / FINISHING
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4 text-[#111111]">
                  Finishing & Paint Work
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Commercial interior and exterior painting, textured coatings, weather-shield protection, and damp-proof paint systems.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-200 text-[11px] text-gray-500 uppercase tracking-widest">
                PROTECTIVE & DECORATIVE COATINGS
              </div>
            </div>

            {/* Service 04: Highlighted Olive Accent Block */}
            <div className="md:col-span-4 bg-[#707C27] text-white p-8 border border-[#707C27] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/80 block mb-6">
                  04 / INDUSTRIAL FLOORING
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">
                  Epoxy Flooring Solutions
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Seamless, high-gloss industrial epoxy floors. Anti-slip, chemical-resistant, and anti-dust coatings for warehouses, workshops, and offices.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-white/20 text-[11px] text-white/70 uppercase tracking-widest">
                HIGH-LOAD SURFACE PROTECTION
              </div>
            </div>

            {/* Service 05: Dark Surface Block */}
            <div className="md:col-span-4 bg-[#111111] text-[#F5F4EF] p-8 border border-[#222222] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27] block mb-6">
                  05 / PROTECTION
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">
                  Waterproofing Services
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Specialized chemical coatings and elastomeric membrane applications for roofs, basements, and wet structural areas.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#222222] text-[11px] text-gray-500 uppercase tracking-widest">
                MOISTURE & CHEMICAL BARRIERS
              </div>
            </div>

            {/* Service 06: Wide 8-Column Restoration Block */}
            <div className="md:col-span-8 bg-[#1E2330] text-[#F5F4EF] p-8 md:p-12 border border-[#222222] flex flex-col justify-between">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27]">
                  06 / RENEWAL
                </span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">CIVIL ALTERATIONS</span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
                  Restoration, Restructuring & Remodelling
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                  Building rehabilitation, structural upgrades, civil modifications, and complete commercial interior and exterior remodelling for existing facilities.
                </p>
              </div>
            </div>

            {/* Service 07: 4-Column Secondary Services Block */}
            <div className="md:col-span-4 bg-white text-[#111111] p-8 border border-[#111111] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#707C27] block mb-6">
                  07 / ADDITIONAL SERVICES
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4">
                  Flooring, Tiles, Marble & Plumbing
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Precision paver, ceramic tile, and marble floor installations paired with complete commercial plumbing solutions.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-200 text-[11px] text-gray-500 uppercase tracking-widest">
                COMPLETE TECHNICAL FINISHING
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}