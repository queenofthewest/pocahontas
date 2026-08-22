import { Reveal } from "@/components/Reveal";

const rates = [
  { label: "One hour", price: "$700" },
  { label: "90 minutes", price: "$1,000" },
  { label: "Two hours", price: "$1,300" },
  { label: "Three hours", price: "$1,800" },
  { label: "Four hours", price: "$2,200" },
  { label: "Six hours", price: "$3,000" },
  { label: "Twelve hours", price: "$5,000" },
  { label: "Couples", price: "$1,000/hr" },
];

const etiquette = [
  "Donations are settled prior to engagement, placed discreetly in an envelope.",
  "Freshly showered and in good spirits — I arrive prepared and expect the same.",
  "Details of our time together are not discussed in written communications.",
  "Cancellations within 24 hours incur a $200 fee. No-shows are blacklisted.",
  "A deposit may or may not be required. Please inquire.",
];

const extended = [
  "Fly Me To You (FMTY) requires a minimum of 4 hours.",
  "Travel costs are paid as a deposit.",
  "Deposits are accepted via Bitcoin, CashApp, or Airline/Rideshare Gift Cards (FMTY only).",
  "Dates 4+ hours require a deposit and a dinner reservation.",
  "For overnights, I require at least 7 hours of uninterrupted sleep.",
  "Time extensions are welcome upon availability at +$500/hr.",
];

function CardHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-2xl text-espresso">{title}</h3>
    </div>
  );
}

export function Booking() {
  return (
    <section id="booking" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-10 text-center md:mb-16">
          <h2>
            <img src="/assets/logo/consideration.webp" alt="Consideration" className="mx-auto h-auto w-72 md:w-80" />
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Rates */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-terracotta/20 bg-sand-deep p-8">
              <CardHeader title="Investment" />

              <ul className="space-y-0">
                {rates.map((r) => (
                  <li key={r.label} className="flex items-baseline justify-between border-b border-espresso/10 py-2.5">
                    <span className="text-xs uppercase tracking-[0.12em] text-terracotta/80">{r.label}</span>
                    <span className="font-serif text-sm text-espresso/80">{r.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Card 2: Etiquette */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-2xl border border-terracotta/20 bg-sand-deep p-8">
              <CardHeader title="Etiquette" />
              <ul className="space-y-4">
                {etiquette.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-espresso/65">
                    <span className="mt-[3px] shrink-0 text-terracotta/50">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Card 3: Extended Dates */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col rounded-2xl border border-terracotta/20 bg-sand-deep p-8">
              <CardHeader title="Extended Dates" />
              <ul className="space-y-4">
                {extended.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-espresso/65">
                    <span className="mt-[3px] shrink-0 text-terracotta/50">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
