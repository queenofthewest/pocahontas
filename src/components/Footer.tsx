import { TrustBadges } from "@/components/TrustBadges";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-terracotta/15 bg-sand pt-10 pb-7 md:pt-12 md:pb-8">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <a href="#hero">
          <img
            src="/assets/logo/alyssa-may-dark.webp"
            alt="Alyssa May"
            className="h-auto w-64 md:w-80"
          />
        </a>
        <div className="terra-divider w-40" />
        <TrustBadges className="mt-2" size="footer" delay={0} />
        <div className="mt-2 flex flex-col items-center gap-2 text-sm text-espresso/50">
          <a href="mailto:alyssamayvip@gmail.com" className="text-terracotta hover:text-terracotta-soft">
            alyssamayvip@gmail.com
          </a>
          <p>© 2026 Alyssa May</p>
        </div>
      </div>
    </footer>
  );
}
