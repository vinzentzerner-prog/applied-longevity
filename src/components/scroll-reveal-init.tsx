"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = document.querySelectorAll(".scroll-reveal");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("scroll-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
