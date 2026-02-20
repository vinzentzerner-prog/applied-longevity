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
      icon: "/logo-mark.png",
      apple: "/logo-mark.png",
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
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
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
        ? "Eine private Longevity-Beratung für 3–5 Klient:innen gleichzeitig. Bewegung, Ernährung, Schlaf, emotionales Wohlbefinden und medizinische Einordnung — sorgfältig abgestimmt auf Ihr Leben."
        : "A private longevity advisory for 3–5 clients at a time. Movement, nutrition, sleep, emotional well-being, and medical insight — quietly integrated around your life.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo-mark.png`,
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
          ? "Private Longevity-Beratung, Mindestlaufzeit sechs Monate"
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
