import { useState, useEffect } from 'react'

// First-load splash: brand wordmark on a warm wash, then fades away.
// Shows once per browser session so it doesn't replay on every navigation.
export default function Splash() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === 'undefined') return 'done'
    return sessionStorage.getItem('su_splash_seen') ? 'done' : 'show'
  })

  useEffect(() => {
    if (phase !== 'show') return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const hold = reduce ? 300 : 1500
    const t1 = setTimeout(() => setPhase('leaving'), hold)
    const t2 = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem('su_splash_seen', '1')
    }, hold + 650)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-cream transition-opacity duration-[650ms] ease-smooth"
      style={{ opacity: phase === 'leaving' ? 0 : 1, pointerEvents: phase === 'leaving' ? 'none' : 'auto' }}
      aria-hidden={phase === 'leaving'}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute h-[380px] w-[380px] animate-float rounded-full bg-[radial-gradient(circle,rgba(201,123,90,0.14),rgba(201,123,90,0)_70%)]" />

      <div className="relative flex flex-col items-center">
        <div className="mb-5 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-white shadow-soft [animation:rise_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="font-display text-[40px] italic text-accent">Su</span>
        </div>
        <div className="overflow-hidden">
          <div className="font-serif text-[34px] tracking-wide text-ink [animation:rise_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            Sandesh<span className="text-accent">Unik</span>
          </div>
        </div>
        <div className="mt-3 text-[11.5px] uppercase tracking-[0.34em] text-muted [animation:rise_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
          Premium Kidswear
        </div>

        {/* Loading line */}
        <div className="mt-8 h-px w-[120px] overflow-hidden bg-line">
          <div className="h-full w-full origin-left bg-accent [animation:splashBar_1.4s_cubic-bezier(0.65,0,0.35,1)_forwards]" />
        </div>
      </div>

      <style>{`
        @keyframes splashBar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>
    </div>
  )
}
