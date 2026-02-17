import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FounderImage } from "@/components/founder-image";

interface EngagementItem {
  title: string;
  description: string;
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

  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <h1>
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("hero.body1")}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("hero.body2")}
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/apply">
              <Button size="lg">{t("hero.cta")}</Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                {t("hero.secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why limited capacity */}
      <Section className="bg-muted">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            {t("capacity.overline")}
          </p>
          <h2 className="mt-4">{t("capacity.title")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("capacity.body")}
          </p>
        </div>
      </Section>

      {/* What you get */}
      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          {t("engagement.overline")}
        </p>
        <h2 className="mt-4">{t("engagement.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {engagementItems.map((item) => (
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

      {/* About */}
      <Section className="bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
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
