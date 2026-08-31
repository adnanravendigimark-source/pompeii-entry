import Link from "next/link";
import Image from "next/image";

// Inline vector mark of a Pompeii Roman column and temple pediment,
// evoking the Forum's surviving colonnade with Mount Vesuvius behind it.
function PompeiiColumnMarkSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun halo behind the pediment */}
      <circle cx="50" cy="16" r="13" fill="#C9932E" fillOpacity="0.18" />

      {/* Mount Vesuvius silhouette in the background */}
      <path d="M8 40L28 14L40 32L50 20L64 40H8Z" fill="#A8432B" fillOpacity="0.22" />

      {/* Temple pediment (triangular roof) */}
      <path d="M50 12L74 34H26L50 12Z" fill="#2B2420" stroke="#2B2420" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M50 17L67 32H33L50 17Z" fill="#C9932E" fillOpacity="0.35" />

      {/* Entablature bar beneath the pediment */}
      <rect x="20" y="34" width="60" height="5" fill="#2B2420" />

      {/* Five fluted Doric columns */}
      <rect x="23" y="39" width="7" height="27" fill="#F5EDE1" stroke="#2B2420" strokeWidth="1.4" />
      <rect x="36" y="39" width="7" height="27" fill="#F5EDE1" stroke="#2B2420" strokeWidth="1.4" />
      <rect x="47" y="39" width="7" height="27" fill="#A8432B" stroke="#2B2420" strokeWidth="1.4" />
      <rect x="58" y="39" width="7" height="27" fill="#F5EDE1" stroke="#2B2420" strokeWidth="1.4" />
      <rect x="70" y="39" width="7" height="27" fill="#F5EDE1" stroke="#2B2420" strokeWidth="1.4" />

      {/* Column flutes */}
      <line x1="26.5" y1="41" x2="26.5" y2="65" stroke="#2B2420" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="39.5" y1="41" x2="39.5" y2="65" stroke="#2B2420" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="61.5" y1="41" x2="61.5" y2="65" stroke="#2B2420" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="73.5" y1="41" x2="73.5" y2="65" stroke="#2B2420" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Stepped base platform */}
      <path d="M12 66H88L84 71H16L12 66Z" fill="#2B2420" fillOpacity="0.85" />
      <path d="M5 71H95" stroke="#2B2420" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt = "Pompeii Entry Tickets",
  logoAlt = "Pompeii Entry Tickets",
  line1 = "POMPEII",
  line2 = "— TICKETS —",
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
            <PompeiiColumnMarkSvg className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-display text-xl sm:text-2xl font-bold tracking-[0.1em] ${
              isDark ? "text-white" : "text-[#2B2420]"
            }`}
          >
            {line1 || "POMPEII"}
          </span>
          <span className="block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C9932E]">
            {line2 || "— TICKETS —"}
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
        <PompeiiColumnMarkSvg className="h-full w-full" />
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
        {line1 || "POMPEII"}
      </span>
      <span className="block truncate font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.28em] text-[#C9932E] leading-none mt-1">
        {line2 || "— TICKETS —"}
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
