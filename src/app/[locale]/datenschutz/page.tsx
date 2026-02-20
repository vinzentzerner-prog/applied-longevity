import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("datenschutz.title"),
    description: t("datenschutz.description"),
  };
}

export default function Datenschutz() {
  const t = useTranslations("datenschutz");
  const sections = ["0", "1", "2", "3", "4", "5", "6"] as const;

  return (
    <Section className="pt-28 md:pt-36 pb-12">
      <div className="max-w-2xl">
        <h1>{t("title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("lastUpdated")}
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((i) => (
            <div key={i}>
              <h2 className="text-lg font-medium text-foreground">
                {t(`sections.${i}.title`)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {t(`sections.${i}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
