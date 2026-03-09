"use client";
// components/About.tsx

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { SITE_META } from "@/app/lib/siteData";
import Image from "next/image";

const CREDENTIALS = [
  { label: "Title", value: SITE_META.lawyer.title },
  { label: "Admission", value: SITE_META.lawyer.credentials },
  { label: "Focus Area", value: SITE_META.lawyer.focus },
  { label: "Jurisdiction", value: "Federal Court of Canada & All Provinces" },
];

export default function About() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-navy-950 py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent ml-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="font-body text-gold/70 text-xs tracking-[0.3em] uppercase">
            About
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 mb-4">
            Counsel You Can Trust
          </h2>
          <div className="w-16 h-0.5 bg-crimson mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar & Credentials */}
          <div ref={leftRef} className="reveal-right">
            {/* Portrait placeholder with elegant styling */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-crimson/20 via-gold/10 to-transparent rounded-2xl blur-2xl" />

              {/* Avatar card */}
              <div className="relative bg-navy-800 border border-gold/20 rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center">
                {/* Large initials as avatar fallback */}
                <div>
                  <Image
                    src="/ogb.jpeg"
                    alt="Ogban Chima Oduko"
                    fill
                    className="object-cover absolute w-1 h-1 hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <span className="font-display text-5xl font-bold text-white">
                      OC
                    </span>
                  </div>
                </div>

                {/* Bottom name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent p-6">
                  <p className="font-display text-xl text-white font-semibold">
                    {SITE_META.lawyer.fullName}
                  </p>
                  <p className="font-body text-gold/70 text-sm">
                    {SITE_META.lawyer.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio & Credentials */}
          <div ref={rightRef} className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold/70 text-xs tracking-[0.2em] uppercase">
                {SITE_META.lawyer.focus}
              </span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl text-white font-semibold leading-tight mb-6">
              {SITE_META.lawyer.fullName}
            </h3>

            <p className="font-body text-white/65 text-base leading-relaxed mb-8">
              {SITE_META.lawyer.bio}
            </p>

            <p className="font-body text-white/65 text-base leading-relaxed mb-8">
              With a deep commitment to justice and a thorough understanding of
              Canadian immigration law, We bring precision and dedication to
              every case — whether you&apos;re pursuing permanent residency,
              defending against a removal order, or challenging a refusal at
              the Federal Court level.
            </p>

            {/* Credentials table */}
            <div className="space-y-3 mb-8">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.label}
                  className="flex gap-4 border-b border-white/5 pb-3"
                >
                  <span className="font-body text-gold/60 text-sm w-28 flex-shrink-0">
                    {cred.label}
                  </span>
                  <span className="font-body text-white/80 text-sm">
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="btn-crimson inline-flex items-center gap-2 bg-crimson text-white font-body text-sm font-medium px-6 py-3 rounded tracking-wide"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
