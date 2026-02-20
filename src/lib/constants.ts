export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://appliedlongevity.com";

export const SITE_NAME = "Applied Longevity";

export const SITE_LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
};

export const ALL_LOCALES = ["en", "de"] as const;

export const PAGES = [
  "",
  "/about",
  "/pillars",
  "/how-it-works",
  "/testimonials",
  "/apply",
  "/impressum",
  "/datenschutz",
  "/agb",
] as const;
