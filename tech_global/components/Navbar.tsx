import Link from "next/link";

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

        {/* Minimal Quiet Navigation */}
        <nav className="flex items-center gap-6 sm:gap-8 text-gray-400">
          <Link href="#about" className="hover:text-[#F5F4EF] transition-colors py-1 hidden sm:inline-block">About</Link>
          <Link href="#services" className="hover:text-[#F5F4EF] transition-colors py-1">Services</Link>
          <Link href="#projects" className="hover:text-[#F5F4EF] transition-colors py-1">Projects</Link>
          <Link href="#contact" className="hover:text-[#707C27] transition-colors py-1">Contact ↗</Link>
        </nav>

      </div>
    </header>
  );
}