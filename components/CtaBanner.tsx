import { getHomepageContent } from "@/lib/homepage";

export default async function CtaBanner() {
  const { sections } = await getHomepageContent();
  const s = sections.ctaBanner;

  return (
    <section className="py-14 sm:py-16 bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#243010] px-6 py-8 sm:px-10 sm:py-10 shadow-xl shadow-black/15 border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B58A38] border border-white/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 21h18M6 21V7M10 21V7M14 21V7M18 21V7M4 7h16M12 3l8 4H4l8-4z" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {s.heading}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-white/80">{s.subtext}</p>
              </div>
            </div>

            {/* Right Action Button */}
            <a
              href={s.buttonHref}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#B58A38] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#A3792E] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{s.buttonText}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
