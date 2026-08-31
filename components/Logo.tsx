import Link from "next/link";
import Image from "next/image";

// Classical Roman / Greek Temple facade matching the brand logo design:
// Triangular pediment, horizontal entablature, 4 classical columns, and stepped base.
function PompeiiTempleIcon({ className = "h-8 w-10 text-[#243010]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 46"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Triangular Pediment (Roof) */}
      <path d="M28 2L54 15H2L28 2Z" />
      {/* Inner Pediment Recess */}
      <path d="M28 6.5L48 14H8L28 6.5Z" fill="white" fillOpacity="0.35" />
      {/* Horizontal Entablature / Architrave Bar */}
      <rect x="2" y="16.5" width="52" height="3.5" rx="0.5" />
      {/* 4 Classical Columns with capitals and bases */}
      <rect x="6.5" y="21.5" width="5.5" height="17" rx="0.5" />
      <rect x="18" y="21.5" width="5.5" height="17" rx="0.5" />
      <rect x="32.5" y="21.5" width="5.5" height="17" rx="0.5" />
      <rect x="44" y="21.5" width="5.5" height="17" rx="0.5" />
      {/* Upper Stepped Base */}
      <rect x="4" y="39.5" width="48" height="2.5" rx="0.5" />
      {/* Lower Base Platform */}
      <rect x="1" y="42.5" width="54" height="3" rx="0.5" />
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
  line2 = "ENTRY TICKETS",
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
      <Link href="/" className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        <span className="relative block h-10 w-12 transition-transform duration-300 hover:scale-105">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="80px" className="object-contain" priority />
          ) : (
            <PompeiiTempleIcon className={`h-full w-full ${isDark ? "text-white" : "text-[#243010]"}`} />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-serif text-xl sm:text-2xl font-bold tracking-[0.08em] ${
              isDark ? "text-white" : "text-[#243010]"
            }`}
          >
            {line1 || "POMPEII"}
          </span>
          <span className="block font-sans text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#B58A38]">
            {line2 || "ENTRY TICKETS"}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-8 sm:h-9 w-10 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
      {customSrc ? (
        <Image src={customSrc} alt={resolvedAlt} fill priority sizes="48px" className="object-contain" />
      ) : (
        <PompeiiTempleIcon className={`h-full w-full ${isDark ? "text-white" : "text-[#243010]"}`} />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block truncate font-serif text-xl sm:text-[1.4rem] font-bold tracking-[0.06em] leading-none ${
          isDark ? "text-white group-hover:text-[#B58A38]" : "text-[#243010] group-hover:text-[#38481D]"
        }`}
      >
        {line1 || "POMPEII"}
      </span>
      <span className="block truncate font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#B58A38] leading-none mt-1">
        {line2 || "ENTRY TICKETS"}
      </span>
    </div>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-3 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
