import { Reveal } from "@/components/Reveal";
import { GeoDeco } from "@/components/GeoDeco";

const tiers = [
  {
    name: "Online Consulting",
    note: "Worldwide",
    rates: [
      { label: "1 Hour", price: "$600" },
      { label: "90 Minutes", price: "$800" },
      { label: "2 Hours", price: "$1,100" },
      { label: "3 Hours", price: "$1,500" },
    ],
  },
  {
    name: "Business Consulting",
    note: "Scottsdale",
    rates: [
      { label: "2 Hours", price: "$1,300" },
      { label: "3 Hours", price: "$1,700" },
      { label: "Half-Day · 4 Hrs", price: "$2,100" },
      { label: "Full-Day · 6 Hrs", price: "$2,600" },
    ],
  },
  {
    name: "Photo Shoot",
    note: "Scottsdale / Phoenix",
    rates: [
      { label: "1 Hour", price: "$600" },
      { label: "90 Minutes", price: "$800" },
      { label: "2 Hours", price: "$1,100" },
      { label: "3 Hours", price: "$1,500" },
    ],
  },
];

export function Booking() {
  return (
    <section id="booking" className="bg-adobe-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="mb-16">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">Appointments</p>
          <h2 className="font-display text-4xl font-light text-sand md:text-5xl">Investment</h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-terracotta to-transparent" />
        </Reveal>

        {/* Vertical stacked layout — different from Lexi's 3-column cards */}
        <div className="space-y-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div className="border border-terracotta/20 bg-adobe/40 transition-all duration-300 hover:border-terracotta/50 hover:bg-adobe/70">
                {/* Tier header */}
                <div className="flex items-center justify-between border-b border-terracotta/15 px-8 py-5">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs text-terracotta/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-light text-sand">{tier.name}</h3>
                  </div>
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-sand/35">{tier.note}</p>
                </div>

                {/* Rates row */}
                <div className="grid grid-cols-2 divide-x divide-terracotta/10 sm:grid-cols-4">
                  {tier.rates.map((r) => (
                    <div key={r.label} className="px-6 py-5">
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-sand/40">{r.label}</p>
                      <p className="mt-2 font-display text-lg font-light text-terracotta-soft">{r.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3 text-terracotta/50">
            <GeoDeco variant="diamond" className="text-terracotta/40" />
          </div>
          <a
            href="#contact"
            className="border border-terracotta bg-terracotta px-12 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-sand transition-all duration-300 hover:bg-transparent hover:text-terracotta"
          >
            Begin an Inquiry
          </a>
          <p className="text-sm text-sand/40">
            A <span className="text-terracotta/80">30% deposit</span> confirms our appointment.{" "}
            Screening required for all new connections.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
