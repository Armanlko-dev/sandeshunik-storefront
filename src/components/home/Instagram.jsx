import { cdn } from '../../lib/images'
import { INSTAGRAM } from '../../data/content'

export default function Instagram() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-12 pt-24 md:px-8">
        <div data-reveal className="mb-10 text-center">
          <div className="mb-3 text-[12.5px] uppercase tracking-[0.2em] text-muted">@sandesh_unik</div>
          <h2 className="font-serif text-[clamp(30px,2.8vw,42px)] font-normal text-ink">Little moments, worn well</h2>
        </div>
        <div data-reveal className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM.map((img, i) => (
            <a key={i} href="https://www.instagram.com/sandesh_unik/" target="_blank" rel="noreferrer" className="group block h-[210px] overflow-hidden rounded-xl bg-gradient-to-br from-sand to-sand-2">
              <img src={cdn(img, 400)} alt="Instagram post" loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]" />
            </a>
          ))}
        </div>
        <div data-reveal className="mt-7 text-center">
          <a href="https://www.instagram.com/sandesh_unik/" target="_blank" rel="noreferrer" className="border-b border-ink pb-1 text-[13.5px] uppercase tracking-[0.14em] text-ink">
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
