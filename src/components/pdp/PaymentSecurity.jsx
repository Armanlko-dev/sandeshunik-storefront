import { PAYMENTS } from '../../data/pdp'

const points = [
  { icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>, text: '256-bit SSL encrypted checkout' },
  { icon: <path d="M20 6 9 17l-5-5" />, text: 'Cash on Delivery available nationwide' },
  { icon: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>, text: 'Hassle-free 7-day returns & refunds' },
]

export default function PaymentSecurity() {
  return (
    <section className="bg-cocoa text-sand">
      <div className="mx-auto grid max-w-[1160px] items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-3">
        <div>
          <div className="mb-3.5 flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E7B48F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="font-serif text-[22px] text-sand">Shop with confidence</span>
          </div>
          <p className="max-w-[40ch] text-[14.5px] font-light leading-relaxed text-sand/70">
            Every order is protected by encrypted checkout, verified payment gateways, and our 7-day easy returns promise.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {points.map((p) => (
            <div key={p.text} className="flex items-center gap-3 text-[14px] text-sand/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E7B48F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
              {p.text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {PAYMENTS.map((pm) => (
            <span key={pm} className="rounded-md border border-sand/20 px-3.5 py-2 text-[12px] font-medium text-sand">
              {pm}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
