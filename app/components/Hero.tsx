"use client";
// components/Hero.tsx

import { useEffect, useRef } from "react";
import { SITE_META, HERO_CHECKLIST } from "@/app/lib/siteData";

export default function Hero() {
  const checklistRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Animate checklist items sequentially
    const items =
      checklistRef.current?.querySelectorAll<HTMLElement>(".checklist-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add("is-visible"), i * 150 + 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (checklistRef.current) observer.observe(checklistRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-radial from-crimson/8 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

        {/* Diagonal stripe pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
          }}
        />

        {/* Large decorative maple leaf */}
        <div className="float-leaf absolute -right-16 top-1/2 -translate-y-1/2 text-[380px] opacity-[0.04] select-none pointer-events-none">
          🍁
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Headline */}
          <div>
            {/* Eyebrow */}
            <div className="hero-animate anim-1 flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold/80 text-xs tracking-[0.25em] uppercase">
                Canadian Immigration Law
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-animate anim-2 font-display font-bold text-5xl lg:text-7xl leading-[1.05] text-white mb-4">
              Your Path
              <br />
              to{" "}
              <em className="text-crimson not-italic">Canada</em>
              <br />
              Starts Here
            </h1>

            {/* Animated gold underline */}
            <div className="hero-line-animate bg-gold h-0.5 mb-8 origin-left" />

            {/* Tagline */}
            <p className="hero-animate anim-3 font-body text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              {SITE_META.tagline} Expert legal guidance from a{" "}
              <span className="text-white font-medium">
                Called-to-the-Bar Canadian lawyer
              </span>{" "}
              focused exclusively on Immigration &amp; Refugee Law.
            </p>

            {/* CTAs */}
            <div className="hero-animate anim-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-crimson inline-flex items-center justify-center gap-2 bg-crimson text-white font-body font-medium px-8 py-4 rounded text-sm tracking-wide"
              >
                Book a Free Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-body font-medium px-8 py-4 rounded text-sm tracking-wide hover:bg-gold/10 hover:border-gold/70 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Contact Quick Links */}
            <div className="hero-animate anim-5 mt-10 flex items-center gap-6 text-sm">
              <a
                href={`tel:${SITE_META.lawyer.phone}`}
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200 font-body"
              >
                <svg
                  className="w-4 h-4 text-crimson"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {SITE_META.lawyer.phone}
              </a>
              <span className="text-white/20">|</span>
              <a
                href={`mailto:${SITE_META.lawyer.email}`}
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200 font-body"
              >
                <svg
                  className="w-4 h-4 text-crimson"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          {/* Right — Checklist Card */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute inset-0 bg-crimson/10 rounded-2xl blur-3xl -z-10 scale-95" />

            <div className="hero-animate anim-3 bg-navy-900/80 backdrop-blur-sm border border-gold/15 rounded-2xl p-8 shadow-2xl">
              <h2 className="font-display text-2xl text-white font-semibold mb-2">
                Are you looking to:
              </h2>
              <div className="w-12 h-0.5 bg-crimson mb-6" />

              <ul ref={checklistRef} className="space-y-3 mb-8">
                {HERO_CHECKLIST.map((item) => (
                  <li
                    key={item}
                    className="checklist-item flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-crimson/20 border border-crimson/40 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-crimson"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-white/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gold/15 pt-6">
                <p className="font-display text-lg text-white italic mb-1">
                  &ldquo;You don&apos;t have to navigate immigration alone.&rdquo;
                </p>
                <p className="font-body text-gold/70 text-sm">
                  — {SITE_META.lawyer.fullName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[10px] text-white/60 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
