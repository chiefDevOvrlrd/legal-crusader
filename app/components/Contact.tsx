"use client";
// components/Contact.tsx

import { useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { SITE_META } from "@/app/lib/siteData";

const INQUIRY_TYPES = [
  "Permanent Residence",
  "Refugee / Asylum Claim",
  "Federal Court / Judicial Review",
  "Work or Study Permit",
  "Family Sponsorship",
  "Other",
];

export default function Contact() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy-950 py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-crimson/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-body text-gold/70 text-xs tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 mb-4">
            Your Case Deserves Expert Guidance
          </h2>
          <div className="w-16 h-0.5 bg-crimson mx-auto mb-6" />
          <p className="font-body text-white/55 max-w-xl mx-auto text-base">
            Take action before deadlines pass. Book a consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Contact Info */}
          <div ref={leftRef} className="reveal-right lg:col-span-2 space-y-6">
            {/* Phone */}
            <a
              href={`tel:${SITE_META.lawyer.phone}`}
              className="group flex items-start gap-4 bg-navy-900/60 border border-white/8 rounded-xl p-5 hover:border-gold/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-crimson/20 flex items-center justify-center flex-shrink-0 group-hover:bg-crimson/30 transition-colors">
                <svg className="w-5 h-5 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-white/50 text-xs mb-1 tracking-wider uppercase">Phone</p>
                <p className="font-body text-white font-medium">{SITE_META.lawyer.phone}</p>
                <p className="font-body text-white/40 text-xs mt-0.5">Mon–Fri, 9am–6pm EST</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_META.lawyer.email}`}
              className="group flex items-start gap-4 bg-navy-900/60 border border-white/8 rounded-xl p-5 hover:border-gold/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-crimson/20 flex items-center justify-center flex-shrink-0 group-hover:bg-crimson/30 transition-colors">
                <svg className="w-5 h-5 text-crimson" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-white/50 text-xs mb-1 tracking-wider uppercase">Email</p>
                <p className="font-body text-white font-medium text-sm">{SITE_META.lawyer.email}</p>
                <p className="font-body text-white/40 text-xs mt-0.5">We respond within 24 hours</p>
              </div>
            </a>

            {/* Urgency note */}
            <div className="bg-crimson/10 border border-crimson/25 rounded-xl p-5">
              <p className="font-body text-crimson text-xs font-semibold uppercase tracking-wider mb-2">
                ⚠️ Time-Sensitive Cases
              </p>
              <p className="font-body text-white/65 text-sm leading-relaxed">
                Federal Court deadlines are strict. If your case is urgent, please call directly for immediate assistance.
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div ref={rightRef} className="reveal-left lg:col-span-3">
            {submitted ? (
              <div className="bg-navy-900/60 border border-gold/25 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl text-white font-semibold mb-3">
                  Message Received
                </h3>
                <p className="font-body text-white/60 leading-relaxed">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-navy-900/60 border border-white/8 rounded-2xl p-8 space-y-5"
              >
                <h3 className="font-display text-2xl text-white font-semibold mb-6">
                  Book a Free Consultation
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider uppercase mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-navy-950/60 border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider uppercase mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-navy-950/60 border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider uppercase mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-navy-950/60 border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wider uppercase mb-2 block">
                      Type of Inquiry *
                    </label>
                    <select
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-navy-950/60 border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-white/40">
                        Select a category
                      </option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-navy-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs tracking-wider uppercase mb-2 block">
                    Brief Description of Your Case *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your immigration situation and what assistance you need..."
                    className="w-full bg-navy-950/60 border border-white/10 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-crimson w-full bg-crimson text-white font-body font-semibold py-4 rounded-lg text-sm tracking-wide"
                >
                  Submit Consultation Request →
                </button>

                <p className="font-body text-white/35 text-xs text-center">
                  All consultations are confidential. We serve clients across Canada and internationally.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
