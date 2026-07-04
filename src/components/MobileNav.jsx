import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

// Glassy bottom navigation bar for mobile (hidden on lg+). Uses a frosted
// backdrop-blur "glassmorphism" surface floating above the content.
const items = [
  {
    key: 'home',
    label: 'Home',
    to: '/',
    icon: (
      <path d="M3 10.5 12 3l9 7.5M5 9v11a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9" />
    ),
  },
  {
    key: 'shop',
    label: 'Shop',
    to: '/',
    icon: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7a4 4 0 0 1 8 0" />
      </>
    ),
  },
  {
    key: 'wish',
    label: 'Wishlist',
    to: '/',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
]

export default function MobileNav() {
  const { count, open } = useCart()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[150] px-4 pb-[env(safe-area-inset-bottom,10px)] pt-2 lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-[22px] border border-white/40 bg-white/70 px-2 py-2.5 shadow-[0_16px_40px_-12px_rgba(43,36,32,0.35)] backdrop-blur-xl backdrop-saturate-150">
        {items.map((it) => (
          <Link
            key={it.key}
            to={it.to}
            className="flex flex-1 flex-col items-center gap-1 text-ink transition-colors hover:text-accent"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {it.icon}
            </svg>
            <span className="text-[10.5px] tracking-wide">{it.label}</span>
          </Link>
        ))}

        <button
          onClick={open}
          className="relative flex flex-1 flex-col items-center gap-1 text-ink transition-colors hover:text-accent"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="text-[10.5px] tracking-wide">Bag</span>
          {count > 0 && (
            <span
              key={count}
              className="absolute right-3 top-[-2px] flex h-[18px] min-w-[18px] animate-pop items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white"
            >
              {count}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
