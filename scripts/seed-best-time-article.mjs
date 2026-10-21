// Script to seed the "Best Time of Year to Visit Pompeii: Seasons, Weather & Crowds" article.
// Safe to re-run: Uses ON CONFLICT (slug) DO UPDATE to prevent duplicate rows.
// Also synchronizes data/posts.json with all active posts in the database.

import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const article = {
  slug: "best-time-of-year-to-visit-pompeii",
  title: "Best Time of Year to Visit Pompeii: Seasons, Weather & Crowds",
  metaTitle: "Best Time of Year to Visit Pompeii (Seasons, Heat & Crowds Guide)",
  metaDescription: "Discover the best time of year to visit Pompeii. Learn how to avoid scorching summer heat, dodge midday tour groups, and plan the ideal morning visit.",
  category: "Trip Planning",
  excerpt: "From mild spring mornings to quiet autumn afternoons, here is when to visit Pompeii to dodge the intense Campania heat and bypass heavy tour group crowds.",
  quickAnswer: "The best time to visit Pompeii is during the shoulder months of April, May, September, and October, arriving right at 9:00 AM opening time. You will experience pleasant 20°C to 24°C temperatures, moderate crowds, and comfortable walking conditions across the unshaded ancient ruins.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21",
  image: "https://ctdi3kt6gspaex2g.public.blob.vercel-storage.com/uploads/1792569389734-pompeii-forum-vesuvius-best-time-IBb3wsCNh4bXcCNqwUmCOLy2h3hhxF.jpg",
  imageAlt: "Ancient Roman ruins of the Forum in Pompeii with stone colonnades and Mount Vesuvius in the background",
  recommendedTourId: "pompeii-skip-the-line-entrance-ticket-audio-guide",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to visit Pompeii",
  ctaHeading: "Ready to explore ancient Pompeii?",
  ctaBody: "Compare skip-the-line tickets, guided archaeologist tours, and Vesuvius day trips.",
  ctaButtonText: "View All Pompeii Tickets",
  ctaButtonHref: "/#tours",
  content: `<p>Planning a trip to the ancient Roman ruins beneath Mount Vesuvius requires strategic timing. Understanding the <strong>best time to visit Pompeii</strong> can make the difference between a mesmerizing journey through Roman antiquity and an exhausting slog under relentless southern Italian sunshine.</p>

<h2>Best Months and Seasons to Visit Pompeii</h2>
<p>Pompeii experiences a Mediterranean climate characterized by scorching summers and mild, damp winters. Because the archaeological park covers over 160 acres with virtually zero tree canopy or shade, seasonal temperature shifts drastically influence your comfort.</p>

<h3>Spring (April to May): The Golden Window</h3>
<p>Spring is widely considered the absolute optimal period to explore Pompeii. Daytime temperatures range from 18°C to 23°C (64°F to 73°F), providing crisp mornings and pleasant afternoon breezes. Wildflowers bloom alongside ancient stone courtyards, and daylight hours are long enough to explore extensive residential quarters like the Villa of the Mysteries without heat exhaustion.</p>

<h3>Autumn (September to October): Comfortable & Less Crowded</h3>
<p>Early autumn mirrors the benefits of spring. By mid-September, peak summer holidaymakers depart, significantly thinning crowd levels around the Forum and the Lupanar. The Mediterranean heat begins to soften to a comfortable 22°C to 25°C, while the volcanic stone streets have cooled from their midsummer baking.</p>

<h3>Summer (July to August): Intense Heat & Peak Crowds</h3>
<p>Summer brings peak tourism, long queues, and blistering temperatures exceeding 35°C (95°F). Dark volcanic basalt paving radiates stored heat back onto walkers. If visiting during July or August, arriving right at gate opening and carrying plenty of electrolyte water is imperative.</p>

<h3>Winter (November to February): Quiet Solitude</h3>
<p>Winter offers the lowest crowd numbers of the entire year. While days are shorter with earlier site closures at 5:00 PM, you can wander empty streets and contemplate Roman villas in peace. Pack a rain jacket and layers, as Campania experiences intermittent winter showers.</p>

<figure>
  <img src="https://ctdi3kt6gspaex2g.public.blob.vercel-storage.com/uploads/1792569392564-pompeii-ancient-street-stepping-stones-oxE7VXbCCb99T20UUNPZEqSGTghowJ.jpg" alt="Ancient Roman stone paved street with raised crossing stones at Pompeii" />
  <figcaption>Navigating Pompeii’s ancient basalt streets is far more comfortable during mild shoulder-season weather.</figcaption>
</figure>

<h2>Best Time of Day: The 9:00 AM Rope-Drop Advantage</h2>
<p>Regardless of season, timing your arrival for the 9:00 AM opening time is paramount. Cruise ship shore excursions from Naples and large tour coaches from Rome usually reach the Porta Marina entrance between 10:30 AM and 11:00 AM.</p>

<h3>Morning Exploration vs. Late Afternoon Golden Hour</h3>
<p>Arriving by 8:45 AM allows you to clear the turnstiles first and head directly to the Forum, the Amphitheatre, and the House of the Faun before tour guides congest narrow doorways. Alternatively, entering after 3:00 PM in summer lets you escape the worst midday sun while enjoying spectacular golden hour light over the ruins and Mount Vesuvius.</p>

<h2>Best Days of the Week to Explore</h2>
<p>Tuesdays, Wednesdays, and Thursdays consistently experience the lowest visitor counts. Weekends draw regional Italian travelers and weekend city-breakers from Naples, while Mondays often absorb spillover crowds from weekend arrivals.</p>

<h2>Practical Tips for Planning Your Visit</h2>
<ul>
  <li><strong>Book skip-the-line tickets in advance:</strong> Avoid lengthy queues at the Porta Marina ticket office by securing an online mobile ticket.</li>
  <li><strong>Wear sturdy, closed-toe walking shoes:</strong> Pompeii’s ancient stones are uneven, deeply rutted by Roman chariots, and slippery when wet.</li>
  <li><strong>Carry a refillable water bottle:</strong> Working public Roman fountains (nasoni) throughout the site dispense cold, potable mountain water.</li>
  <li><strong>Use the Piazza Anfiteatro entrance:</strong> Often significantly less congested than the main Porta Marina gate during morning peak hours.</li>
</ul>

<p>By scheduling your visit for a spring or autumn morning at 9:00 AM, you will discover the <strong>best time to visit Pompeii</strong> with pleasant weather, open pathways, and unforgettable ancient atmosphere.</p>`
};

