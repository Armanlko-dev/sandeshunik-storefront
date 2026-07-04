import { Link } from 'react-router-dom'
import { JOURNAL } from '../../data/content'

// "Fabric journal" — three article cards.
export default function Journal() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
        <div data-reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-[12.5px] uppercase tracking-[0.2em] text-muted">The fabric journal</div>
            <h2 className="font-serif text-[clamp(30px,2.8vw,42px)] font-normal text-ink">Know what they’re wearing</h2>
          </div>
          <Link to="/" className="border-b border-ink pb-1 text-[13.5px] uppercase tracking-[0.14em] text-ink">All articles</Link>
        </div>
        <div data-reveal className="grid gap-6 md:grid-cols-3">
          {JOURNAL.map((a) => (
            <Link key={a.title} to="/" className="group block">
              <div
                className="mb-4 flex h-[220px] items-end rounded-2xl p-4"
                style={{ backgroundImage: `linear-gradient(150deg, ${a.from}, ${a.to})` }}
              >
                <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-ink">{a.tag}</span>
              </div>
              <div className="mb-2 font-serif text-[21px] leading-snug text-ink transition-colors group-hover:text-accent">{a.title}</div>
              <div className="text-[13.5px] text-muted">{a.read}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
