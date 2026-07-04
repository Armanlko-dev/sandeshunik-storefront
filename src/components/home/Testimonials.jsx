import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../../data/content'

// Auto-advancing testimonial carousel with dots and prev/next controls.
export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const go = (n) => setIdx((n + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[idx]

  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto max-w-[840px] px-5 py-24 text-center md:px-8">
        <div data-reveal>
          <div className="mb-7 text-[12.5px] uppercase tracking-[0.2em] text-muted">Loved by families</div>
          <div className="mb-6 text-[18px] tracking-[0.3em] text-accent">★★★★★</div>
          <blockquote className="mx-auto mb-7 min-h-[140px] max-w-[40ch] font-serif text-[clamp(22px,2.3vw,32px)] leading-[1.45] text-ink">
            “{t.q}”
          </blockquote>
          <div className="mb-9 text-[14.5px]">
            <span className="font-medium">{t.name}</span>
            <span className="text-muted"> · {t.city}</span>
          </div>
          <div className="flex items-center justify-center gap-3.5">
            <button onClick={() => go(idx - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink">←</button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="h-2 w-2 rounded-full transition-colors"
                  style={{ background: i === idx ? '#2B2420' : '#DCD2C3' }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(idx + 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
