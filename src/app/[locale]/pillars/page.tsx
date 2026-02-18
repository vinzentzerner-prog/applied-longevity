import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("pillars.title"),
    description: t("pillars.description"),
  };
}

interface Pillar {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export default function Pillars({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("pillars");
  const pillars: Pillar[] = t.raw("items");

  return (
    <>
      {/* Header */}
      <Section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            {t("hero.overline")}
          </p>
          <h1 className="mt-4">{t("hero.title")}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("hero.body")}
          </p>
        </div>
      </Section>

      {/* Pillar sections */}
      {pillars.map((pillar, index) => (
        <Section
          key={pillar.number}
          className={index % 2 === 0 ? "bg-muted" : ""}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-muted-foreground/40">
              {pillar.number}
            </span>
            <h2 className="mt-2">{pillar.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
            <ul className="mt-8 space-y-3">
              {pillar.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2>{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-dark-muted">
            {t("cta.body")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-[#555] text-dark-fg hover:bg-[#1a1a17] hover:text-white"
              >
                {t("cta.howItWorks")}
              </Button>
            </Link>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-dark-bg hover:bg-white/90"
              >
                {t("cta.apply")}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
