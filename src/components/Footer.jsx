const DELIVERY_AREAS = [
  'Adyar', 'T. Nagar', 'Anna Nagar', 'Velachery', 'OMR',
  'Tambaram', 'Porur', 'Chromepet', 'Sholinganallur', 'Medavakkam',
  'Guindy', 'Mylapore', 'Nungambakkam', 'Besant Nagar', 'Thiruvanmiyur',
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.webp"
                alt="APE FARMS Arambakkam Mangoes Logo"
                className="h-12 w-12 rounded-full object-cover shadow-sm"
                width="48"
                height="48"
              />
              <div>
                <div className="text-sm font-semibold tracking-wide">APE FARMS</div>
                <div className="text-xs text-white/70">Premium Arambakkam Mangoes</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Orchard-grown Banganapalli, Imam Pasand &amp; Alphonso mangoes from Arambakkam,
              Tamil Nadu — delivered fresh to homes across Chennai.
            </p>
            <p className="mt-3 text-xs text-white/50">
              📍 Arambakkam, Tamil Nadu 601 207
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick links</div>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              <a className="hover:text-white" href="#our-story">
                Our Story
              </a>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="#prices">
                Prices
              </a>
              <a className="hover:text-white" href="#preorder">
                Pre-order
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Delivery Areas in Chennai</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {DELIVERY_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                >
                  {area}
                </span>
              ))}
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
          © {new Date().getFullYear()} APE FARMS. All rights reserved. | Arambakkam, Tamil Nadu 601 207
        </div>
      </div>
    </footer>
  )
}
