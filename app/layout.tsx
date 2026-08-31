import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Alex_Brush } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const scriptFont = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2400&auto=format&fit=crop";

// Google Analytics (GA4) measurement ID.
const GA_MEASUREMENT_ID = "G-YFP0RWYX4J";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chichen Itza Tour & Tickets",
  url: SITE_URL,
  description:
    "Independent guide comparing certified guided Chichen Itza tours, early access tickets, and cenote excursions in Yucatan Mexico.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chichen Itza Tour & Tickets",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Chichen Itza Tour Tickets & Guided Excursions (2026)",
      template: "%s | Chichen Itza Tour",
    },
    description:
      "Compare top-rated Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Certified archeologist guides, Cenote Ik Kil swim, and early access options.",
    keywords: [
      "Chichen Itza Tour",
      "Chichen Itza Tickets",
      "Chichen Itza guided tour",
      "Chichen Itza day trip from Cancun",
      "Chichen Itza tour from Playa del Carmen",
      "Chichen Itza early access tour",
      "Chichen Itza cenote tour",
      "El Castillo pyramid tour",
      "best Chichen Itza tour",
      "Chichen Itza tickets 2026",
    ],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon", type: "image/png" },
      ],
      apple: "/apple-icon",
    },
    robots,
    openGraph: {
      title: "Chichen Itza Tour Tickets | Guided Day Trips & Cenote Excursions",
      description:
        "Book certified guided Chichen Itza tours with hotel transport from Cancun, Playa del Carmen & Riviera Maya. Free cancellation up to 24h prior.",
      type: "website",
      url: SITE_URL,
      siteName: "Chichen Itza Tour & Tickets",
      images: [{ url: DEFAULT_OG_IMAGE, width: 2400, height: 1350, alt: "The majestic El Castillo pyramid at Chichen Itza Mayan ruins under golden sunlight" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Chichen Itza Tour Tickets | Guided Day Trips & Cenote Excursions",
      description:
        "Book certified guided Chichen Itza tours with hotel transport from Cancun, Playa del Carmen & Riviera Maya. Free cancellation up to 24h prior.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-maya-gold", hexToRgbTriplet(theme.primary)],
    ["--color-maya-emerald", hexToRgbTriplet(theme.secondary)],
    ["--color-maya-charcoal", hexToRgbTriplet(theme.dark)],
    ["--color-gold-400", hexToRgbTriplet(theme.accent)],
    ["--color-chichen-gold", hexToRgbTriplet(theme.primary)],
    ["--color-chichen-navy", hexToRgbTriplet(theme.secondary)],
    ["--color-chichen-charcoal", hexToRgbTriplet(theme.dark)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${displayFont.variable} ${scriptFont.variable}`}>
      <head>
        {/* Warms up the connection to Google's analytics domains ahead of
            the afterInteractive gtag.js load below, shaving the DNS/TLS
            handshake off its actual request instead of paying for it when
            the script fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-body bg-stone-50 text-stone-900 antialiased">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
