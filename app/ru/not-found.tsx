export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-6xl font-semibold tracking-tight">404</div>
        <p className="mt-4 text-white/70">
          Страница не найдена. Вернуться на главную.
        </p>

        <a
          href="/en"
          className="inline-flex mt-8 items-center justify-center rounded-lg bg-emerald-500/90 px-4 py-2 text-black font-medium hover:bg-emerald-500 transition"
        >
          На главную
        </a>

        <div className="mt-6 text-xs text-white/40">
          ASPIS Network · Secure · Transparent · Adaptive
        </div>
      </div>
    </main>
  );
}
