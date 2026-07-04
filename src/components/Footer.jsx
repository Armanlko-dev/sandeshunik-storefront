import { Link } from 'react-router-dom'

const links = ['About us', 'My Store', 'Contact us', 'Privacy Policy', 'Terms & Conditions', 'Refund & Returns', 'Shipping Policy']

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 text-sand lg:pb-0">
      <div className="mx-auto max-w-shell px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-3 font-serif text-[26px]">
              Sandesh<span className="text-accent">Unik</span>
            </div>
            <p className="mb-6 max-w-md text-[15px] font-light leading-relaxed text-sand/70">
              Premium-soft kidswear for newborns to twenty years. Thoughtfully made in India — honest prices, cash on delivery, easy returns.
            </p>
            <div className="flex max-w-sm overflow-hidden rounded-full border border-sand/25">
              <input
                placeholder="Your email address"
                className="flex-1 bg-transparent px-5 py-3 text-[14px] text-sand placeholder:text-sand/45 outline-none"
              />
              <button className="bg-accent px-6 text-[12px] uppercase tracking-[0.14em] text-white">Sign up</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 self-center">
            {links.map((l) => (
              <Link key={l} to="/" className="text-[14px] text-sand/70 transition-colors hover:text-sand">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand/15 pt-8 text-[12.5px] text-sand/55 sm:flex-row">
          <span>© SandeshUnik by Sandesh International</span>
          <span className="tracking-wide">COD · UPI · Cards · Net Banking</span>
        </div>
      </div>
    </footer>
  )
}
