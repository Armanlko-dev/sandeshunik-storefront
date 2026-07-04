import { useEffect } from 'react'

// Reveals any element carrying [data-reveal] once it scrolls into view by
// toggling the `.is-visible` class (styled in index.css). Optional stagger:
// put [data-stagger] on a container and its direct children animate in sequence.
// Call once near the top of a page/route.
export function useReveal(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    // Assign stagger delays to children of [data-stagger] containers.
    document.querySelectorAll('[data-stagger]').forEach((container) => {
      Array.from(container.children).forEach((child, i) => {
        if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', '')
        child.style.transitionDelay = `${i * 85}ms`
      })
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect()
      // Already on screen at mount → show immediately.
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add('is-visible')
      else io.observe(el)
    })

    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
