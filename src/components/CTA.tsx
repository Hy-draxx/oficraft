import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background sm:px-16 sm:py-24">
          {/* Decorative woven bands */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block">
            {[
              { top: "top-10", w: "w-3/4", c: "bg-primary" },
              { top: "top-20", w: "w-1/2", c: "bg-gold" },
              { top: "top-32", w: "w-2/3", c: "bg-primary" },
              { top: "top-44", w: "w-1/3", c: "bg-gold" },
              { top: "top-56", w: "w-3/5", c: "bg-primary" },
              { top: "top-72", w: "w-1/2", c: "bg-gold" },
            ].map((b, i) => (
              <div
                key={i}
                className={`animate-fade-in absolute right-0 h-2 ${b.top} ${b.w} ${b.c}`}
                style={{ animationDelay: `${300 + i * 120}ms`, animationDuration: "900ms" }}
              />
            ))}
          </div>

          {/* Soft glow */}
          <div
            aria-hidden
            className="animate-blob pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Your next aso òfì is one order away.
            </h2>
            <p className="mt-6 text-lg text-background/70">
              Catalog or custom — start today and we'll have it on your shoulders
              in two weeks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#customize"
                className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_oklch(0.62_0.165_40_/_0.7)]"
              >
                Start customising
              </a>
              <a
                href="#catalog"
                className="inline-flex h-12 items-center rounded-full border border-background/20 px-6 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/10"
              >
                Browse catalog
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
