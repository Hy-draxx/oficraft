const steps = [
  {
    n: "01",
    title: "Browse or customize",
    body: "Pick from the catalog, or build a one-of-a-kind piece in the visual customizer.",
  },
  {
    n: "02",
    title: "Confirm your order",
    body: "Review the brief, see your price upfront, and check out securely with Paystack.",
  },
  {
    n: "03",
    title: "We weave it",
    body: "We brief our trusted weavers, manage production, and quality-check every piece.",
  },
  {
    n: "04",
    title: "Delivered to your door",
    body: "Track your order from confirmed to delivered, anywhere in Nigeria.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <span className="eyebrow text-primary">How it works</span>
        <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
          From your screen to your shoulders.
        </h2>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-card p-8 transition-colors hover:bg-secondary">
            <p className="font-display text-3xl font-semibold text-primary">{s.n}</p>
            <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
