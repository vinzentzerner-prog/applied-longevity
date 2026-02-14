import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The 4-week baseline period seemed slow at first, but it completely changed how I understood my own body. The data we collected gave us a roadmap I never could have built on my own.",
    name: "James R.",
    detail: "Client, 14 months",
  },
  {
    quote:
      "I've worked with trainers and nutritionists before, but never someone who looked at all five dimensions together. The integration is what makes this different.",
    name: "Sarah M.",
    detail: "Client, 9 months",
  },
  {
    quote:
      "What I appreciate most is the patience. No rushed changes, no dramatic overhauls. Just steady, evidence-based progress that I can actually sustain.",
    name: "David K.",
    detail: "Client, 18 months",
  },
  {
    quote:
      "The sleep optimization alone was worth it. My deep sleep went from 45 minutes to nearly two hours, and everything else improved downstream — mood, training recovery, focus.",
    name: "Maria L.",
    detail: "Client, 11 months",
  },
  {
    quote:
      "I was skeptical about the emotional health pillar, but it turned out to be the missing piece. Managing stress properly unlocked progress in every other area.",
    name: "Tom W.",
    detail: "Client, 7 months",
  },
  {
    quote:
      "Having someone who actually reads my bloodwork, understands my training data, and connects it all together — that level of attention is rare. The small roster makes a real difference.",
    name: "Elena P.",
    detail: "Client, 12 months",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            Client experiences
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Testimonials
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Hear from clients who have been through the process. These are
            placeholder testimonials — replace them with real stories as they
            come in.
          </p>
        </div>
      </Section>

      {/* Testimonial grid */}
      <Section className="bg-secondary pt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
            >
              <CardContent className="pt-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    {testimonial.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Join them
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            When a spot opens, we&apos;ll review your application and reach out
            to schedule a call.
          </p>
          <Link href="/apply" className="mt-8 inline-block">
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
