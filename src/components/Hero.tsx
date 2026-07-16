import { TrustBadges } from "@/components/TrustBadges";

const textShadowSmall = "0 2px 6px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)";
const textShadowLarge = "0 4px 14px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)";

export function Hero() {
  return (
    <section id="hero" className="relative h-[92vh] w-full overflow-hidden md:min-h-screen">
      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/NOK_1331-hero.webp" />
        <img
          src="/assets/images/NOK_1331-hero-mobile.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[50%_80%] md:object-[50%_65%]"
        />
      </picture>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sand to-transparent" />

      {/* Eyebrow + h1 — lower on mobile (near badges), left-anchored on desktop */}
      <div className="absolute z-10 bottom-32 left-0 right-0 px-6 text-center md:bottom-auto md:top-[20%] md:left-[6%] md:right-auto md:px-0 md:text-left lg:left-[14%]">
        <p
          className="hero-fade-in mb-3 text-xs font-medium uppercase tracking-[0.35em] text-sand-soft md:mb-5"
          style={{ textShadow: textShadowSmall, animationDelay: "150ms" }}
        >
          Luxury Traveling Companion
        </p>
        <h1
          className="hero-fade-in font-display text-6xl leading-[1.02] tracking-tight text-sand-soft"
          style={{ textShadow: textShadowLarge, animationDelay: "400ms" }}
        >
          Alyssa May
        </h1>

        {/* Badges — under the heading, left-aligned, smaller (desktop only) */}
        <div className="mt-8 hidden md:block">
          <TrustBadges align="start" size="sm" className="" delay={700} />
        </div>
      </div>

      {/* Badges — centered near the bottom (mobile only) */}
      <div className="absolute z-10 bottom-10 left-0 right-0 flex justify-center md:hidden">
        <TrustBadges delay={700} />
      </div>
    </section>
  );
}
