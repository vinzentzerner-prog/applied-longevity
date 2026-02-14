import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    id: "training",
    number: "01",
    title: "Training",
    description:
      "Strength, cardiovascular fitness, mobility, and recovery — programmed as one integrated system. We design training around your schedule, injury history, and long-term structural goals. The aim is to build a body that performs well at 40, 60, and beyond.",
    details: [
      "Periodized strength programming",
      "Zone 2 and VO2max cardiovascular work",
      "Mobility and movement quality assessments",
      "Recovery load management",
    ],
  },
  {
    id: "nutrition",
    number: "02",
    title: "Nutrition",
    description:
      "We take a data-informed approach to nutrition — no ideology, no fads. We track biomarkers, body composition, and subjective energy to find the dietary pattern that supports your training, cognitive performance, and metabolic health.",
    details: [
      "Macronutrient and micronutrient analysis",
      "Meal timing and composition strategies",
      "Continuous glucose monitoring integration",
      "Periodic dietary experiments and reviews",
    ],
  },
  {
    id: "sleep",
    number: "03",
    title: "Sleep",
    description:
      "Sleep is the single highest-leverage variable for health and performance. We use wearable data and subjective logs to optimize sleep architecture — not just duration, but the quality and consistency of each stage.",
    details: [
      "Sleep environment optimization",
      "Circadian rhythm alignment",
      "Wearable data interpretation (deep, REM, latency)",
      "Behavioral and supplemental interventions",
    ],
  },
  {
    id: "emotional-health",
    number: "04",
    title: "Emotional Health",
    description:
      "Stress, relationships, purpose, and psychological resilience are not separate from physical health — they are foundational to it. We address the mental and emotional dimensions of longevity with the same rigor we apply to training and nutrition.",
    details: [
      "Stress load assessment and management",
      "Mindfulness and contemplative practices",
      "Social connection and relationship quality",
      "Values alignment and life design",
    ],
  },
  {
    id: "medical-metrics",
    number: "05",
    title: "Medical & Metrics",
    description:
      "We work with your medical team to track the biomarkers that matter. Comprehensive bloodwork, advanced imaging when appropriate, and longitudinal tracking give us an objective view of how your body is responding to the protocol.",
    details: [
      "Quarterly comprehensive blood panels",
      "Cardiovascular and metabolic risk markers",
      "Hormonal and inflammatory profiles",
      "DEXA, coronary calcium, and other imaging",
    ],
  },
];

export default function Pillars() {
  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            The framework
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Five pillars
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Longevity isn&apos;t one thing — it&apos;s five things working together.
            We address each pillar individually and as part of an integrated
            system.
          </p>
        </div>
      </Section>

      {/* Pillar sections */}
      {pillars.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          className={index % 2 === 0 ? "bg-secondary" : ""}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-muted-foreground/40">
              {pillar.number}
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {pillar.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
            <ul className="mt-8 space-y-3">
              {pillar.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            See how it all fits together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-stone-400">
            Every pillar reinforces the others. The result is a protocol that
            compounds over time.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-stone-600 text-stone-200 hover:bg-stone-800 hover:text-white"
              >
                How It Works
              </Button>
            </Link>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-stone-900 hover:bg-stone-100"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
