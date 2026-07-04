import { createContext, useContext, useMemo, useReducer, useCallback } from 'react'
import { getProduct } from '../data/catalog.js'

const CartContext = createContext(null)

const FREE_SHIP = 999
const PROMOS = {
  WELCOME10: { type: 'pct', val: 0.1, label: '10% off' },
  COD50: { type: 'flat', val: 50, label: '₹50 off COD' },
}

const initial = { items: {}, open: false, promo: '' }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const qty = (state.items[action.id] || 0) + (action.qty || 1)
      return { ...state, items: { ...state.items, [action.id]: qty }, open: true }
    }
    case 'INC':
      return { ...state, items: { ...state.items, [action.id]: (state.items[action.id] || 0) + 1 } }
    case 'DEC': {
      const next = (state.items[action.id] || 0) - 1
      const items = { ...state.items }
      if (next <= 0) delete items[action.id]
      else items[action.id] = next
      return { ...state, items }
    }
    case 'REMOVE': {
      const items = { ...state.items }
      delete items[action.id]
      return { ...state, items }
    }
    case 'OPEN':
      return { ...state, open: true }
    case 'CLOSE':
      return { ...state, open: false }
    case 'PROMO':
      return { ...state, promo: action.code }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)

  const add = useCallback((id, qty = 1) => dispatch({ type: 'ADD', id, qty }), [])
  const inc = useCallback((id) => dispatch({ type: 'INC', id }), [])
  const dec = useCallback((id) => dispatch({ type: 'DEC', id }), [])
  const remove = useCallback((id) => dispatch({ type: 'REMOVE', id }), [])
  const open = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const close = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const applyPromo = useCallback((code) => {
    const c = (code || '').trim().toUpperCase()
    if (PROMOS[c]) {
      dispatch({ type: 'PROMO', code: c })
      return true
    }
    return false
  }, [])
  const clearPromo = useCallback(() => dispatch({ type: 'PROMO', code: '' }), [])

  const derived = useMemo(() => {
    const lines = Object.entries(state.items)
      .map(([id, qty]) => {
        const p = getProduct(id)
        return p ? { ...p, qty, line: p.price * qty } : null
      })
      .filter(Boolean)
    const count = lines.reduce((a, l) => a + l.qty, 0)
    const subtotal = lines.reduce((a, l) => a + l.line, 0)
    const promo = state.promo && PROMOS[state.promo]
    let discount = 0
    if (promo) discount = promo.type === 'pct' ? Math.round(subtotal * promo.val) : Math.min(promo.val, subtotal)
    const total = Math.max(0, subtotal - discount)
    const shipPct = Math.min(100, Math.round((subtotal / FREE_SHIP) * 100))
    const freeShip = subtotal >= FREE_SHIP
    const shipRemaining = Math.max(0, FREE_SHIP - subtotal)
    return {
      lines,
      count,
      subtotal,
      discount,
      total,
      shipPct,
      freeShip,
      shipRemaining,
      promoCode: state.promo,
      promoLabel: promo ? promo.label : '',
    }
  }, [state.items, state.promo])

  const value = {
    ...derived,
    isOpen: state.open,
    add,
    inc,
    dec,
    remove,
    open,
    close,
    applyPromo,
    clearPromo,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

export { FREE_SHIP }
