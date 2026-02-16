import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Unwrap params synchronously for static generation compat
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <Section className="!pt-24 md:!pt-36 lg:!pt-44">
        <Container>
          <div className="max-w-3xl">
            <p className="text-overline font-semibold uppercase tracking-[0.08em] text-brand">
              {t("hero.overline")}
            </p>
            <h1 className="mt-6">{t("hero.title")}</h1>
            <p className="mt-6 text-body leading-relaxed text-muted max-w-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">{t("hero.cta")}</Button>
              </Link>
              <Link href="/method">
                <Button variant="secondary" size="lg">
                  {t("hero.secondary")}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pillars */}
      <Section>
        <Container>
          <h2>{t("pillars.title")}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(["training", "nutrition", "recovery"] as const).map((key) => (
              <Card key={key}>
                <h4 className="font-display font-semibold">
                  {t(`pillars.${key}.title`)}
                </h4>
                <p className="mt-4 text-body text-muted leading-relaxed">
                  {t(`pillars.${key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section dark>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2>{t("about.title")}</h2>
            </div>
            <div className="space-y-6">
              {t("about.body")
                .split("\n\n")
                .map((paragraph, i) => (
                  <p key={i} className="text-body leading-relaxed text-border">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
