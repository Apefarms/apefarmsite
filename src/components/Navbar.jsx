import { useEffect, useMemo, useState } from "react";

const NAV_HEIGHT_PX = 72;

export default function Navbar({
  onOpenRegister,
  onOpenCart,
  isLoggedIn,
  userName,
  onLogout,
  cartCount,
}) {
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "our-story", label: "Our Story" },
      { id: "gallery", label: "Gallery" },
      { id: "prices", label: "Prices" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={
        "sticky top-0 z-50 w-full transition-colors duration-300 " +
        (scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-black/5"
          : "bg-transparent")
      }
      style={{ height: NAV_HEIGHT_PX }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
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
                "rounded-full px-4 py-2 text-sm font-medium transition " +
                (scrolled
                  ? "text-neutral-800 hover:bg-neutral-900/5"
                  : "text-white/90 hover:bg-white/10")
              }
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <button
              type="button"
              onClick={onOpenRegister}
              className={
                "rounded-full px-4 py-2 text-sm font-semibold transition " +
                (scrolled
                  ? "bg-neutral-900 text-white hover:bg-neutral-800"
                  : "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/10")
              }
            >
              LOGIN
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <span
                className={
                  "text-sm font-semibold transition-colors duration-300 " +
                  (scrolled ? "text-neutral-800" : "text-white/90")
                }
              >
                Hi {userName || "User"}
              </span>
              <button
                type="button"
                onClick={onLogout}
                className={
                  "rounded-full px-4 py-2 text-sm font-semibold transition " +
                  (scrolled
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/10")
                }
              >
                LOGOUT
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className={
                  "relative flex h-10 w-10 items-center justify-center rounded-full transition " +
                  (scrolled
                    ? "text-neutral-800 hover:bg-neutral-900/5"
                    : "text-white/90 hover:bg-white/10")
                }
                aria-label="View Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {scrolled && cartCount > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
