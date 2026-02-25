import { useEffect, useState } from 'react'

export default function Hero() {
  const [bgOffset, setBgOffset] = useState(0)

  useEffect(() => {
    let raf = 0

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setBgOffset(window.scrollY * 0.25)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/mangohero.jpg')",
          backgroundPosition: `center ${bgOffset}px`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" />

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 ring-1 ring-white/15">
            Handpicked • Sun-kissed • Export grade
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Taste the King of Fruits
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            A premium mango experience—rich aroma, golden sweetness, and a melt-in-your-mouth finish.
            From orchard to doorstep, delivered at peak ripeness.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-full bg-mango-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-mango-900/30 transition hover:bg-mango-700 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Order premium mangoes
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              View gallery
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-white/75">
            <div>
              <div className="text-base font-semibold text-white">48h</div>
              <div>Fresh delivery</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-base font-semibold text-white">100%</div>
              <div>Quality checked</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-base font-semibold text-white">0%</div>
              <div>Artificial flavor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-10 w-6 rounded-full border border-white/30 bg-white/5">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  )
}
