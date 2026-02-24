import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Camera, Home, Info, ImageIcon, Award, Mail, CalendarDays } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Services', path: '/services', icon: Camera },
  { name: 'Portfolio', path: '/portfolio', icon: ImageIcon },
  { name: 'Pricing', path: '/pricing', icon: Award },
  { name: 'Contact', path: '/contact', icon: Mail },
]

const mobileDockLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Services', path: '/services', icon: Camera },
  { name: 'Portfolio', path: '/portfolio', icon: ImageIcon },
  { name: 'Contact', path: '/contact', icon: Mail },
  { name: 'Book', path: '/booking', icon: CalendarDays },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-500 ${
          isScrolled ? 'bg-dark-bg/95 backdrop-blur-xl shadow-2xl border-b border-dark-border/60' : 'bg-transparent'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Camera className="w-7 h-7 text-gold" />
            </motion.div>
            <span className="font-display text-xl md:text-2xl font-bold text-gold tracking-wider">
              LUXE<span className="text-white font-light">LENS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`nav-link ${isActive(link.path) ? 'text-gold after:w-full' : ''}`}>
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-gold" />}
            </button>
            <Link to="/booking" className="btn-primary rounded-sm">Book Now</Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="nav-pill px-3" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="nav-pill px-3" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed left-2 right-2 z-50 sm:hidden phone-dock-wrap"
      >
        <div className="dock-shell phone-dock">
          {mobileDockLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`dock-link phone-dock-link ${isActive(link.path) ? 'dock-link-active' : ''}`}>
              <link.icon className="w-4 h-4" />
              <span className="phone-dock-label">{link.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
          >
            <motion.div className="absolute inset-0 bg-dark-bg/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[290px] bg-dark-card border-l border-dark-border pt-24 px-7"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-[1.35rem] font-display uppercase tracking-wide ${
                        isActive(link.path) ? 'text-gold' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary rounded-sm w-full text-center mt-4">
                  Book Session
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