async function seed() {
  console.log("Seeding article into posts table...");

  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${article.slug}, ${article.title}, ${article.metaTitle}, ${article.metaDescription}, ${article.category},
      ${article.excerpt}, ${article.quickAnswer}, ${article.readTime}, ${article.date}, ${article.updatedAt},
      ${article.image}, ${article.imageAlt}, ${article.recommendedTourId}, ${article.recommendedTourAfterBlock},
      ${JSON.stringify(article.content)}::jsonb, 0,
      ${article.ctaHeading}, ${article.ctaBody}, ${article.ctaButtonText}, ${article.ctaButtonHref},
      ${article.focusKeyword}, false, false, '', '', '', ''
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow;
  `;

  console.log("Article upserted successfully.");

  // Fetch all posts from DB and synchronize data/posts.json
  const allRows = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC;`;
  console.log(`Retrieved ${allRows.length} posts from database.`);

  const mapped = allRows.map((row) => ({
    slug: row.slug,
    title: row.title,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    category: row.category,
    excerpt: row.excerpt,
    quickAnswer: row.quick_answer,
    readTime: row.read_time,
    date: row.date,
    updatedAt: row.updated_at ? new Date(row.updated_at).toISOString().slice(0, 10) : row.date,
    image: row.image,
    imageAlt: row.image_alt,
    recommendedTourId: row.recommended_tour_id || "",
    recommendedTourAfterBlock: row.recommended_tour_after_block === null ? undefined : Number(row.recommended_tour_after_block),
    content: typeof row.content === "string" ? row.content : row.content,
    ctaHeading: row.cta_heading || "Ready to book?",
    ctaBody: row.cta_body || "Compare tour prices and tickets on the homepage.",
    ctaButtonText: row.cta_button_text || "See Price Comparison",
    ctaButtonHref: row.cta_button_href || "/#prices",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || ""
  }));

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(mapped, null, 2) + "\n", "utf-8");
  console.log(`Updated ${postsJsonPath} with ${mapped.length} posts.`);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
