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
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-5 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((it, i) => (
            <div key={it} className="flex items-center gap-10">
              <span className="font-display text-base text-foreground/60 italic">
                {it}
              </span>
              {i < items.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-primary/60 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
