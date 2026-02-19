import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("apply.title"),
    description: t("apply.description"),
  };
}

interface NextStep {
  step: string;
  title: string;
  description: string;
}

export default function Apply({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("apply");
  const nextSteps: NextStep[] = t.raw("next.steps");

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

      {/* Embedded form */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-8 md:p-12">
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted p-4 sm:p-8 text-center">
              <div>
                <p className="text-lg font-medium text-muted-foreground/60">
                  {t("form.placeholder")}
                </p>
                <p className="mt-2 text-sm text-muted-foreground/60">
                  {t("form.instructions")}
                </p>
                <p className="mt-4 text-xs text-muted-foreground/40">
                  {t("form.example")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section>
        <div className="max-w-2xl">
          <h2>{t("next.title")}</h2>
          <div className="mt-8 space-y-6">
            {nextSteps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {item.step}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground/60">
            {t("next.note")}
          </p>
        </div>
      </Section>
    </>
  );
}
