"use client";
// hooks/useScrollReveal.ts
// Encapsulates all IntersectionObserver logic for scroll animations

import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", once = true } =
    options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  count: number,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -30px 0px" } = options;
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("is-visible");
            }, index * 120);
            observer.unobserve(el);
          }
        },
        { threshold, rootMargin }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count, threshold, rootMargin]);

  const setRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  return setRef;
}
