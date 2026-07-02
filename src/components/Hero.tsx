import { TrustBadges } from "@/components/TrustBadges";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed background image — no opacity reduction */}
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

      {/* Minimal bottom fade only — for text legibility */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sand to-transparent" />

      {/* Content anchored to bottom */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-end px-6 pb-20 text-center md:max-w-4xl md:pb-28">
        <p
          className="mb-5 text-xs uppercase tracking-[0.35em] text-sand-soft"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.5)" }}
        >
          Scottsdale · Phoenix · Nationwide
        </p>
        <h1
          className="font-display text-5xl leading-[1.02] tracking-tight text-terra-gradient sm:text-6xl lg:text-7xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.4)" }}
        >
          Victoria West
        </h1>
        <div className="terra-divider mx-auto my-6 w-40" />

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full border border-terracotta/70 bg-terracotta/80 px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-sand-soft backdrop-blur-sm transition-transform hover:scale-105"
          >
            Book an Encounter
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-sand-soft transition-colors hover:text-terracotta"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
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
