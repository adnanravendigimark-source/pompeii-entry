import Link from "next/link";
import Image from "next/image";

// Inline vector mark of the majestic El Castillo (Temple of Kukulcan) Mayan Pyramid at Chichen Itza
function ChichenPyramidMarkSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun Ray halo over pyramid top */}
      <circle cx="50" cy="18" r="14" fill="#C9932E" fillOpacity="0.18" />
      <path d="M50 4V8M40 7L42 11M60 7L58 11M33 13L37 16M67 13L63 16" stroke="#C9932E" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />

      {/* Stepped Temple Structure at top (El Castillo Summit) */}
      <rect x="43" y="18" width="14" height="8" rx="0.5" fill="#2B2420" stroke="#2B2420" strokeWidth="1.8" />
      <rect x="47" y="21" width="6" height="5" fill="#C9932E" />
      <rect x="41" y="26" width="18" height="3" fill="#2B2420" />

      {/* Terraced Stepped Pyramid Levels */}
      {/* Tier 1 (top) */}
      <path d="M38 29L35 34H65L62 29H38Z" fill="#2B2420" fillOpacity="0.25" stroke="#2B2420" strokeWidth="1.5" />
      {/* Tier 2 */}
      <path d="M34 34L30 40H70L66 34H34Z" fill="#2B2420" fillOpacity="0.35" stroke="#2B2420" strokeWidth="1.5" />
      {/* Tier 3 */}
      <path d="M29 40L24 47H76L71 40H29Z" fill="#2B2420" fillOpacity="0.5" stroke="#2B2420" strokeWidth="1.5" />
      {/* Tier 4 */}
      <path d="M23 47L17 55H83L77 47H23Z" fill="#2B2420" fillOpacity="0.65" stroke="#2B2420" strokeWidth="1.5" />
      {/* Tier 5 (Base) */}
      <path d="M16 55L9 65H91L84 55H16Z" fill="#2B2420" fillOpacity="0.85" stroke="#2B2420" strokeWidth="1.8" />

      {/* Central Grand Ceremonial Staircase */}
      <path d="M44 26L41 65H59L56 26H44Z" fill="#C9932E" stroke="#2B2420" strokeWidth="1.5" />
      {/* Steps lines */}
      <line x1="43.5" y1="31" x2="56.5" y2="31" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="43" y1="36" x2="57" y2="36" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="42.5" y1="41" x2="57.5" y2="41" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="42" y1="47" x2="58" y2="47" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="41.5" y1="53" x2="58.5" y2="53" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />
      <line x1="41" y1="59" x2="59" y2="59" stroke="#F5EDE1" strokeWidth="1.2" strokeOpacity="0.9" />

      {/* Base platform ground line */}
      <path d="M5 66H95" stroke="#2B2420" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt = "Chichen Itza Tours",
  logoAlt = "Chichen Itza Tours",
  line1 = "CHICHEN ITZA",
  line2 = "— TOURS —",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  logoImage?: string;
  alt?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = (logoImage || src)?.trim();
  const resolvedAlt = logoAlt || alt;

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <span className="relative block h-12 w-14 transition-transform duration-300 hover:scale-105">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="80px" className="object-contain" priority />
          ) : (
            <ChichenPyramidMarkSvg className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-display text-xl sm:text-2xl font-bold tracking-[0.1em] ${
              isDark ? "text-white" : "text-[#2B2420]"
            }`}
          >
            {line1 || "CHICHEN ITZA"}
          </span>
          <span className="block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C9932E]">
            {line2 || "— TOURS —"}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-10 w-12 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      {customSrc ? (
        <Image src={customSrc} alt={resolvedAlt} fill priority sizes="48px" className="object-contain" />
      ) : (
        <ChichenPyramidMarkSvg className="h-full w-full" />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block truncate font-display text-xl sm:text-[1.35rem] font-bold tracking-[0.08em] leading-none ${
          isDark ? "text-white group-hover:text-[#C9932E]" : "text-[#2B2420] group-hover:text-[#A8432B]"
        }`}
      >
        {line1 || "CHICHEN ITZA"}
      </span>
      <span className="block truncate font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.28em] text-[#C9932E] leading-none mt-1">
        {line2 || "— TOURS —"}
      </span>
    </div>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
