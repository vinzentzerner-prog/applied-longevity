"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroArc } from "./hero-arc";

interface HeroTwoStateProps {
  children: React.ReactNode;
  state2Headline: string;
  state2Support: string;
}

export function HeroTwoState({
  children,
  state2Headline,
  state2Support,
}: HeroTwoStateProps) {
  const state1Ref = useRef<HTMLElement>(null);
  const state2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const s1 = state1Ref.current;
    const s2 = state2Ref.current;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      s1?.classList.add("isActive");
      s2?.classList.add("isActive");
      return;
    }

    // State 1 settles on load
    requestAnimationFrame(() => {
      s1?.classList.add("isActive");
    });

    // State 2 settles when 35% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            entry.target.classList.add("isActive");
            observer.unobserve(entry.target);
            // Subtle cross-fade: dim State 1
            s1?.classList.add("hero-dimmed");
          }
        });
      },
      { threshold: 0.35 }
    );

    if (s2) observer.observe(s2);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* State 1 — light */}
      <section ref={state1Ref} className="hero-state hero-state-1">
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
        <div className="hero-overlay" />
        <HeroArc />
        <div className="hero-content">{children}</div>
        <div className="hero-scroll hero-settle hero-settle-delay-5">
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* State 2 — dark */}
      <section ref={state2Ref} className="hero-state hero-state-2">
        <div className="hero-bg hero-bg-dark" />
        <div className="hero-overlay hero-overlay-dark" />
        <HeroArc />
        <div className="hero-content">
          <div className="hero-settle hero-settle-delay-1">
            <span className="hero-display block">
              {state2Headline}
            </span>
          </div>
          <p className="hero-settle hero-settle-delay-2 hero-subhead mt-10 max-w-lg sm:mt-12 md:mt-14">
            {state2Support}
          </p>
        </div>
      </section>
    </>
  );
}
