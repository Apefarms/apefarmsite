const IMAGES = [
  { src: '/img/gallery1.jpeg', alt: 'Golden mangoes on a branch' },
  { src: '/img/gallery2.jpeg', alt: 'Fresh premium mangoes' },
  { src: '/img/gallery3.jpeg', alt: 'Mango orchard harvest' },
  { src: '/img/gallery4.jpeg', alt: 'Juicy mango slices' },
  { src: '/img/gallery5.jpeg', alt: 'Gift-ready mango box' },
  { src: '/img/gallery6.jpeg', alt: 'Seasonal mango selection' },
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
              A peek at the season’s finest.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Warm tones, clean skins, and that unmistakable aroma. Hover to explore.
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
