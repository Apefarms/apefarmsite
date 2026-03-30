const BOXES = [
  {
    name: '3kg Box',
    note: 'Perfect for tasting and gifting.',
    price: '₹499',
    tag: 'Starter',
    sku: 'APE-3KG',
    img: '/img/499_mango.webp',
  },
  {
    name: '5kg Box',
    note: 'Family-friendly, best value balance.',
    price: '₹799',
    tag: 'Popular',
    sku: 'APE-5KG',
    img: '/img/799_mango.webp',
  },
  {
    name: '10kg Box',
    note: 'Bulk order for events and offices.',
    price: '₹1,499',
    tag: 'Bulk',
    sku: 'APE-10KG',
    img: '/img/1499_mango.webp',
  },
]

const WHATSAPP_NUMBER = '919940061057'

export default function Order() {
  const openWhatsApp = (boxName) => {
    const text = `Hi, I'd like to pre-order the ${boxName} of fresh Arambakkam mangoes for Chennai delivery.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="order" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
          Order
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Choose your mango box.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Select a box size, tap order, and we'll handle ripeness scheduling, secure packaging,
              and fresh delivery across Chennai.
            </p>
          </div>
          <div className="rounded-2xl bg-mango-50 px-5 py-4 text-sm text-neutral-700 ring-1 ring-black/5">
            Free delivery above <span className="font-semibold">₹499</span>
          </div>
        </div>

        <div id="prices" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {BOXES.map((v) => (
            <div
              key={v.name}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-neutral-50 shadow-sm"
            >
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-mango-300/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-mango-700/15 blur-3xl pointer-events-none" />

              {v.img && (
                <div className="relative w-full shrink-0">
                  <img src={v.img} alt={v.name} className="aspect-square w-full object-cover" />
                </div>
              )}

              <div className="relative flex flex-col flex-1 p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-neutral-900">{v.name}</div>
                    <div className="mt-2 text-sm text-neutral-600">{v.note}</div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-mango-700 ring-1 ring-black/5">
                    {v.tag}
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                      Starting at
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-neutral-900">{v.price}</div>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => openWhatsApp(v.name)}
                    className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    data-tracking={`whatsapp-order-${v.sku}`}
                    aria-label={`Order Fresh Mangoes - ${v.name}`}
                  >
                    🥭 Order Fresh Mangoes
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-black/10 transition hover:bg-neutral-50"
                  >
                    Details
                  </button>
                </div>

                <div className="mt-6 text-xs text-neutral-600">
                  Includes premium packaging • Ripeness guide • Quality seal
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="preorder" className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-neutral-50 p-8 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
                Pre-order
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                Reserve your Arambakkam mango box on WhatsApp.
              </div>
              <div className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                Click below to place a pre-order for fresh Banganapalli, Imam Pasand, or Alphonso mangoes.
                We'll confirm availability, delivery date, and ripeness schedule for your Chennai address.
              </div>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp('Pre-order')}
              className="h-12 rounded-2xl bg-mango-600 px-6 text-sm font-semibold text-white shadow-lg shadow-mango-900/20 transition hover:bg-mango-700"
              data-tracking="whatsapp-preorder-cta"
              aria-label="Pre-order Fresh Arambakkam Mangoes on WhatsApp"
            >
              🥭 Order Fresh Mangoes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
