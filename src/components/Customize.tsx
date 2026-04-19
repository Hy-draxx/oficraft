import s1 from "@/assets/swatch-1.jpg";
import s2 from "@/assets/swatch-2.jpg";
import s4 from "@/assets/swatch-4.jpg";
import { Reveal } from "./Reveal";

export function Customize() {
  return (
    <section id="customize" className="relative overflow-hidden bg-indigo text-indigo-foreground">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl"
        style={{ animationDelay: "-7s" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal as="div" className="lg:col-span-5">
            <span className="eyebrow text-gold">Customization tool</span>
            <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
              Build your aso òfì in four steps.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-indigo-foreground/75">
              Choose a pattern, mix your colours, enter measurements, and review.
              Watch the swatch update live as you go — no more describing your
              vision over WhatsApp.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Live visual preview as you choose",
                "Preset palettes or describe your own",
                "Measurement guide built in",
                "Upfront price before you pay",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5L5 9l4.5-5.5" stroke="oklch(0.22 0.04 265)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-indigo-foreground/85">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Open the customizer
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L8 3m5 5l-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mock customizer panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-background p-6 text-foreground shadow-2xl lg:p-8">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-muted-foreground">Step 2 of 4</p>
                <p className="text-xs font-medium text-muted-foreground">
                  Preview · live
                </p>
              </div>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <img src={s1} alt="Live preview" className="h-full w-full object-cover" loading="lazy" width={768} height={768} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold">Colour palette</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Pick up to four threads.</p>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[
                      "bg-primary",
                      "bg-indigo",
                      "bg-gold",
                      "bg-cream border border-border",
                      "bg-foreground",
                      "bg-[oklch(0.45_0.13_30)]",
                      "bg-[oklch(0.6_0.12_150)]",
                      "bg-[oklch(0.7_0.13_25)]",
                    ].map((c, i) => (
                      <button
                        key={i}
                        className={`aspect-square rounded-xl ${c} ring-2 ring-transparent ring-offset-2 ring-offset-background transition-all hover:scale-105 ${i < 3 ? "ring-foreground/80" : ""}`}
                        aria-label={`Color ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[s1, s2, s4].map((src, i) => (
                      <button key={i} className={`aspect-square overflow-hidden rounded-lg border-2 ${i === 0 ? "border-primary" : "border-transparent"}`}>
                        <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" width={256} height={256} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-secondary p-4">
                <div>
                  <p className="text-xs text-muted-foreground">Estimated total</p>
                  <p className="font-display text-2xl font-semibold text-primary">₦62,500</p>
                </div>
                <button className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background">
                  Continue →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
