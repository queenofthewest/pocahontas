import { Reveal } from "@/components/Reveal";

const rates = [
  { label: "One hour", price: "$800" },
  { label: "90 minutes", price: "$1,000" },
  { label: "Two hours", price: "$1,300" },
  { label: "Three hours", price: "$1,800" },
  { label: "Four hours", price: "$2,200" },
  { label: "Six hours", price: "$3,000" },
  { label: "Twelve hours", price: "$5,000" },
  { label: "Couples", price: "$1,000/hr" },
];

export function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/images/las-vegas/IseeSexy_OliviaC_WEB_4.webp"
        />
        <img
          src="/assets/images/las-vegas/VWest21.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </picture>
      {/* Overlay so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-sand/40" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-0 px-6 md:grid-cols-2">
        {/* Left — transparent, shows background photo */}
        <div className="hidden md:block" />

        {/* Right — semi-transparent rates card */}
        <Reveal>
          <div className="rounded-2xl border border-terracotta/20 bg-sand/70 p-8 backdrop-blur-sm md:p-12">
            <div className="terra-divider mb-6 w-24" />
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Arrangements</p>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">Consideration</h2>

            <ul className="mt-8 space-y-0">
              {rates.map((r) => (
                <li
                  key={r.label}
                  className="flex items-baseline gap-2 border-b border-espresso/10 py-3"
                >
                  <span className="w-36 shrink-0 text-xs uppercase tracking-[0.15em] text-terracotta/80">
                    {r.label}
                  </span>
                  <span className="flex-1 border-b border-dotted border-espresso/25 mb-[3px]" />
                  <span className="shrink-0 font-serif text-base text-espresso/80">{r.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 text-sm text-espresso/60">
              <div>
                <p className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-terracotta/70">
                  Local Admirers — Scottsdale / Phoenix
                </p>
                <p>Incall +$150 <span className="text-espresso/40">(day)</span> · +$200 <span className="text-espresso/40">(evening)</span></p>
              </div>
              <div>
                <p className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-terracotta/70">
                  While on Tour
                </p>
                <p>Outcall +$100 <span className="text-espresso/40">(travel)</span></p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block border border-terracotta px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-terracotta transition-all duration-300 hover:bg-terracotta hover:text-sand-soft"
              >
                Book Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
