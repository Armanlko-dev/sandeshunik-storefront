import { Link } from 'react-router-dom'
import { cdn } from '../lib/images'

// Editorial hero: headline, CTAs, trust stats, and a framed product image with
// floating inset, rotating seal, and ambient gradient depth.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-[520px] w-[520px] animate-float rounded-full bg-[radial-gradient(circle,rgba(201,123,90,0.10),rgba(201,123,90,0)_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[460px] w-[460px] animate-float rounded-full bg-[radial-gradient(circle,rgba(140,166,143,0.12),rgba(140,166,143,0)_70%)] [animation-direction:reverse]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(43,36,32,0.05)_1px,transparent_1px)] [background-size:26px_26px]"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 70%)' }}
      />

      <div className="mx-auto grid max-w-shell items-center gap-16 px-5 pb-16 pt-14 md:px-8 lg:min-h-[calc(100vh-118px)] lg:grid-cols-[1.02fr_0.98fr]">
        {/* Text */}
        <div className="relative z-[2]">
          <div className="mb-7 flex animate-rise items-center gap-3.5">
            <span className="h-px w-11 bg-[#C0A98C]" />
            <span className="text-[12px] uppercase tracking-[0.32em] text-muted">New Season 2026 · Newborn to 20Y</span>
          </div>
          <h1 className="mb-6 font-serif text-[clamp(46px,5.6vw,88px)] font-normal leading-[1.04] text-ink [animation:rise_1s_cubic-bezier(0.22,1,0.36,1)_0.08s_both]">
            Little wardrobes,
            <br />
            made <span className="font-display italic text-accent">beautifully</span>.
          </h1>
          <p className="mb-10 max-w-[44ch] text-[18px] font-light leading-[1.7] text-[#6B6157] [animation:rise_1s_cubic-bezier(0.22,1,0.36,1)_0.16s_both]">
            Premium-soft cotton, honest prices, and pieces your little ones will actually want to live in — thoughtfully made in India.
          </p>
          <div className="mb-11 flex flex-wrap items-center gap-6 [animation:rise_1s_cubic-bezier(0.22,1,0.36,1)_0.24s_both]">
            <Link to="/product/n1" className="rounded-sm bg-ink px-10 py-[17px] text-[13px] uppercase tracking-[0.18em] text-sand transition-colors hover:bg-accent">
              Shop the collection
            </Link>
            <Link to="/" className="inline-flex items-center gap-2.5 border-b border-[#C0A98C] pb-1.5 text-[13px] uppercase tracking-[0.14em] text-ink transition-all hover:gap-4">
              Explore wholesale <span>→</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-10 [animation:rise_1s_cubic-bezier(0.22,1,0.36,1)_0.32s_both]">
            {[
              ['12,000+', 'Happy families'],
              ['4.8 ★', 'Average rating'],
              ['COD', 'Across India'],
            ].map(([big, small]) => (
              <div key={small}>
                <div className="font-serif text-[30px] leading-none text-ink">{big}</div>
                <div className="mt-1.5 text-[12px] uppercase tracking-[0.14em] text-muted">{small}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative z-[1] [animation:rise_1.1s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
          <div className="relative ml-auto w-full max-w-[520px]">
            <div className="overflow-hidden rounded-[260px_260px_20px_20px] bg-gradient-to-br from-sand to-sand-2 shadow-[0_40px_80px_-40px_rgba(42,36,32,0.42)]">
              <img src={cdn('2026/03/2629-Grey.png', 800)} alt="SandeshUnik party frock" fetchpriority="high" decoding="async" className="block h-[620px] w-full animate-heroZoom object-contain" />
            </div>
            {/* Floating inset */}
            <div className="absolute -bottom-8 -left-11 h-[220px] w-[180px] animate-float overflow-hidden rounded-2xl border-[6px] border-cream bg-gradient-to-br from-sand to-sand-2 shadow-[0_24px_48px_-20px_rgba(42,36,32,0.4)]">
              <img src={cdn('2026/03/2653-Grey.png', 400)} alt="Detail" className="h-full w-full object-contain" />
            </div>
            {/* Rotating seal */}
            <div className="absolute -right-8 top-8 flex h-[116px] w-[116px] items-center justify-center rounded-full bg-cream shadow-[0_18px_40px_-18px_rgba(42,36,32,0.35)]">
              <svg viewBox="0 0 120 120" width="112" height="112" className="animate-spinSlow">
                <defs>
                  <path id="sealPath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                </defs>
                <text fontSize="9.5" letterSpacing="2.4" fill="#6B6157" fontFamily="Jost, sans-serif">
                  <textPath href="#sealPath" startOffset="0">· PREMIUM KIDSWEAR · SINCE 2025 </textPath>
                </text>
              </svg>
              <span className="absolute font-display text-[26px] italic text-accent">Su</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
