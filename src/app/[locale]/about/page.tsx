import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
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
  const locale = useLocale();
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

      {/* Story with embedded kitesurf video */}
      <Section className="bg-secondary">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("story.title")}
          </h2>
          <div className="mt-8 space-y-6">
            {/* Paragraph 1 — athletic background */}
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("story.p1")}
            </p>

            {/* Kitesurf video: the "joy & integration" moment */}
            <div className="relative my-10 overflow-hidden rounded-xl shadow-md">
              <video
                className="w-full aspect-video object-cover"
                controls
                preload="metadata"
                playsInline
                poster="/founder-kitesurf-poster.jpg"
              >
                <source src="/founder-kitesurf.mp4" type="video/mp4" />
                <track
                  kind="subtitles"
                  src={locale === "de" ? "/subs-de.vtt" : "/subs-en.vtt"}
                  srcLang={locale}
                  label={locale === "de" ? "Deutsch" : "English"}
                  default
                />
              </video>
              <div className="pointer-events-none absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/50 to-transparent p-6">
                <p className="text-sm font-medium tracking-wide text-white/90 md:text-base">
                  {t("story.kitesurfTagline")}
                </p>
              </div>
            </div>

            {/* Paragraphs 2–4 — career, research, mission */}
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

      {/* Philosophy callout — emotional anchor */}
      <Section className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl py-8 md:py-12 text-center">
          <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t("callout")}
          </blockquote>
        </div>
      </Section>

      {/* Philosophy cards */}
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          {t("philosophy.title")}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
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

        {/* Kettlebell video: the "consistency & craft" moment
            Intentionally smaller and quieter than the kitesurf video.
            No overlay, no tagline. Just the work. */}
        <div className="mx-auto mt-16 max-w-lg overflow-hidden rounded-xl shadow-md">
          <video
            className="w-full aspect-video object-cover"
            controls
            preload="metadata"
            playsInline
            muted
            loop
            poster="/founder-kettlebell-poster.jpg"
          >
            <source src="/founder-kettlebell.mp4" type="video/mp4" />
          </video>
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
