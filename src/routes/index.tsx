import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Catalog } from "@/components/Catalog";
import { Customize } from "@/components/Customize";
import { HowItWorks } from "@/components/HowItWorks";
import { Story } from "@/components/Story";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ÒfìCraft — Handwoven aso òfì, made for you" },
      {
        name: "description",
        content:
          "Browse ready-made designs or build a custom aso òfì order. ÒfìCraft handles the weavers, production, and delivery — so you only choose what to wear.",
      },
      { property: "og:title", content: "ÒfìCraft — Handwoven aso òfì, made for you" },
      {
        property: "og:description",
        content:
          "Browse or customize aso òfì online. End-to-end fulfillment, delivered across Nigeria.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Catalog />
        <Customize />
        <HowItWorks />
        <Story />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
