import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface MustSeeRuinsSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface CtaBannerSection {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export interface HeroTrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HeroTrustSection {
  badges: HeroTrustBadge[];
}

export interface HomepageSections {
  heroTrust: HeroTrustSection;
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  mustSeeRuins: MustSeeRuinsSection;
  practical: PracticalSection;
  price: PriceSection;
  ctaBanner: CtaBannerSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  homeLabel: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Pompeii Entry Tickets",
  logoLine1: "POMPEII",
  logoLine2: "ENTRY TICKETS",
  homeLabel: "Home",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Tickets", href: "/#tours" },
    { label: "What to Expect", href: "/#what-to-expect" },
    { label: "Must-See Ruins", href: "/#must-see-ruins" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK NOW",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with the Parco Archeologico di Pompei or any Italian government body — we compare verified skip-the-line tickets and guided tours from trusted booking partners and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Pompeii Tickets", href: "/#tours" },
        { label: "Must-See Ruins", href: "/#must-see-ruins" },
        { label: "Ticket Prices", href: "/#prices" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Archaeological Park Location",
  addressLine1: "Via Villa dei Misteri, 2, 80045 Pompei NA",
  addressLine2: "Campania, Italy",
  copyrightText:
    "Pompeii Entry Tickets. All prices shown in EUR/USD and subject to change by the park operator.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#B58A38",   // Roman Ochre Gold ⭐
  secondary: "#A8432B", // Terracotta ⭐
  dark: "#243010",      // Deep Roman Olive Slate
  accent: "#C99E4B",    // Warm Amber/Gold
};

export const DEFAULT_HERO_TRUST: HeroTrustSection = {
  badges: [
    {
      icon: "ShieldCheckIcon",
      title: "Official Tickets",
      subtitle: "100% official & secure",
    },
    {
      icon: "ClockIcon",
      title: "Skip the Line",
      subtitle: "Save time, enjoy more",
    },
    {
      icon: "HeadsetIcon",
      title: "24/7 Support",
      subtitle: "We're here to help",
    },
  ],
};

export const DEFAULT_SECTIONS: HomepageSections = {
  heroTrust: DEFAULT_HERO_TRUST,
  tours: {
    eyebrow: "Pompeii Entry Tickets & Guided Tours",
    heading: "Pompeii Entry Tickets and Guided Tour",
    subheading:
      "Compare skip-the-line entry tickets, guided walking tours with a licensed archaeologist, and full-day combos with Herculaneum and Mount Vesuvius.",
  },
  highlights: {
    eyebrow: "Why Book With Us",
    heading: "Why Book With Us",
    subheading:
      "Pompeii caps daily visitors and tickets sell out fast in peak season. Here is what makes booking with us the easy choice.",
    cards: [
      {
        title: "Skip the Ticket Line",
        body: "Instant mobile ticket confirmation means you head straight past the box office queue at Porta Marina.",
        icon: "🎫",
      },
      {
        title: "Best Price Guarantee",
        body: "We compare verified booking partners so you always see the best available price for the same ticket.",
        icon: "💶",
      },
      {
        title: "Licensed Guides & Audio Tours",
        body: "Every guided option uses licensed archaeologists or the official Pompeii audio guide — never unofficial guides.",
        icon: "🎧",
      },
      {
        title: "Free Cancellation",
        body: "Most tickets can be cancelled up to 24 hours before your visit for a full refund.",
        icon: "✅",
      },
    ],
  },
  why: {
    eyebrow: "The Ruins Itinerary",
    heading: "What You Actually See on a Pompeii Guided Tour",
    intro:
      "Pompeii covers over 160 acres of excavated Roman streets, villas, and public buildings. Here is the classic guided itinerary step by step.",
    timelineHeading: "Sample tour itinerary",
    timeline: [
      { time: "0:00", step: "Skip-the-line entry at Porta Marina and meet your licensed archaeologist guide" },
      { time: "0:20", step: "The Forum — Pompeii's civic and religious heart, with Mount Vesuvius framed behind it" },
      { time: "0:50", step: "House of the Faun — one of the largest and richest private homes in the ancient world" },
      { time: "1:20", step: "The Amphitheatre — the oldest surviving Roman amphitheatre in existence" },
      { time: "1:50", step: "Garden of the Fugitives — the preserved plaster body casts of victims of the eruption" },
      { time: "2:20", step: "The Stabian Baths and Via dell'Abbondanza, Pompeii's main shopping street" },
    ],
    learnHeading: "Good to know before your tour",
    learn: [
      "Licensed guides are bilingual (English & Italian) with audio headsets for clear listening in busy areas",
      "Pompeii is mostly uneven ancient stone paving — wear comfortable, closed-toe walking shoes",
      "There is very little shade on site, so bring water, a hat, and sunscreen even in cooler months",
      "Daily visitor numbers are capped, so tickets for popular time slots sell out — especially in summer",
    ],
    note: "Itinerary order may vary slightly by tour operator to optimize crowd flow and opening hours.",
    extraHeading: "Getting to Pompeii",
    extraItems: [
      { name: "From Naples", note: "Circumvesuviana train to Pompei Scavi – Villa dei Misteri, about 35 minutes, steps from Porta Marina" },
      { name: "From Sorrento", note: "Circumvesuviana train in the Naples direction, about 30 minutes to Pompei Scavi" },
      { name: "From Rome (day trip)", note: "High-speed train to Naples, then the Circumvesuviana, or a guided day-tour with return transport included" },
    ],
    ctaText: "Ready to explore? Skip-the-line Pompeii tickets start from €28/person.",
    ctaButtonText: "Book Your Pompeii Ticket →",
    ctaHref: "#tours",
  },
  mustSeeRuins: {
    eyebrow: "Must-See Ruins",
    heading: "Explore Pompeii's Best-Preserved Ruins",
    body:
      "No visit to Pompeii is complete without seeing the monumental heart of the ancient city. The <strong>Forum</strong>, the <strong>House of the Faun</strong>, and the haunting <strong>Garden of the Fugitives</strong> showcase the extraordinary scale and sudden silence of a Roman city frozen by the eruption of Mount Vesuvius in 79 AD.",
    bullets: [
      "The Forum was Pompeii's civic, religious, and commercial center, framed by Mount Vesuvius itself",
      "The Garden of the Fugitives preserves plaster casts of victims exactly as they fell in 79 AD",
      "Morning departures give you cooler temperatures and crowd-free photo angles at the Amphitheatre",
      "Guided tours include a licensed archaeologist, skip-the-line entry, and expert historical context",
    ],
    ctaButtonText: "See All Pompeii Tickets",
    ctaHref: "#tours",
    images: [
      {
        src: "https://images.unsplash.com/photo-1687130818969-e8ea1c4ecc2b?q=80&w=1200&auto=format&fit=crop",
        alt: "Ancient Roman ruins and forum columns",
        label: "The Forum",
      },
      {
        src: "https://images.unsplash.com/photo-1768910924686-2a2bda2d8ac4?q=80&w=1200&auto=format&fit=crop",
        alt: "Ancient Roman mosaic floor with circular patterns",
        label: "House of the Faun",
      },
      {
        src: "https://images.unsplash.com/photo-1753469202827-656b6e6a3764?q=80&w=1200&auto=format&fit=crop",
        alt: "An ancient Roman amphitheatre",
        label: "The Amphitheatre",
      },
      {
        src: "https://images.unsplash.com/photo-1748194379977-5fdecda42ec2?q=80&w=1200&auto=format&fit=crop",
        alt: "Ancient Roman columns standing against a blue sky",
        label: "Garden of the Fugitives",
      },
    ],
  },
  practical: {
    hoursHeading: "Opening Hours & Best Time to Visit (2026)",
    hours: [
      { range: "Summer Season (Apr 1 – Oct 31)", time: "9:00 AM – 7:00 PM daily (Last entry 5:30 PM)" },
      { range: "Winter Season (Nov 1 – Mar 31)", time: "9:00 AM – 5:00 PM daily (Last entry 3:30 PM)" },
      { range: "Guided Tour Meeting Time", time: "Usually 15–30 minutes before your ticket's entry slot" },
      { range: "Closed", time: "January 1, May 1, and December 25" },
    ],
    hoursNote: "Exact meeting point and time will be confirmed in your booking voucher.",
    addressHeading: "Location & Entrances",
    address:
      "Pompeii Archaeological Park, Via Villa dei Misteri 2, 80045 Pompei NA, Italy.\nMain visitor entrances at Porta Marina, Piazza Anfiteatro, and Piazza Esedra.",
    metro: "The Pompei Scavi – Villa dei Misteri train station (Circumvesuviana line) is a 5-minute walk from the Porta Marina entrance.",
    bestTimeHeading: "Best Time for a Pompeii Visit",
    bestTimeBody:
      "Early morning right at opening offers the coolest temperatures and the fewest crowds, especially in summer. April, May, September, and October offer mild weather with noticeably thinner crowds than peak summer.",
  },
  price: {
    eyebrow: "Compare & Choose",
    heading: "Compare Pompeii Tickets & Tours",
    subheading:
      "All three options side by side — pick the ticket that matches your schedule, then book straight from the table.",
    note: "Children and infants typically receive discounted or free entry — check each ticket's booking page for age tiers.",
    itemLabel: "Ticket Type",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Guide Included",
    bestForLabel: "Best For",
    bookLabel: "Book Now",
  },
  ctaBanner: {
    heading: "Ready to Explore Ancient Pompeii?",
    subtext: "Book your skip-the-line ticket or guided tour today and discover the ancient Roman city frozen in time, with instant confirmation.",
    buttonText: "Explore All Tickets",
    buttonHref: "#tours",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Pompeii Ticket & Tour FAQs",
  },
  notFound: {
    heading: "Looks like this ancient street is buried under volcanic ash.",
    body: "The page you're looking for doesn't exist or may have moved. Try one of these instead.",
    primaryButtonText: "Compare Pompeii Tickets & Tours →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "Pompeii Guides & Tips",
    subheading:
      "Expert travel advice on picking the right ticket, beating the crowds, and planning your day at Pompeii.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Pompeii Travel Blog",
    heading: "Pompeii Ticket & Travel Guide",
    subheading: "Practical guides, itinerary tips, and historical insights to help you plan the ultimate visit to ancient Pompeii.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to book your Pompeii ticket?",
    ctaButtonText: "Compare Pompeii Tickets & Tours →",
    backToGuidesText: "← All guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Guides",
    sidebarRelatedHeading: "Related Articles",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets & tours →",
    promoRecommendedText: "Recommended for you",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "SKIP-THE-LINE ENTRY TO THE ANCIENT ROMAN CITY",
  heroHeading: "Pompeii Entry Tickets and Guided Tour",
  heroSubheading:
    "Book skip-the-line entry to Pompeii — the best-preserved ancient Roman city in the world — with instant mobile confirmation and free cancellation up to 24 hours before your visit.",
  heroImage: "https://images.unsplash.com/photo-1687130818969-e8ea1c4ecc2b?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "Ancient Roman ruins and forum columns",
  heroCtaPrimaryText: "EXPLORE TICKETS",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "VIEW GUIDED TOURS",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "pompeii-skip-the-line-entrance-ticket-audio-guide",
  featuredBadgeLabel: "Recommended",
  featuredUrgencyText: "Best Price Guarantee · High Demand",
  featuredReasons: [
    "Most booked Pompeii ticket — thousands of verified 5-star reviews",
    "Skip the box office and get instant mobile ticket confirmation",
    "Free cancellation up to 24 hours before your visit",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "Pompeii Entry Tickets and Guided Tour",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || "",
    heroHeading: row.hero_heading || "",
    heroSubheading: row.hero_subheading || "",
    heroImage: row.hero_image || "",
    heroImageAlt: row.hero_image_alt || "",
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || "",
    featuredBadgeLabel: row.featured_badge_label || "",
    featuredUrgencyText: row.featured_urgency_text || "",
    featuredReasons: parseReasons(row.featured_reasons),
    sections: {
      heroTrust: { ...DEFAULT_SECTIONS.heroTrust, ...sectionsRaw.heroTrust },
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      mustSeeRuins: { ...DEFAULT_SECTIONS.mustSeeRuins, ...sectionsRaw.mustSeeRuins },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      ctaBanner: { ...DEFAULT_SECTIONS.ctaBanner, ...sectionsRaw.ctaBanner },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || "",
    metaDescription: row.meta_description || "",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt},
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      theme_json = EXCLUDED.theme_json
  `;
}
