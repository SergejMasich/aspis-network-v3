import { copy, Locale } from "@/lib/copy";

export default function Architecture({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="architecture" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.sections.architectureTitle}</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Two-layer hero is intentional: system layer (shield + streams) and product layer (content).
          Later we add 3D and detailed modules without rewriting the layout.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            Providers → Normalization → Verification → Risk Engine → Unified UI
          </div>
          <div className="glass rounded-2xl p-6">
            Post-open: shells feed the core. Core becomes the “true signal” center.
          </div>
        </div>
      </div>
    </section>
  );
}
