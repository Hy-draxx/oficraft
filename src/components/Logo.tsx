export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`font-display text-2xl font-bold tracking-tight ${className}`}>
      <span className="text-indigo">Òfì</span>
      <span className="text-primary">Craft</span>
    </a>
  );
}
