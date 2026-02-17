import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";

interface PhilosophyItem {
  title: string;
  description: string;
}

export default function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("about");
  const paragraphs: string[] = t.raw("story.paragraphs");
  const philosophyItems: PhilosophyItem[] = t.raw("philosophy.items");

  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              {t("hero.overline")}
            </p>
            <h1 className="mt-4">{t("hero.title")}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("hero.body")}
            </p>
          </div>
          <div className="w-full md:w-72 lg:w-80">
            <FounderImage />
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-muted">
        <div className="max-w-2xl">
          <h2>{t("story.title")}</h2>
          <div className="mt-8 space-y-6">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <h2>{t("philosophy.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {philosophyItems.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">
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

      {/* CTA */}
      <Section dark className="!py-16 md:!py-24">
        <div className="text-center">
          <h2>{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-dark-muted">
            {t("cta.body")}
          </p>
          <Link href="/apply" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-dark-bg hover:bg-white/90"
            >
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
