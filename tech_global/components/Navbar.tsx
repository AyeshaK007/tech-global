import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}