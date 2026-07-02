import { TrustBadges } from "@/components/TrustBadges";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_3.webp"
        />
        <img
          src="/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_5.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top md:object-bottom"
        />
      </picture>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sand to-transparent" />

      {/* Text block: near-top centered on mobile, left-anchored on desktop */}
      <div className="absolute z-10 top-[12%] left-0 right-0 px-6 text-center md:top-[20%] md:left-[30%] md:right-auto md:px-0 md:text-left">
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
        <div className="terra-divider my-6 w-40 md:mx-0 mx-auto" />
        <TrustBadges />
      </div>
    </section>
  );
}
