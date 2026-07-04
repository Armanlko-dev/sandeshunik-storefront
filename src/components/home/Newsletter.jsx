export default function Newsletter() {
  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto max-w-[680px] px-5 py-24 text-center md:px-8">
        <div data-reveal>
          <h2 className="mb-4 font-serif text-[clamp(30px,2.8vw,42px)] font-normal text-ink">Join the SandeshUnik family</h2>
          <p className="mb-8 text-[16px] font-light leading-relaxed text-ink-soft">
            10% off your first order, early access to festive drops, and honest fabric guides — once a week, never spammy.
          </p>
          <div className="mx-auto flex max-w-[480px] flex-wrap gap-2.5">
            <input
              placeholder="Your email address"
              className="min-w-[220px] flex-1 rounded-sm border border-line bg-white px-5 py-3.5 text-[15px] text-ink outline-none focus:border-ink"
            />
            <button className="rounded-sm bg-ink px-8 py-3.5 text-[13px] uppercase tracking-[0.16em] text-sand transition-colors hover:bg-accent">
              Subscribe
            </button>
          </div>
          <div className="mt-4 text-[12.5px] text-muted">No spam, unsubscribe anytime.</div>
        </div>
      </div>
    </section>
  )
}
