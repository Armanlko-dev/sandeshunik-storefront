import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductRail from '../components/ProductRail'
import ProductCard from '../components/ProductCard'
import EditorialBanners from '../components/home/EditorialBanners'
import Statement from '../components/home/Statement'
import ShopByAge from '../components/home/ShopByAge'
import SignatureComfort from '../components/home/SignatureComfort'
import Storytelling from '../components/home/Storytelling'
import Wholesale from '../components/home/Wholesale'
import Instagram from '../components/home/Instagram'
import Testimonials from '../components/home/Testimonials'
import Journal from '../components/home/Journal'
import Newsletter from '../components/home/Newsletter'
import { useReveal } from '../hooks/useReveal'
import { useTilt } from '../hooks/useTilt'
import { RAILS, railProducts, MOST_LOVED_IDS, getProduct } from '../data/catalog'
import { CATEGORIES, MARQUEE, BRAND_ROW } from '../data/navigation'
import { TRUST_ITEMS } from '../data/content'
import { cdn } from '../lib/images'

function SectionHeading({ eyebrow, children, cta, center }) {
  return (
    <div data-reveal className={`mb-12 ${center ? 'text-center' : 'flex flex-wrap items-end justify-between gap-6'}`}>
      <div>
        <div className={`mb-4 flex items-center gap-3.5 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-[34px] bg-[#C0A98C]" />
          <span className="eyebrow">{eyebrow}</span>
          {center && <span className="h-px w-[34px] bg-[#C0A98C]" />}
        </div>
        <h2 className="font-serif text-[clamp(32px,3vw,50px)] font-normal leading-[1.05] text-ink">{children}</h2>
      </div>
      {cta && !center && (
        <Link to="/" className="border-b border-ink pb-1 text-[13px] uppercase tracking-[0.14em] text-ink">
          {cta} →
        </Link>
      )}
    </div>
  )
}

function CategoryTile({ cat }) {
  const tilt = useTilt(6)
  return (
    <Link ref={tilt} to="/" className="relative block h-[340px] overflow-hidden rounded-2xl shadow-card">
      <img
        src={cdn(cat.img, 500)}
        alt={cat.label}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-smooth hover:scale-[1.07]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 to-transparent to-[52%]" />
      <div className="pointer-events-none absolute inset-x-5 bottom-5 text-sand">
        <div className="mb-1 font-serif text-[23px]">{cat.label}</div>
        <div className="text-[11.5px] uppercase tracking-[0.18em] text-accent-soft">Shop now →</div>
      </div>
    </Link>
  )
}

export default function Home() {
  const [tab, setTab] = useState('new')
  useReveal([tab])

  const mostLoved = MOST_LOVED_IDS.map(getProduct).filter(Boolean)

  return (
    <div>
      <Hero />

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-ink py-4">
        <div className="inline-flex animate-marquee items-center gap-[52px] pr-[52px]">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-[52px]">
              <span className="text-[12.5px] uppercase tracking-[0.26em] text-sand/80">{m}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Brand row */}
      <section className="border-b border-line-2 bg-white">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-11 gap-y-4 px-8 py-11">
          <span className="text-[12px] uppercase tracking-[0.22em] text-muted">Home to the brands they love</span>
          {BRAND_ROW.map((b) => (
            <span key={b} className="font-serif text-[21px] text-[#5C534A]">{b}</span>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="bg-cream">
        <div className="mx-auto max-w-shell px-5 pb-12 pt-24 md:px-8">
          <SectionHeading eyebrow="Shop by category" cta="View all">
            Everything they'll <span className="font-display italic text-accent">live in</span>
          </SectionHeading>
          <div data-stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.label} data-reveal>
                <CategoryTile cat={cat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial banners */}
      <EditorialBanners />

      {/* Featured collections — tabbed rails */}
      <section className="bg-white">
        <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
          <SectionHeading eyebrow="Featured collections">
            This season's <span className="font-display italic text-accent">favourites</span>
          </SectionHeading>
          <div data-reveal className="mb-9 flex flex-wrap gap-2.5">
            {RAILS.map((r) => (
              <button
                key={r.key}
                onClick={() => setTab(r.key)}
                className={`rounded-full border px-6 py-2.5 text-[13px] uppercase tracking-[0.1em] transition-all ${
                  tab === r.key ? 'border-ink bg-ink text-sand' : 'border-line bg-white text-ink-soft hover:border-ink'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          <ProductRail key={tab} products={railProducts(tab)} />
        </div>
      </section>

      {/* Statement band */}
      <Statement />

      {/* Shop by age */}
      <ShopByAge />

      {/* Most Loved grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
          <SectionHeading eyebrow="Handpicked for you" center>
            Most loved <span className="font-display italic text-accent">right now</span>
          </SectionHeading>
          <div data-stagger className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {mostLoved.map((p) => (
              <div key={p.id} data-reveal>
                <ProductCard product={p} variant="grid" />
              </div>
            ))}
          </div>
          <div data-reveal className="mt-14 text-center">
            <Link to="/product/n1" className="inline-block rounded-sm bg-ink px-11 py-4 text-[13px] uppercase tracking-[0.16em] text-sand transition-colors hover:bg-accent">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Signature comfort */}
      <SignatureComfort />

      {/* Storytelling */}
      <Storytelling />

      {/* Wholesale */}
      <Wholesale />

      {/* Trust strip */}
      <section className="border-b border-line-2 bg-white">
        <div className="mx-auto grid max-w-shell grid-cols-2 gap-8 px-5 py-20 md:px-8 lg:grid-cols-4">
          {TRUST_ITEMS.map(([t, d, bg], i) => (
            <div key={t} data-reveal className="text-center">
              <div
                className="mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full transition-transform hover:-translate-y-1"
                style={{ background: bg }}
              >
                <TrustIcon i={i} />
              </div>
              <div className="mb-1.5 text-[15px] font-medium text-ink">{t}</div>
              <p className="text-[13.5px] font-light leading-snug text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <Instagram />

      {/* Testimonials */}
      <Testimonials />

      {/* Fabric journal */}
      <Journal />

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

function TrustIcon({ i }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#2B2420', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (i === 0)
    return (
      <svg {...common}>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    )
  if (i === 1)
    return (
      <svg {...common}>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    )
  if (i === 2)
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M5 18H3V6h13v12H8" />
      <path d="M16 8h4l1.5 3.5V18h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}
