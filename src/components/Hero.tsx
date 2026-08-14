import { TrustBadges } from "@/components/TrustBadges";

const textShadowSmall = "0 2px 6px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)";

export function Hero() {
  return (
    <section id="hero" className="relative z-10 h-[85vh] w-full md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet="/assets/images/hero-desktop.webp" />
          <img
            src="/assets/images/feature-three-mobile.webp"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full scale-[1.15] object-cover object-[50%_95%] translate-y-[-6%] md:translate-y-0 md:scale-100 md:object-[50%_92%]"
          />
        </picture>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Eyebrow + h1 — lower on mobile (near badges), left-anchored on desktop, aligned with the navbar container */}
      <div className="absolute z-10 inset-x-0 bottom-32 md:bottom-auto md:top-[20%]">
        <div className="mx-auto max-w-7xl px-6 text-center md:text-left">
          {/* Mobile: logo above eyebrow; desktop: eyebrow above logo */}
          <div className="flex flex-col-reverse gap-3 md:flex-col md:gap-5">
            <p
              className="hero-fade-in text-xs font-medium uppercase tracking-[0.35em] text-sand-soft"
              style={{ textShadow: textShadowSmall, animationDelay: "150ms" }}
            >
              Luxury Traveling Companion
            </p>
            <h1 className="hero-fade-in mx-auto md:mx-0" style={{ animationDelay: "400ms" }}>
              <img
                src="/assets/logo/alyssa-may-light.webp"
                alt="Alyssa May"
                className="h-auto w-80 drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] md:w-80 lg:w-[26rem]"
              />
            </h1>
          </div>

          {/* Badges — under the heading, left-aligned, smaller (desktop only) */}
          <div className="mt-8 hidden md:block">
            <TrustBadges align="start" size="sm" className="" delay={700} />
          </div>
        </div>
      </div>

      {/* Badges — centered near the bottom (mobile only) */}
      <div className="absolute z-10 bottom-10 left-0 right-0 flex justify-center px-6 md:hidden">
        <TrustBadges delay={700} />
      </div>

      {/* Scroll cue — straddles the seam into the next section */}
      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-terracotta transition-colors hover:text-terracotta-soft"
      >
        <span className="text-xs font-medium uppercase tracking-[0.35em]">Enter</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 animate-bounce"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
