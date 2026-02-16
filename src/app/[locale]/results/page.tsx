import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export default function ResultsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("results");

  const metrics: Metric[] = t.raw("metrics");
  const testimonials: Testimonial[] = t.raw("testimonials.items");

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

      {/* Metrics */}
      <Section compact>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-5xl md:text-6xl font-bold text-brand">
                  {metric.value}
                </p>
                <p className="mt-3 text-body text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section dark>
        <Container>
          <h2>{t("testimonials.title")}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <Card
                key={i}
                className="bg-[#1a1a17] border-[#2a2a25] text-paper"
              >
                <blockquote className="text-body leading-relaxed text-border">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-[#2a2a25]">
                  <p className="font-medium">{item.author}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
