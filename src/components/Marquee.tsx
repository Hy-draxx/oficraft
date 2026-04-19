const items = [
  "Owambe",
  "Weddings",
  "Naming ceremonies",
  "Graduations",
  "Group orders",
  "Custom palettes",
  "Family sets",
  "Diaspora delivery",
];

export function Marquee() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/60 py-5">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary to-transparent" />

      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={`${it}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-base text-foreground/60 italic">
              {it}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
