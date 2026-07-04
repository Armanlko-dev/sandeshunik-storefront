// Resolves a SandeshUnik CDN image path to a full, sized URL.
// The real store serves product photos from a Jetpack/Photon CDN, so we can
// reference the genuine product imagery directly for a realistic demo.
const CDN = 'https://i0.wp.com/sandeshunik.com/wp-content/uploads/'

export function cdn(path, w = 700) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${CDN}${path}?w=${w}&ssl=1`
}

// Format a number as Indian Rupees.
export function inr(n) {
  return '₹' + Number(n).toLocaleString('en-IN')
}
