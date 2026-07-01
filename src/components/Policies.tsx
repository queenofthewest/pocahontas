import { Reveal } from "@/components/Reveal";

const policies = [
  {
    title: "First Contact",
    body: "All inquiries are answered within 48 hours. Please include your name, desired date, duration, and preferred verification method. Discretion is assured — your privacy is as important as mine.",
  },
  {
    title: "Confirmation",
    body: "Dates are confirmed upon receipt of a 30% deposit. Balance is settled at the beginning of our time together, placed discreetly in an envelope or book. No discussion of rates once we meet.",
  },
  {
    title: "Etiquette",
    body: "Freshly showered and in good spirits — I arrive prepared and expect the same. Respectful communication, generosity, and good hygiene are non-negotiable. Our time is unrushed; please don't watch the clock.",
  },
  {
    title: "Cancellation",
    body: "Reschedules are accommodated once with 72 hours notice. Cancellations forfeit the deposit. In the rare event I must cancel, your deposit is fully refunded. No-shows are blacklisted.",
  },
];

export function Policies() {
  return (
    <section id="policies" className="relative overflow-visible bg-sand-deep py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Please Note</p>
          <h2 className="font-display text-4xl text-espresso md:text-5xl">Etiquette</h2>
          <div className="terra-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-terracotta/20 bg-terracotta/10 sm:grid-cols-2">
          {policies.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full bg-sand-deep p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-2xl text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-terracotta/25" />
                </div>
                <h3 className="font-display text-xl text-espresso">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
