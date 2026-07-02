import { TrustBadges } from "@/components/TrustBadges";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed background image */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_3.webp"
        />
        <img
          src="/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_5.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </picture>

      {/* Gradient overlay — light at top for navbar, heavier at bottom for text */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/50 via-transparent to-sand" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-sand/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-end px-6 pb-20 text-center md:max-w-4xl md:pb-28">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-terracotta/90 drop-shadow-sm">
          Scottsdale · Phoenix · Nationwide
        </p>
        <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-terra-gradient drop-shadow-sm sm:text-6xl lg:text-7xl">
          Victoria West
        </h1>
        <div className="terra-divider mx-auto my-6 w-40" />

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-terracotta px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand-soft transition-transform hover:scale-105"
          >
            Book an Encounter
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-espresso/70 transition-colors hover:text-terracotta"
          >
            See Gallery
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <TrustBadges />
      </div>
    </section>
  );
}
