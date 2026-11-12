
"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesData[0]?.title ?? "",
    location: "",
    message: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-b border-[#222222] bg-[#111111] text-[#F5F4EF]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222222] gap-6">
          <div>
            <span className="text-xs font-mono text-[#707C27] uppercase tracking-widest block mb-2">
              [ 05 / INITIATE ENGAGEMENT ]
            </span>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-none text-[#F5F4EF]">
              PROJECT INQUIRIES.
            </h2>
          </div>

          <p className="text-gray-400 text-sm max-w-md font-sans">
            Share an overview of your project requirements, service needs,
            and site location to begin an inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Company Contact Information */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">

            <div className="bg-[#1E2330]/30 border border-[#222222] p-8 space-y-6">
              <span className="text-[#707C27] uppercase tracking-widest block pb-3 border-b border-[#222222] font-bold">
                COMPANY DIRECTORY
              </span>

              <div className="space-y-4">
                <div>
                  <span className="text-gray-500 uppercase block mb-1">
                    CONTACT INFORMATION
                  </span>

                  <p className="text-gray-200 text-sm font-sans leading-relaxed">
                    Official contact details will be published once confirmed
                    by Tech Global.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]/60">
                  <span className="text-gray-500 uppercase block mb-1">
                    PHONE
                  </span>

                  <p className="text-gray-400 text-sm font-sans">
                    Contact number to be confirmed.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]/60">
                  <span className="text-gray-500 uppercase block mb-1">
                    EMAIL
                  </span>

                  <p className="text-gray-400 text-sm font-sans">
                    Official company email to be confirmed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2330] border border-[#222222] p-6">
              <h4 className="text-[#F5F4EF] font-bold uppercase mb-2 font-display text-base">
                PROJECT DOCUMENTATION
              </h4>

              <p className="text-gray-400 font-sans text-xs leading-relaxed">
                File attachments are not currently supported through this
                form. You can outline your project requirements in the
                message field.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#1E2330]/20 border border-[#222222] p-8 sm:p-10">

            {/* Integration Notice */}
            <div className="mb-8 border border-[#707C27]/50 p-4">
              <span className="text-[#707C27] font-mono text-xs uppercase tracking-widest block mb-2">
                [ FORM CONNECTION PENDING ]
              </span>

              <p className="text-gray-400 text-xs font-sans leading-relaxed">
                This form is currently being prepared. Inquiry submission
                will become available once the company's contact system
                is connected.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                  >
                    FULL NAME *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                  >
                    EMAIL ADDRESS *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                  >
                    CONTACT NUMBER *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    maxLength={30}
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+92 300 0000000"
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                  >
                    SERVICE REQUIREMENT *
                  </label>

                  <select
                    id="contact-service"
                    required
                    value={formData.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                  >
                    {servicesData.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Site Location */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-location"
                  className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                >
                  PROJECT SITE LOCATION *
                </label>

                <input
                  id="contact-location"
                  type="text"
                  required
                  maxLength={150}
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="City or project site location"
                  className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors"
                />
              </div>

              {/* Project Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono text-gray-400 uppercase tracking-widest block"
                >
                  PROJECT DETAILS *
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  maxLength={3000}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Describe your project requirements, estimated area, or preferred services..."
                  className="w-full bg-[#111111] border border-[#222222] px-4 py-3 text-sm text-[#F5F4EF] placeholder-gray-600 focus:outline-none focus:border-[#707C27] font-sans transition-colors resize-none"
                />
              </div>

              {/* Submission Pending */}
              <button
                type="button"
                disabled
                className="w-full bg-[#707C27]/40 text-white/70 text-xs font-bold uppercase tracking-widest py-4 px-6 border border-[#707C27]/40 cursor-not-allowed"
              >
                FORM CONNECTION PENDING
              </button>

              <p className="text-gray-500 text-xs font-sans text-center">
                This form cannot receive submissions yet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
