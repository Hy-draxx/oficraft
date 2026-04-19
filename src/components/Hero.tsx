import heroFabric from "@/assets/hero-fabric.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span
              className="eyebrow animate-fade-in inline-flex items-center gap-2 text-primary"
              style={{ animationDelay: "60ms" }}
            >
              <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-primary" />
              Aso Òfì · Made for you
            </span>

            <h1
              className="font-display animate-fade-up mt-6 text-5xl leading-[1.02] font-bold text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
              style={{ animationDelay: "140ms" }}
            >
              Handwoven aso òfì,{" "}
              <span className="text-primary italic">designed</span> the way
              you want it.
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-foreground/70"
              style={{ animationDelay: "300ms" }}
            >
              Browse ready-made designs or build a fully custom order — colours,
              patterns, measurements. We handle the weavers, production, and
              delivery to your door.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href="#customize"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.62_0.165_40_/_0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_oklch(0.62_0.165_40_/_0.7)]"
              >
                Start customising
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10m0 0L8 3m5 5l-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#catalog"
                className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                Browse catalog
              </a>
            </div>

            <div
              className="animate-fade-up mt-12 flex items-center gap-8"
              style={{ animationDelay: "560ms" }}
            >
              <Stat value="40+" label="Master weavers" />
              <div className="h-10 w-px bg-border" />
              <Stat value="10–14" label="Day turnaround" />
              <div className="h-10 w-px bg-border" />
              <Stat value="100%" label="Owned fulfillment" />
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div
              className="animate-scale-in relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src={heroFabric}
                alt="Folded handwoven aso òfì in terracotta, indigo and gold"
                width={1536}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent" />
            </div>

            {/* Floating swatch card */}
            <div
              className="animate-fade-up animate-float absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-border bg-card p-4 shadow-xl sm:block"
              style={{ animationDelay: "700ms" }}
            >
              <p className="eyebrow text-foreground/50">Now weaving</p>
              <p className="font-display mt-1 text-xl font-semibold">Adire Èkó</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full border border-border bg-primary" />
                <span className="h-6 w-6 rounded-full border border-border bg-indigo" />
                <span className="h-6 w-6 rounded-full border border-border bg-gold" />
                <span className="h-6 w-6 rounded-full border border-border bg-cream" />
                <span className="ml-auto text-xs font-medium text-muted-foreground">
                  +8
                </span>
              </div>
            </div>

            {/* Floating price tag */}
            <div
              className="animate-fade-up animate-float absolute -top-4 -right-4 hidden rounded-full bg-foreground px-5 py-2.5 text-background shadow-lg lg:block"
              style={{ animationDelay: "850ms", animationDuration: "7s" }}
            >
              <span className="text-xs font-medium opacity-70">From</span>{" "}
              <span className="font-display text-lg font-semibold">₦45,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}
