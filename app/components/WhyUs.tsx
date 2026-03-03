"use client";
// components/WhyUs.tsx

import { useEffect, useRef } from "react";
import { WHY_CHOOSE_US } from "@/app/lib/siteData";
import Image from "next/image"

export default function WhyUs() {
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      ...(gridRef.current?.querySelectorAll<HTMLElement>(".why-card") || []),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = parseInt(el.dataset.index || "0");
            setTimeout(() => el.classList.add("is-visible"), idx * 100);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Quote reveal
    if (quoteRef.current) {
      const qObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            quoteRef.current?.classList.add("is-visible");
            qObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      qObserver.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="bg-navy-900 py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-crimson/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-body text-gold/70 text-xs tracking-[0.3em] uppercase">
            Our Commitment
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-semibold mt-3 mb-4">
            Why Clients Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-crimson mx-auto" />
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              data-index={index}
              className="why-card reveal-up group"
            >
              <div className="h-full bg-navy-950/50 border border-white/8 rounded-xl p-6 hover:border-gold/25 transition-all duration-400 hover:-translate-y-1">
                {/* Icon */}
                <div className="text-3xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="font-display text-lg text-white font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom line */}
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial / Quote Block */}
        <div
          ref={quoteRef}
          className="reveal-scale relative overflow-hidden bg-navy-950 border border-gold/20 rounded-2xl p-10 lg:p-14"
        >
          {/* Large quotation mark */}
          <div className="absolute top-4 left-8 font-display text-[120px] text-gold/6 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="font-display text-2xl lg:text-3xl text-white/85 italic font-light leading-relaxed mb-8">
              I provide clear guidance, strong representation, and strategic
              solutions tailored to your case. Federal Court challenges are
              complex and time-sensitive — proper legal guidance maximizes your
              chance of success.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center overflow-hidden">
                <span className="font-display font-bold text-crimson text-sm relative flex items-center justify-center w-full h-full ">
                  <Image
                    src='/ogb.jpeg'
                    alt='ogban chima-oduko'
                    fill
                    className="object-cover absolute"
                  />
                </span>
              </div>
              <div className="text-left">
                <p className="font-body text-white font-medium text-sm">
                  Ogban Chima-Oduko
                </p>
                <p className="font-body text-gold/60 text-xs">
                  Barrister & Solicitor | Immigration & Refugee Law
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
