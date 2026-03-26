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
      aria-label="APE FARMS - Fresh Arambakkam Mangoes Delivered to Chennai"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/ape_hero.png')",
          backgroundPosition: `center ${bgOffset}px`,
        }}
        role="img"
        aria-label="Arambakkam Banganapalli Mango Orchard - APE FARMS Chennai Delivery"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" /> */}

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 ring-1 ring-white/15">
            Farm-Fresh • Orchard-Grown • Chennai Delivery
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Fresh Arambakkam Banganapalli &amp; Imam Pasand Mangoes — Delivery to Chennai
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Straight from the famous Arambakkam mango belt — orchard-grown Banganapalli, Imam Pasand
            &amp; Alphonso mangoes, handpicked at peak ripeness and delivered fresh to your Chennai doorstep.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#preorder"
              className="inline-flex items-center justify-center rounded-full bg-mango-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-mango-900/30 transition hover:bg-mango-700 focus:outline-none focus:ring-2 focus:ring-white/60"
              data-tracking="hero-order-cta"
            >
              🥭 Order Fresh Mangoes
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
              <div>Chennai delivery</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-base font-semibold text-white">100%</div>
              <div>Carbide-free</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-base font-semibold text-white">Farm</div>
              <div>Direct from Arambakkam</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
