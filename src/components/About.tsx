import { Reveal } from "@/components/Reveal";

const about = "/assets/images/las-vegas/ISEESEXY_VictoriaWest_Jun23_WEB_9.webp";

export function About() {
  return (
    <section id="about" className="relative top-20 mb-16 overflow-visible bg-sand-deep py-24 md:mb-40 md:py-32">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 md:px-12 md:grid-cols-[46%_54%]">
        <Reveal>
          <div className="relative mx-auto w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.5rem] border border-terracotta/30" />
            <img
              src={about}
              alt="Portrait of Victoria West"
              loading="lazy"
              width={800}
              height={1000}
              className="relative w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="md:pl-6">
            <div className="terra-divider mb-6 w-24" />
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Meet Victoria</p>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">
              Hey there, <span className="text-terra-gradient italic">Handsome.</span>
            </h2>
            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-espresso/65">
              <p>
                It's lovely to meet you. My name is Victoria and I am a Southern California transplant in the beautiful desert of Arizona I now call my home. Let me tell you a little bit about myself.   
              </p>
              <p>
               I move at a slow pace by nature. I ask real questions and I remember the answers. I believe the most memorable connections happen in the in-between moments — a comfortable silence, a shared laugh, the kind of ease that can't be manufactured.
              </p>
              <p>
                I keep my calendar intentionally light because I think genuine presence is a gift worth protecting — for both of us. No rushing, no performance, just two people genuinely enjoying each other's company.
              </p>
              <p>
                If you're looking for something transactional, I'm not the right fit. But if you want warmth, unhurried conversation, and the rare pleasure of feeling truly at ease — I think we'll get along beautifully.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl italic text-terracotta/80">— Victoria</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
