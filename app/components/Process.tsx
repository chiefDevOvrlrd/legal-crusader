"use client";
// components/Process.tsx

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { PROCESS_STEPS } from "@/app/lib/siteData";

export default function Process() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const steps = stepsRef.current?.querySelectorAll<HTMLElement>(".step-item");
    if (!steps) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.index || "0");
            setTimeout(() => el.classList.add("is-visible"), idx * 150);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);


  return (
    <section id="process" className="bg-navy-950 py-28 relative overflow-hidden">
      {/* Subtle background line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal-up text-center mb-20">
          <span className="font-body text-gold/70 text-xs tracking-[0.3em] uppercase">
            How It Works
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 mb-4">
            Your Journey, Step by Step
          </h2>
          <div className="w-16 h-0.5 bg-crimson mx-auto mb-6" />
          <p className="font-body text-white/55 max-w-xl mx-auto text-base leading-relaxed">
            We make the complex simple. Here&apos;s how we work with you from
            first contact to resolution.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/5 via-gold/30 to-gold/5" />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              data-index={index}
              className={"step-item reveal-up relative flex flex-col items-center text-center group"}
            >
              {/* Number circle */}
              <div className="relative mb-6 z-10">
                <div className="w-20 h-20 rounded-full bg-navy-800 border-2 border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-navy-700 transition-all duration-400 shadow-lg shadow-black/30">
                  <span className="font-display text-2xl font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                {/* Active glow on hover */}
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-white font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-body text-white/55 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-display text-xl text-white/60 italic mb-6">
            Ready to begin your immigration journey?
          </p>
          <a
            href="#contact"
            className="btn-crimson inline-flex items-center gap-2 bg-crimson text-white font-body font-medium px-8 py-4 rounded text-sm tracking-wide"
          >
            Schedule a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
