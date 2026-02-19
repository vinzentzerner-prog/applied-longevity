import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";
import { Hero } from "@/components/hero";
import { ScrollRevealInit } from "@/components/scroll-reveal-init";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

interface EngagementItem {
  title: string;
  description: string;
}

interface DeliverableItem {
  title: string;
  description: string;
}

interface PillarPreviewItem {
  title: string;
  summary: string;
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("home");
  const engagementItems: EngagementItem[] = t.raw("engagement.items");
  const deliverableItems: DeliverableItem[] = t.raw("deliverables.items");
  const pillarPreviewItems: PillarPreviewItem[] = t.raw("pillarsPreview.items");

  return (
    <>
      {/* Hero */}
      <Hero>
        {/* Accessible full title for screen readers */}
        <h1 className="sr-only">{t("hero.title")}</h1>

        {/* Line 1 — left-aligned */}
        <div className="hero-settle hero-settle-delay-1" aria-hidden="true">
          <span className="hero-display block">
            {t("hero.titleLine1")}
          </span>
        </div>

        {/* Middle row — circle + line 2 */}
        <div className="mt-4 flex flex-col items-center gap-8 sm:mt-6 md:mt-8 md:flex-row md:items-center md:gap-12">
          <div className="hero-settle hero-settle-delay-2 hero-circle order-2 md:order-1">
            <p>{t("hero.microline")}</p>
          </div>
          <div
            className="hero-settle hero-settle-delay-2 order-1 w-full md:order-2 md:ml-auto md:w-auto"
            aria-hidden="true"
          >
            <span className="hero-display block text-center md:text-right">
              {t("hero.titleLine2")}
            </span>
          </div>
        </div>

        {/* Line 3 — left-aligned */}
        <div
          className="hero-settle hero-settle-delay-3 mt-4 sm:mt-6 md:mt-8"
          aria-hidden="true"
        >
          <span className="hero-display block">
            {t("hero.titleLine3")}
          </span>
        </div>

        {/* Subtitle */}
        <p className="hero-settle hero-settle-delay-3 mx-auto mt-10 max-w-md text-center text-base leading-relaxed tracking-wide text-muted-foreground sm:mt-12 md:mt-14">
          {t("hero.subtitle")}
        </p>

        {/* CTA */}
        <div className="hero-settle hero-settle-delay-4 mt-8 text-center sm:mt-10">
          <Link href="/apply">
            <Button size="lg">{t("hero.cta")}</Button>
          </Link>
          <p className="mt-3 text-xs tracking-wide text-muted-foreground/60">
            {t("hero.exclusivity")}
          </p>
        </div>
      </Hero>

      <ScrollRevealInit />

      {/* Why limited capacity */}
      <Section className="scroll-reveal bg-muted">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {t("capacity.overline")}
          </p>
          <h2 className="mt-4">{t("capacity.title")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("capacity.body")}
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section className="scroll-reveal">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {t("engagement.overline")}
        </p>
        <h2 className="mt-4">{t("engagement.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {engagementItems.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-foreground">
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

      {/* What you get */}
      <Section className="scroll-reveal bg-muted">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {t("deliverables.overline")}
        </p>
        <h2 className="mt-4">{t("deliverables.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {deliverableItems.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-foreground">
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

      {/* Pillars preview */}
      <Section className="scroll-reveal">
        <div className="text-center">
          <h2>{t("pillarsPreview.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t("pillarsPreview.subtitle")}
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {pillarPreviewItems.slice(0, 3).map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:max-w-[66%]">
            {pillarPreviewItems.slice(3).map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/pillars">
            <Button variant="outline" size="lg">
              {t("pillarsPreview.link")}
            </Button>
          </Link>
        </div>
      </Section>

      {/* About */}
      <Section className="scroll-reveal bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <div className="max-w-xl">
            <h2>{t("about.title")}</h2>
            <div className="mt-8 space-y-6">
              {t("about.body")
                .split("\n\n")
                .map((paragraph: string, i: number) => (
                  <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className="w-full md:w-64 lg:w-72">
            <FounderImage />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="scroll-reveal">
        <div className="text-center">
          <h2>{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-dark-muted">
            {t("cta.body")}
          </p>
          <Link href="/apply" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-dark-fg text-dark-bg hover:bg-dark-fg/90"
            >
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
