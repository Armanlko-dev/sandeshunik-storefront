import { COMFORT_POINTS } from '../../data/content'

// Dark band: three numbered "why families choose us" cards.
export default function SignatureComfort() {
  return (
    <section className="bg-cocoa text-sand">
      <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
        <div data-reveal className="mb-14 text-center">
          <div className="mb-4 text-[11.5px] uppercase tracking-[0.3em] text-accent-soft">Why families choose us</div>
          <h2 className="font-serif text-[clamp(30px,2.8vw,46px)] font-normal leading-tight text-sand">
            Comfort you can <span className="font-display italic text-[#E7B48F]">feel</span>
          </h2>
        </div>
        <div data-stagger className="grid gap-7 md:grid-cols-3">
          {COMFORT_POINTS.map(([num, title, body]) => (
            <div key={num} data-reveal className="rounded-2xl border border-sand/15 p-9">
              <div className="mb-5 font-serif text-[40px] text-[#E7B48F]">{num}</div>
              <div className="mb-3 text-[18px] font-medium text-sand">{title}</div>
              <div className="text-[14.5px] font-light leading-relaxed text-sand/75">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
