import { Locale } from "@/lib/copy";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">ASPIS Network</div>
            <div className="mt-1 text-xs text-white/55">
              Secure · Transparent · Adaptive
            </div>
          </div>

          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} ASPIS · /{locale}
          </div>
        </div>
      </div>
    </footer>
  );
}
