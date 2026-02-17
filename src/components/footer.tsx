import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">
              Applied Longevity
            </p>
            <p className="mt-2 text-sm text-dark-muted">
              {t("tagline")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("home")}
            </Link>
            <Link href="/how-it-works" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("howItWorks")}
            </Link>
            <Link href="/pillars" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("pillars")}
            </Link>
            <Link href="/testimonials" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("testimonials")}
            </Link>
            <Link href="/apply" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("apply")}
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a25] text-xs text-dark-muted">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
