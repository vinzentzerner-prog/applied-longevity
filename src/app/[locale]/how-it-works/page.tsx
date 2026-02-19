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
    title: t("howItWorks.title"),
    description: t("howItWorks.description"),
  };
}

interface Phase {
  number: string;
  title: string;
  duration: string;
  description: string;
}

interface AppStep {
  step: string;
  title: string;
  description: string;
}

export default function HowItWorks({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("howItWorks");
  const phases: Phase[] = t.raw("phases");
  const applicationSteps: AppStep[] = t.raw("application.steps");

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

      {/* Phases */}
      <Section className="bg-muted">
        <div className="space-y-16">
          {phases.map((phase) => (
            <div key={phase.number} className="max-w-2xl">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium text-muted-foreground/40">
                  {phase.number}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">{phase.title}</h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground/60">
                    {phase.duration}
                  </p>
                </div>
              </div>
              <p className="mt-4 pl-10 text-base leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application steps */}
      <Section>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            {t("application.overline")}
          </p>
          <h2 className="mt-4">{t("application.title")}</h2>
          <div className="mt-12 space-y-10">
            {applicationSteps.map((item) => (
              <div key={item.step} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/apply">
              <Button size="lg">{t("application.cta")}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
