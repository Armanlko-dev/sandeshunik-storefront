import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { allProducts } from '../data/catalog'
import { cdn, inr } from '../lib/images'

// Slide-in bag drawer: free-shipping progress, staggered line items, quantity
// steppers, promo codes with quick-apply chips, cross-sell carousel, and a
// friendly empty state.
export default function CartDrawer() {
  const cart = useCart()
  const [promoInput, setPromoInput] = useState('')
  const [promoError, setPromoError] = useState('')

  if (!cart.isOpen) return null

  const suggestions = allProducts()
    .filter((p) => !cart.lines.find((l) => l.id === p.id))
    .slice(0, 6)

  const submitPromo = () => {
    if (cart.applyPromo(promoInput)) {
      setPromoError('')
      setPromoInput('')
    } else {
      setPromoError("That code isn't valid. Try WELCOME10 or COD50.")
    }
  }

  return (
    <div>
      <div className="fixed inset-0 z-[200] animate-fade bg-black/45" onClick={cart.close} />
      <aside className="fixed inset-y-0 right-0 z-[201] flex w-[min(420px,92vw)] animate-slideIn flex-col bg-white shadow-drawer">
        <div className="flex items-center justify-between border-b border-line-2 px-[26px] py-[22px]">
          <div className="font-serif text-[20px]">
            Your bag <span className="font-sans text-[14px] text-muted">({cart.count})</span>
          </div>
          <button onClick={cart.close} className="text-[22px] leading-none text-ink">
            ×
          </button>
        </div>

        {cart.count > 0 ? (
          <>
            {/* Free-shipping progress */}
            <div className="px-[26px] pb-1.5 pt-4">
              <div className="mb-2 text-[13px] text-ink-soft">
                {cart.freeShip ? "You've unlocked free shipping" : `Add ${inr(cart.shipRemaining)} more for free shipping`}
              </div>
              <div className="h-1 overflow-hidden rounded bg-line-2">
                <div className="h-full rounded bg-accent transition-[width] duration-500" style={{ width: `${cart.shipPct}%` }} />
              </div>
            </div>

            {/* Line items */}
            <div className="flex-1 overflow-y-auto px-[26px] py-2.5">
              {cart.lines.map((ci, i) => (
                <div
                  key={ci.id}
                  className="flex animate-cartRise gap-4 border-b border-line-2 py-4"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="h-[88px] w-[72px] flex-none rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${cdn(ci.img, 200)}')`, backgroundColor: '#F3EDE3' }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[14.5px]">{ci.name}</div>
                    <div className="mb-2.5 text-[13px] text-muted">{inr(ci.price)}</div>
                    <div className="flex items-center gap-3.5">
                      <div className="flex items-center gap-3 rounded-full border border-line px-3 py-1">
                        <button onClick={() => cart.dec(ci.id)} className="px-1 text-[15px] text-ink">−</button>
                        <span className="min-w-[14px] text-center text-[13.5px]">{ci.qty}</span>
                        <button onClick={() => cart.inc(ci.id)} className="px-1 text-[15px] text-ink">+</button>
                      </div>
                      <span className="ml-auto text-[14.5px] font-medium">{inr(ci.line)}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Cross-sell */}
              <div className="pb-1.5 pt-5">
                <div className="mb-3.5 flex items-baseline justify-between">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-ink">You may also like</span>
                  <span className="text-[12px] text-muted-2">Swipe →</span>
                </div>
                <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
                  {suggestions.map((sg) => (
                    <div key={sg.id} className="w-[130px] flex-none snap-start">
                      <Link to={`/product/${sg.id}`} onClick={cart.close} className="block h-[150px] overflow-hidden rounded-lg bg-gradient-to-br from-sand to-sand-2">
                        <img src={cdn(sg.img, 300)} alt={sg.name} className="h-full w-full object-contain" />
                      </Link>
                      <div className="mt-2 h-[34px] overflow-hidden text-[12.5px] leading-tight">{sg.name}</div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[13px] font-medium">{inr(sg.price)}</span>
                        <button
                          onClick={() => cart.add(sg.id)}
                          className="ml-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border border-ink bg-white text-[15px] leading-none text-ink transition-all hover:bg-ink hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: promo + totals + checkout */}
            <div className="border-t border-line-2 px-[26px] pb-6 pt-[18px]">
              {cart.promoCode ? (
                <div className="mb-3.5 flex items-center gap-2.5 rounded-lg border border-[#CFE3CF] bg-[#EEF5EE] px-3.5 py-[11px]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B7A57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="flex-1 text-[13px] text-[#2E5E42]">
                    <b>{cart.promoCode}</b> applied — {cart.promoLabel}
                  </span>
                  <button onClick={cart.clearPromo} className="text-[12px] text-[#6B7A6B] underline">Remove</button>
                </div>
              ) : (
                <div className="mb-3.5">
                  <div className="flex gap-2">
                    <input
                      value={promoInput}
                      onChange={(e) => {
                        setPromoInput(e.target.value.toUpperCase())
                        setPromoError('')
                      }}
                      placeholder="Gift or promo code"
                      className="flex-1 rounded-lg border border-line px-3.5 py-[11px] text-[13.5px] uppercase text-ink outline-none"
                    />
                    <button onClick={submitPromo} className="rounded-lg border-[1.5px] border-ink bg-white px-[18px] py-[11px] text-[12px] uppercase tracking-[0.1em]">
                      Apply
                    </button>
                  </div>
                  {promoError && <div className="mt-[7px] text-[12px] text-accent">{promoError}</div>}
                  <div className="mt-2.5 flex flex-wrap gap-[7px]">
                    {['WELCOME10', 'COD50'].map((code) => (
                      <button
                        key={code}
                        onClick={() => cart.applyPromo(code)}
                        className="rounded-md border border-dashed border-accent-soft bg-cream px-2.5 py-[5px] text-[11.5px] text-[#8A6B4F]"
                      >
                        {code === 'WELCOME10' ? 'WELCOME10 · 10% off' : 'COD50 · ₹50 off COD'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {cart.discount > 0 && (
                <div className="mb-1 flex justify-between text-[13.5px] text-ink-soft">
                  <span>Discount</span>
                  <span className="text-[#3B7A57]">− {inr(cart.discount)}</span>
                </div>
              )}
              <div className="mb-1.5 flex justify-between text-[15.5px]">
                <span>Subtotal</span>
                <span className="font-medium">{inr(cart.total)}</span>
              </div>
              <div className="mb-4 text-[12.5px] text-muted">Shipping &amp; COD charges calculated at checkout</div>
              <button className="w-full rounded-sm bg-ink py-4 text-[13.5px] uppercase tracking-[0.16em] text-sand transition-colors hover:bg-accent">
                Checkout · {inr(cart.total)}
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-center justify-center gap-3 px-10 pb-6 pt-11 text-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#DCD2C3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <div className="font-serif text-[19px]">Your bag is empty</div>
              <div className="text-[14px] text-muted">Add something soft — and save on your first order.</div>
              <button onClick={cart.close} className="mt-1.5 rounded-sm bg-ink px-[30px] py-3.5 text-[12.5px] uppercase tracking-[0.14em] text-sand">
                Start shopping
              </button>
            </div>
            <div className="mx-[26px] mb-1 mt-2 rounded-xl border border-dashed border-accent-soft bg-cream px-4.5 py-4 text-center">
              <div className="mb-1.5 text-[12px] uppercase tracking-[0.14em] text-accent">First order offer</div>
              <div className="text-[14.5px] text-ink">
                Use code <b>WELCOME10</b> for <b>10% off</b> — plus free shipping over ₹999.
              </div>
            </div>
            <div className="px-[26px] pb-8 pt-5">
              <div className="mb-3.5 text-[13px] uppercase tracking-[0.1em] text-ink">Popular right now</div>
              <div className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2">
                {suggestions.map((sg) => (
                  <div key={sg.id} className="w-[150px] flex-none snap-start">
                    <Link to={`/product/${sg.id}`} onClick={cart.close} className="block h-[172px] overflow-hidden rounded-xl bg-gradient-to-br from-sand to-sand-2">
                      <img src={cdn(sg.img, 300)} alt={sg.name} className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.06]" />
                    </Link>
                    <div className="mt-2 h-9 overflow-hidden text-[13px] leading-tight">{sg.name}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[14px] font-medium">{inr(sg.price)}</span>
                      <button
                        onClick={() => cart.add(sg.id)}
                        className="ml-auto rounded-full border border-ink bg-white px-3.5 py-[5px] text-[11px] uppercase tracking-[0.1em] text-ink transition-all hover:bg-ink hover:text-white"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
