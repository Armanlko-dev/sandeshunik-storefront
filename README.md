# SandeshUnik — Storefront (React demo)

A premium, animated storefront for **SandeshUnik** (kids, baby & toddler clothing by Sandesh International), built to demo to the client. Faithfully ports the approved design into a real, production-shaped React app.

Built with **Vite + React + Tailwind CSS + React Router**.

## Highlights (what to show in the demo)

- **Editorial hero** — headline, trust stats, framed product image with a floating inset, a rotating "Su" seal, and ambient gradient depth.
- **Shoppable mega menu** — hover **Boys / Girls / Baby** in the header. Columns fade up in sequence, a large featured card, and a **"Trending now"** strip with real products you can add to bag right from the menu.
- **Cart drawer** — slides in with staggered line items, a free-shipping progress bar, quantity steppers, **promo codes** (`WELCOME10`, `COD50`) with quick-apply chips, a cross-sell carousel, and a friendly empty state. The bag badge springs when the count changes.
- **Product detail page (PDP)** — click any product; the URL becomes `/product/:id` and the page shows **that** product with real imagery, size selection, quantity, add-to-bag, accordions, and related items.
- **Glassy mobile navigation** — a frosted, floating bottom nav bar on phones (Home / Shop / Wishlist / Bag).
- **Scroll-triggered animations** — reveal-on-scroll, 3D tilt cards with specular sheen, magnetic feel, scroll-progress bar. Everything respects `prefers-reduced-motion`.
- **Real product photography** — images are served from SandeshUnik's own CDN, so the demo looks like the live store.

## Run locally

```bash
cd react-app
npm install
npm run dev
```

Open the printed URL (default **http://localhost:5173**).

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site locally
```

## Deploy

This is a static single-page app — deploy the `dist/` folder to any static host (Render Static Site, Netlify, Vercel, Cloudflare Pages).

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA routing (`/product/:id`) is handled by `public/_redirects` (`/* /index.html 200`), which Render and Netlify honour automatically.

## Project structure

```
react-app/
├─ index.html
├─ public/
│  ├─ logo.jpeg
│  └─ _redirects              # SPA fallback for deep links
├─ src/
│  ├─ main.jsx                # entry: Router + CartProvider
│  ├─ App.jsx                 # shell: Header, routes, Footer, MobileNav, CartDrawer
│  ├─ pages/
│  │  ├─ Home.jsx             # hero, categories, tabbed rails, Most Loved, trust
│  │  └─ ProductDetail.jsx    # PDP, reads :id from the route
│  ├─ components/
│  │  ├─ Header.jsx           # sticky nav + scroll progress + mega-menu hover
│  │  ├─ MegaMenu.jsx         # shoppable mega menu
│  │  ├─ CartDrawer.jsx       # bag drawer with promos + suggestions
│  │  ├─ MobileNav.jsx        # glassy bottom nav (mobile)
│  │  ├─ Hero.jsx  Footer.jsx
│  │  ├─ ProductCard.jsx  ProductRail.jsx
│  ├─ hooks/
│  │  ├─ useCart.jsx          # cart context (reducer) + derived totals/promos
│  │  ├─ useReveal.js         # scroll-reveal + stagger
│  │  ├─ useTilt.js           # 3D tilt with sheen
│  │  └─ useScrollProgress.js
│  ├─ data/
│  │  ├─ catalog.js           # products + real CDN image paths + rails
│  │  └─ navigation.js        # mega menus, categories, marquee
│  ├─ lib/images.js           # cdn() URL builder + inr() formatter
│  └─ styles/index.css        # Tailwind + reveal/reduced-motion base
├─ tailwind.config.js         # brand palette, fonts, keyframes/animations
└─ vite.config.js
```

## Notes

- Cart state is in-memory (React context) — a demo doesn't persist between reloads. Swapping in `localStorage` or a real backend is a small change in `hooks/useCart.jsx`.
- Product data lives in `src/data/catalog.js`. Point `img` at any CDN path or full URL to change imagery.
