import { cdn } from '../../lib/images'
import { STORY_STEPS } from '../../data/content'

// Two-column story: promise + steps on the left, layered imagery on the right.
export default function Storytelling() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-shell items-center gap-16 px-5 py-24 md:px-8 lg:grid-cols-2">
        <div data-reveal>
          <div className="mb-4 text-[12.5px] uppercase tracking-[0.2em] text-accent">Our promise</div>
          <h2 className="mb-6 font-serif text-[clamp(34px,3.4vw,52px)] font-normal leading-[1.12] text-ink">
            Crafted for comfort,
            <br />
            designed for childhood.
          </h2>
          <p className="mb-9 max-w-[52ch] text-[16.5px] font-light leading-relaxed text-ink-soft">
            Every SandeshUnik piece starts with fabric we’d put on our own kids — combed cotton, gentle dyes, seams that don’t scratch. Made in India, priced for everyday wardrobes.
          </p>
          <div className="flex flex-col gap-6">
            {STORY_STEPS.map(([num, title, body, bg]) => (
              <div key={num} className="flex items-start gap-4">
                <span
                  className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full font-serif text-[14px]"
                  style={{ background: bg }}
                >
                  {num}
                </span>
                <div>
                  <div className="mb-0.5 text-[15.5px] font-medium">{title}</div>
                  <div className="text-[14.5px] font-light leading-snug text-muted">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="relative min-h-[560px]">
          <div className="absolute left-0 top-0 h-[480px] w-[76%] overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2 shadow-soft">
            <img src={cdn('2026/03/2629-Grey.png', 700)} alt="Lifestyle" loading="lazy" decoding="async" className="h-full w-full object-contain" />
          </div>
          <div className="absolute bottom-0 right-0 h-[250px] w-[46%] overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-sand-2 shadow-[0_0_0_10px_#fff]">
            <img src={cdn('2025/11/1804.png', 500)} alt="Detail" loading="lazy" decoding="async" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
