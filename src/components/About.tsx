import { Reveal } from "@/components/Reveal";
import { GeoDeco } from "@/components/GeoDeco";

const about = "/assets/victoria-about.webp";

export function About() {
  return (
    <section id="about" className="relative overflow-visible bg-adobe py-24 md:py-36">
      {/* Corner decorations */}
      <GeoDeco
        variant="corner"
        className="absolute left-8 top-8 text-terracotta/20"
      />
      <GeoDeco
        variant="corner"
        className="absolute right-8 bottom-8 rotate-180 text-terracotta/20"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-8 md:grid-cols-2">

        {/* Left — text (opposite of Lexi which has image left) */}
        <Reveal delay={100}>
          <div>
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">Meet Victoria</p>
            <h2 className="font-display text-4xl font-light text-sand md:text-5xl">
              Warmth in the <span className="text-terra-gradient italic">Desert Light.</span>
            </h2>

            <div className="my-8">
              <GeoDeco variant="lines" className="text-terracotta/50" />
            </div>

            <div className="space-y-5 font-serif text-base leading-relaxed text-sand/60">
              <p>
                I grew up between the red rocks of Sedona and the city lights of Scottsdale — which means I understand both the value of silence and the pleasure of a beautifully curated evening. There is something the desert teaches you: patience, presence, the willingness to sit in warmth and let things unfold.
              </p>
              <p>
                I'm told I have an ease about me. I don't rush. I notice things — the way a room smells, the pause between sentences, the moment a drink needs to be refilled. I find most people are more interesting than they expect to be, and I make it a point to find that out.
              </p>
              <p>
                My calendar is intentionally limited. I prefer depth over volume — a handful of connections that mean something over a packed schedule that means nothing. If you've taken the time to find this page and read this far, you're probably someone I'd enjoy spending time with.
              </p>
              <p>
                Arizona is home. The rest of the country is an occasional pleasure. Let's talk.
              </p>
            </div>

            <p className="mt-8 font-display text-xl font-light italic text-terracotta/90">— Victoria</p>
          </div>
        </Reveal>

        {/* Right — portrait (Lexi had image on left) */}
        <Reveal>
          <div className="relative mx-auto w-3/4 sm:w-2/3 md:w-full">
            {/* Angular offset frame */}
            <div className="absolute inset-0 -translate-x-4 translate-y-4 border border-terracotta/30" />
            <img
              src={about}
              alt="Victoria West, Arizona companion"
              loading="lazy"
              width={800}
              height={1000}
              className="relative w-full object-cover"
              style={{ filter: "brightness(0.9) saturate(1.08)" }}
            />
            {/* Small corner geo elements on image */}
            <GeoDeco variant="corner" className="absolute left-3 top-3 text-terracotta/40" />
            <GeoDeco variant="corner" className="absolute right-3 bottom-3 rotate-180 text-terracotta/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
