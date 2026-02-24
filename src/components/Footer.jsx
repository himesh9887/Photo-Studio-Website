import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Camera, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ]

  const serviceLinks = [
    { name: 'Portrait Photography', path: '/services' },
    { name: 'Wedding Photography', path: '/services' },
    { name: 'Commercial Shoots', path: '/services' },
    { name: 'Event Coverage', path: '/services' },
  ]

  return (
    <footer className="bg-black border-t border-dark-border relative">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-gold/50 transition-all duration-300"
        whileHover={{ y: -5, scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container-custom pt-16 md:pt-20 pb-24 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-block"
          >
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-3 mb-5">
              <Camera className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl font-bold text-gold tracking-wider">
                LUXE<span className="text-white font-light">LENS</span>
              </span>
            </Link>
            <p className="text-text-secondary leading-relaxed mb-5 text-sm text-center sm:text-left">
              Capturing moments with elegance and artistry. Premium photography services for personal and commercial projects.
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
                  whileHover={{ scale: 1.08, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-block"
          >
            <h4 className="font-display text-lg text-white mb-4 uppercase tracking-wider text-center sm:text-left">Quick Links</h4>
            <ul className="space-y-2.5 text-center sm:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-block"
          >
            <h4 className="font-display text-lg text-white mb-4 uppercase tracking-wider text-center sm:text-left">Services</h4>
            <ul className="space-y-2.5 text-center sm:text-left">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-block"
          >
            <h4 className="font-display text-lg text-white mb-4 uppercase tracking-wider text-center sm:text-left">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start sm:items-start justify-center sm:justify-start gap-3 text-text-secondary text-sm text-center sm:text-left">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-text-secondary text-sm text-center sm:text-left">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-text-secondary text-sm text-center sm:text-left">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>hello@luxelens.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-dark-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs text-center md:text-left">
            Copyright 2026 Luxe Lens Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-secondary">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
