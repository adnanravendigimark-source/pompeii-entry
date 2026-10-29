import type { Metadata } from "next";
import { Cormorant_Garamond, Alex_Brush } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";


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
  "https://images.unsplash.com/photo-1687130818969-e8ea1c4ecc2b?q=80&w=2400&auto=format&fit=crop";

// Google Analytics (GA4) measurement ID for pompeiientrytickets.com.
const GA_MEASUREMENT_ID = "G-MDN44LPM8V";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pompeii Entry Tickets",
  url: SITE_URL,
  description:
    "Independent guide comparing verified Pompeii ticket options — skip-the-line entry, guided tours with a licensed archaeologist, and combo tours with Herculaneum and Mount Vesuvius.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pompeii Entry Tickets",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Pompeii Entry Tickets and Guided Tour | Skip-the-Line (2026)",
      template: "%s | Pompeii Entry Tickets",
    },
    description:
      "Compare Pompeii entry tickets and guided tours — skip-the-line entrance with audio guide, licensed archaeologist tours, and combos with Herculaneum & Vesuvius. Instant mobile confirmation.",
    keywords: [
      "Pompeii Entry Tickets and Guided Tour",
      "Pompeii tickets",
      "Pompeii skip the line",
      "Pompeii guided tour",
      "Pompeii entrance ticket",
      "Pompeii Herculaneum Vesuvius tour",
      "Pompeii ruins tickets",
      "Pompeii audio guide ticket",
      "best Pompeii tour",
      "Pompeii tickets 2026",
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
      title: "Pompeii Entry Tickets and Guided Tour | Skip-the-Line",
      description:
        "Book Pompeii entry tickets or a guided tour with a licensed archaeologist. Instant mobile confirmation, free cancellation up to 24h prior.",
      type: "website",
      url: SITE_URL,
      siteName: "Pompeii Entry Tickets",
      images: [{ url: DEFAULT_OG_IMAGE, width: 2400, height: 1350, alt: "Ancient Roman ruins and forum columns" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pompeii Entry Tickets and Guided Tour | Skip-the-Line",
      description:
        "Book Pompeii entry tickets or a guided tour with a licensed archaeologist. Instant mobile confirmation, free cancellation up to 24h prior.",
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
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        {/* Warms up the connection to Google's analytics domains ahead of
            the gtag.js load above, shaving the DNS/TLS handshake off its
            actual request instead of paying for it when the script fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
