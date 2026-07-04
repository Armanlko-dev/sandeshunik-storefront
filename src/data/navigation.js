// Mega-menu content, keyed by top-level nav item. `feat` and `picks` reference
// real CDN image paths so the menu is fully shoppable in the demo.

export const MEGA_MENUS = {
  boys: {
    cols: [
      { title: 'Clothing', links: ['T-Shirts', 'Shirts', 'Pants', 'Jeans', 'Shorts'] },
      { title: 'Comfort', links: ['Hoodies', 'Sweatshirts', 'Tracksuits', 'Night Suits', 'Pajamas'] },
      { title: 'Occasion', links: ['Party Wear', 'Festive Sets', 'Winter Wear', 'New Arrivals'] },
    ],
    ages: ['0-6M', '6-12M', '1-2Y', '2-4Y', '4-6Y', '6-8Y', '8-10Y', '10-12Y', '12-14Y', '14-16Y'],
    brands: ['Disney', 'Marvel', 'Bluey', 'Paw Patrol', 'Sandesh Rainbow', 'Zara'],
    feat: { label: 'The Boys Festive Edit', img: '2025/11/2240.png' },
    picks: ['t3', 'b3'],
  },
  girls: {
    cols: [
      { title: 'Clothing', links: ['Frocks', 'Dresses', 'T-Shirts', 'Leggings', 'Skirts'] },
      { title: 'Comfort', links: ['Night Suits', 'Pajamas', 'Sweatshirts', 'Hoodies', 'Sets'] },
      { title: 'Occasion', links: ['Party Frocks', 'Festive Lehengas', 'Winter Wear', 'New Arrivals'] },
    ],
    ages: ['0-6M', '6-12M', '1-2Y', '2-4Y', '4-6Y', '6-8Y', '8-10Y', '10-12Y', '12-14Y', '14-16Y'],
    brands: ['Disney', 'Marvel', 'Bluey', 'Paw Patrol', 'Sandesh Rainbow', 'Zara'],
    feat: { label: 'Party Frocks & Gowns', img: '2026/03/2629-Grey.png' },
    picks: ['f1', 'f2'],
  },
  baby: {
    cols: [
      { title: 'Baby Girl', links: ['Frocks', 'Sets', 'Sleepsuits', 'Nightsuits', 'Shorts'] },
      { title: 'Baby Boy', links: ['Jhablas', 'Sets', 'Rompers', 'Hoodies', 'Pants'] },
      { title: 'Newborn', links: ['0-6M Essentials', 'Muslin Sets', 'Gift Sets', 'Caps & Booties'] },
    ],
    ages: ['0-6M', '6-12M', '1-2Y', '2-4Y'],
    brands: ['Sandesh Rainbow', 'Disney', 'Bluey', 'Rainbow Campus'],
    feat: { label: 'Newborn Gift Sets', img: '2026/01/2B.png' },
    picks: ['t2', 't5'],
  },
}

// Top-level nav. `menu` links a label to a MEGA_MENUS key; others are plain.
export const NAV_ITEMS = [
  { label: 'Boys', menu: 'boys' },
  { label: 'Girls', menu: 'girls' },
  { label: 'Baby', menu: 'baby' },
  { label: 'Store' },
  { label: 'Brands' },
  { label: 'Wholesale' },
  { label: 'About' },
]

// "Shop by category" tiles on the home page.
export const CATEGORIES = [
  { label: 'Boys', img: '2025/11/2240.png' },
  { label: 'Girls', img: '2026/03/2629-Grey.png' },
  { label: 'Baby', img: '2026/01/2B.png' },
  { label: 'Winter Wear', img: '2025/12/Gemini_Generated_Image_cr36s6cr36s6cr36.png' },
  { label: 'Party Wear', img: '2026/03/2653-Grey.png' },
  { label: 'Newborn', img: '2026/03/887-Grey.png' },
]

export const MARQUEE = [
  'Combed cotton, always',
  'Cash on delivery across India',
  'Newborn to twenty years',
  'Wholesale direct from factory',
  '7-day easy returns',
]

export const BRAND_ROW = ['Disney', 'Marvel', 'Bluey', 'Paw Patrol', 'Sandesh Rainbow', 'Rainbow Campus']
