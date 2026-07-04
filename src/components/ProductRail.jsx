import ProductCard from './ProductCard'

// Horizontal, snap-scrolling rail of product cards.
// No scroll-reveal here: reveal animation hides off-screen items with opacity:0,
// but an IntersectionObserver watching vertical scroll can't tell when a card
// scrolls into view *horizontally*, so cards to the right would stay hidden.
export default function ProductRail({ products }) {
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-[22px] overflow-x-auto pb-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
