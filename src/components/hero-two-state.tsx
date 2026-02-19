"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { HeroArc } from "./hero-arc";

interface HeroTwoStateProps {
  fullTitle: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  microline: string;
  subtitle: string;
  ctaText: string;
  ctaExclusivity: string;
  state2Headline: string;
  state2Support: string;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export function HeroTwoState({
  fullTitle,
  titleLine1,
  titleLine2,
  titleLine3,
  microline,
  subtitle,
  ctaText,
  ctaExclusivity,
  state2Headline,
  state2Support,
}: HeroTwoStateProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgARef = useRef<HTMLDivElement>(null);
  const bgBRef = useRef<HTMLDivElement>(null);
  const overlayARef = useRef<HTMLDivElement>(null);
  const overlayBRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const textS1Ref = useRef<HTMLDivElement>(null);
  const textS2Ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId: number;
    let lastP = -1;

    const tick = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrolled = -rect.top;
      const travel = wrapper.offsetHeight - window.innerHeight;
      const p = clamp(travel > 0 ? scrolled / travel : 0, 0, 1);

      if (Math.abs(p - lastP) > 0.0005) {
        lastP = p;

        // Background crossfade — directly driven by p
        if (bgARef.current) bgARef.current.style.opacity = String(1 - p);
        if (bgBRef.current) bgBRef.current.style.opacity = String(p);

        // Overlay readability gradients
        if (overlayARef.current)
          overlayARef.current.style.opacity = String(lerp(0.08, 0, p));
        if (overlayBRef.current)
          overlayBRef.current.style.opacity = String(lerp(0, 0.24, p));

        // Arc — subtle position shift + opacity adaptation
        if (arcRef.current) {
          const tx = lerp(0, -12, p);
          const ty = lerp(0, 8, p);
          arcRef.current.style.transform = `translate(${tx}%, ${ty}%)`;
          arcRef.current.style.opacity = String(0.55 + 0.1 * p);
        }

        // State 1 text — softens as p increases
        if (textS1Ref.current) {
          const o = lerp(1, 0.92, p);
          textS1Ref.current.style.opacity = String(o);
          if (!reducedMotion) {
            textS1Ref.current.style.filter = `blur(${lerp(0, 2, p)}px)`;
            textS1Ref.current.style.transform = `translateY(${lerp(0, 6, p)}px)`;
          }
          textS1Ref.current.style.pointerEvents = p > 0.7 ? "none" : "";
        }

        // State 2 text — resolves in as p increases
        if (textS2Ref.current) {
          const o = lerp(0.85, 1, p);
          textS2Ref.current.style.opacity = String(o);
          if (!reducedMotion) {
            textS2Ref.current.style.filter = `blur(${lerp(6, 0, p)}px)`;
            textS2Ref.current.style.transform = `translateY(${lerp(8, 0, p)}px)`;
          }
        }

        // Scroll indicator — fades out in first third
        if (scrollRef.current) {
          scrollRef.current.style.opacity = String(clamp(1 - p * 3, 0, 1));
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={wrapperRef} className="hero-wrapper">
      <div className="hero-viewport">
        {/* z-0: Background A — light */}
        <div ref={bgARef} className="hero-layer-bg hero-bg-light">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* z-0: Background B — dark */}
        <div
          ref={bgBRef}
          className="hero-layer-bg hero-bg-dark"
          style={{ opacity: 0 }}
        />

        {/* z-1: Overlay A — light readability */}
        <div
          ref={overlayARef}
          className="hero-layer-overlay"
          style={{ opacity: 0.08 }}
        />

        {/* z-1: Overlay B — dark readability */}
        <div
          ref={overlayBRef}
          className="hero-layer-overlay"
          style={{ opacity: 0 }}
        />

        {/* z-2: Arc — identity geometry */}
        <div
          ref={arcRef}
          className="hero-layer-arc"
          style={{ opacity: 0.55 }}
        >
          <HeroArc />
        </div>

        {/* z-3: State 1 — editorial word placement */}
        <div ref={textS1Ref} className="hero-layer-text hero-text-s1">
          <h1 className="sr-only">{fullTitle}</h1>

          <div className="hero-word hero-word-1" aria-hidden="true">
            <span className="hero-display">{titleLine1}</span>
          </div>

          <div className="hero-word hero-word-circle">
            <div className="hero-circle">
              <p>{microline}</p>
            </div>
          </div>

          <div className="hero-word hero-word-2" aria-hidden="true">
            <span className="hero-display">{titleLine2}</span>
          </div>

          <div className="hero-word hero-word-3" aria-hidden="true">
            <span className="hero-display">{titleLine3}</span>
          </div>

          <div className="hero-word hero-word-subtitle">
            <p className="hero-subtitle-text">{subtitle}</p>
          </div>

          <div className="hero-word hero-word-cta">
            <Link href="/apply">
              <Button size="lg">{ctaText}</Button>
            </Link>
            <p className="mt-3 text-xs tracking-wide text-muted-foreground/60">
              {ctaExclusivity}
            </p>
          </div>
        </div>

        {/* z-3: State 2 — headline + support */}
        <div
          ref={textS2Ref}
          className="hero-layer-text hero-text-s2"
          style={{ opacity: 0.85 }}
        >
          <span className="hero-display hero-s2-headline">
            {state2Headline}
          </span>
          <p className="hero-subhead">{state2Support}</p>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="hero-scroll-indicator">
          <div className="hero-scroll-line" />
        </div>
      </div>
    </div>
  );
}
