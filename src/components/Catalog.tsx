import s1 from "@/assets/swatch-1.jpg";
import s2 from "@/assets/swatch-2.jpg";
import s3 from "@/assets/swatch-3.jpg";
import s4 from "@/assets/swatch-4.jpg";
import { Reveal } from "./Reveal";

const designs = [
  { name: "Ìjeun", tag: "Classic", price: "₦52,000", img: s1 },
  { name: "Ọláolú", tag: "Royal", price: "₦68,000", img: s2 },
  { name: "Òrun Mẹ́rin", tag: "Festive", price: "₦47,000", img: s3 },
  { name: "Ewé Tútù", tag: "Modern", price: "₦58,000", img: s4 },
];

export function Catalog() {
  return (
    <section
      id="catalog"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-primary">The catalog</span>
          <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
            Designs ready to ship — or to make your own.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="#"
            className="text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
          >
            View all designs →
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {designs.map((d, i) => (
          <Reveal key={d.name} delay={i * 110}>
            <article className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_oklch(0.62_0.165_40_/_0.4)]">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={d.img}
                  alt={`${d.name} aso òfì design`}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="eyebrow text-muted-foreground">{d.tag}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold transition-colors group-hover:text-primary">
                    {d.name}
                  </h3>
                </div>
                <p className="font-display text-base font-semibold text-primary">
                  {d.price}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
