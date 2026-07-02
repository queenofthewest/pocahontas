import { TrustBadges } from "@/components/TrustBadges";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_3.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[50%_65%]"
      />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sand to-transparent" />

      {/* Eyebrow + h1 — always left-anchored so it never crosses her face */}
      <div className="absolute z-10 top-[20%] left-[6%] sm:left-[10%] md:left-[20%]">
        <p
          className="mb-5 text-xs uppercase tracking-[0.35em] text-sand-soft"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.5)" }}
        >
          Scottsdale · Phoenix · Nationwide
        </p>
        <h1
          className="font-display text-4xl leading-[1.02] tracking-tight text-terra-gradient sm:text-5xl lg:text-7xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.4)" }}
        >
          Victoria West
        </h1>
        <div className="terra-divider my-6 w-40" />
      </div>

      {/* Badges — bottom center, bigger on all sizes */}
      <div className="absolute z-10 bottom-10 left-0 right-0 flex justify-center md:bottom-12">
        <TrustBadges />
      </div>
    </section>
  );
}
