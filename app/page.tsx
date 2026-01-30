import Hero from "@/components/Hero";
import Features from "@/components/sections/Features";
import Architecture from "@/components/sections/Architecture";
import UseCases from "@/components/sections/UseCases";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Architecture />
      <UseCases />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
