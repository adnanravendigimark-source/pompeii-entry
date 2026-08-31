import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

// Laurel wreath icon for the top badge
function LaurelWreathIcon({ className = "h-6 w-6 text-[#B58A38]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Left branch */}
      <path
        d="M13.5 26.5C10 24 7.5 19.5 7.5 14C7.5 9.5 9.5 6 12.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M12 7C9.5 6 7 7.5 6.5 10C8.5 9.8 10.5 9 12 7Z" fill="currentColor" />
      <path d="M9.5 12C7 11.5 5 13.5 5 16C7 15.5 9 14.5 9.5 12Z" fill="currentColor" />
      <path d="M9.5 18C7 18 5.5 20.5 6 23C7.8 22 9.2 20.2 9.5 18Z" fill="currentColor" />
      <path d="M12 23C10 24 9.5 26.5 11 28.5C12.2 27 12.5 25 12 23Z" fill="currentColor" />

      {/* Right branch */}
      <path
        d="M18.5 26.5C22 24 24.5 19.5 24.5 14C24.5 9.5 22.5 6 19.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M20 7C22.5 6 25 7.5 25.5 10C23.5 9.8 21.5 9 20 7Z" fill="currentColor" />
      <path d="M22.5 12C25 11.5 27 13.5 27 16C25 15.5 23 14.5 22.5 12Z" fill="currentColor" />
      <path d="M22.5 18C25 18 26.5 20.5 26 23C24.2 22 22.8 20.2 22.5 18Z" fill="currentColor" />
      <path d="M20 23C22 24 22.5 26.5 21 28.5C19.8 27 19.5 25 20 23Z" fill="currentColor" />
    </svg>
  );
}

// 3 Key Hero Trust Icons
function ShieldCheckIcon({ className = "h-7 w-7 text-[#243010]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 6L8 8.8V14C8 17.8 10.6 21.3 14 22.5C17.4 21.3 20 17.8 20 14V8.8L14 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 14L13.2 15.7L16.8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className = "h-7 w-7 text-[#243010]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 8.5V14.2L17.8 16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon({ className = "h-7 w-7 text-[#243010]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 14.5V13C9 10.2 11.2 8 14 8C16.8 8 19 10.2 19 13V14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="7.5" y="14" width="3" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17.5" y="14" width="3" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 17.5V18.5C19 19.6 18.1 20.5 17 20.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default async function Hero() {
  const content = await getHomepageContent();
  const heroImageSrc = "/images/pompeii-hero.jpg";

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center bg-[#FAF9F6] overflow-hidden">
      {/* Full-bleed Panoramic Background Image */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={heroImageSrc}
          alt={content.heroImageAlt || "Ruins of Pompeii with Mount Vesuvius at golden hour"}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[75%_center] lg:object-[80%_center]"
        />
        {/* Smooth gradient overlay: Solid light alabaster on left blending to transparent over ruins on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/95 via-[#FAF9F6]/85 via-45% to-transparent sm:bg-gradient-to-r sm:from-[#FAF9F6] sm:from-25% sm:via-[#FAF9F6]/92 sm:via-45% md:via-[#FAF9F6]/75 md:via-52% lg:via-[#FAF9F6]/50 lg:via-56% sm:to-transparent" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Top Laurel Badge */}
          <div className="inline-flex items-center gap-2.5">
            <LaurelWreathIcon className="h-6 w-6 text-[#B58A38] shrink-0" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#A67B2C]">
              STEP BACK IN TIME. WALK THROUGH HISTORY.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-[#243010]">
            Pompeii
            <span className="block mt-1">Entry Tickets</span>
          </h1>

          {/* Subtle Gold Divider */}
          <div className="w-12 h-[2.5px] bg-[#B58A38] mt-4 sm:mt-5 mb-4 sm:mb-5 rounded-full" />

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base lg:text-[17px] text-[#4A4E44] font-medium leading-relaxed max-w-xl">
            Explore the ancient Roman city frozen in time by Mount Vesuvius. Book your official Pompeii tickets and enjoy a journey through 2,000 years of history.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href={content.heroCtaPrimaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#243010] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#344417] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>{content.heroCtaPrimaryText || "EXPLORE TICKETS"}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#what-to-expect"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#243010]/30 bg-white/70 backdrop-blur-sm px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#243010] shadow-sm transition-all duration-300 hover:bg-[#243010] hover:text-white"
            >
              WHAT TO EXPECT
            </a>
          </div>

          {/* 3 Key Trust Badges — editable from Admin (Homepage -> Content -> Hero) */}
          {content.sections.heroTrust?.badges?.length > 0 && (
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {content.sections.heroTrust.badges.map((badge, idx) => {
                const isClock = badge.icon === "ClockIcon" || idx === 1;
                const isHeadset = badge.icon === "HeadsetIcon" || idx === 2;

                return (
                  <div key={badge.title + idx} className="flex items-center gap-3">
                    {isClock ? (
                      <ClockIcon className="h-8 w-8 text-[#243010] shrink-0" />
                    ) : isHeadset ? (
                      <HeadsetIcon className="h-8 w-8 text-[#243010] shrink-0" />
                    ) : (
                      <ShieldCheckIcon className="h-8 w-8 text-[#243010] shrink-0" />
                    )}
                    <div className="leading-tight">
                      <span className="block font-bold text-sm sm:text-[15px] text-[#243010]">{badge.title}</span>
                      <span className="block text-xs text-[#5D6456] mt-0.5">{badge.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
