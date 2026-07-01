import { Reveal } from "@/components/Reveal";

const tiers = [
  {
    name: "Incall",
    note: "Private residence — Scottsdale",
    rates: [
      { label: "1 Hour", price: "$600" },
      { label: "90 Minutes", price: "$800" },
      { label: "2 Hours", price: "$1,100" },
      { label: "3 Hours", price: "$1,500" },
    ],
  },
  {
    name: "Outcall",
    note: "Your hotel or residence — Phoenix metro",
    rates: [
      { label: "2 Hours", price: "$1,300" },
      { label: "3 Hours", price: "$1,700" },
      { label: "Dinner Date · 4 Hrs", price: "$2,100" },
      { label: "Evening · 6 Hrs", price: "$2,600" },
    ],
  },
  {
    name: "Extended",
    note: "Overnight, travel & multi-day",
    rates: [
      { label: "Overnight · 12 Hrs", price: "$3,800" },
      { label: "Full Day · 24 Hrs", price: "$6,500" },
      { label: "Weekend · 48 Hrs", price: "$9,500" },
      { label: "Fly Me To You", price: "From $4,500" },
    ],
  },
];

export function Booking() {
  return (
    <section id="booking" className="bg-gradient-to-b from-sand to-sand-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Arrangements</p>
          <h2 className="font-display text-4xl text-espresso md:text-5xl">Investment</h2>
          <div className="terra-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-terracotta/30 bg-sand-soft/60 p-8 transition-all duration-300 hover:border-terracotta hover:bg-sand-soft hover:shadow-xl hover:shadow-terracotta/10">
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="font-display text-2xl text-terra-gradient">{tier.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-espresso/40">{tier.note}</p>
                  <ul className="mt-6 space-y-4">
                    {tier.rates.map((r) => (
                      <li
                        key={r.label}
                        className="flex items-center justify-between border-b border-terracotta/15 pb-3 text-sm"
                      >
                        <span className="text-espresso/65">{r.label}</span>
                        <span className="font-serif text-lg text-espresso">{r.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-terracotta px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-soft transition-transform hover:scale-105"
          >
            Request a Date
          </a>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-espresso/45">
            A <span className="text-terracotta">30% deposit</span> secures our time together.
            Couples add 50%. Screening required for all new friends — see verification options below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
