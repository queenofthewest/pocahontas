import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const IMG = "/assets/images";

const images = [
  { src: `${IMG}/gallery-01.webp`, title: "Alyssa I" },
  { src: `${IMG}/gallery-02.webp`, title: "Alyssa II" },
  { src: `${IMG}/gallery-03.webp`, title: "Alyssa III" },
  { src: `${IMG}/gallery-04.webp`, title: "Alyssa IV" },
  { src: `${IMG}/gallery-05.webp`, title: "Alyssa V" },
  { src: `${IMG}/gallery-06.webp`, title: "Alyssa VI" },
  { src: `${IMG}/gallery-07.webp`, title: "Alyssa VII", portrait: true },
  { src: `${IMG}/gallery-08.webp`, title: "Alyssa VIII" },
  { src: `${IMG}/gallery-09.webp`, title: "Alyssa IX" },
  { src: `${IMG}/gallery-10.webp`, title: "Alyssa X" },
  { src: `${IMG}/gallery-11.webp`, title: "Alyssa XI" },
  { src: `${IMG}/gallery-12.webp`, title: "Alyssa XII" },
  { src: `${IMG}/gallery-13.webp`, title: "Alyssa XIII" },
  { src: `${IMG}/gallery-14.webp`, title: "Alyssa XIV" },
  { src: `${IMG}/gallery-15.webp`, title: "Alyssa XV" },
  { src: `${IMG}/hero-desktop.webp`, title: "Alyssa XVI" },
  { src: `${IMG}/hero-mobile.webp`, title: "Alyssa XVII", portrait: true },
  { src: `${IMG}/feature-one-desktop.webp`, title: "Alyssa XVIII" },
  { src: `${IMG}/feature-one-mobile.webp`, title: "Alyssa XIX", portrait: true },
  { src: `${IMG}/feature-two-desktop.webp`, title: "Alyssa XX" },
  { src: `${IMG}/feature-two-mobile.webp`, title: "Alyssa XXI", portrait: true },
  { src: `${IMG}/feature-three-desktop.webp`, title: "Alyssa XXII" },
  { src: `${IMG}/feature-three-mobile.webp`, title: "Alyssa XXIII", portrait: true },
  { src: `${IMG}/feature-footer-desktop.webp`, title: "Alyssa XXIV" },
  { src: `${IMG}/feature-footer-mobile.webp`, title: "Alyssa XXV", portrait: true },
];

function GalleryTile({
  img,
  index,
  onOpen,
}: {
  img: (typeof images)[number];
  index: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "break-inside-avoid md:mb-3 gallery-pop",
        visible && "gallery-pop-in",
        index % 2 === 1 ? "mt-8 md:mt-0" : ""
      )}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      <button
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-lg border border-terracotta/15 transition-all duration-300 hover:border-terracotta/50"
      >
        <img
          src={img.src}
          alt={img.title}
          loading="lazy"
          className={`aspect-[2/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.portrait ? "" : "md:aspect-auto"}`}
        />
      </button>
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)),
    [images.length]
  );

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
    <section id="portfolio" className="relative -mb-20 bg-sand py-24 md:py-32">
      {/* Section header */}
      <Reveal className="mb-10 text-center">
        <h2 className="font-display text-4xl text-espresso md:text-5xl">Gallery</h2>
        <div className="terra-divider mx-auto mt-6 w-32" />
      </Reveal>

      {/* Staggered 2-col grid on mobile (uniform 2:3 crop), masonry columns from md up */}
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:block md:columns-3 lg:columns-4">
          {images.map((img, i) => (
            <GalleryTile key={img.title} img={img} index={i} onOpen={() => setActive(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-sand/96 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-sand text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-sand-soft"
            onClick={close}
          >
            ✕
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-white text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-white md:left-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <figure className="max-h-[85vh] text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].title}
              className="mx-auto max-h-[78vh] rounded-lg border border-terracotta/20 object-contain"
            />
          </figure>
          <button
            aria-label="Next"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 bg-white text-2xl text-terracotta transition-colors hover:bg-terracotta hover:text-white md:right-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
