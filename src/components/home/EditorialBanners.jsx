import { Link } from 'react-router-dom'
import { cdn } from '../../lib/images'
import { EDITORIAL_BANNERS } from '../../data/content'

// Two large editorial banners (festive / winter) side by side.
export default function EditorialBanners() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-shell gap-6 px-5 pb-8 pt-12 md:grid-cols-2 md:px-8">
        {EDITORIAL_BANNERS.map((b) => (
          <Link key={b.eyebrow} to="/" data-reveal className="relative block h-[540px] overflow-hidden rounded-2xl">
            <img src={cdn(b.img, 800)} alt={b.title.join(' ')} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 to-transparent to-[55%]" />
            <div className="absolute inset-x-8 bottom-8 text-sand">
              <div className="mb-3 text-[12px] uppercase tracking-[0.24em] text-accent-soft">{b.eyebrow}</div>
              <div className="mb-4 font-serif text-[clamp(28px,2.6vw,40px)] leading-tight">
                {b.title[0]}
                <br />
                {b.title[1]}
              </div>
              <span className="inline-block border-b border-sand pb-1 text-[13px] uppercase tracking-[0.16em]">{b.cta} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
