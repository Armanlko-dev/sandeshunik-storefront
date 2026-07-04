import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import CartDrawer from './components/CartDrawer'
import Splash from './components/Splash'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'

// The PDP is code-split so the initial (home) bundle stays lean.
const ProductDetail = lazy(() => import('./pages/ProductDetail'))

// App shell: persistent header, cart drawer and glassy mobile nav wrap the
// routed pages. Extra bottom padding on mobile keeps content clear of the
// floating nav bar.
export default function App() {
  return (
    <>
      <Splash />
      <Header />
      <main className="pb-24 lg:pb-0">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileNav />
      <CartDrawer />
    </>
  )
}
