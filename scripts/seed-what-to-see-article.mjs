// Script to seed the "Pompeii Archaeological Park: What to See on Your First Visit" article.
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
  slug: "pompeii-what-to-see-first-visit",
  title: "Pompeii Archaeological Park: What to See on Your First Visit",
  metaTitle: "What to See in Pompeii: Top Sights & First-Time Visitor Guide",
  metaDescription: "Discover the best things to see in Pompeii on your first visit. Explore the Forum, House of the Faun, Roman Baths, Amphitheatre, and essential itinerary tips.",
  category: "Visitor Guide",
  excerpt: "From the grand Forum and ancient domus frescoes to the Roman Amphitheatre and plaster casts, discover the essential sights to prioritize on your first visit to Pompeii.",
  quickAnswer: "The most essential things to see in Pompeii on a first visit include the Civil Forum with views of Mount Vesuvius, the lavish House of the Faun and House of the Vettii, the remarkably preserved Stabian Baths, the stone Amphitheatre (the oldest in the Roman world), and the haunting plaster casts in the Garden of the Fugitives. Allow at least 3 to 4 hours to comfortably navigate these highlights.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23",
  image: "https://ctdi3kt6gspaex2g.public.blob.vercel-storage.com/uploads/pompeii-what-to-see-forum-cover-1792743488458-nkYpM4Brqqe6W1FpCjZIV22cLIY3XK.jpg",
  imageAlt: "Ancient Roman columns and stone ruins of the Forum at Pompeii against a clear sky",
  recommendedTourId: "pompeii-skip-the-line-entrance-ticket-audio-guide",
  recommendedTourAfterBlock: 1,
  focusKeyword: "things to see in Pompeii",
  ctaHeading: "Ready to explore ancient Pompeii?",
  ctaBody: "Secure your skip-the-line ticket with audio guide or book a licensed archaeologist tour to bring the ancient city to life.",
  ctaButtonText: "View Pompeii Tickets & Tours",
  ctaButtonHref: "/#tours",
  content: `<p>Spanning over 160 acres beneath Mount Vesuvius, the ancient Roman city of Pompeii is one of the world’s most astonishing archaeological treasures. When Vesuvius erupted catastrophically in 79 AD, it buried this prosperous port beneath volcanic ash, preserving Roman civilization in its final moments. For travelers arriving at the gates, knowing the best <strong>things to see in Pompeii</strong> is essential to making sense of this vast open-air marvel.</p>

<p>Because roughly 110 acres of the city have been excavated across nine sectors, seeing everything in a single visit is impossible. Focusing on iconic landmarks ensures you experience the finest civic architecture, private villas, and everyday street life across the <strong>Pompeii archaeological site</strong>. Below is your guide to essential highlights and tips for <strong>what to see in Pompeii in one day</strong>.</p>

<div class="bg-amber-50/70 border border-amber-200 rounded-xl p-5 my-6 text-slate-800">
  <p class="font-semibold text-amber-950 mb-1">First-Timer Navigation Tip</p>
  <p class="text-sm m-0">Enter through <strong>Porta Marina</strong> for direct access to the Forum, or through <strong>Piazza Anfiteatro</strong> to explore the oldest Roman arena first with shorter morning queues.</p>
</div>

<h2>The Civic Heart: The Forum and Temples</h2>
<p>Every first visit should begin at the <strong>Civil Forum (Piazza del Foro)</strong>, the political and commercial center of Roman Pompeii. Located in Regio VII, this vast limestone plaza was closed to cart traffic and flanked by colonnades.</p>

<p>At the northern end stands the <strong>Temple of Jupiter</strong>, framed dramatically by Mount Vesuvius. To the southwest sits the <strong>Basilica</strong>, Pompeii’s oldest public building, which housed law courts and commercial contracts. Nearby, the <strong>Macellum</strong> served as the central market, where visitors can still see marble sales counters and mythological frescoes.</p>

<h2>Lavish Roman Villas: Frescoes and Mosaics</h2>
<p>Pompeii’s residential quarters offer an intimate look at the private wealth and art of classical Rome. Among the countless <strong>Pompeii ruins</strong>, three residences are unmissable:</p>

<h3>House of the Faun (Casa del Fauno)</h3>
<p>Occupying an entire city block, the House of the Faun is one of the largest private mansions in the classical world. It is named for the bronze dancing faun statue poised above the marble impluvium in the central atrium. Archaeologists also uncovered the renowned Alexander Mosaic here, depicting Alexander confronting Darius III.</p>

<h3>House of the Vettii (Casa dei Vettii)</h3>
<p>Following a meticulous restoration, this domus belonging to two wealthy freedmen showcases some of the finest Fourth-Style Roman wall frescoes in existence. Highlights include vibrant mythological paintings, architectural illusions, and friezes of cupids engaged in crafts and trade.</p>

<h3>Villa of the Mysteries (Villa dei Misteri)</h3>
<p>Located outside the northwestern walls, this suburban villa houses Pompeii’s most famous fresco cycle. The dining room walls feature life-sized figures painted against glowing "Pompeian red," portraying the mysterious Dionysian initiation rites of a young bride.</p>

<figure>
  <img src="https://ctdi3kt6gspaex2g.public.blob.vercel-storage.com/uploads/pompeii-amphitheatre-ruins-1792743489758-QRXzbiyp5igwCqdlMue1kcrRVUmnEt.jpg" alt="Ancient Roman stone amphitheatre and arena ruins at Pompeii Archaeological Park" />
  <figcaption>Pompeii’s stone Amphitheatre, constructed around 70 BC, seated up to 20,000 spectators for gladiatorial games.</figcaption>
</figure>

<h2>Roman Baths, Theatres, and Street Life</h2>
<p>Pompeii preserves remarkable engineering for public hygiene, entertainment, and commerce.</p>

<h3>The Stabian Baths & Roman Entertainment</h3>
<p>The <strong>Stabian Baths</strong> feature separate bathing quarters for men and women, with underfloor hypocaust heating and stucco ceilings. For entertainment, Pompeii’s <strong>Amphitheatre</strong>, built around 70 BC, is the oldest surviving permanent stone amphitheatre in the Roman world. Nearby, the <strong>Large Theatre</strong> seated 5,000 patrons for classical plays.</p>

<h3>Bakeries, Thermopolia & The Lupanar</h3>
<p>Walking along the <strong>Via dell’Abbondanza</strong>, raised stepping stones let pedestrians cross streets cleanly. Key commercial stops include:</p>
<ul>
  <li><strong>The Lupanar:</strong> Pompeii’s official brothel, featuring stone beds and wall frescoes illustrating services offered.</li>
  <li><strong>Thermopolia:</strong> Ancient snack bars with stone counters containing terracotta jars that served hot food and wine.</li>
  <li><strong>Bakery of Popidius Priscus:</strong> Preserving original lava-stone grain mills and brick ovens.</li>
</ul>

<h2>The Human Story: Plaster Casts of the Fugitives</h2>
<p>The most moving sights in Pompeii are the plaster casts (calchi) created by Giuseppe Fiorelli in the 1860s by pouring plaster into hollow voids in hardened ash. At the <strong>Garden of the Fugitives</strong>, 13 casts capture the final moments of adults and children attempting to escape the lethal pyroclastic surges of 79 AD.</p>

<h2>Essential First-Visit Pompeii Highlights</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <thead>
      <tr class="bg-slate-100 text-slate-900 border-b border-slate-200">
        <th class="p-3 font-semibold">Attraction</th>
        <th class="p-3 font-semibold">Location</th>
        <th class="p-3 font-semibold">Key Highlight</th>
        <th class="p-3 font-semibold">Time Needed</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
      <tr>
        <td class="p-3 font-medium">The Forum & Basilica</td>
        <td class="p-3">Regio VII</td>
        <td class="p-3">Civic plaza framed by Mount Vesuvius</td>
        <td class="p-3">30–45 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">House of the Faun</td>
        <td class="p-3">Regio VI</td>
        <td class="p-3">Immense atrium & Alexander Mosaic</td>
        <td class="p-3">20 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">House of the Vettii</td>
        <td class="p-3">Regio VI</td>
        <td class="p-3">Vibrant Fourth-Style frescoes</td>
        <td class="p-3">25 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">Stabian Baths</td>
        <td class="p-3">Regio VII</td>
        <td class="p-3">Hypocaust heating & vaulted ceilings</td>
        <td class="p-3">20 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">The Amphitheatre</td>
        <td class="p-3">Regio II</td>
        <td class="p-3">Oldest stone Roman arena (70 BC)</td>
        <td class="p-3">20 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">The Lupanar</td>
        <td class="p-3">Regio VII</td>
        <td class="p-3">Two-story brothel with wall frescoes</td>
        <td class="p-3">15 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">Garden of the Fugitives</td>
        <td class="p-3">Regio I</td>
        <td class="p-3">Haunting plaster casts of 13 victims</td>
        <td class="p-3">15 mins</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">Villa of the Mysteries</td>
        <td class="p-3">Outside Walls</td>
        <td class="p-3">Dionysian initiation fresco frieze</td>
        <td class="p-3">30 mins</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Practical Tips for Exploring Pompeii Efficiently</h2>
<ul>
  <li><strong>Book skip-the-line tickets in advance:</strong> Box-office lines at Porta Marina often exceed an hour. Online mobile tickets provide immediate turnstile entry.</li>
  <li><strong>Wear sturdy walking shoes:</strong> Pompeii’s basalt roads are rutted and uneven. Avoid thin sandals or flip-flops.</li>
  <li><strong>Carry a refillable water bottle:</strong> Historic Roman fountains (nasoni) throughout the park dispense free, cold drinking water.</li>
  <li><strong>Use an audio guide or book an archaeologist tour:</strong> Context is vital for appreciating ruins; a 2-hour guided tour brings the ancient city to life.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<h3>What can you not miss on a first visit to Pompeii?</h3>
<p>Do not miss the <strong>Forum</strong>, <strong>House of the Faun</strong>, <strong>Stabian Baths</strong>, <strong>Amphitheatre</strong>, and <strong>Garden of the Fugitives</strong>.</p>

<h3>How long do you need to see the main sights in Pompeii?</h3>
<p>Plan for at least <strong>3 to 4 hours</strong> to cover major highlights comfortably. Exploring outlying villas requires 4 to 5 hours.</p>

<h3>Is the Villa of the Mysteries included with general admission?</h3>
<p>Yes. The Villa of the Mysteries is included with your standard entry ticket, accessible via a short walk through the Herculaneum Gate.</p>

<h3>Are the plaster casts real bodies?</h3>
<p>They are plaster casts created by pouring liquid plaster into cavities left by decayed bodies in ash, capturing postures, clothing, and expressions.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  return plain.trim().split(/\s+/).filter(Boolean).length;
}

async function seed() {
  const wordCount = countWords(article.content);
  console.log(`Validating word count: ${wordCount} words (Target: 800-1000 words)...`);
  if (wordCount < 800 || wordCount > 1000) {
    throw new Error(`Word count ${wordCount} is outside the 800-1000 word range!`);
  }
  console.log("Word count verification passed.");

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
