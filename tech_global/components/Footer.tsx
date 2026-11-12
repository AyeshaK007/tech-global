
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#111111] text-[#F5F4EF] border-t border-[#222222]">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-8">
            <span className="text-xs font-mono text-[#707C27] uppercase block mb-4">
              [ 06 / COMPANY FOOTER ]
            </span>

            <h2 className="font-display text-5xl sm:text-7xl font-extrabold uppercase leading-none">
              LET&apos;S BUILD SOMETHING THAT LASTS.
            </h2>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <Link
              href="#contact"
              className="bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border border-[#707C27] hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#707C27] transition-opacity"
            >
              GET IN TOUCH ↗
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#222222] text-sm">
          {/* Navigation */}
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase block mb-3">
              NAVIGATION
            </span>

            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">Services</Link></li>
              <li><Link href="#projects" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">Projects</Link></li>
              <li><Link href="#about" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">About</Link></li>
              <li><Link href="#contact" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase block mb-3">
              LEGAL
            </span>

            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#F5F4EF] focus-visible:text-[#F5F4EF]">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Company Information */}
          <div className="col-span-2">
            <span className="text-xs font-mono text-gray-500 uppercase block mb-3">
              TECH GLOBAL CONTRACTORS
            </span>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Civil construction, masonry, protective coatings, epoxy
              flooring, waterproofing, and finishing solutions for
              commercial and industrial spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-mono">
        <div>
          © {year} Tech Global. All rights reserved.
        </div>

        <div className="mt-2 sm:mt-0">
          KARACHI, PAKISTAN
        </div>
      </div>
    </footer>
  );
}
