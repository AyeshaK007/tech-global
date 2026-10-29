import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-[#F5F4EF] border-b border-[#222222]">
      
      {/* Top Typographic Block */}
      <div className="max-w-7xl mx-auto px-6 pt-16 sm:pt-20 pb-12">
        
        {/* Lead Headline */}
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.88] tracking-tight mb-8">
            BUILT WITH PURPOSE.<br />
            <span className="text-[#707C27]">FINISHED TO LAST.</span>
          </h1>
        </div>

        {/* Description & Editorial Text CTA Split */}
        <div className="grid md:grid-cols-12 gap-8 items-end pt-4">
          <div className="md:col-span-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Civil construction, protective coatings, and high-durability industrial finishes engineered for commercial and industrial facilities.
            </p>
          </div>
          
          <div className="md:col-span-4 flex md:justify-end">
            <Link 
              href="#projects" 
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#F5F4EF] border-b border-[#707C27] pb-2 hover:border-[#F5F4EF] transition-all"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <span className="text-sm text-[#707C27] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Featured Site Photography */}
      <div className="max-w-7xl mx-auto border-t border-[#222222]">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#1E2330] overflow-hidden group">
          <Image 
            src="/projects/hero-site.jpg" 
            alt="Tech Global Civil Contracting Site Photo" 
            fill
            className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700 ease-out"
            priority
          />
          
          {/* Factual Technical Site Log */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/90 backdrop-blur-sm border-t border-[#222222] p-4 sm:p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#707C27]"></span>
              <span className="text-[#F5F4EF] font-bold uppercase tracking-widest">FEATURED SITE LOG</span>
            </div>
            <div className="text-gray-400">
              INDUSTRIAL EPOXY & MASONRY STRUCTURAL ASSEMBLY — 2026
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}