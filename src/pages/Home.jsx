import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Award, Camera, Heart, Star, ImageIcon } from 'lucide-react'

// Error handling for images
const useImageError = (src) => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  const handleError = () => setHasError(true)

  return { hasError, handleError }
}

// Image component with fallback
const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const { hasError, handleError } = useImageError(src)

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-[#2A2A2A] ${className}`}>
        <ImageIcon className="w-12 h-12 text-[#B3B3B3]" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  )
}

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Timeless portraits that capture your essence with sophistication and artistic vision.',
    price: 'From $500',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Documenting your special day with elegance, emotion, and attention to every precious detail.',
    price: 'From $2,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600',
  },
  {
    icon: Award,
    title: 'Commercial Shoots',
    description: 'High-end commercial photography that elevates your brand and captivates your audience.',
    price: 'From $1,500',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600',
  },
]

const portfolioItems = [
  { id: 1, category: 'Portrait', title: 'Elegant Portrait', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600' },
  { id: 2, category: 'Wedding', title: 'Luxury Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600' },
  { id: 3, category: 'Commercial', title: 'Brand Campaign', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600' },
  { id: 4, category: 'Fashion', title: 'Editorial Shoot', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600' },
  { id: 5, category: 'Event', title: 'Gala Night', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600' },
  { id: 6, category: 'Portrait', title: 'Corporate Headshot', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600' },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Bride',
    content: 'Absolutely stunning photos! The attention to detail and artistry exceeded all expectations. Our wedding album is breathtaking.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100',
  },
  {
    name: 'James Anderson',
    role: 'CEO, Luxe Brands',
    content: 'Professional, creative, and delivered beyond our vision. The commercial shoot elevated our entire brand presence.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100',
  },
  {
    name: 'Emily Chen',
    role: 'Fashion Model',
    content: 'The best photography experience I have had. They made me feel comfortable and captured the most amazing shots.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100',
  },
]

const Home = () => {
  const heroRef = useRef(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const hasTestimonials = testimonials.length > 0
  const { scrollYProgress } = useScroll({ 
    target: heroRef, 
    offset: ['start start', 'end start'] 
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (testimonials.length <= 1) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000')" }}
          />
          {/* Fixed: Using explicit hex colors instead of custom color name */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0F0F0F]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        <div className="relative z-10 container-custom text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-[#D4AF37] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold border border-[#D4AF37]/30 px-4 py-2 rounded-full"
          >
            Premium Photography Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
          >
            Capturing Moments
            <br />
            <span className="gold-text-gradient italic">With Elegance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#B3B3B3] text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Luxury photography services for those who appreciate artistry, sophistication, and timeless elegance in every frame.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/portfolio">
              <motion.button 
                className="btn-primary flex items-center gap-3 group px-10" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button 
                className="btn-outline" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Book Session
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-[#141414] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Our Services</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl text-white mb-6">Premium Photography</h2>
            <p className="text-[#B3B3B3] max-w-2xl mx-auto text-sm md:text-base">
              Tailored photography experiences designed to capture your most precious moments with sophistication and artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
                </div>
                <div className="p-6 md:p-8 relative">
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-[#B3B3B3] text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4AF37] font-semibold text-lg">{service.price}</span>
                    <Link to="/booking">
                      <motion.button 
                        className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2" 
                        whileHover={{ x: 5 }}
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-[#0F0F0F]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Portfolio</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl text-white mb-6">Recent Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative ${
                  index === 0 
                    ? 'aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-[500px]' 
                    : 'aspect-[4/3]'
                }`}>
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                    <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-2">{item.category}</span>
                    <h4 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white text-center">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <motion.button 
                className="btn-outline" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                View All Work
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#141414] overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Testimonials</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl text-white">Client Reviews</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {hasTestimonials ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 text-center"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial]?.rating || 0)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-['Playfair_Display'] italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial]?.content}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <ImageWithFallback
                      src={testimonials[currentTestimonial]?.image}
                      alt={testimonials[currentTestimonial]?.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-semibold">{testimonials[currentTestimonial]?.name}</h4>
                      <p className="text-[#D4AF37] text-sm">{testimonials[currentTestimonial]?.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 text-center text-[#B3B3B3]">
                Testimonials will be available soon.
              </div>
            )}

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#D4AF37] w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#C19B2E] to-[#D4AF37]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl text-black mb-6">
              Ready to Create Something
              <br className="hidden md:block" /> Beautiful?
            </h3>
            <p className="text-black/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Book your session today and let us capture your story with elegance, artistry, and timeless sophistication.
            </p>
            <Link to="/booking">
              <motion.button
                className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-semibold rounded-sm hover:bg-gray-900 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
