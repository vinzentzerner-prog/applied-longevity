import Link from "next/link";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";

export default function About() {
  const t = useTranslations("about");
  const credentialKeys = ["caia", "psychology", "trainer", "nutrition"] as const;
  const philosophyKeys = ["observe", "roster", "evidence", "sustainable"] as const;

  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="w-full md:w-72 lg:w-80">
            <FounderImage />
          </div>
        </div>
      </Section>

      {/* The Early Years */}
      <Section className="bg-secondary">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-4">
            {t("origin.eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("origin.title")}
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">{t("origin.p1")}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">{t("origin.p2")}</p>
          </div>
        </div>
      </Section>

      {/* Tipping Point */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-stone-500 mb-4">
              {t("tipping.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50">
              {t("tipping.title")}
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-stone-400">{t("tipping.p1")}</p>
              <blockquote className="border-l-2 border-stone-500 pl-6">
                <p className="text-xl leading-relaxed text-stone-200 italic">
                  {t("tipping.quote")}
                </p>
              </blockquote>
              <p className="text-lg leading-relaxed text-stone-400">{t("tipping.p2")}</p>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src="/founder-gym.jpg"
              alt="Founder training"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-4">
            {t("credentials.eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("credentials.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t("credentials.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {credentialKeys.map((key) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mb-2">
                  {t(`credentials.items.${key}.tag`)}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`credentials.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`credentials.items.${key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Portfolio Metaphor */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-4">
              {t("portfolio.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              {t("portfolio.title")}
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">{t("portfolio.p1")}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("portfolio.p2")}</p>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-border">
            {[
              { number: "15+", labelKey: "years" },
              { number: "3–5", labelKey: "clients" },
              { number: "6mo", labelKey: "minimum" },
              { number: "4wk", labelKey: "baseline" },
            ].map(({ number, labelKey }) => (
              <div key={labelKey} className="flex items-baseline gap-6 py-6">
                <span className="text-4xl font-semibold tracking-tight text-foreground w-20 shrink-0">
                  {number}
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t(`portfolio.metrics.${labelKey}.label`)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t(`portfolio.metrics.${labelKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-4">
            {t("philosophy.eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("philosophy.title")}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {philosophyKeys.map((key) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`philosophy.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`philosophy.items.${key}.description`)}
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
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-stone-400">
            {t("cta.subtitle")}
          </p>
          <Link href="/apply" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-stone-900 hover:bg-stone-100"
            >
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
