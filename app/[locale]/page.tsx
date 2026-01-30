import ScrollHeroScene from "@/components/ScrollHeroScene";
import Features from "@/components/sections/Features";
import Architecture from "@/components/sections/Architecture";
import UseCases from "@/components/sections/UseCases";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";

export default function Page({ params }: { params: { locale: "en" | "ru" } }) {
  const locale = params.locale;

  return (
    <main>
      <ScrollHeroScene locale={locale} />

      <Features locale={locale} />
      <Architecture locale={locale} />
      <UseCases locale={locale} />
      <Roadmap locale={locale} />
      <FAQ locale={locale} />
    </main>
  );
}
