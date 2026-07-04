import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../data/navigation'
import { useCart } from '../hooks/useCart'
import { useScrollProgress } from '../hooks/useScrollProgress'
import MegaMenu from './MegaMenu'

// Sticky top header: announcement bar, logo, desktop nav with hover mega menu,
// search / wishlist / bag actions, and a scroll-progress bar.
export default function Header() {
  const [menu, setMenu] = useState(null)
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
      <div className="bg-cocoa px-4 py-[9px] text-center text-[12.5px] uppercase tracking-[0.14em] text-sand">
        Free shipping over ₹999 &nbsp;·&nbsp; Cash on Delivery across India &nbsp;·&nbsp; Easy 7-day returns
      </div>

      <header
        className="relative border-b border-line backdrop-blur-md transition-shadow"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.94)',
          boxShadow: scrolled ? '0 10px 34px -22px rgba(43,36,32,0.4)' : 'none',
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-shell items-center gap-8 px-5 md:px-8">
          <Link to="/" className="flex flex-none items-center">
            <img src="/logo.jpeg" alt="SandeshUnik" className="block h-[50px] w-auto" />
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

          <div className="ml-auto flex flex-none items-center gap-1 lg:ml-0">
            <button title="Search" className="flex p-[9px] text-ink">
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
            <button onClick={open} title="Bag" className="relative flex p-[9px] text-ink">
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
    </div>
  )
}
