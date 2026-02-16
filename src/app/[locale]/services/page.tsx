import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("services");

  const features: string[] = t.raw("coaching.features");

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

      {/* Coaching details */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2>{t("coaching.title")}</h2>
              <p className="mt-6 text-body leading-relaxed text-muted">
                {t("coaching.description")}
              </p>
            </div>
            <Card>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Consultation CTA */}
      <Section dark>
        <Container className="text-center">
          <h2>{t("consultation.title")}</h2>
          <p className="mt-6 text-body leading-relaxed text-border max-w-2xl mx-auto">
            {t("consultation.description")}
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg">{t("consultation.cta")}</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
