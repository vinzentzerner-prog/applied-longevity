import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl md:leading-tight">
            Longevity coaching,
            <br />
            done with you.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            We work with 3–5 clients at a time. Every engagement starts with a
            4-week observation period — no major changes, just data. From there
            we build a protocol that fits your life, not the other way around.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Minimum commitment: 6 months. This is not a quick fix.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/apply">
              <Button size="lg">Apply Now</Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why limited capacity */}
      <Section className="bg-secondary">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            By design
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            3–5 clients. That&apos;s it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Real coaching requires real attention. We deliberately keep our
            roster small so every client gets the depth of analysis and
            responsiveness they deserve. No templates. No group programs. Just
            focused, 1-on-1 work.
          </p>
        </div>
      </Section>

      {/* What you get */}
      <Section>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
          The engagement
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          What working with us looks like
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "4-Week Baseline",
              description:
                "Before we change anything, we observe. We collect data on your sleep, training, nutrition, bloodwork, and daily rhythms to understand where you actually are.",
            },
            {
              title: "Personalized Protocol",
              description:
                "Based on your baseline, we build a protocol across all five pillars — training, nutrition, sleep, emotional health, and medical metrics — tailored to your goals and constraints.",
            },
            {
              title: "Ongoing Iteration",
              description:
                "Protocols evolve. We meet regularly, review data, adjust variables, and consolidate gains. The goal is sustainable progress, not dramatic overhauls.",
            },
          ].map((item) => (
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

      {/* About */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-stone-400">
              I&apos;ve been a passionate athlete for over 15 years, and along
              the way I naturally started coaching people around me. What began
              as helping friends improve performance turned into a deep interest
              in building strength, endurance, and health that lasts.
            </p>
            <p className="text-lg leading-relaxed text-stone-400">
              Today I work with only 3–5 clients at a time for a minimum of six
              months. We begin with four weeks of baseline monitoring to
              understand your current habits, constraints, and stressors — so the
              plan is sustainable from day one. From there, we build an
              individualized strategy across training, nutrition, sleep, and
              recovery, and track progress with objective metrics (e.g., VO₂
              max, fitness benchmarks, and wearable data) plus regular
              check-ins.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-stone-400">
            Applications are reviewed on a rolling basis. If we have capacity,
            we&apos;ll schedule an introductory call within a week.
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
