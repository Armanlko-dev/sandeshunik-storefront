import { useState, useEffect } from 'react'

// Returns page scroll progress (0–100) and whether the page is scrolled past a
// threshold (used to add the sticky-header shadow).
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? Math.min(100, (y / docH) * 100) : 0)
      setScrolled(y > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progress, scrolled }
}
