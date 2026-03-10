export default function About() {
  return (
    <section id="our-story" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            From the Arambakkam Mango Belt, Straight to Your Chennai Home.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Nestled in Tamil Nadu's legendary Arambakkam mango belt, APE FARMS has been nurturing
            orchards that produce some of India's finest Banganapalli, Imam Pasand, and Alphonso mangoes.
            Every fruit is orchard-grown, handpicked at the perfect stage of maturity, and delivered
            directly from our farm to homes across Chennai — no middlemen, no cold storage delays,
            just sun-ripened sweetness at your doorstep.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Arambakkam Orchards</div>
              <div className="mt-2 text-sm text-neutral-600">
                Grown in the renowned Arambakkam mango belt of Tamil Nadu.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Carbide-Free Ripening</div>
              <div className="mt-2 text-sm text-neutral-600">
                Naturally ripened — zero chemicals, zero artificial agents.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Chennai Express Delivery</div>
              <div className="mt-2 text-sm text-neutral-600">
                Farm-to-door within 48 hours across all Chennai localities.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Premium Packaging</div>
              <div className="mt-2 text-sm text-neutral-600">
                Gift-ready boxes with cushioned layers for safe transit.
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-mango-50 via-white to-mango-100 p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-mango-300/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-mango-600/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold text-neutral-900">The APE FARMS Promise</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every mango from our Arambakkam orchards is inspected for size, skin clarity, and fragrance.
              We only pack A+ grade fruit — if it doesn't meet our standard, it doesn't make the box.
              That's our commitment to every Chennai customer.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">A+</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Grade selection</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">48h</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Chennai delivery</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">24/7</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">WhatsApp support</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">Secure</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
