"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroArc } from "./hero-arc";

interface HeroProps {
  children: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("hero-loaded");
      return;
    }

    requestAnimationFrame(() => {
      el.classList.add("hero-loaded");
    });
  }, []);

  return (
    <section ref={ref} className="hero-root">
      {/* z-0: Background image */}
      <div className="hero-bg">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* z-1: Soft overlay for text readability */}
      <div className="hero-overlay" />

      {/* z-2: SVG arc */}
      <HeroArc />

      {/* z-3: Content */}
      <div className="hero-content">{children}</div>

      {/* Scroll indicator — z-3, anchored to bottom */}
      <div className="hero-scroll hero-settle hero-settle-delay-5">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
