import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter your phone number").max(40),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  duration: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  dateType: z.string().trim().max(60).optional().or(z.literal("")),
  verification: z.enum(["employment", "references", "id"]),
  verificationDetail: z.string().trim().min(2, "Please add verification details").max(500),
});

const inputClass =
  "w-full rounded-lg border border-terracotta/20 bg-sand/60 px-4 py-3 text-sm text-espresso placeholder:text-espresso/35 outline-none transition-colors focus:border-terracotta";
const labelClass = "mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-terracotta/70";

const verifyOptions = [
  {
    id: "employment",
    label: "Employment + Photo ID",
    placeholder: "Please type your LinkedIn URL and have a selfie with photo ID ready",
  },
  {
    id: "references",
    label: "Provider References",
    placeholder: "Two established providers you've seen (name, email, website/advertising link, approximate date seen)",
  },
  {
    id: "id",
    label: "Government ID",
    placeholder: "Please be ready with two forms of photo ID (one gov't) + a selfie holding both",
  },
] as const;

export function Contact() {
  const [verification, setVerification] = useState<(typeof verifyOptions)[number]["id"]>("employment");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({ ...data, verification });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please review the highlighted fields.");
      return;
    }
    setErrors({});
    form.reset();
    setVerification("employment");
    toast.success("Inquiry received — I'll respond within 48 hours.");
  };

  const activeVerify = verifyOptions.find((r) => r.id === verification)!;

  return (
    <section id="contact" className="relative overflow-visible bg-gradient-to-b from-sand to-sand-deep py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta/80">Start Here</p>
          <h2 className="font-display text-4xl text-espresso md:text-5xl">Booking Inquiry</h2>
          <div className="terra-divider mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-lg text-sm text-espresso/55">
            Share a few details and I'll respond personally within 48 hours. Screening is required for all new friends. Any information shared through this form is transferred privately and securely.
          </p>
        </Reveal>

        <Reveal>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-terracotta/20 bg-sand-soft/60 p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-3">
              <fieldset className="space-y-5">
                <legend className="mb-4 font-display text-lg text-terracotta">About You</legend>
                <div>
                  <label className={labelClass} htmlFor="name">Name</label>
                  <input id="name" name="name" className={inputClass} placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input id="email" name="email" className={inputClass} placeholder="you@email.com" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" className={inputClass} placeholder="(555) 555-5555" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="mb-4 font-display text-lg text-terracotta">Our Date</legend>
                <div>
                  <label className={labelClass} htmlFor="date">When</label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="duration">Duration</label>
                  <select id="duration" name="duration" className={inputClass} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="1hour">1 Hour</option>
                    <option value="90min">90 Minutes</option>
                    <option value="2hours">2 Hours</option>
                    <option value="3hours">3 Hours</option>
                    <option value="dinner">Dinner Date (4 hrs)</option>
                    <option value="evening">Evening (6 hrs)</option>
                    <option value="overnight">Overnight (12 hrs)</option>
                    <option value="fullday">Full Day (24 hrs)</option>
                    <option value="weekend">Weekend (48 hrs)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="location">Location</label>
                  <select id="location" name="location" className={inputClass} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="scottsdale-incall">Scottsdale — Incall</option>
                    <option value="scottsdale-outcall">Scottsdale — Outcall</option>
                    <option value="phoenix-outcall">Phoenix — Outcall</option>
                    <option value="sedona-outcall">Sedona — Outcall</option>
                    <option value="flytome">Fly Me To You</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="dateType">Type</label>
                  <select id="dateType" name="dateType" className={inputClass} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="private">Private Time</option>
                    <option value="social">Social / Dinner</option>
                    <option value="event">Event Companion</option>
                    <option value="travel">Travel</option>
                    <option value="couple">Couple</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="mb-4 font-display text-lg text-terracotta">Verification</legend>
                <div>
                  <span className={labelClass}>Choose One</span>
                  <div className="space-y-2">
                    {verifyOptions.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                          verification === opt.id
                            ? "border-terracotta bg-terracotta/10 text-espresso"
                            : "border-terracotta/15 text-espresso/60 hover:border-terracotta/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="verificationType"
                          checked={verification === opt.id}
                          onChange={() => setVerification(opt.id)}
                          className="accent-terracotta"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="verificationDetail">{activeVerify.label}</label>
                  <textarea
                    id="verificationDetail"
                    name="verificationDetail"
                    rows={4}
                    className={inputClass}
                    placeholder={activeVerify.placeholder}
                  />
                  {errors.verificationDetail && <p className="mt-1 text-xs text-destructive">{errors.verificationDetail}</p>}
                </div>
              </fieldset>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-terracotta px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-sand-soft transition-transform hover:scale-105"
              >
                Send Inquiry
              </button>
              <p className="text-sm text-espresso/45">
                Or email directly:{" "}
                <a href="mailto:victoriawestvip@gmail.com" className="text-terracotta hover:text-terracotta-soft">
                  victoriawestvip@gmail.com
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
