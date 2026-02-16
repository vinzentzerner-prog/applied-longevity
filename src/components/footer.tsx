import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import { Section } from "./section";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <Section dark compact className="!py-12 md:!py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">
              Applied Longevity
            </p>
            <p className="mt-2 text-sm text-border">
              {t("tagline")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/services" className="text-border hover:text-paper transition-colors">
              {t("services")}
            </Link>
            <Link href="/method" className="text-border hover:text-paper transition-colors">
              {t("method")}
            </Link>
            <Link href="/results" className="text-border hover:text-paper transition-colors">
              {t("results")}
            </Link>
            <Link href="/contact" className="text-border hover:text-paper transition-colors">
              {t("contact")}
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a25] text-xs text-border">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </Container>
    </Section>
  );
}
