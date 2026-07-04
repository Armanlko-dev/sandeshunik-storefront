import { Link } from 'react-router-dom'
import { cdn } from '../../lib/images'

// Full-bleed dark statement band with a background image and a headline.
export default function Statement() {
  return (
    <section className="relative min-h-[460px] overflow-hidden bg-cocoa lg:h-[66vh]">
      <img src={cdn('2026/03/2602-Grey.png', 1200)} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cocoa/80 to-cocoa/30" />
      <div className="relative z-[2] mx-auto flex h-full max-w-shell flex-col justify-center px-5 py-24 md:px-8">
        <div data-reveal className="max-w-[640px]">
          <div className="mb-6 flex items-center gap-3.5">
            <span className="h-px w-10 bg-sand/70" />
            <span className="text-[11.5px] uppercase tracking-[0.3em] text-accent-soft">The SandeshUnik promise</span>
          </div>
          <h2 className="mb-6 font-serif text-[clamp(34px,4.4vw,68px)] font-normal leading-[1.08] text-sand">
            Dressed for every <span className="font-display italic text-[#E7B48F]">little moment</span>
          </h2>
          <p className="mb-9 max-w-[52ch] text-[17px] font-light leading-relaxed text-sand/80">
            From the first swaddle to school-run mornings and festive evenings — comfort your child feels, quality you can trust, at prices that make sense.
          </p>
          <Link to="/" className="inline-block rounded-sm bg-sand px-10 py-4 text-[13px] uppercase tracking-[0.16em] text-cocoa transition-colors hover:bg-accent hover:text-white">
            Our story
          </Link>
        </div>
      </div>
    </section>
  )
}
