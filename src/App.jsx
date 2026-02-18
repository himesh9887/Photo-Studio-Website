import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' // ✅ Critical import
import PageTransition from './components/PageTransition'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-bg text-white dark">
      {/* ✅ CRITICAL: ScrollToTop component - resets scroll on route change */}
      <ScrollToTop />
      
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition><Home /></PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition><About /></PageTransition>
            } />
            <Route path="/services" element={
              <PageTransition><Services /></PageTransition>
            } />
            <Route path="/portfolio" element={
              <PageTransition><Portfolio /></PageTransition>
            } />
            <Route path="/pricing" element={
              <PageTransition><Pricing /></PageTransition>
            } />
            <Route path="/booking" element={
              <PageTransition><Booking /></PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition><Contact /></PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App