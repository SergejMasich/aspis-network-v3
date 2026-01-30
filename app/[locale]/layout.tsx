import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ru" };
}) {
  return (
    <div className="min-h-screen">
      <Header locale={params.locale} />
      {children}
      <Footer locale={params.locale} />
    </div>
  );
}
