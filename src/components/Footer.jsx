export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.png"   // put your image inside public folder
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <div className="text-sm font-semibold tracking-wide">APE Mango</div>
                <div className="text-xs text-white/70">Premium mango brand</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              A warm, premium mango experience—crafted from orchard selection to elegant packaging.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick links</div>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="#order">
                Order
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Newsletter</div>
            <p className="mt-4 text-sm text-white/75">
              Seasonal updates and limited harvest drops.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-mango-500"
                placeholder="Email address"
                type="email"
              />
              <button
                type="button"
                className="h-11 shrink-0 rounded-2xl bg-mango-600 px-4 text-sm font-semibold text-white transition hover:bg-mango-700"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} APE Mango. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
