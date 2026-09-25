import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const IMG = "/assets/images";
const SPRING = `${IMG}/spring-2026`;

type ImageItem = { src: string; title: string; portrait?: boolean };

const summerImages: ImageItem[] = [
  { src: `${IMG}/gallery-01.webp`, title: "Alyssa I" },
  { src: `${IMG}/gallery-02.webp`, title: "Alyssa II" },
  { src: `${IMG}/gallery-03.webp`, title: "Alyssa III" },
  { src: `${IMG}/gallery-04.webp`, title: "Alyssa IV" },
  { src: `${IMG}/gallery-05.webp`, title: "Alyssa V" },
  { src: `${IMG}/gallery-06.webp`, title: "Alyssa VI" },
  { src: `${IMG}/gallery-07.webp`, title: "Alyssa VII" },
  { src: `${IMG}/gallery-08.webp`, title: "Alyssa VIII" },
  { src: `${IMG}/gallery-09.webp`, title: "Alyssa IX" },
  { src: `${IMG}/gallery-10.webp`, title: "Alyssa X" },
  { src: `${IMG}/gallery-11.webp`, title: "Alyssa XI" },
];

const springImages: ImageItem[] = [
  { src: `${SPRING}/gallery-01.webp`, title: "Alyssa I" },
  { src: `${SPRING}/gallery-02.webp`, title: "Alyssa II" },
  { src: `${SPRING}/gallery-03.webp`, title: "Alyssa III" },
  { src: `${SPRING}/gallery-04.webp`, title: "Alyssa IV" },
  { src: `${SPRING}/gallery-05.webp`, title: "Alyssa V" },
  { src: `${SPRING}/gallery-06.webp`, title: "Alyssa VI" },
  { src: `${SPRING}/gallery-07.webp`, title: "Alyssa VII", portrait: true },
  { src: `${SPRING}/gallery-08.webp`, title: "Alyssa VIII" },
  { src: `${SPRING}/gallery-09.webp`, title: "Alyssa IX" },
  { src: `${SPRING}/gallery-10.webp`, title: "Alyssa X" },
  { src: `${SPRING}/gallery-11.webp`, title: "Alyssa XI" },
  { src: `${SPRING}/gallery-12.webp`, title: "Alyssa XII" },
  { src: `${SPRING}/gallery-13.webp`, title: "Alyssa XIII" },
  { src: `${SPRING}/gallery-14.webp`, title: "Alyssa XIV" },
  { src: `${SPRING}/gallery-15.webp`, title: "Alyssa XV" },
  { src: `${SPRING}/hero-desktop.webp`, title: "Alyssa XVI" },
  { src: `${SPRING}/hero-mobile.webp`, title: "Alyssa XVII", portrait: true },
  { src: `${SPRING}/feature-one-mobile.webp`, title: "Alyssa XVIII", portrait: true },
  { src: `${SPRING}/feature-two-desktop.webp`, title: "Alyssa XIX" },
  { src: `${SPRING}/feature-two-mobile.webp`, title: "Alyssa XX", portrait: true },
  { src: `${SPRING}/feature-three-desktop.webp`, title: "Alyssa XXI" },
  { src: `${SPRING}/feature-three-mobile.webp`, title: "Alyssa XXII", portrait: true },
  { src: `${SPRING}/feature-footer-desktop.webp`, title: "Alyssa XXIII" },
  { src: `${SPRING}/feature-footer-mobile.webp`, title: "Alyssa XXIV", portrait: true },
];

const seasons = [
  { id: "summer", label: "Summer 2026", images: summerImages },
  { id: "spring", label: "Spring 2026", images: springImages },
] as const;

function GalleryTile({
  img,
  index,
  onOpen,
}: {
  img: ImageItem;
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
  const [seasonId, setSeasonId] = useState<(typeof seasons)[number]["id"]>("summer");
  const images = seasons.find((s) => s.id === seasonId)!.images;
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
        <h2>
          <img src="/assets/logo/gallery.webp" alt="Gallery" className="mx-auto h-auto w-64 md:w-72" />
        </h2>
      </Reveal>

      {/* Season toggle */}
      <Reveal className="mb-8 flex justify-center gap-3">
        {seasons.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSeasonId(s.id);
              setActive(null);
            }}
            className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              seasonId === s.id
                ? "border-terracotta bg-terracotta text-sand-soft"
                : "border-terracotta/30 text-terracotta/70 hover:border-terracotta/60"
            }`}
          >
            {s.label}
          </button>
        ))}
      </Reveal>

      {/* Staggered 2-col grid on mobile (uniform 2:3 crop), masonry columns from md up */}
      <div className="px-4 sm:px-6">
        <div key={seasonId} className="grid grid-cols-2 gap-2 sm:gap-3 md:block md:columns-3 lg:columns-4">
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
