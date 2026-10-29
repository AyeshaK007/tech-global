import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#111111] text-[#F5F4EF]">
      {/* Statement Closing Callout */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#222222]">
        <div className="grid md:grid-cols-12 gap-8 items-end justify-between">
          <div className="md:col-span-8">
            <span className="text-[#707C27] text-xs font-bold tracking-widest uppercase block mb-3">
              HAVE A PROJECT IN MIND?
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-none text-[#F5F4EF]">
              LET'S BUILD SOMETHING THAT LASTS.
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              Civil works. Industrial finishes. Built to perform.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <Button href="#contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Brand & Quick Navigation Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#222222] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-display text-2xl font-extrabold tracking-wider text-[#F5F4EF] leading-none block">
            TECH GLOBAL
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-widest block mt-1">
            Civil Contractors
          </span>
        </div>

        <nav className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-semibold text-gray-400">
          <Link href="#about" className="hover:text-[#707C27] transition-colors">About</Link>
          <Link href="#services" className="hover:text-[#707C27] transition-colors">Services</Link>
          <Link href="#projects" className="hover:text-[#707C27] transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-[#707C27] transition-colors">Contact</Link>
        </nav>
      </div>

      {/* Minimal Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>© 2026 Tech Global. All rights reserved.</div>
        <div className="flex gap-6 uppercase tracking-widest font-semibold">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
          <span className="text-gray-700">·</span>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}