import ShieldLayer from "@/components/ShieldLayer";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Layer 1: Shield + data streams background */}
      <ShieldLayer />

      {/* Layer 2: Foreground header/content */}
      <HeroContent />

      {/* Bottom fade to blend into next sections */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
