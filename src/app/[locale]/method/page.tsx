import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function MethodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("method");

  const steps: Step[] = t.raw("steps");

  return (
    <>
      {/* Hero */}
      <Section className="!pt-24 md:!pt-36">
        <Container>
          <div className="max-w-3xl">
            <p className="text-overline font-semibold uppercase tracking-[0.08em] text-brand">
              {t("hero.overline")}
            </p>
            <h1 className="mt-6">{t("hero.title")}</h1>
            <p className="mt-6 text-body leading-relaxed text-muted max-w-2xl">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      {/* Steps */}
      <Section>
        <Container>
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12"
              >
                <p className="font-display text-6xl font-bold text-border/40">
                  {step.number}
                </p>
                <div>
                  <h3>{step.title}</h3>
                  <p className="mt-4 text-body leading-relaxed text-muted max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
