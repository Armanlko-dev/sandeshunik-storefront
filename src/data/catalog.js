// ---------------------------------------------------------------------------
// Product catalog.
// `img` values are paths on the real SandeshUnik CDN (resolved by lib/images
// `cdn()`), so the demo shows genuine product photography.
// Each product carries the fields both the Home grids and the PDP need.
// ---------------------------------------------------------------------------

/** @typedef {{ id:string, name:string, note:string, price:number, mrp:number, badge?:string, img:string, category:string, gallery?:string[], colors?:{name:string,hex:string,img:string}[] }} Product */

/** @type {Product[]} */
const PRODUCTS = [
  // --- New arrivals ---
  { id: 'n1', name: 'Pink Fit & Flare Mesh Frock', note: '3D floral applique party dress · 2–6Y', price: 1299, mrp: 1699, badge: 'New', category: 'Girls', img: '2026/03/2629-Grey.png' },
  { id: 'n2', name: 'Western 2-Piece Outfit', note: 'Ribbed top, shorts & waist bag · 1–5Y', price: 999, mrp: 1299, badge: 'New', category: 'Girls', img: '2026/03/910-Grey.png' },
  { id: 'n3', name: 'Organza Embroidered Frock', note: 'White & blue layered net · 2–6Y', price: 1499, mrp: 1899, badge: '', category: 'Girls', img: '2026/03/2624-Grey_01.png' },
  { id: 'n4', name: 'Tulle Cinderella Frock', note: 'Ombre pink tutu gown · 6M–2Y', price: 1399, mrp: 1799, badge: 'New', category: 'Baby', img: '2026/03/2653-Grey.png' },
  { id: 'n5', name: 'Organza Frock, Green', note: 'Scalloped hem occasion wear · 2–6Y', price: 1499, mrp: 1899, badge: '', category: 'Girls', img: '2026/03/2602-Grey.png' },
  { id: 'n6', name: 'Ribbed Tank & Skirt Set', note: 'Belt & heart pouch · 1–5Y', price: 899, mrp: 1149, badge: '', category: 'Girls', img: '2026/03/887-Grey.png' },

  // --- Trending ---
  { id: 't1', name: 'Korean Suspender Skirt Set', note: 'Ruffle-cuff top, A-line · 1–5Y', price: 1099, mrp: 1399, badge: 'Trending', category: 'Girls', img: '2025/11/803-1.png' },
  { id: 't2', name: 'Muslin Jhabla & Shorts', note: 'Breathable newborn set · 0–12M', price: 649, mrp: 849, badge: 'Trending', category: 'Baby', img: '2026/01/2B.png' },
  { id: 't3', name: 'Cotton Denim Joggers', note: 'Drawstring, elastic cuffs · 1–7Y', price: 799, mrp: 1049, badge: '', category: 'Boys', img: '2025/11/2240.png' },
  { id: 't4', name: 'Kuromi Bomber Jacket', note: 'Heavy fleece winter coat · 7–14Y', price: 1499, mrp: 1999, badge: 'Winter', category: 'Girls', img: '2025/12/Gemini_Generated_Image_cr36s6cr36s6cr36.png' },
  { id: 't5', name: 'Muslin Sun-Print Frock', note: 'Front-open summer tunic · 6–9M', price: 599, mrp: 799, badge: 'Back in stock', category: 'Baby', img: '2026/01/G.png' },
  { id: 't6', name: 'Pinafore Dress, Rabbit', note: 'Puff sleeve 2-piece · 2–6Y', price: 1049, mrp: 1349, badge: '', category: 'Girls', img: '2025/11/1671-1.png' },

  // --- Bestsellers ---
  { id: 'b1', name: 'Disney Cinderella Tee', note: 'Cotton graphic top · 2–8Y', price: 499, mrp: 699, badge: 'Bestseller', category: 'Girls', img: '2025/11/SRL10.png' },
  { id: 'b2', name: 'Mickey Pullover Hoodie', note: 'Soft cotton blend · 1–4Y', price: 899, mrp: 1199, badge: 'Bestseller', category: 'Girls', img: '2025/11/1804.png' },
  { id: 'b3', name: 'Bluey Loop-Knit Sweatshirt', note: 'All-season pullover · 1–6Y', price: 799, mrp: 999, badge: 'Bestseller', category: 'Boys', img: '2025/11/SRL16.png' },
  { id: 'b4', name: 'Peacock Pinafore Dress', note: 'Puff sleeve party frock · 2–6Y', price: 1149, mrp: 1499, badge: '', category: 'Girls', img: '2025/11/1946.png' },
  { id: 'b5', name: 'Bear 2-Piece Pajama Set', note: 'Snug-fit knit sleepwear · 1–5Y', price: 749, mrp: 949, badge: '', category: 'Boys', img: '2025/11/57.png' },
  { id: 'b6', name: 'Donald Duck Knit Shorts', note: 'With pockets, soft cotton · 1–6Y', price: 449, mrp: 599, badge: 'Bestseller', category: 'Boys', img: '2025/11/SRL15.png' },

  // --- Festive ---
  { id: 'f1', name: 'Pink Fit & Flare Party Frock', note: 'Satin waist tie · 2–6Y', price: 1299, mrp: 1699, badge: 'Festive', category: 'Girls', img: '2026/03/2629-Grey.png' },
  { id: 'f2', name: 'Tulle Cinderella Gown', note: 'Ombre net with sash · 6M–2Y', price: 1399, mrp: 1799, badge: 'Festive', category: 'Baby', img: '2026/03/2653-Grey.png' },
  { id: 'f3', name: 'Organza Frock, White & Blue', note: 'Boutique occasion wear · 2–6Y', price: 1499, mrp: 1899, badge: '', category: 'Girls', img: '2026/03/2624-Grey_01.png' },
  { id: 'f4', name: 'Peacock Pinafore Frock', note: 'Heart-patch waist tie · 2–6Y', price: 1149, mrp: 1499, badge: 'Festive', category: 'Girls', img: '2025/11/1946.png' },
  { id: 'f5', name: 'Organza Frock, Green & Yellow', note: 'Scalloped net layers · 2–6Y', price: 1499, mrp: 1899, badge: '', category: 'Girls', img: '2026/03/2602-Grey.png' },
  { id: 'f6', name: 'Yellow Suspender Dress Set', note: 'Rabbit applique pinafore · 2–6Y', price: 1099, mrp: 1399, badge: '', category: 'Girls', img: '2025/11/1671-1.png' },
]

// Fast lookup by id.
const BY_ID = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]))

export function getProduct(id) {
  return BY_ID[id] || null
}

export function allProducts() {
  return PRODUCTS
}

// Home page product rails.
export const RAILS = [
  { key: 'new', label: 'New Arrivals', ids: ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'] },
  { key: 'trend', label: 'Trending Now', ids: ['t1', 't2', 't3', 't4', 't5', 't6'] },
  { key: 'best', label: 'Bestsellers', ids: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] },
  { key: 'fest', label: 'Festive Edit', ids: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] },
]

export function railProducts(key) {
  const rail = RAILS.find((r) => r.key === key)
  return rail ? rail.ids.map((id) => BY_ID[id]).filter(Boolean) : []
}

// The "Most Loved" grid on the home page.
export const MOST_LOVED_IDS = ['f1', 'b2', 'b3', 'b4', 't1', 'n3', 'f2', 't6']

export default PRODUCTS
