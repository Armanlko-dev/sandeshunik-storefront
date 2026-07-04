import { RATING_BARS, REVIEWS } from '../../data/pdp'

// Ratings summary + review list.
export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream">
      <div className="mx-auto max-w-[1160px] px-5 py-24 md:px-8">
        <div data-reveal className="mb-14 text-center">
          <div className="mb-4 eyebrow">Ratings &amp; reviews</div>
          <h2 className="font-serif text-[clamp(28px,2.6vw,42px)] font-normal text-ink">
            What families <span className="font-display italic text-accent">say</span>
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[300px_1fr] lg:items-start">
          {/* Summary */}
          <div className="rounded-2xl bg-white p-8 text-center lg:sticky lg:top-24">
            <div className="font-serif text-[58px] leading-none text-ink">4.8</div>
            <div className="my-2.5 text-[17px] tracking-[0.2em] text-accent">★★★★★</div>
            <div className="mb-6 text-[13.5px] text-muted">Based on 214 reviews</div>
            <div className="flex flex-col gap-2.5 text-left">
              {RATING_BARS.map((rb) => (
                <div key={rb.star} className="flex items-center gap-2.5">
                  <span className="w-8 text-[12px] text-ink-soft">{rb.star}★</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded bg-line-2">
                    <div className="h-full rounded bg-accent" style={{ width: `${rb.pct}%` }} />
                  </div>
                  <span className="w-[30px] text-right text-[12px] text-muted">{rb.count}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-lg border-[1.5px] border-ink bg-white py-3.5 text-[12.5px] uppercase tracking-[0.12em]">
              Write a review
            </button>
          </div>

          {/* List */}
          <div className="flex flex-col gap-6" data-reveal>
            {REVIEWS.map((rv) => (
              <div key={rv.name} className="rounded-2xl bg-white p-7">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F6E3D7] font-serif text-[15px] text-ink">{rv.initial}</span>
                    <div>
                      <div className="text-[14.5px] font-medium text-ink">{rv.name}</div>
                      <div className="text-[12px] text-[#3B7A57]">✓ Verified buyer</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] tracking-[0.12em] text-accent">{rv.stars}</div>
                    <div className="mt-0.5 text-[12px] text-muted">{rv.date}</div>
                  </div>
                </div>
                <div className="mb-1.5 text-[15px] font-medium text-ink">{rv.title}</div>
                <div className="text-[14.5px] font-light leading-relaxed text-ink-soft">{rv.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
