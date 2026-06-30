import { Reveal } from "@/components/Reveal";
import { GeoDeco } from "@/components/GeoDeco";

const policies = [
  {
    title: "First Contact",
    body: "All inquiries receive a personal response within 48 hours. Please include your name, desired date, duration, and preferred verification method. Your privacy is treated with the same discretion I expect for my own.",
  },
  {
    title: "Confirmation",
    body: "Dates are confirmed upon receipt of a 30% deposit. The remaining balance is settled discreetly at the start of our time together — placed in an envelope, no discussion needed. What happens between us stays between us.",
  },
  {
    title: "Etiquette",
    body: "Arrive freshly groomed and in good spirits — I do the same. I ask for respectful communication, generosity in the truest sense, and patience. Our time is unhurried; please leave the clock at the door.",
  },
  {
    title: "Cancellations",
    body: "Reschedules are graciously accommodated once with 72 hours notice. Late cancellations forfeit the deposit. Should I ever need to cancel, your deposit is returned without question. No-shows are not invited back.",
  },
];

export function Policies() {
  return (
    <section id="policies" className="relative overflow-hidden bg-adobe py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-8">
        <Reveal className="mb-16">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">Please Note</p>
          <h2 className="font-display text-4xl font-light text-sand md:text-5xl">Etiquette</h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-terracotta to-transparent" />
        </Reveal>

        {/* Single-column numbered list — more editorial than Lexi's 2x2 grid */}
        <div className="space-y-0">
          {policies.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group flex gap-8 border-b border-terracotta/10 py-10 last:border-0 transition-colors hover:border-terracotta/25">
                {/* Number */}
                <div className="flex-shrink-0 pt-1">
                  <span className="font-display text-3xl font-light text-terracotta/20 group-hover:text-terracotta/40 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <GeoDeco variant="diamond" className="text-terracotta/50" />
                    <h3 className="font-display text-xl font-light text-sand">{p.title}</h3>
                  </div>
                  <p className="font-serif text-sm leading-relaxed text-sand/55 italic">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
