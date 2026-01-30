import ShieldLayer from "@/components/ShieldLayer";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* Layer 1: shield + data streams (always under content) */}
      <ShieldLayer />

      {/* Layer 2: hero content (always above) */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}
