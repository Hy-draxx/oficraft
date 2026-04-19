import { Logo } from "./Logo";

const links = [
  { href: "#catalog", label: "Catalog" },
  { href: "#customize", label: "Customize" },
  { href: "#how", label: "How it works" },
  { href: "#story", label: "Our story" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#catalog"
            className="hidden text-sm font-medium text-foreground/70 transition-colors hover:text-foreground sm:inline"
          >
            Sign in
          </a>
          <a
            href="#customize"
            className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            Start an order
          </a>
        </div>
      </div>
    </header>
  );
}
