const IMAGES = [
  { src: '/img/gallery1.webp', alt: 'Arambakkam Banganapalli Mango Box - APE FARMS Chennai Delivery' },
  { src: '/img/gallery2.webp', alt: 'Arambakkam Imam Pasand Mango Selection - APE FARMS Chennai Delivery' },
  { src: '/img/gallery3.webp', alt: 'Arambakkam Mango Orchard Harvest - APE FARMS Chennai Delivery' },
  { src: '/img/gallery4.webp', alt: 'Arambakkam Alphonso Mango Slices - APE FARMS Chennai Delivery' },
  { src: '/img/gallery5.webp', alt: 'Arambakkam Banganapalli Mango Gift Box - APE FARMS Chennai Delivery' },
  { src: '/img/gallery6.webp', alt: 'Arambakkam Seasonal Mango Collection - APE FARMS Chennai Delivery' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mango-700">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              A peek at the season's finest from Arambakkam.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Sun-ripened Banganapalli, Imam Pasand &amp; Alphonso mangoes — golden skins, rich aroma,
              and that unmistakable sweetness. Hover to explore.
            </p>
          </div>

          <div className="text-sm font-medium text-neutral-600">
            3-column premium grid
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                width="400"
                height="256"
              />
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0) 60%)',
                }}
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20">
                <div className="text-sm font-semibold text-white">{img.alt}</div>
                <div className="mt-1 text-xs text-white/80">Premium selection</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
