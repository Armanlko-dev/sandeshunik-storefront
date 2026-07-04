import { Link } from 'react-router-dom'
import { WHOLESALE_TIERS } from '../../data/content'

// Dark B2B / wholesale band: pitch on the left, pricing tiers on the right.
export default function Wholesale() {
  return (
    <section className="bg-cocoa text-sand">
      <div className="mx-auto max-w-shell px-5 py-24 md:px-8">
        <div data-reveal className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-[12.5px] uppercase tracking-[0.2em] text-accent">Wholesale &amp; B2B</div>
            <h2 className="mb-5 font-serif text-[clamp(32px,3vw,46px)] font-normal leading-[1.15] text-sand">
              Stocking a store?
              <br />
              Buy direct from us.
            </h2>
            <p className="mb-8 max-w-[48ch] text-[16px] font-light leading-relaxed text-sand/75">
              Factory-direct pricing for boutiques, resellers and marketplaces. Mixed-size cartons, GST invoicing, and dispatch within 72 hours across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919999999999"
                className="inline-flex items-center gap-2.5 rounded-sm bg-sand px-7 py-3.5 text-[13.5px] uppercase tracking-[0.14em] text-cocoa transition-colors hover:bg-accent hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp us
              </a>
              <Link to="/" className="inline-flex items-center rounded-sm border border-sand/40 px-7 py-3.5 text-[13.5px] uppercase tracking-[0.14em] text-sand transition-colors hover:border-sand">
                Request a catalogue
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {WHOLESALE_TIERS.map((t) => (
              <div
                key={t.tier}
                className={`relative rounded-2xl border bg-sand/[0.06] p-6 ${t.popular ? 'border-accent' : 'border-sand/15'}`}
              >
                {t.popular && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-accent px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-white">
                    Popular
                  </span>
                )}
                <div className="mb-2.5 text-[12px] uppercase tracking-[0.16em] text-sand/70">{t.tier}</div>
                <div className="mb-1 font-serif text-[30px]">{t.qty}</div>
                <div className="whitespace-pre-line text-[13.5px] leading-snug text-sand/70">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
