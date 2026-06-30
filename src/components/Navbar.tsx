import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "profile", label: "Details" },
  { id: "portfolio", label: "Gallery" },
  { id: "booking", label: "Rates" },
  { id: "policies", label: "Etiquette" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-adobe-deep/90 backdrop-blur-md py-3 shadow-lg shadow-adobe-deep/60 border-b border-terracotta/10"
          : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <a href="#hero" className="font-display text-lg tracking-widest text-terracotta">
          V<span className="text-sand/70">W</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group relative text-[0.7rem] font-medium uppercase tracking-[0.25em] text-sand/60 transition-colors hover:text-terracotta"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-px w-5 bg-terracotta transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-terracotta transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-terracotta transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-terracotta/15 bg-adobe-deep/98 px-8 py-8 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.3em] text-sand/60 hover:text-terracotta transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
