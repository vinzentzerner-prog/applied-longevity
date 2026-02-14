import { Section } from "@/components/section";

export default function Apply() {
  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            Get started
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Apply
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fill out the form below to express your interest. We review every
            application personally and respond within one week.
          </p>
        </div>
      </Section>

      {/* Embedded form */}
      <Section className="bg-secondary pt-12 pb-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-8 md:p-12">
            {/* Replace this placeholder with your actual Typeform or Tally embed */}
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary p-8 text-center">
              <div>
                <p className="text-lg font-medium text-muted-foreground/60">
                  Application form embed
                </p>
                <p className="mt-2 text-sm text-muted-foreground/60">
                  Replace this with your Typeform or Tally embed code.
                </p>
                <p className="mt-4 text-xs text-muted-foreground/40">
                  Example: &lt;iframe
                  src=&quot;https://tally.so/embed/your-form-id&quot;
                  ...&gt;&lt;/iframe&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What happens next
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                1
              </div>
              <div>
                <p className="font-medium text-foreground">We review your application</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every application is read carefully. We&apos;re looking for
                  alignment — not just goals, but readiness and commitment to
                  the process.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                2
              </div>
              <div>
                <p className="font-medium text-foreground">Introductory call</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  If there&apos;s a mutual fit, we&apos;ll schedule a 30-minute
                  call to discuss your situation, answer questions, and
                  determine next steps.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                3
              </div>
              <div>
                <p className="font-medium text-foreground">Onboarding begins</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You&apos;ll receive onboarding materials, access to tracking
                  tools, and instructions for your 4-week baseline observation
                  period.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted-foreground/60">
            We typically respond within 5–7 business days. If we&apos;re at
            capacity, we&apos;ll let you know and add you to our waitlist.
          </p>
        </div>
      </Section>
    </>
  );
}
