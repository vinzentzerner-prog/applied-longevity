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
  state2Headline: string;
  state2Support: string;
  state2Cta: string;
  state2Exclusivity: string;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

/** Hermite smoothstep: 0→1 with ease-in-out */
function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export function HeroTwoState({
  fullTitle,
  titleLine1,
  titleLine2,
  titleLine3,
  microline,
  state2Headline,
  state2Support,
  state2Cta,
  state2Exclusivity,
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

    /* Crossfade band boundaries */
    const P_LOW = 0.12;
    const P_HIGH = 0.88;
    const BAND = P_HIGH - P_LOW; // 0.76

    const tick = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrolled = -rect.top;
      const travel = wrapper.offsetHeight - window.innerHeight;
      const p = clamp(travel > 0 ? scrolled / travel : 0, 0, 1);

      if (Math.abs(p - lastP) > 0.0005) {
        lastP = p;

        /* ── Smoothstep interpolant ── */
        const t = clamp((p - P_LOW) / BAND, 0, 1);
        const s = smoothstep(t);

        /* ── Backgrounds ── */
        if (bgARef.current) bgARef.current.style.opacity = String(1 - s);
        if (bgBRef.current) bgBRef.current.style.opacity = String(s);

        /* ── Overlays ── */
        if (overlayARef.current)
          overlayARef.current.style.opacity = String(lerp(0.08, 0, s));
        if (overlayBRef.current)
          overlayBRef.current.style.opacity = String(lerp(0, 0.24, s));

        /* ── Arc — subtle drift ── */
        if (arcRef.current) {
          const tx = lerp(0, -12, s);
          const ty = lerp(0, 8, s);
          arcRef.current.style.transform = `translate(${tx}%, ${ty}%)`;
          arcRef.current.style.opacity = String(lerp(0.55, 0.65, s));
        }

        /* ── Stage 1 — hard gate + crossfade ── */
        if (textS1Ref.current) {
          const el = textS1Ref.current;
          if (p >= P_HIGH) {
            // Fully hidden
            el.style.opacity = "0";
            el.style.visibility = "hidden";
            el.style.pointerEvents = "none";
            if (!reducedMotion) {
              el.style.filter = "blur(2px)";
              el.style.transform = "translateY(6px)";
            }
          } else if (p <= P_LOW) {
            // Fully visible
            el.style.opacity = "1";
            el.style.visibility = "visible";
            el.style.pointerEvents = "";
            if (!reducedMotion) {
              el.style.filter = "blur(0px)";
              el.style.transform = "translateY(0px)";
            }
          } else {
            // Crossfade band
            el.style.opacity = String(1 - s);
            el.style.visibility = "visible";
            el.style.pointerEvents = s > 0.5 ? "none" : "";
            if (!reducedMotion) {
              el.style.filter = `blur(${lerp(0, 2, s)}px)`;
              el.style.transform = `translateY(${lerp(0, 6, s)}px)`;
            }
          }
        }

        /* ── Stage 2 — hard gate + crossfade ── */
        if (textS2Ref.current) {
          const el = textS2Ref.current;
          if (p <= P_LOW) {
            // Fully hidden
            el.style.opacity = "0";
            el.style.visibility = "hidden";
            el.style.pointerEvents = "none";
            if (!reducedMotion) {
              el.style.filter = "blur(6px)";
              el.style.transform = "translateY(8px)";
            }
          } else if (p >= P_HIGH) {
            // Fully visible
            el.style.opacity = "1";
            el.style.visibility = "visible";
            el.style.pointerEvents = "none"; // Stage 2 is non-interactive
            if (!reducedMotion) {
              el.style.filter = "blur(0px)";
              el.style.transform = "translateY(0px)";
            }
          } else {
            // Crossfade band
            el.style.opacity = String(s);
            el.style.visibility = "visible";
            el.style.pointerEvents = "none";
            if (!reducedMotion) {
              el.style.filter = `blur(${lerp(6, 0, s)}px)`;
              el.style.transform = `translateY(${lerp(8, 0, s)}px)`;
            }
          }
        }

        /* ── Scroll indicator — fades out in first third ── */
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

        {/* z-3: Stage 1 — editorial word placement */}
        <div
          ref={textS1Ref}
          className="hero-layer-text hero-text-s1"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <h1 className="sr-only">{fullTitle}</h1>

          <div className="hero-word hero-word-1" aria-hidden="true">
            <span className="hero-display">{titleLine1}</span>
          </div>

          <div className="hero-word hero-word-2" aria-hidden="true">
            <span className="hero-display hero-display-italic">{titleLine2}</span>
          </div>

          <div className="hero-word hero-word-3" aria-hidden="true">
            <span className="hero-display">{titleLine3}</span>
          </div>

          <div className="hero-word hero-word-circle">
            <div className="hero-circle">
              <p>{microline}</p>
            </div>
          </div>

          {/* Down arrow — bottom right, scroll invitation */}
          <div className="hero-word hero-word-arrow" aria-hidden="true">
            <svg
              width="20"
              height="48"
              viewBox="0 0 20 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="40"
                stroke="currentColor"
                strokeWidth="1"
              />
              <polyline
                points="4,34 10,42 16,34"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        {/* z-3: Stage 2 — headline + support + CTA */}
        <div
          ref={textS2Ref}
          className="hero-layer-text hero-text-s2"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <span className="hero-display hero-s2-headline">
            {state2Headline}
          </span>
          <p className="hero-subhead">{state2Support}</p>
          <div className="hero-s2-cta">
            <Link href="/apply">
              <Button size="lg" className="bg-dark-fg text-dark-bg hover:bg-dark-fg/90">
                {state2Cta}
              </Button>
            </Link>
            <p className="hero-exclusivity hero-exclusivity-dark">
              {state2Exclusivity}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="hero-scroll-indicator">
          <div className="hero-scroll-line" />
        </div>
      </div>
    </div>
  );
}
