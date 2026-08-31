import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_CONTENT = `<h2>Our Mission</h2>
<p>We built this independent guide with one mission: visiting Chichén Itzá is one of the most breathtaking cultural experiences in the world — but only if you book the right tour. With hundreds of operators in Cancun and Riviera Maya, prices and service quality vary dramatically.</p>
<p>We are an independent booking resource — not an official Mexican government entity or INAH ticketing authority. We rigorously screen and compare verified guided excursions, early access admissions, and cenote day tours from licensed, top-rated local operators in Yucatan and Quintana Roo.</p>
<h2>How We Screen & Select Chichén Itzá Tours</h2>
<p>Every tour and excursion featured on this site is vetted against four strict criteria before earning a recommendation:</p>
<ul>
<li><strong>Certified Archeologist Guides</strong> — Every guided tour is led by an official INAH-certified bilingual guide with deep knowledge of ancient Mayan history, astronomy, and architecture.</li>
<li><strong>Verified Traveler Reviews</strong> — We only recommend excursions with thousands of authentic, verified reviews and average ratings above 4.7 stars.</li>
<li><strong>Transparent Pricing & Inclusions</strong> — What you see is what you pay: air-conditioned hotel transport, entrance fees, cenote access, and buffet meals are clearly stated upfront with zero hidden charges.</li>
<li><strong>100% Free Cancellation</strong> — Every tour includes full flexibility with free cancellation up to 24 hours before your departure.</li>
</ul>
<h2>Independent Booking Resource</h2>
<p>This website is an independent travel companion. We don't operate tour buses or sell tickets directly — all bookings go securely through GetYourGuide, a globally trusted partner, protected by official customer support and generous cancellation guarantees.</p>
<h2>Affiliate Disclosure</h2>
<p>When you book a Chichen Itza Tour through links on our site, we may earn a modest affiliate commission at zero additional cost to you. This support allows us to maintain up-to-date travel guides and independent comparisons.</p>
<p>Have questions before you book your trip? Feel free to reach out via our <a href="/contact">contact page</a>.</p>`;

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Independent Guide to Chichen Itza Tours & Tickets",
  heroSubheading:
    "We help travelers discover and book the best certified guided tours, skip-the-line admissions, and sacred cenote day trips across the Yucatan Peninsula.",
  heroImage: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2000&auto=format&fit=crop",
  heroImageAlt: "El Castillo pyramid at Chichen Itza Mayan ruins",
  content: DEFAULT_CONTENT,
  metaTitle: "About Us | Chichen Itza Tour & Excursion Booking Guide",
  metaDescription:
    "Learn about our independent travel guide, how we curate certified Chichen Itza guided tours and cenote day trips from Cancun and Riviera Maya.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_ABOUT.heroImageAlt,
    content: row.content || DEFAULT_ABOUT.content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveAboutPage(data: Partial<AboutPageContent>): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content, meta_title, meta_description, canonical_url, no_index, no_follow,
      og_title, og_description, og_image
    ) VALUES (
      1,
      ${data.heroEyebrow ?? DEFAULT_ABOUT.heroEyebrow},
      ${data.heroHeading ?? DEFAULT_ABOUT.heroHeading},
      ${data.heroSubheading ?? DEFAULT_ABOUT.heroSubheading},
      ${data.heroImage ?? DEFAULT_ABOUT.heroImage},
      ${data.heroImageAlt ?? DEFAULT_ABOUT.heroImageAlt},
      ${data.content ?? DEFAULT_ABOUT.content},
      ${data.metaTitle ?? DEFAULT_ABOUT.metaTitle},
      ${data.metaDescription ?? DEFAULT_ABOUT.metaDescription},
      ${data.canonicalUrl ?? ""},
      ${!!data.noIndex},
      ${!!data.noFollow},
      ${data.ogTitle ?? ""},
      ${data.ogDescription ?? ""},
      ${data.ogImage ?? ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}
