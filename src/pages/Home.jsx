cat > src/pages/Home.jsx << 'EOF'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Camera, Heart, Award } from 'lucide-react'

const Home = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    { 
      icon: Camera, 
      title: "Portrait Photography", 
      description: "Timeless portraits that capture your essence with sophistication and artistic vision.", 
      price: "From $500",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600"
    },
    { 
      icon: Heart, 
      title: "Wedding Photography", 
      description: "Documenting your special day with elegance, emotion, and attention to every precious detail.", 
      price: "From $2,500",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600"
    },
    { 
      icon: Award, 
      title: "Commercial Shoots", 
      description: "High-end commercial photography that elevates your brand and captivates your audience.", 
      price: "From $1,500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600"
    }
  ]

  const portfolioItems = [
    { id: 1, category: "Portrait", title: "Elegant Portrait", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600" },
    { id: 2, category: "Wedding", title: "Luxury Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600" },
    { id: 3, category: "Commercial", title: "Brand Campaign", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600" },
    { id: 4, category: "Fashion", title: "Editorial Shoot", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600" },
    { id: 5, category: "Event", title: "Gala Night", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600" },
    { id: 6, category: "Portrait", title: "Corporate Headshot", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600" },
  ]

  const testimonials = [
    { name: "Sarah Mitchell", role: "Bride", content: "Absolutely stunning photos! The attention to detail and artistry exceeded all expectations. Our wedding album is breathtaking.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100" },
    { name: "James Anderson", role: "CEO, Luxe Brands", content: "Professional, creative, and delivered beyond our vision. The commercial shoot elevated our entire brand presence.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100" },
    { name: "Emily Chen", role: "Fashion Model", content: "The best photography experience I've had. They made me feel comfortable and captured the most amazing shots. Truly talented.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold border border-gold/30 px-4 py-2 rounded-full">
              Premium Photography Studio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
          >
            Capturing Moments<br />
            <span className="gold-text-gradient italic">With Elegance</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Luxury photography services for those who appreciate artistry, 
            sophistication, and timeless elegance in every frame.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/portfolio">
              <motion.button 
                className="btn-primary rounded-full flex items-center gap-3 group px-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button 
                className="btn-outline rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Session
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="bg-dark-section section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Our Services</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6">Premium Photography</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
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
                className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                </div>
                <div className="p-6 md:p-8 relative">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold text-lg">{service.price}</span>
                    <Link to="/booking">
                      <motion.button 
                        className="text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        Book Now <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Portfolio</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6">Recent Work</h2>
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
                <div className={`relative ${index === 0 ? 'aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-[500px]' : 'aspect-[4/3]'}`}>
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                    <span className="text-gold uppercase tracking-[0.3em] text-xs mb-2">{item.category}</span>
                    <h4 className="font-display text-2xl md:text-3xl text-white text-center">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <motion.button 
                className="btn-outline rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Work
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-section overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">Client Reviews</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-display italic leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-semibold">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gold text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-gold w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gold-gradient" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-black mb-6">
              Ready to Create Something<br className="hidden md:block" /> Beautiful?
            </h3>
            <p className="text-black/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Book your session today and let us capture your story with elegance, artistry, and timeless sophistication.
            </p>
            <Link to="/booking">
              <motion.button 
                className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
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
EOF