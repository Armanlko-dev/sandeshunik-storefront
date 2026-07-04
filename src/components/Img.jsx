// Thin <img> wrapper that defaults to lazy loading + async decoding so
// offscreen product imagery doesn't block first paint. Pass eager for
// above-the-fold images (e.g. the hero).
export default function Img({ eager = false, ...props }) {
  return <img loading={eager ? 'eager' : 'lazy'} decoding="async" {...props} />
}
