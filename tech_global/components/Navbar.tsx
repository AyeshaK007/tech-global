import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="border-b border-[#222222] bg-[#1E2330] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 relative bg-[#111111] border border-[#222222] flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Tech Global Logo" 
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-wider text-[#F5F4EF] leading-none">
              TECH GLOBAL
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#707C27] font-semibold mt-1">
              Civil Contractors
            </span>
          </div>
        </Link>

        {/* Quiet Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-semibold text-gray-300">
          <Link href="#about" className="hover:text-[#707C27] transition-colors py-1">About</Link>
          <Link href="#services" className="hover:text-[#707C27] transition-colors py-1">Services</Link>
          <Link href="#projects" className="hover:text-[#707C27] transition-colors py-1">Projects</Link>
          <Link href="#contact" className="hover:text-[#707C27] transition-colors py-1">Contact</Link>
        </nav>

        {/* Primary CTA */}
        <Button href="#contact" variant="primary">
          Contact
        </Button>
      </div>
    </header>
  );
}