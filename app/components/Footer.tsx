// components/Footer.tsx
// Server component — no "use client" needed

import { SITE_META, SERVICES } from "@/app/lib/siteData";
import {Mail, Phone, MapPin} from 'lucide-react';
import Image from "next/image"
import { PiTiktokLogo } from "react-icons/pi";

const FOOTER_NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-gold/15">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="legal crusaders logo"
                  fill
                  className="absolute"
                />
              </div>
              <span className="font-display text-2xl font-semibold text-white">
                Legal<em className="text-crimson not-italic p-2">Crusaders</em>
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              {SITE_META.lawyer.fullName} — {SITE_META.lawyer.title}. Expert Canadian
              immigration counsel. {SITE_META.tagline}
            </p>

            {/* Contact quick info */}
            <div className="space-y-2">
              <a
                href={`tel:${SITE_META.lawyer.phone}`}
                className="flex items-center gap-2 font-body text-white/50 hover:text-gold text-sm transition-colors duration-200"
              >
                <Phone className="text-crimson w-4 h-4"/>
                {SITE_META.lawyer.phone}
              </a>
              <a
                href={`mailto:${SITE_META.lawyer.email}`}
                className="flex items-center gap-2 font-body text-white/50 hover:text-gold text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-crimson"/>
                {SITE_META.lawyer.email}
              </a>
              <a
                href={`https://${SITE_META.lawyer.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-white/50 hover:text-gold text-sm transition-colors duration-200"
              >
                <PiTiktokLogo className="text-crimson w-4 h-4"/>
                {SITE_META.lawyer.website}
              </a>
              <a
                href={`https://share.google/5bbWYI1usGkPSscTj`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-white/50 hover:text-gold text-sm transition-colors duration-200"
              >
                <MapPin className="text-crimson w-4 h-4"/>
                {SITE_META.lawyer.location}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-white/80 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/45 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick list */}
          <div>
            <h4 className="font-body text-white/80 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="font-body text-white/45 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            © {year} Legal Crusaders — {SITE_META.lawyer.fullName}, {SITE_META.lawyer.title}. All rights reserved.
          </p>
          <p className="font-body text-white/25 text-xs">
            Based in Canada · Serving Clients Across Canada & Internationally
          </p>
        </div>
      </div>
    </footer>
  );
}
