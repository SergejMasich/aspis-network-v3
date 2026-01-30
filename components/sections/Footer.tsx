export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">ASPIS Network</div>
            <div className="mt-1 text-xs text-white/55">
              Secure. Transparent. Adaptive.
            </div>
          </div>

          <div className="flex gap-5 text-sm text-white/65">
            <a className="hover:text-white transition" href="#features">
              Features
            </a>
            <a className="hover:text-white transition" href="#architecture">
              Architecture
            </a>
            <a className="hover:text-white transition" href="#roadmap">
              Roadmap
            </a>
            <a className="hover:text-white transition" href="#faq">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} ASPIS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
