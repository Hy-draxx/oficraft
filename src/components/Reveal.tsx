import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  /** Trigger once (default) or every time it enters the viewport */
  once?: boolean;
}

/**
 * Wraps content with an IntersectionObserver-driven fade-up reveal.
 * Animation is defined in styles.css (.reveal).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            (entry.target as HTMLElement).dataset.revealed = "false";
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
