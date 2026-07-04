import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, MEGA_MENUS } from '../data/navigation'

// Slide-in mobile navigation. Category items (Boys/Girls/Baby) expand to show
// their mega-menu link columns as an accordion.
export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)
  if (!open) return null

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-[210] animate-fade bg-black/45" onClick={onClose} />
      <aside className="fixed inset-y-0 left-0 z-[211] flex w-[min(340px,88vw)] animate-slideIn-left flex-col bg-white shadow-drawer">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line-2 px-5 py-4">
          <img src="/logo.jpeg" alt="SandeshUnik" className="h-9 w-auto" />
          <button onClick={onClose} aria-label="Close menu" className="text-[26px] leading-none text-ink">
            ×
          </button>
        </div>

        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto px-2 py-3">
          {NAV_ITEMS.map((item) => {
            const mega = item.menu && MEGA_MENUS[item.menu]
            const isOpen = expanded === item.label
            if (!mega) {
              return (
                <Link
                  key={item.label}
                  to="/"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3.5 text-[15px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-cream"
                >
                  {item.label}
                </Link>
              )
            }
            return (
              <div key={item.label} className="border-b border-line-2/60 last:border-0">
                <button
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-[15px] uppercase tracking-[0.1em] text-ink"
                >
                  {item.label}
                  <span className={`text-[18px] text-accent transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="animate-drop pb-2 pl-4">
                    {mega.cols.map((col) => (
                      <div key={col.title} className="mb-3">
                        <div className="mb-1.5 px-2 text-[10.5px] uppercase tracking-[0.2em] text-muted-2">{col.title}</div>
                        <div className="flex flex-col">
                          {col.links.map((lnk) => (
                            <Link
                              key={lnk}
                              to="/"
                              onClick={onClose}
                              className="rounded-md px-2 py-2 text-[14px] text-ink-soft transition-colors hover:bg-cream hover:text-accent"
                            >
                              {lnk}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer actions */}
        <div className="border-t border-line-2 px-5 py-4">
          <a
            href="https://wa.me/919956464994"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
            </svg>
            WhatsApp us
          </a>
        </div>
      </aside>
    </div>
  )
}
