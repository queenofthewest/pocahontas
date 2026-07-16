import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { TrustBadges } from "@/components/TrustBadges";

const SITE_PASSWORDS = ["partylikeits1999", "desertdelight"];
const STORAGE_KEY = "vw_site_unlocked";
const textShadowSmall = "0 1px 4px rgba(0,0,0,0.7)";
const textShadowLarge = "0 2px 6px rgba(0,0,0,0.55)";

function isUnlocked() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (SITE_PASSWORDS.includes(password)) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16">
      <div className="relative z-10 w-full max-w-sm -translate-y-10 text-center md:translate-y-0">
        <Reveal>
          <div className="badge-ring mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-terracotta/25 md:h-36 md:w-36">
            <img
              src="/assets/images/20A2607.webp"
              alt="Alyssa May"
              className="h-full w-full object-cover object-[50%_80%]"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p
            className="mt-8 text-xs uppercase tracking-[0.2em] text-sand-soft"
            style={{ textShadow: textShadowSmall }}
          >
            Luxury Traveling Companion
          </p>
          <h1
            className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-sand-soft"
            style={{ textShadow: textShadowLarge }}
          >
            Alyssa May
          </h1>
          <TrustBadges className="mt-6" />
          <div className="terra-divider mx-auto mt-6 w-16" />
          <p className="mt-6 text-sm leading-relaxed text-sand-soft/80">
            Thank you so much for stopping by. Please email 
            {" "}
            <a
              href="mailto:alyssamayvip@gmail.com"
              className="text-terracotta-soft underline decoration-terracotta-soft/40 underline-offset-4 hover:decoration-terracotta-soft"
            >
              alyssamayvip@gmail.com
            </a>{" "}
            with the username or link to your profile on P411, Private Delights, TER, or X. You will receive a message with the password.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <form onSubmit={onSubmit} className="mt-8">
            <label htmlFor="site-password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="site-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter password"
                autoComplete="off"
                className="w-full rounded-lg border border-terracotta/25 bg-sand-soft/90 py-3 pl-4 pr-11 text-center text-sm text-espresso placeholder:text-espresso/35 outline-none transition-colors focus:border-terracotta"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso/40 transition-colors hover:text-terracotta"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-xs text-destructive">
                That password isn't quite right — please double-check your email.
              </p>
            )}
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-terracotta px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand-soft transition-transform hover:scale-105"
            >
              Enter
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
