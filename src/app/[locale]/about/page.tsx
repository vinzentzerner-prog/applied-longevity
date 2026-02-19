import type { Metadata } from "next";
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
    "discretion",
    "continuity",
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
            <div className="mt-6 space-y-4">
              {t("hero.subtitle")
                .split("\n\n")
                .map((paragraph: string, i: number) => (
                  <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
          <div className="w-full md:w-72 lg:w-80">
            <FounderImage />
          </div>
        </div>
      </Section>

      {/* Philosophy cards */}
      <Section>
        <h2 className="text-foreground">
          {t("philosophy.title")}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
