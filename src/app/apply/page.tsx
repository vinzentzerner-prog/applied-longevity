import { Section } from "@/components/section";

export default function Apply() {
  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            Get started
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Apply
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Fill out the form below to express your interest. We review every
            application personally and respond within one week.
          </p>
        </div>
      </Section>

      {/* Embedded form */}
      <Section className="bg-neutral-50 pt-12 pb-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 md:p-12">
            {/* Replace this placeholder with your actual Typeform or Tally embed */}
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-50 p-8 text-center">
              <div>
                <p className="text-lg font-medium text-neutral-400">
                  Application form embed
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Replace this with your Typeform or Tally embed code.
                </p>
                <p className="mt-4 text-xs text-neutral-300">
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
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            What happens next
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-500">
                1
              </div>
              <div>
                <p className="font-medium text-neutral-900">We review your application</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Every application is read carefully. We&apos;re looking for
                  alignment — not just goals, but readiness and commitment to
                  the process.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-500">
                2
              </div>
              <div>
                <p className="font-medium text-neutral-900">Introductory call</p>
                <p className="mt-1 text-sm text-neutral-500">
                  If there&apos;s a mutual fit, we&apos;ll schedule a 30-minute
                  call to discuss your situation, answer questions, and
                  determine next steps.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-500">
                3
              </div>
              <div>
                <p className="font-medium text-neutral-900">Onboarding begins</p>
                <p className="mt-1 text-sm text-neutral-500">
                  You&apos;ll receive onboarding materials, access to tracking
                  tools, and instructions for your 4-week baseline observation
                  period.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-sm text-neutral-400">
            We typically respond within 5–7 business days. If we&apos;re at
            capacity, we&apos;ll let you know and add you to our waitlist.
          </p>
        </div>
      </Section>
    </>
  );
}
