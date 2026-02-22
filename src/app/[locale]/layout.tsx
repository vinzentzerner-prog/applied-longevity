import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL, SITE_NAME, SITE_LOCALE_MAP } from "@/lib/constants";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const title = t("home.title");
  const description = t("home.description");
  const ogLocale = SITE_LOCALE_MAP[locale] || "en_US";
  const canonicalUrl = locale === "en" ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: SITE_URL,
        de: `${SITE_URL}/de`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      locale: ogLocale,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function JsonLd({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description:
      locale === "de"
        ? "Eine private Longevity-Begleitung für 3–5 Klient:innen gleichzeitig. Bewegung, Ernährung, Schlaf, emotionales Wohlbefinden und medizinische Einordnung — sorgfältig abgestimmt auf Ihr Leben."
        : "A private longevity advisory for 3–5 clients at a time. Movement, nutrition, sleep, emotional well-being, and medical insight — quietly integrated around your life.",
    url: SITE_URL,
    image: `${SITE_URL}/aurelis-favicon-a-512.png`,
    logo: `${SITE_URL}/aurelis-favicon-a-512.png`,
    inLanguage: locale,
    areaServed: "Worldwide",
    serviceType: "Private Longevity Advisory",
    knowsAbout: [
      "Longevity",
      "Preventive Health",
      "Nutritional Guidance",
      "Sleep Science",
      "Emotional Well-being",
      "Medical Insight",
    ],
    offers: {
      "@type": "Offer",
      description:
        locale === "de"
          ? "Private Longevity-Begleitung, Mindestlaufzeit sechs Monate"
          : "Private longevity advisory, minimum six-month engagement",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111111" />
        <JsonLd locale={locale} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
