import { Link } from 'react-router-dom'
import { cdn, inr } from '../../lib/images'
import { useCart } from '../../hooks/useCart'

// Cross-sell strip with hover "Add to bag" overlay.
export default function CompleteTheLook({ products }) {
  const { add } = useCart()
  if (!products.length) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-24 md:px-8">
        <div data-reveal className="mb-9 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-[clamp(26px,2.4vw,38px)] font-normal text-ink">
            Complete the <span className="font-display italic text-accent">look</span>
          </h2>
          <span className="text-[13px] text-muted">Styled by our team</span>
        </div>
        <div data-reveal className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => (
            <div key={p.id}>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2">
                <Link to={`/product/${p.id}`} className="block h-[280px] overflow-hidden">
                  <img src={cdn(p.img, 400)} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-700 ease-smooth group-hover:scale-[1.06]" />
                </Link>
                <button
                  onClick={() => add(p.id)}
                  className="absolute inset-x-3 bottom-3 rounded-full bg-white/95 py-2.5 text-[12px] uppercase tracking-[0.12em] text-ink opacity-0 transition-all hover:bg-ink hover:text-white group-hover:opacity-100"
                >
                  Add to bag
                </button>
              </div>
              <div className="pt-3.5">
                <div className="mb-1 text-[14.5px]">{p.name}</div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[15px] font-medium">{inr(p.price)}</span>
                  <span className="text-[13px] text-muted-2 line-through">{inr(p.mrp)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
