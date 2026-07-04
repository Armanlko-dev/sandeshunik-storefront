import { HIGHLIGHTS } from '../../data/pdp'

const icons = [
  <path key="a" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />,
  <>
    <path key="b1" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path key="b2" d="m9 12 2 2 4-4" />
  </>,
  <>
    <path key="c1" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path key="c2" d="M3 3v5h5" />
  </>,
  <>
    <path key="d1" d="M5 18H3V6h13v12H8" />
    <path key="d2" d="M16 8h4l1.5 3.5V18h-2" />
    <circle key="d3" cx="7" cy="18" r="2" />
    <circle key="d4" cx="17" cy="18" r="2" />
  </>,
]

// Row of four trust highlights below the product.
export default function Highlights() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-shell gap-5 px-5 py-9 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {HIGHLIGHTS.map(([title, sub, bg], i) => (
          <div key={title} className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full" style={{ background: bg }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2420" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {icons[i]}
              </svg>
            </span>
            <div>
              <div className="text-[14px] font-medium text-ink">{title}</div>
              <div className="text-[12.5px] text-muted">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
