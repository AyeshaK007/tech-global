import Link from "next/link";
import { servicesData } from "@/data/services";

export default function Navbar() {
  return (
    <header className="border-b border-[#222222] bg-[#111111] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-widest font-semibold uppercase">
        
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display text-lg font-extrabold text-[#F5F4EF] tracking-wider leading-none">
            TECH GLOBAL
          </span>
          <span className="hidden sm:inline-block text-[10px] text-gray-500 font-normal pl-3 border-l border-[#222222]">
            CIVIL CONTRACTORS
          </span>
        </Link>

        {/* Minimal Quiet Navigation with Dropdown */}
        <nav className="flex items-center gap-6 sm:gap-8 text-gray-400">
          <Link href="/#about" className="hover:text-[#F5F4EF] transition-colors py-1 hidden sm:inline-block">About</Link>
          
          {/* Services Dropdown Container */}
          <div className="relative group py-2">
            <Link href="/#services" className="hover:text-[#F5F4EF] transition-colors flex items-center gap-1.5 py-1">
              <span>Services</span>
              <span className="text-[10px] text-[#707C27]">▾</span>
            </Link>

            {/* Editorial Dropdown Panel */}
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#111111] border border-[#222222] min-w-[280px] py-2 z-50 shadow-2xl">
              <div className="px-4 py-2 border-b border-[#222222] text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                ALL CAPABILITIES (01—07)
              </div>
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between px-4 py-2.5 text-[11px] text-gray-300 hover:text-[#F5F4EF] hover:bg-[#1E2330] transition-colors border-b border-[#222222]/40 last:border-none"
                >
                  <span className="font-medium">{service.title}</span>
                  <span className="font-mono text-[10px] text-[#707C27]">{service.number}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#projects" className="hover:text-[#F5F4EF] transition-colors py-1">Projects</Link>
          <Link href="/#contact" className="hover:text-[#707C27] transition-colors py-1">Contact ↗</Link>
        </nav>

      </div>
    </header>
  );
}