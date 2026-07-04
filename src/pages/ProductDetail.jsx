import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProduct, allProducts } from '../data/catalog'
import { cdn, inr } from '../lib/images'
import { useCart } from '../hooks/useCart'
import { useReveal } from '../hooks/useReveal'
import { DETAIL_ACCORDIONS } from '../data/pdp'
import Highlights from '../components/pdp/Highlights'
import CompleteTheLook from '../components/pdp/CompleteTheLook'
import Reviews from '../components/pdp/Reviews'
import Faq from '../components/pdp/Faq'
import PaymentSecurity from '../components/pdp/PaymentSecurity'

const SIZES = [
  { label: '1-2Y' },
  { label: '2-3Y' },
  { label: '3-4Y', low: true },
  { label: '4-5Y' },
  { label: '5-6Y' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const { add } = useCart()
  const product = getProduct(id)

  const [size, setSize] = useState('')
  const [sizeError, setSizeError] = useState(false)
  const [qty, setQty] = useState(1)
  const [openAcc, setOpenAcc] = useState('fabric')
  const [activeImg, setActiveImg] = useState('')

  useReveal([id])
  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImg('')
    setSize('')
    setSizeError(false)
    setQty(1)
  }, [id])

  const gallery = useMemo(() => {
    if (!product) return []
    const others = allProducts()
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3)
      .map((p) => p.img)
    return [product.img, ...others]
  }, [product])

  const crossSell = useMemo(() => {
    if (!product) return []
    return allProducts().filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
  }, [product])

  const alsoLike = useMemo(() => {
    if (!product) return []
    return allProducts().filter((p) => p.id !== product.id && p.category !== product.category).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-shell px-8 py-32 text-center">
        <h1 className="mb-4 font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/" className="text-accent underline">Back to home</Link>
      </div>
    )
  }

  const hero = activeImg || product.img
  const off = Math.round((1 - product.price / product.mrp) * 100)

  const handleAdd = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    add(product.id, qty)
  }

  return (
    <div className="bg-white">
      {/* Main product block */}
      <div className="mx-auto max-w-shell px-5 py-8 md:px-8">
        <div className="mb-6 flex items-center gap-2 text-[13px] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/" className="hover:text-ink">{product.category}</Link>
          <span>/</span>
          <span className="text-ink-soft">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {gallery.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveImg(g)}
                  className="h-[84px] w-[70px] overflow-hidden rounded-lg border bg-gradient-to-br from-sand to-sand-2"
                  style={{ borderColor: g === hero ? '#2A2420' : '#EBE3D7' }}
                >
                  <img src={cdn(g, 200)} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2 shadow-soft">
              <img src={cdn(hero, 900)} alt={product.name} className="h-full max-h-[620px] w-full object-contain" />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-3 flex items-center gap-3 text-[13px]">
              <span className="text-accent">★ 4.8</span>
              <a href="#reviews" className="text-muted underline">214 reviews</a>
              {product.badge && (
                <span className="rounded-full bg-cream px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-accent">{product.badge}</span>
              )}
            </div>
            <h1 className="mb-4 font-serif text-[clamp(28px,3.4vw,42px)] font-normal leading-tight text-ink">{product.name}</h1>
            <p className="mb-6 text-[15px] text-muted">{product.note}</p>

            <div className="mb-7 flex items-center gap-3">
              <span className="text-[28px] font-medium text-ink">{inr(product.price)}</span>
              <span className="text-[16px] text-muted-2 line-through">{inr(product.mrp)}</span>
              <span className="rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-white">{off}% off</span>
            </div>

            <div className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[13px] uppercase tracking-[0.1em] text-ink">Select size</span>
                <button className="text-[12px] text-muted underline">Size guide</button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SIZES.map((z) => (
                  <button
                    key={z.label}
                    onClick={() => {
                      setSize(z.label)
                      setSizeError(false)
                    }}
                    className={`rounded-lg border px-4 py-2.5 text-[13.5px] transition-all ${
                      size === z.label ? 'border-ink bg-ink text-sand' : 'border-line bg-white text-ink hover:border-ink'
                    }`}
                  >
                    {z.label}
                    {z.low && <span className="ml-1 text-[10px] text-accent">· low</span>}
                  </button>
                ))}
              </div>
              {sizeError && <div className="mt-2 text-[12.5px] text-accent">Please select a size.</div>}
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-4 rounded-full border border-line px-4 py-2.5">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-[16px] text-ink">−</button>
                <span className="min-w-[16px] text-center text-[14px]">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="text-[16px] text-ink">+</button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 rounded-sm bg-ink py-[15px] text-[13px] uppercase tracking-[0.16em] text-sand transition-colors hover:bg-accent"
              >
                Add to bag · {inr(product.price * qty)}
              </button>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-3 text-center text-[12px] text-muted">
              {['Free shipping ₹999+', 'Cash on Delivery', '7-day returns'].map((t) => (
                <div key={t} className="rounded-lg border border-line-2 bg-cream py-3">{t}</div>
              ))}
            </div>

            {/* Detail accordions */}
            <div className="border-t border-line-2">
              {DETAIL_ACCORDIONS.map((a) => (
                <div key={a.key} className="border-b border-line-2">
                  <button
                    onClick={() => setOpenAcc((cur) => (cur === a.key ? '' : a.key))}
                    className="flex w-full items-center justify-between py-4 text-left text-[14.5px] text-ink"
                  >
                    {a.title}
                    <span className="text-[18px] text-accent">{openAcc === a.key ? '−' : '+'}</span>
                  </button>
                  {openAcc === a.key && <p className="pb-4 text-[14px] leading-relaxed text-muted">{a.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <Highlights />

      {/* Cross-sell */}
      <CompleteTheLook products={crossSell} />

      {/* Reviews */}
      <Reviews />

      {/* You may also like */}
      {alsoLike.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
            <h2 data-reveal className="mb-10 text-center font-serif text-[clamp(26px,2.6vw,38px)] text-ink">
              You may also <span className="font-display italic text-accent">like</span>
            </h2>
            <div data-stagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {alsoLike.map((p) => (
                <div key={p.id} data-reveal>
                  <Link to={`/product/${p.id}`} className="group block">
                    <div className="relative mb-3 overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2 shadow-card">
                      <img src={cdn(p.img, 400)} alt={p.name} loading="lazy" decoding="async" className="h-[280px] w-full object-contain transition-transform duration-700 ease-smooth group-hover:scale-[1.06]" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10.5px] uppercase tracking-[0.1em] text-ink">
                        {Math.round((1 - p.price / p.mrp) * 100)}% off
                      </span>
                    </div>
                    <div className="text-[14.5px] text-ink transition-colors group-hover:text-accent">{p.name}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[15px] font-medium">{inr(p.price)}</span>
                      <span className="text-[13px] text-muted-2 line-through">{inr(p.mrp)}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <Faq />

      {/* Payment security */}
      <PaymentSecurity />

      {/* Sticky add bar — sits above the glassy mobile nav on phones */}
      <div className="sticky bottom-[84px] z-[90] border-t border-line bg-white/95 backdrop-blur-md shadow-[0_-10px_30px_-20px_rgba(42,36,32,0.4)] lg:bottom-0">
        <div className="mx-auto flex max-w-shell items-center gap-5 px-5 py-3 md:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-3.5">
            <div className="h-14 w-12 flex-none overflow-hidden rounded-lg bg-gradient-to-br from-sand to-sand-2">
              <img src={cdn(hero, 200)} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-[14px] font-medium">{product.name}</div>
              <div className="text-[13px] text-muted">
                <span className="font-medium text-ink">{inr(product.price)}</span> · {size || 'Select size'}
              </div>
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="flex-none rounded-sm bg-ink px-8 py-3.5 text-[12.5px] uppercase tracking-[0.14em] text-sand transition-colors hover:bg-accent"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  )
}
