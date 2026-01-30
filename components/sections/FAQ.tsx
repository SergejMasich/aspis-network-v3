import { copy, Locale } from "@/lib/copy";

export default function FAQ({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const faqs =
    locale === "ru"
      ? [
          ["Это адаптивно под все устройства?", "Да. Используем responsive layout и 100svh для мобильных."],
          ["Почему сейчас без 3D?", "Сначала фиксируем архитектуру и story, потом меняем слой Shield на 3D."],
          ["Потоки реально идут к ядру?", "Да: после раскрытия визуально переключаем режим на converge."],
        ]
      : [
          ["Is it responsive for all devices?", "Yes. Responsive layout + 100svh for mobile stability."],
          ["Why no 3D yet?", "We lock architecture and narrative first; then swap Shield layer to 3D."],
          ["Do streams converge to the core?", "Yes. After opening we switch into converge mode."],
        ];

  return (
    <section id="faq" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.sections.faqTitle}</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {faqs.map(([q, a]) => (
            <div key={q} className="glass rounded-2xl p-6">
              <div className="text-base font-semibold">{q}</div>
              <div className="mt-2 text-sm text-white/65">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
