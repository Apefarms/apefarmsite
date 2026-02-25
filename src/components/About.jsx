export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Orchard-grown luxury, bottled as a moment.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            We source mangoes from trusted farms, harvest at the right maturity, and pack with care so
            each box arrives fragrant, golden, and perfectly sweet.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Handpicked batches</div>
              <div className="mt-2 text-sm text-neutral-600">
                Selected for aroma, fiber, and sweetness.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Cold-chain packed</div>
              <div className="mt-2 text-sm text-neutral-600">
                Protected in transit to preserve freshness.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Zero shortcuts</div>
              <div className="mt-2 text-sm text-neutral-600">
                No artificial color or flavor.
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-900">Gift-ready</div>
              <div className="mt-2 text-sm text-neutral-600">
                Premium packaging for celebrations.
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-mango-50 via-white to-mango-100 p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-mango-300/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-mango-600/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold text-neutral-900">The premium promise</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every shipment is inspected for size, skin clarity, and fragrance. If a mango doesn’t
              meet our standard, it doesn’t make the box.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">A+</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Grade selection</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">7-day</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Ripeness window</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
                <div className="text-2xl font-semibold text-neutral-900">24/7</div>
                <div className="mt-1 text-xs font-medium text-neutral-600">Support</div>
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
