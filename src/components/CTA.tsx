export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background sm:px-16 sm:py-24">
        {/* Decorative woven bands */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block">
          <div className="absolute top-10 right-0 h-2 w-3/4 bg-primary" />
          <div className="absolute top-20 right-0 h-2 w-1/2 bg-gold" />
          <div className="absolute top-32 right-0 h-2 w-2/3 bg-primary" />
          <div className="absolute top-44 right-0 h-2 w-1/3 bg-gold" />
          <div className="absolute top-56 right-0 h-2 w-3/5 bg-primary" />
          <div className="absolute top-72 right-0 h-2 w-1/2 bg-gold" />
        </div>

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
              className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start customising
            </a>
            <a
              href="#catalog"
              className="inline-flex h-12 items-center rounded-full border border-background/20 px-6 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Browse catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
