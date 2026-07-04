import { Link } from 'react-router-dom'
import { AGE_TILES } from '../../data/content'

export default function ShopByAge() {
  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
        <div data-reveal className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3.5">
            <span className="h-px w-[34px] bg-[#C0A98C]" />
            <span className="eyebrow">Shop by age</span>
            <span className="h-px w-[34px] bg-[#C0A98C]" />
          </div>
          <h2 className="font-serif text-[clamp(32px,3vw,50px)] font-normal leading-[1.05] text-ink">
            Sized for every <span className="font-display italic text-accent">stage</span>
          </h2>
        </div>
        <div data-stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {AGE_TILES.map(([age, label]) => (
            <Link
              key={age}
              to="/"
              data-reveal
              className="rounded-2xl border border-line bg-white px-5 py-7 text-center text-ink transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-1.5 font-serif text-[26px]">{age}</div>
              <div className="text-[13px] text-muted">{label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
