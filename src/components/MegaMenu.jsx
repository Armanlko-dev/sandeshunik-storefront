import { Link } from 'react-router-dom'
import { MEGA_MENUS } from '../data/navigation'
import { getProduct } from '../data/catalog'
import { cdn, inr } from '../lib/images'
import { useCart } from '../hooks/useCart'

// The full-width shoppable mega menu. Rendered when `menuKey` is set (driven by
// hover in Header). Columns fade up in sequence; the right rail shows a large
// featured card plus two real, add-to-bag product picks.
export default function MegaMenu({ menuKey }) {
  const { add } = useCart()
  const data = MEGA_MENUS[menuKey]
  if (!data) return null

  const picks = (data.picks || []).map(getProduct).filter(Boolean)

  return (
    <div className="absolute inset-x-0 top-full animate-drop border-b border-line bg-white shadow-mega">
      {/* Top: link columns + featured card */}
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(3,1fr)_340px] gap-11 px-8 pb-7 pt-10">
        {data.cols.map((col, i) => (
          <div key={col.title} className="animate-megaCol" style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="mb-[18px] border-b border-line-2 pb-3 text-[11px] uppercase tracking-[0.2em] text-muted-2">
              {col.title}
            </div>
            <div className="flex flex-col gap-[13px]">
              {col.links.map((lnk) => (
                <Link
                  key={lnk}
                  to="/"
                  className="w-fit text-[15px] text-ink-soft transition-colors hover:text-accent"
                >
                  {lnk}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <Link to="/" className="animate-megaCol block" style={{ animationDelay: '0.14s' }}>
          <div className="relative h-[266px] overflow-hidden rounded-2xl shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-smooth hover:scale-[1.06]"
              style={{ backgroundImage: `url('${cdn(data.feat.img)}')` }}
              role="img"
              aria-label={data.feat.label}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent to-[60%]" />
            <div className="absolute inset-x-6 bottom-6 text-sand">
              <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-accent-soft">Featured</div>
              <div className="mb-3 font-serif text-[22px] leading-tight">{data.feat.label}</div>
              <span className="inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[12px] uppercase tracking-[0.14em]">
                Shop now →
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom bar: ages, brands, shoppable picks */}
      <div className="border-t border-line-2 bg-cream">
        <div className="mx-auto grid max-w-shell grid-cols-[1fr_0.8fr_340px] items-start gap-11 px-8 pb-6 pt-[22px]">
          <div className="animate-megaCol" style={{ animationDelay: '0.18s' }}>
            <div className="mb-3.5 text-[11px] uppercase tracking-[0.2em] text-muted-2">Shop by age</div>
            <div className="flex flex-wrap gap-2">
              {data.ages.map((age) => (
                <Link
                  key={age}
                  to="/"
                  className="rounded-full border border-line bg-white px-[15px] py-[7px] text-[13px] text-ink-soft transition-all hover:border-ink hover:bg-ink hover:text-sand"
                >
                  {age}
                </Link>
              ))}
            </div>
          </div>

          <div className="animate-megaCol" style={{ animationDelay: '0.22s' }}>
            <div className="mb-3.5 text-[11px] uppercase tracking-[0.2em] text-muted-2">Featured brands</div>
            <div className="flex flex-wrap gap-2">
              {data.brands.map((br) => (
                <Link
                  key={br}
                  to="/"
                  className="rounded-full border border-line bg-white px-[15px] py-[7px] text-[13px] text-ink-soft transition-all hover:border-accent hover:text-accent"
                >
                  {br}
                </Link>
              ))}
            </div>
          </div>

          <div className="animate-megaCol" style={{ animationDelay: '0.26s' }}>
            <div className="mb-3.5 text-[11px] uppercase tracking-[0.2em] text-muted-2">Trending now</div>
            <div className="grid grid-cols-2 gap-3.5">
              {picks.map((pk) => (
                <div
                  key={pk.id}
                  className="rounded-xl border border-line bg-white p-2 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <Link to={`/product/${pk.id}`} className="block h-24 overflow-hidden rounded-lg bg-gradient-to-br from-sand to-sand-2">
                    <img src={cdn(pk.img, 300)} alt={pk.name} className="h-full w-full object-contain" />
                  </Link>
                  <div className="mb-1 mt-2 h-8 overflow-hidden px-0.5 text-[12px] leading-tight text-ink-soft">
                    {pk.name}
                  </div>
                  <div className="flex items-center gap-1.5 px-0.5">
                    <span className="text-[13px] font-medium text-ink">{inr(pk.price)}</span>
                    <button
                      onClick={() => add(pk.id)}
                      title="Add to bag"
                      className="ml-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border border-ink bg-white text-[15px] leading-none text-ink transition-all hover:border-accent hover:bg-accent hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
