export function Story() {
  return (
    <section id="story" className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <span className="eyebrow text-primary">Our story</span>
          <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
            Tradition, online — without losing the soul.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="font-display text-2xl leading-snug text-foreground/85 italic">
            “Ordering aso òfì shouldn't mean endless WhatsApp threads and crossed
            fingers. We built ÒfìCraft so the only thing you focus on is what
            you want to wear.”
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
              I
            </div>
            <div>
              <p className="font-semibold text-foreground">Ibrahim</p>
              <p className="text-sm text-muted-foreground">Founder, ÒfìCraft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
