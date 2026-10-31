"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Epoxy Flooring",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate API submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  };

  return (
    <section id="contact" className="py-24 px-6 border-b border-[#222222] bg-[#111111] text-[#F5F4EF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222] gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-2">
              [ 05 / INITIATE ENGAGEMENT ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-none text-[#F5F4EF]">
              TECHNICAL INQUIRY & SITE EVALUATION.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-sans">
            Submit facility details, request BOQ estimates, or schedule an on-site structural inspection with our engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Office & Operational Contact Specs */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">
            <div className="bg-[#1E2330]/30 border border-[#222222] p-8 space-y-6">
              <span className="text-[#707C27] uppercase tracking-widest block pb-3 border-b border-[#222222] font-bold">
                OFFICE & FIELD DIRECTORY
              </span>

              <div className="space-y-4">
                <div>
                  <span className="text-gray-500 uppercase block mb-1">HEADQUARTERS LOCATION</span>
                  <p className="text-gray-200 text-sm font-sans font-medium">
                    Industrial Zone, Korangi, Karachi, Pakistan
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]/60">
                  <span className="text-gray-500 uppercase block mb-1">DIRECT TECHNICAL LINES</span>
                  <p className="text-gray-200 text-sm">Phone: +92 (0) 300 0000000</p>
                  <p className="text-gray-200 text-sm">Tel: +92 (0) 21 30000000</p>
                </div>

                <div className="pt-3 border-t border-[#222222]/60">
                  <span className="text-gray-500 uppercase block mb-1">ELECTRONIC CORRESPONDENCE</span>
                  <p className="text-gray-200 text-sm">Inquiries: info@techglobal.pk</p>
                  <p className="text-gray-200 text-sm">Estimates: boq@techglobal.pk</p>
                </div>

                <div className="pt-3 border-t border-[#222222]/60">
                  <span className="text-gray-500 uppercase block mb-1">SITE INSPECTION HOURS</span>
                  <p className="text-gray-200 text-sm">Mon — Sat: 08:00 – 18:00 PKT</p>
                  <p className="text-gray-400 text-xs">Sunday: Field Emergency Support Only</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2330] border border-[#222222] p-6">
              <h4 className="text-[#F5F4EF] font-bold uppercase mb-2 font-display text-base">
                DOCUMENTATION REQUIREMENT?
              </h4>
              <p className="text-gray-400 font-sans text-xs leading-relaxed">
                Attach your site layouts or BOQ requirements in the form, or send specifications directly to our engineering desk at <span className="text-[#707C27]">boq@techglobal.pk</span>.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7 bg-[#1E2330]/20 border border-[#222222] p-8 sm:p-10">
            {formState === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="text-xs font-mono text-[#707C27] tracking-widest uppercase">
                  [ INQUIRY RECEIVED & LOGGED ]
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#F5F4EF]">
                  TRANSMISSION SUCCESSFUL.
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto font-sans leading-relaxed">
                  Your project specs have been logged. A site engineer will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 border border-[#707C27] hover:bg-opacity-90 transition-opacity"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      FULL NAME / REPRESENTATIVE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      CONTACT NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      PRIMARY SERVICE REQUIREMENT
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                    >
                      <option value="Epoxy Flooring">Epoxy Flooring Systems</option>
                      <option value="Civil Masonry">Civil Contracting & Masonry</option>
                      <option value="Weatherproofing">Weatherproofing & Damp Barrier</option>
                      <option value="Exterior Coating">Industrial Exterior Coating</option>
                      <option value="Property Remodelling">Commercial Property Remodelling</option>
                      <option value="Other Technical Service">Other Technical Service</option>
                    </select>
                  </div>
                </div>

                {/* Site Location */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    PROJECT SITE LOCATION / CITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. SITE Industrial Area, Karachi"
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                  />
                </div>

                {/* Scope & Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    PROJECT SCOPE & SPECIFICATIONS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe estimated area (sq ft), substrate conditions, timeline, or required material specs..."
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-[#707C27] text-white text-xs font-bold uppercase tracking-widest py-4 px-6 border border-[#707C27] hover:bg-opacity-90 transition-opacity disabled:opacity-50"
                >
                  {formState === "submitting" ? "TRANSMITTING SPECIFICATIONS..." : "TRANSMIT INQUIRY TO ENGINEERING DESK ↗"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}