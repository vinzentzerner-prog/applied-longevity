import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = params as unknown as { locale: string };
  setRequestLocale(resolvedParams.locale);
  const t = useTranslations("contact");

  return (
    <>
      {/* Hero */}
      <Section className="!pt-24 md:!pt-36">
        <Container>
          <div className="max-w-3xl">
            <p className="text-overline font-semibold uppercase tracking-[0.08em] text-brand">
              {t("hero.overline")}
            </p>
            <h1 className="mt-6">{t("hero.title")}</h1>
            <p className="mt-6 text-body leading-relaxed text-muted max-w-2xl">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      {/* Form + Info */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-body text-ink placeholder:text-muted/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-body text-ink placeholder:text-muted/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-body text-ink placeholder:text-muted/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {t("form.submit")}
              </Button>
            </form>

            {/* Info */}
            <Card className="h-fit">
              <h3>{t("info.title")}</h3>
              <p className="mt-4 text-body leading-relaxed text-muted">
                {t("info.description")}
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
