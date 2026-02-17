import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";

const storyParagraphs = [
  "I've been a committed athlete for over 15 years — competitive sports, strength training, endurance work, and everything in between. Along the way I started coaching friends and colleagues, initially just sharing what I'd learned. Over time, that turned into something more structured.",
  "I became obsessed with the question: what does it actually take to stay strong, sharp, and healthy — not for months, but for decades? The answer wasn't a single protocol or biohack. It was a system — one that integrates training, nutrition, sleep, emotional health, and medical data into a coherent whole.",
  "That's what Applied Longevity is. A small, focused practice built around that system.",
];

const philosophyItems = [
  {
    title: "Observe before you act",
    description:
      "Every engagement starts with four weeks of baseline data collection. We don't change anything until we understand where you actually are — not where you think you are.",
  },
  {
    title: "Small roster, deep work",
    description:
      "I work with 3–5 clients at a time, for a minimum of six months. This is not scalable by design. Real coaching requires real attention.",
  },
  {
    title: "Evidence over ideology",
    description:
      "No fads, no tribal nutrition wars, no magic supplements. We track what works with objective data — bloodwork, wearables, fitness benchmarks — and adjust accordingly.",
  },
  {
    title: "Sustainable by default",
    description:
      "The goal is a protocol you can maintain for years, not a 12-week transformation. We build habits and systems that compound, not crash.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
              About the founder
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Built from experience, not theory.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Applied Longevity grew out of 15+ years of training,
              self-experimentation, and coaching the people closest to me. This
              is not a certification-driven practice — it&apos;s a craft refined
              through thousands of hours of real-world work.
            </p>
          </div>
          <div className="w-full md:w-72 lg:w-80">
            <FounderImage />
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-secondary">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Background
          </h2>
          <div className="mt-8 space-y-6">
            {storyParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Philosophy
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {philosophyItems.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Want to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-stone-400">
            If this resonates, apply below. I read every application personally.
          </p>
          <Link href="/apply" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-stone-900 hover:bg-stone-100"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
