import Image from "next/image";
import Link from "next/link";
import { MEDIA_MANIFEST } from "@/data/media";

export default function Hero() {
  const heroMedia = MEDIA_MANIFEST.heroPrimary;

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
              Delivering civil construction, protective coatings, and durable finishing solutions for commercial and industrial spaces.
            </p>
          </div>
          
          <div className="md:col-span-4 flex md:justify-end">
            <Link 
              href="#projects" 
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#F5F4EF] border-b border-[#707C27] pb-2"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <span className="text-sm text-[#707C27]">↗</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Featured Site Photography */}
      <div className="max-w-7xl mx-auto border-t border-x border-[#222222]">
        <div className="relative aspect-[4/3] sm:aspect-[21/9] w-full bg-[#1E2330] overflow-hidden">
          
          {/* Desktop Hero Image (Natural Color) */}
          <div className="hidden sm:block absolute inset-0">
            <Image 
              src={heroMedia.src} 
              alt={heroMedia.alt} 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          {/* Mobile Hero Image (Natural Color, Centered Framing) */}
          <div className="block sm:hidden absolute inset-0">
            <Image 
              src={heroMedia.mobileSrc || heroMedia.src} 
              alt={heroMedia.alt} 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

        </div>

        {/* Architectural Technical Site Log Bar (Outside Image Area) */}
        <div className="bg-[#111111] border-t border-[#222222] px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#707C27] shrink-0" />
            <span className="text-[#F5F4EF] font-bold uppercase tracking-widest">
              FEATURED SITE LOG
            </span>
          </div>
          <div className="text-gray-400">
            {heroMedia.caption}
          </div>
        </div>
      </div>

    </section>
  );
}