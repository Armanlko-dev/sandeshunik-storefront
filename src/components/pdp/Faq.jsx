import { useState } from 'react'
import { FAQS } from '../../data/pdp'

export default function Faq() {
  const [open, setOpen] = useState('f1')
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[860px] px-5 py-24 md:px-8">
        <div data-reveal className="mb-11 text-center">
          <div className="mb-4 eyebrow">Good to know</div>
          <h2 className="font-serif text-[clamp(28px,2.6vw,42px)] font-normal text-ink">
            Frequently asked <span className="font-display italic text-accent">questions</span>
          </h2>
        </div>
        {FAQS.map((f) => (
          <div key={f.key} className="border-b border-line">
            <button
              onClick={() => setOpen((c) => (c === f.key ? '' : f.key))}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-[15.5px] font-medium text-ink">{f.q}</span>
              <span className="flex-none text-[22px] font-light leading-none text-accent">{open === f.key ? '−' : '+'}</span>
            </button>
            {open === f.key && <div className="animate-drop pb-6 text-[14.5px] font-light leading-relaxed text-ink-soft">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
