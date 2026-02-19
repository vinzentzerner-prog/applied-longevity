import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default function About() {
  const t = useTranslations("about");
  const philosophyKeys = [
    "observe",
    "roster",
    "evidence",
    "life",
    "sustainable",
  ] as const;

  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4">
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

      {/* Philosophy callout — emotional anchor */}
      <Section className="py-4 md:py-6">
        <div className="relative overflow-hidden rounded-2xl bg-stone-100 px-8 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_1fr] md:pr-24">
            <h3 className="text-foreground">
              {t("callout.title")}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("callout.body")}
            </p>
          </div>
          <Image
            src="/logo-mark-arrow.png"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-4 right-4 h-16 w-16 opacity-15 md:bottom-6 md:right-6 md:h-20 md:w-20"
          />
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-secondary">
        <div className="max-w-2xl">
          <h2 className="text-foreground">
            {t("story.title")}
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("story.p1")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("story.p2")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.rich("story.p3", {
                link: (chunks) => (
                  <a
                    href="https://doi.org/10.7206/cemj.2658-0845.65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("story.p4")}
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy cards */}
      <Section>
        <h2 className="text-foreground">
          {t("philosophy.title")}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {philosophyKeys.map((key) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-foreground">
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
      <Section dark>
        <div className="text-center">
          <h2 className="text-foreground">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-dark-muted">
            {t("cta.subtitle")}
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
