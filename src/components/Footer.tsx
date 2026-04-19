import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Aso Òfì · Made for you. Handwoven in Nigeria, delivered to your
              door.
            </p>
          </div>
          <FooterCol
            title="Shop"
            links={["Catalog", "Customize", "Group orders", "Gift cards"]}
          />
          <FooterCol
            title="ÒfìCraft"
            links={["Our story", "Weavers", "Contact", "Track order"]}
          />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ÒfìCraft. All rights reserved.</p>
          <p className="eyebrow text-foreground/50">Made in Lagos · Worn everywhere</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="eyebrow text-foreground/60">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
