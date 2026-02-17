import type { MetadataRoute } from "next";
import { SITE_URL, ALL_LOCALES, PAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    const languages: Record<string, string> = {};
    for (const locale of ALL_LOCALES) {
      const path = locale === "en" ? page : `/${locale}${page}`;
      languages[locale] = `${SITE_URL}${path}`;
    }

    entries.push({
      url: `${SITE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : page === "/apply" ? 0.9 : 0.8,
      alternates: { languages },
    });
  }

  return entries;
}
