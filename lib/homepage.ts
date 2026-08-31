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

export interface HomepageSections {
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
  logoLine2: "— TICKETS —",
  homeLabel: "Home",
  bookNowText: "BOOK NOW",
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
  primary: "#C9932E",   // Roman Ochre Gold ⭐
  secondary: "#A8432B", // Terracotta ⭐
  dark: "#2B2420",      // Volcanic Ash Charcoal
  accent: "#D9A066",    // Warm Amber/Sand
};

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Chichen Itza Tours & Tickets",
    heading: "Chichen Itza Guided Tours & Day Trips",
    subheading:
      "Compare the top-rated guided excursions — all-inclusive day tours with cenote swimming, skip-the-crowd early access tours, Mayan ruins 3-in-1 combos, and private luxury experiences.",
  },
  highlights: {
    eyebrow: "Why Chichen Itza",
    heading: "Chichen Itza Highlights",
    subheading:
      "One of the New 7 Wonders of the World and a UNESCO World Heritage treasure. Here is what makes a guided tour unmissable.",
    cards: [
      {
        title: "El Castillo Pyramid",
        body: "The world-famous 365-step Temple of Kukulkan, engineered with astronomical precision to display a descending shadow serpent on the equinox.",
        icon: "🏛️",
      },
      {
        title: "Great Ball Court",
        body: "The largest ancient Mesoamerican ball court ever discovered, featuring remarkable acoustic resonance where a whisper carries 500 feet.",
        icon: "⚽",
      },
      {
        title: "Sacred Cenote Swim",
        body: "Plunge into crystal-clear turquoise underground sinkholes like Cenote Ik Kil, once revered by ancient Mayan royalty.",
        icon: "🏊",
      },
      {
        title: "Certified Archeologists",
        body: "Explore with INAH-certified bilingual guides who bring ancient Mayan astronomy, hieroglyphs, math, and cosmology to life.",
        icon: "📜",
      },
    ],
  },
  why: {
    eyebrow: "The Ruins Itinerary",
    heading: "What You Actually See on a Chichen Itza Guided Tour",
    intro:
      "Over 1,000 years of Mayan civilization across a vast 4-square-mile ancient metropolis. Here is the classic guided itinerary step by step.",
    timelineHeading: "Sample tour itinerary",
    timeline: [
      { time: "0:00", step: "Arrive via priority tour entrance and meet your certified archeologist guide" },
      { time: "0:20", step: "El Castillo (Pyramid of Kukulkan) — acoustic chirp echo and solar calendar alignment" },
      { time: "0:50", step: "The Great Ball Court, Temple of the Jaguars & Skull Platform (Tzompantli)" },
      { time: "1:20", step: "Temple of the Warriors & the Plaza of a Thousand Columns" },
      { time: "1:50", step: "Cenote Sagrado (The Sacred Cenote of offerings and rituals)" },
      { time: "2:20", step: "El Caracol Astronomical Observatory & Las Monjas (The Nunnery)" },
    ],
    learnHeading: "Good to know before your tour",
    learn: [
      "Certified archeologist guides are bilingual (English & Spanish) with audio headsets for clear listening",
      "Round-trip air-conditioned hotel transport included from Cancun, Playa del Carmen, Tulum & Riviera Maya",
      "All-inclusive tours feature a traditional Yucatan buffet lunch and swimming at Cenote Ik Kil",
      "Climbing the pyramid is strictly prohibited to preserve the thousand-year-old structures",
    ],
    note: "Itinerary order may vary slightly by tour operator to optimize weather, sunlight, and crowd flow.",
    extraHeading: "Hotel Pickup Regions",
    extraItems: [
      { name: "Cancun Hotel Zone & Downtown", note: "Daily pickup between 6:30 AM – 7:30 AM with direct highway express transport" },
      { name: "Playa del Carmen & Riviera Maya", note: "Convenient pickup from all major coastal resorts and meeting points" },
      { name: "Tulum & Akumal", note: "Morning departures with scenic inland route through the Yucatan jungle" },
    ],
    ctaText: "Ready to explore? The All-Inclusive Chichen Itza Tour starts at $69/person and departs daily.",
    ctaButtonText: "Book Your Chichen Itza Tour →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "Temples & Sacred Cenotes",
    heading: "Explore Ancient Pyramids & Plunge into Sacred Waters",
    body:
      "No trip to the Yucatan is complete without exploring both the monumental limestone temples of Chichen Itza and the mystical turquoise waters of the underground cenotes. <strong>El Castillo</strong>, the Temple of the Warriors, and <strong>Cenote Ik Kil</strong> showcase the astonishing spiritual and architectural harmony of the ancient Mayan civilization.",
    bullets: [
      "El Castillo was constructed with 365 steps corresponding precisely to the solar calendar",
      "Cenote Ik Kil plunge pool features hanging lush jungle vines and 85-foot deep crystal waters",
      "Morning departures give you cool temperatures and crowd-free photo angles",
      "All-inclusive tours include certified guide, transport, cenote entry, and Yucatan buffet",
    ],
    ctaButtonText: "See All Chichen Itza Tours",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/chichen-itza-hero.jpg",
        alt: "El Castillo pyramid at Chichen Itza in daylight",
        label: "El Castillo Pyramid",
      },
      {
        src: "/images/cenote-ik-kil.jpg",
        alt: "Cenote Ik Kil near Chichen Itza",
        label: "Cenote Ik Kil",
      },
      {
        src: "/images/warriors-temple.jpg",
        alt: "Temple of the Warriors and columns at Chichen Itza",
        label: "Temple of Warriors",
      },
      {
        src: "/images/great-ball-court.jpg",
        alt: "The Great Ball Court at Chichen Itza",
        label: "Great Ball Court",
      },
    ],
  },
  practical: {
    hoursHeading: "Park Hours & Tour Timing (2026)",
    hours: [
      { range: "Chichén Itzá Park Gates", time: "8:00 AM – 5:00 PM daily (Last admission at 4:00 PM)" },
      { range: "Early Access Tours", time: "6:00 AM – 7:00 AM hotel pickup (Entry right at 8:00 AM opening)" },
      { range: "Classic All-Inclusive Tours", time: "7:00 AM – 8:00 AM hotel pickup (10–12 hour full-day tour)" },
      { range: "Cenote Ik Kil Swimming Hours", time: "9:00 AM – 5:00 PM daily" },
    ],
    hoursNote: "Exact hotel pickup time and meeting point will be confirmed in your booking voucher.",
    addressHeading: "Location & Pickup Points",
    address:
      "Chichén Itzá Archeological Zone, Highway 180D, 97751 Pisté, Tinum, Yucatán, Mexico.\nHotel pickup included from Cancun (Hotel Zone/Downtown), Playa del Carmen, Riviera Maya, Tulum, and Merida.",
    metro: "Air-conditioned round-trip transport is included with all guided tour bookings.",
    bestTimeHeading: "Best Time for a Chichen Itza Tour",
    bestTimeBody:
      "Early morning between 8:00 AM and 10:30 AM offers the coolest temperatures and the fewest crowds. November through April provides ideal dry, sunny weather across the Yucatan Peninsula.",
  },
  price: {
    eyebrow: "Compare & Choose",
    heading: "Compare Chichen Itza Tours & Tickets",
    subheading:
      "All four options side by side — pick the tour that matches your schedule, then book straight from the table.",
    note: "Children and infants typically receive discounted rates — check each tour's booking page for age tiers.",
    itemLabel: "Tour Type",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Cenote & Meal Included",
    bestForLabel: "Best For",
    bookLabel: "Book Tour",
  },
  ctaBanner: {
    heading: "Ready to Experience Chichen Itza?",
    subtext: "Book your certified guided tour today and discover the wonder of the ancient Mayan civilization with instant confirmation.",
    buttonText: "Explore All Tours",
    buttonHref: "#tours",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Chichen Itza Tour FAQs",
  },
  notFound: {
    heading: "Looks like this ancient temple path is lost in the jungle.",
    body: "The page you're looking for doesn't exist or may have moved. Try one of these instead.",
    primaryButtonText: "Compare Chichen Itza Tours & Tickets →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "Chichen Itza Tour Guides & Tips",
    subheading:
      "Expert travel advice on picking the right tour, beating the heat and crowds, and planning your Yucatan day trip.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Chichen Itza Travel Blog",
    heading: "Chichen Itza Tour & Travel Guide",
    subheading: "Practical guides, itinerary tips, and historical insights to help you plan the ultimate Yucatan ruins adventure.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to book your Chichen Itza Tour?",
    ctaButtonText: "Compare Chichen Itza Tours & Tickets →",
    backToGuidesText: "← All guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Guides",
    sidebarRelatedHeading: "Related Articles",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tours & tickets →",
    promoRecommendedText: "Recommended for you",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "STEP INTO THE WONDER OF THE MAYA WORLD",
  heroHeading: "Chichen Itza Tour",
  heroSubheading:
    "Discover the ancient marvel of Chichen Itza with expert local guides and unforgettable experiences.",
  heroImage: "/images/chichen-itza-hero.jpg",
  heroImageAlt: "The iconic El Castillo pyramid at Chichen Itza Mayan ruins in sunny Yucatan",
  heroCtaPrimaryText: "EXPLORE TOURS",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "VIEW PRIVATE TOURS",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "chichen-itza-cenote-valladolid-all-inclusive-tour",
  featuredBadgeLabel: "Recommended",
  featuredUrgencyText: "Best Price Guarantee · High Demand",
  featuredReasons: [
    "Most booked Chichen Itza Tour — 24,800+ reviews with 4.85-star rating",
    "Includes certified archeologist guide, Cenote Ik Kil swim & buffet lunch",
    "Free cancellation up to 24 hours before departure",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "Chichen Itza Tour",
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
