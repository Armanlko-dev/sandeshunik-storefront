import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../data/navigation'
import { useCart } from '../hooks/useCart'
import { useScrollProgress } from '../hooks/useScrollProgress'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'

// Sticky top header: announcement bar, logo, desktop nav with hover mega menu,
// a mobile hamburger menu, search / wishlist / bag actions, and a scroll bar.
export default function Header() {
  const [menu, setMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, open } = useCart()
  const { progress, scrolled } = useScrollProgress()

  return (
    <div className="sticky top-0 z-[100]" onMouseLeave={() => setMenu(null)}>
      {/* Scroll progress bar */}
      <div
        className="fixed left-0 top-0 z-[300] h-[3px] bg-gradient-to-r from-accent to-accent-soft shadow-[0_0_12px_rgba(201,123,90,0.5)] transition-[width]"
        style={{ width: `${progress}%` }}
      />

      {/* Announcement */}
      <div className="bg-cocoa px-4 py-[9px] text-center text-[11px] uppercase tracking-[0.12em] text-sand sm:text-[12.5px] sm:tracking-[0.14em]">
        Free shipping ₹999+ &nbsp;·&nbsp; Cash on Delivery &nbsp;·&nbsp; 7-day returns
      </div>

      <header
        className="relative border-b border-line backdrop-blur-md transition-shadow"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.94)',
          boxShadow: scrolled ? '0 10px 34px -22px rgba(43,36,32,0.4)' : 'none',
        }}
      >
        <div className="mx-auto flex h-[60px] max-w-shell items-center gap-4 px-4 md:h-[72px] md:gap-8 md:px-8">
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            title="Menu"
            aria-label="Open menu"
            className="flex flex-none p-2 text-ink lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <Link to="/" className="flex flex-none items-center lg:mr-0">
            <img src="/logo.jpeg" alt="SandeshUnik" className="block h-[34px] w-auto md:h-[50px]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to="/"
                data-menu={item.menu || undefined}
                onMouseEnter={() => setMenu(item.menu || null)}
                className="py-[26px] text-[14px] uppercase tracking-[0.12em] text-ink no-underline transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex flex-none items-center gap-0.5 md:gap-1">
            <button title="Search" className="flex p-2 text-ink md:p-[9px]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button title="Wishlist" className="hidden p-[9px] text-ink sm:flex">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button onClick={open} title="Bag" className="relative flex p-2 text-ink md:p-[9px]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {count > 0 && (
                <span
                  key={count}
                  className="absolute right-0 top-0.5 flex h-4 min-w-4 animate-pop items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white"
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {menu && <MegaMenu menuKey={menu} />}
      </header>

      {/* Mobile slide-out menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  )
}
