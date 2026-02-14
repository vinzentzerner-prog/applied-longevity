import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const phases = [
  {
    number: "01",
    title: "Observe",
    duration: "Weeks 1–4",
    description:
      "We don't change anything yet. For four weeks we collect baseline data — sleep architecture, training logs, nutrition patterns, bloodwork, and subjective well-being. This gives us a clear picture of where you are before we touch a single variable.",
  },
  {
    number: "02",
    title: "Build",
    duration: "Weeks 5–16",
    description:
      "With a solid baseline in hand, we introduce changes one layer at a time across the five pillars. Each intervention is tracked and measured so we know exactly what's working. We move deliberately — stacking changes only when the previous layer has stabilized.",
  },
  {
    number: "03",
    title: "Consolidate",
    duration: "Ongoing",
    description:
      "Once the core protocol is in place, we shift to maintenance and optimization. Regular check-ins, periodic re-testing, and seasonal adjustments keep you progressing without burning out. This is where the long game lives.",
  },
];

const applicationSteps = [
  {
    step: "1",
    title: "Submit your application",
    description:
      "Fill out a brief form telling us about your goals, current health status, and what you're looking for in a coaching relationship.",
  },
  {
    step: "2",
    title: "Introductory call",
    description:
      "If there's a good fit, we'll schedule a 30-minute call to discuss your situation in more detail and answer any questions.",
  },
  {
    step: "3",
    title: "Onboarding & baseline",
    description:
      "Once we begin, you'll receive access to our tracking tools and start the 4-week observation phase right away.",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            Process
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            How it works
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Every engagement follows the same three-phase structure. We observe
            before we act, build methodically, and consolidate for the long
            term.
          </p>
        </div>
      </Section>

      {/* Phases */}
      <Section className="bg-neutral-50 pt-16 pb-16">
        <div className="space-y-16">
          {phases.map((phase) => (
            <div key={phase.number} className="max-w-2xl">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium text-neutral-300">
                  {phase.number}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    {phase.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-neutral-400">
                    {phase.duration}
                  </p>
                </div>
              </div>
              <p className="mt-4 pl-10 text-base leading-relaxed text-neutral-500">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application steps */}
      <Section>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            Getting started
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
            How to apply
          </h2>
          <div className="mt-12 space-y-10">
            {applicationSteps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/apply">
              <Button size="lg">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
