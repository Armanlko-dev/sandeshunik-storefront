import { Link } from 'react-router-dom'
import { cdn, inr } from '../lib/images'
import { useCart } from '../hooks/useCart'
import { useTilt } from '../hooks/useTilt'

// A single product card used in the home rails and the "Most Loved" grid.
// `variant="grid"` gives the taller framed style; default is the rail style.
export default function ProductCard({ product, variant = 'rail' }) {
  const { add } = useCart()
  const tilt = useTilt(5)
  const to = `/product/${product.id}`
  const off = Math.round((1 - product.price / product.mrp) * 100)

  return (
    <div className={variant === 'grid' ? 'w-full' : 'w-[264px] flex-none snap-start'}>
      <div
        ref={tilt}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2 shadow-card"
      >
        <Link to={to} className="block h-[340px] overflow-hidden">
          <img
            src={cdn(product.img)}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-700 ease-smooth hover:scale-[1.06]"
          />
        </Link>

        {product.badge ? (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-ink">
            {product.badge}
          </span>
        ) : null}

        {variant === 'grid' ? (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-accent px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-white">
            {off}% off
          </span>
        ) : null}
      </div>

      <div className="pt-4">
        <Link
          to={to}
          className="mb-1 block text-[15.5px] text-ink transition-colors hover:text-accent"
        >
          {product.name}
        </Link>
        <p className="mb-2.5 text-[13px] text-muted">{product.note}</p>
        <div className="flex items-center gap-2.5">
          <span className="text-[15.5px] font-medium text-ink">{inr(product.price)}</span>
          <span className="text-[13.5px] text-muted-2 line-through">{inr(product.mrp)}</span>
          <button
            onClick={() => add(product.id)}
            className="ml-auto rounded-full border border-ink bg-white px-[18px] py-2 text-[12px] uppercase tracking-[0.12em] text-ink transition-all hover:bg-ink hover:text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
