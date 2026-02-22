import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img
              src="/aurelis-wordmark-ivory.svg"
              alt="Aurelis"
              className="h-10 w-auto"
            />
            <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-dark-muted">
              {t("tagline")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
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
            <Link href="/about" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("about")}
            </Link>
            <Link href="/apply" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("apply")}
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a25] flex flex-col-reverse md:flex-row md:items-baseline md:justify-between gap-3">
          <p className="text-xs text-dark-muted">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-x-4 text-xs">
            <Link href="/impressum" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("impressum")}
            </Link>
            <Link href="/datenschutz" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("datenschutz")}
            </Link>
            <Link href="/agb" className="text-dark-muted hover:text-dark-fg transition-colors">
              {t("agb")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
