import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const g1 = "/assets/victoria-gallery1.webp";
const g2 = "/assets/victoria-gallery2.webp";
const g3 = "/assets/victoria-gallery3.webp";
const g4 = "/assets/victoria-gallery4.webp";
const g5 = "/assets/victoria-gallery5.webp";
const g6 = "/assets/victoria-gallery6.webp";

const images = [
  { src: g1, category: "Desert", title: "Golden Hour", span: "lg:col-span-2" },
  { src: g2, category: "Portrait", title: "Still Life", span: "" },
  { src: g3, category: "Editorial", title: "Adobe & Light", span: "" },
  { src: g4, category: "Portrait", title: "Warm Study", span: "" },
  { src: g5, category: "Lifestyle", title: "Desert Evening", span: "" },
  { src: g6, category: "Editorial", title: "Terracotta", span: "lg:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((a) => (a === null ? a : (a + 1) % images.length)), []);
  const prev = useCallback(() => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-adobe-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <Reveal className="mb-16">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-terracotta/80">Portfolio</p>
          <h2 className="font-display text-4xl font-light text-sand md:text-5xl">Gallery</h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-terracotta to-transparent" />
        </Reveal>

        {/* Grid with mixed spans — more editorial than Lexi's */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.title}
              delay={(i % 3) * 100}
              className={`${img.span} ${i === 1 || i === 4 ? "mt-8 lg:mt-0" : ""}`}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden border border-terracotta/10 transition-all duration-500 hover:border-terracotta/50"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-auto"
                  style={{ filter: "saturate(1.1) brightness(0.88)" }}
                />
                {/* Category label on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-adobe-deep/90 to-transparent px-4 pb-4 pt-8 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-terracotta/90">{img.category}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-adobe-deep/97 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-terracotta/40 text-lg text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta hover:text-sand"
            onClick={close}
          >
            ✕
          </button>

          <button
            aria-label="Previous"
            className="absolute left-4 text-3xl text-terracotta hover:text-terracotta-soft md:left-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <figure className="max-h-[85vh] text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].title}
              className="mx-auto max-h-[78vh] border border-terracotta/20 object-contain"
            />
          </figure>

          <button
            aria-label="Next"
            className="absolute right-4 text-3xl text-terracotta hover:text-terracotta-soft md:right-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
