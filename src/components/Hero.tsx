import { TrustBadges } from "@/components/TrustBadges";
import { GeoDeco } from "@/components/GeoDeco";

const portrait = "/assets/victoria-hero.webp";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Warm desert gradient background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 40%, oklch(0.20 0.04 45) 0%, var(--adobe-deep) 70%)",
        }}
      />

      {/* Subtle sun-ray lines top-right */}
      <GeoDeco variant="rays" className="absolute right-0 top-0 z-[1] opacity-10" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-40 bg-gradient-to-t from-adobe-deep to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-0 px-8 pt-24 pb-16 md:grid-cols-2 md:gap-16 md:pt-0">

        {/* Left — text block */}
        <div className="order-2 md:order-1">
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">
            Scottsdale · Phoenix · Nationwide
          </p>

          <h1 className="font-display text-5xl font-light leading-[1.05] text-sand sm:text-6xl lg:text-7xl">
            Victoria
            <br />
            <span className="text-terra-gradient italic">West</span>
          </h1>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px w-12 bg-terracotta/60" />
            <GeoDeco variant="diamond" className="text-terracotta/60" />
            <div className="h-px w-12 bg-terracotta/60" />
          </div>

          <p className="max-w-sm font-serif text-base leading-relaxed text-sand/60 italic">
            A considered consultation for pesonal and business entities.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="border border-terracotta bg-terracotta px-8 py-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-sand transition-all duration-300 hover:bg-transparent hover:text-terracotta"
            >
              Request an Appointment or Photo Shoot
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-sand/50 transition-colors hover:text-terracotta"
            >
              View Gallery
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <TrustBadges />
        </div>

        {/* Right — portrait */}
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* Offset border frame — angular, not rounded */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-terracotta/30" />
            {/* Second inner frame */}
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 border border-ochre/15" />
            <img
              src={portrait}
              alt="Victoria West, Arizona consultant and model"
              width={800}
              height={1000}
              className="relative aspect-[3/4] w-full object-cover shadow-2xl shadow-adobe-deep/80"
              style={{ filter: "brightness(0.92) saturate(1.05)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
