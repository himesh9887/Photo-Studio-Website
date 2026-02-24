import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Camera, Heart, Building2, PartyPopper, Shirt, Gem, ArrowRight, Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Professional portraits that capture your personality and style. Perfect for headshots, family photos, and personal branding.",
      features: ["Studio or on-location", "Professional retouching", "Multiple outfit changes", "Online gallery"],
      price: "From $500",
      duration: "1-2 hours"
    },
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Comprehensive wedding coverage capturing every precious moment of your special day with elegance and artistry.",
      features: ["Full day coverage", "Second photographer", "Engagement session", "Premium album included"],
      price: "From $2,500",
      duration: "8-10 hours"
    },
    {
      icon: Building2,
      title: "Commercial Photography",
      description: "High-end commercial photography for businesses, products, and corporate branding that elevates your visual identity.",
      features: ["Product photography", "Corporate headshots", "Office/environment", "Usage rights included"],
      price: "From $1,500",
      duration: "Half/Full day"
    },
    {
      icon: PartyPopper,
      title: "Event Coverage",
      description: "Professional documentation of corporate events, galas, parties, and special occasions with attention to every detail.",
      features: ["Candid & posed shots", "Quick turnaround", "Online gallery", "Print packages available"],
      price: "From $800",
      duration: "Hourly rates"
    },
    {
      icon: Shirt,
      title: "Fashion Photography",
      description: "Editorial and commercial fashion photography for brands, designers, and models looking to make a statement.",
      features: ["Creative direction", "Styling consultation", "Location scouting", "Model coordination"],
      price: "From $2,000",
      duration: "Half/Full day"
    },
    {
      icon: Gem,
      title: "Luxury Product",
      description: "Specialized product photography for luxury goods, jewelry, and high-end items that demand perfection.",
      features: ["Macro photography", "Advanced lighting", "Stacked focus", "White background options"],
      price: "From $1,200",
      duration: "Per product"
    }
  ]

  return (
    <div className="page-shell">
      {/* Header */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="section-kicker mb-4">What We Offer</h2>
            <h1 className="section-title text-white mb-6">Our Services</h1>
            <p className="text-text-secondary text-sm md:text-lg max-w-2xl mx-auto">
              Tailored photography packages designed to meet your specific needs and exceed your expectations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-dark flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="font-display text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-dark-border pt-6 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gold font-semibold text-lg">{service.price}</span>
                    <span className="text-text-secondary text-sm">{service.duration}</span>
                  </div>
                  <Link to="/booking">
                    <button className="w-full btn-outline rounded-sm flex items-center justify-center gap-2 group">
                      Book Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="font-display text-3xl text-white mb-4">Need a Custom Package?</h3>
            <p className="text-text-secondary mb-8">
              We understand that every project is unique. Contact us to discuss your specific requirements and we'll create a tailored solution just for you.
            </p>
            <Link to="/contact">
              <button className="btn-primary rounded-sm">
                Request Custom Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
