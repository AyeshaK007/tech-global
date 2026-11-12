
"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#111111] text-[#F5F4EF]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand Identity */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-3 shrink-0"
        >
          <span className="font-display text-lg font-extrabold tracking-wider leading-none">
            TECH GLOBAL
          </span>

          <span className="hidden sm:inline-block text-[10px] text-gray-500 font-normal pl-3 border-l border-[#222222] uppercase tracking-widest">
            Civil Contractors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-widest text-gray-400"
        >
          <Link
            href="/#about"
            className="py-2 hover:text-[#F5F4EF] transition-colors"
          >
            About
          </Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center gap-2 py-1 hover:text-[#F5F4EF] transition-colors"
            >
              Services
              <span
                className={`text-[10px] text-[#707C27] transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              id="desktop-services-menu"
              className={`absolute top-full left-0 min-w-[280px] border border-[#222222] bg-[#111111] py-2 z-50 group-hover:block group-focus-within:block ${
                servicesOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/#services"
                onClick={closeMenus}
                className="block px-4 py-3 border-b border-[#222222] text-[10px] font-mono text-gray-500 tracking-widest hover:text-[#F5F4EF]"
              >
                VIEW ALL SERVICES
              </Link>

              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={closeMenus}
                  className="flex items-center justify-between gap-4 px-4 py-3 text-[11px] text-gray-300 hover:text-[#F5F4EF] hover:bg-[#1E2330] transition-colors border-b border-[#222222]/40 last:border-none"
                >
                  <span>{service.title}</span>
                  <span className="font-mono text-[10px] text-[#707C27] shrink-0">
                    {service.number}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#projects"
            className="py-2 hover:text-[#F5F4EF] transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="py-2 hover:text-[#707C27] transition-colors"
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 border border-[#222222]"
        >
          <span
            className={`block w-4 h-px bg-[#F5F4EF] transition-transform ${
              mobileOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-4 h-px bg-[#F5F4EF] transition-transform ${
              mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#222222] bg-[#111111] px-6 py-5"
        >
          <div className="flex flex-col text-xs font-semibold uppercase tracking-widest text-gray-400">

            <Link
              href="/#about"
              onClick={closeMenus}
              className="py-4 border-b border-[#222222]"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#222222]">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className="w-full flex items-center justify-between py-4 hover:text-[#F5F4EF]"
              >
                Services
                <span
                  className={`text-[#707C27] transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {servicesOpen && (
                <div id="mobile-services-menu" className="pb-3 pl-4">
                  <Link
                    href="/#services"
                    onClick={closeMenus}
                    className="block py-3 text-[10px] text-[#707C27]"
                  >
                    VIEW ALL SERVICES
                  </Link>

                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className="flex items-center justify-between gap-4 py-3 text-[11px] text-gray-400 hover:text-[#F5F4EF]"
                    >
                      <span>{service.title}</span>
                      <span className="font-mono text-[10px] text-[#707C27]">
                        {service.number}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#projects"
              onClick={closeMenus}
              className="py-4 border-b border-[#222222]"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenus}
              className="py-4 hover:text-[#707C27]"
            >
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
