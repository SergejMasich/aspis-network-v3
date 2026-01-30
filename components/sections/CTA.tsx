export default function CTA() {
  return (
    <section id="cta" className="bg-black py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="glass rounded-3xl p-8 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Build with ASPIS
            </h2>
            <p className="mt-3 text-white/65">
              This is the clean baseline. If you ever return to the scroll story, we can
              add it without breaking the site.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-2xl bg-aspis-mint/90 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-aspis-mint transition"
              href="#"
            >
              Request access
            </a>
            <a
              className="rounded-2xl bg-white/5 px-5 py-3 text-center text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
              href="#"
            >
              Contact team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
