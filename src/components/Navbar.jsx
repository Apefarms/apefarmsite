import { useEffect, useMemo, useState } from 'react'

const NAV_HEIGHT_PX = 72

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const links = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'our-story', label: 'Our Story' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'prices', label: 'Prices' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header
      className={
        'sticky top-0 z-50 w-full transition-colors duration-300 ' +
        (scrolled ? 'bg-white/70 backdrop-blur-md border-b border-black/5' : 'bg-transparent')
      }
      style={{ height: NAV_HEIGHT_PX }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group inline-flex items-center gap-2"
          aria-label="APE FARMS - Go to top"
        >
          <img
            src="/img/logo.webp"
            alt="APE FARMS Arambakkam Mangoes Logo"
            className="h-12 w-12 rounded-full object-cover shadow-sm"
            width="48"
            height="48"
          />
          <span className="text-sm font-semibold tracking-wide text-neutral-900">
            APE FARMS
            <span className="ml-2 align-middle text-[10px] font-medium text-mango-700/90">
              Premium
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToSection(l.id)}
              className={
                'rounded-full px-4 py-2 text-sm font-medium transition ' +
                (scrolled
                  ? 'text-neutral-800 hover:bg-neutral-900/5'
                  : 'text-white/90 hover:bg-white/10')
              }
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollToSection('preorder')}
          className={
            'rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition ' +
            (scrolled
              ? 'bg-mango-600 text-white hover:bg-mango-700'
              : 'bg-white/15 text-white ring-1 ring-white/20 hover:bg-white/20')
          }
        >
          Pre-order now
        </button>
      </div>
    </header>
  )
}
