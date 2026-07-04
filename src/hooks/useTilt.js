import { useRef, useEffect } from 'react'

// Premium 3D mouse-tracking tilt with a specular sheen, matching the original
// design. Returns a ref to attach to the card element. Disabled for
// touch/coarse pointers and reduced-motion users.
export function useTilt(max = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia?.('(pointer:fine)').matches
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1)'
    el.style.willChange = 'transform'
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative'

    const sheen = document.createElement('div')
    sheen.style.cssText =
      'position:absolute;inset:0;pointer-events:none;border-radius:inherit;opacity:0;transition:opacity 0.3s ease;background:radial-gradient(circle at 50% 0%, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%);mix-blend-mode:soft-light;z-index:3'
    el.appendChild(sheen)

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (0.5 - py) * max
      const ry = (px - 0.5) * max
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px)`
      sheen.style.opacity = '1'
      sheen.style.background = `radial-gradient(circle at ${(px * 100).toFixed(0)}% ${(py * 100).toFixed(0)}%, rgba(255,255,255,0.5), rgba(255,255,255,0) 55%)`
    }
    const onEnter = () => {
      el.style.transition = 'transform 0.08s linear'
    }
    const onLeave = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)'
      el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
      sheen.style.opacity = '0'
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      sheen.remove()
    }
  }, [max])

  return ref
}
