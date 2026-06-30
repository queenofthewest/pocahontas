import { GeoDeco } from "@/components/GeoDeco";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-terracotta/15 bg-adobe-deep pt-12 pb-8">
      {/* Subtle geo accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-10">
        <GeoDeco variant="rays" className="h-48 w-96 -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 px-8 text-center">
        <a href="#hero" className="font-display text-2xl font-light tracking-widest text-terra-gradient md:text-3xl">
          Victoria West
        </a>

        <div className="flex items-center gap-3 text-terracotta/30">
          <div className="h-px w-16 bg-terracotta/30" />
          <GeoDeco variant="diamond" className="text-terracotta/30" />
          <div className="h-px w-16 bg-terracotta/30" />
        </div>

        <div className="mt-2 flex flex-col items-center gap-2 text-xs text-sand/40">
          <p>© 2026 Victoria West. She / Her.</p>
          <p>This is a fictional profile designed by</p>
          <a
            href="https://heauxdesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta/40 transition-colors hover:text-terracotta"
          >
            Heaux Designs LLC
          </a>
          <p className="italic text-sand/25">Where luxury meets security.</p>
        </div>
      </div>
    </footer>
  );
}
