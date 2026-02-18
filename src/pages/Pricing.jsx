import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "$500",
      description: "Perfect for individuals and small projects",
      features: [
        "1-hour photo session",
        "20 edited digital photos",
        "Online gallery",
        "1 location",
        "Basic retouching",
        "2 outfit changes"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,200",
      description: "Ideal for businesses and special occasions",
      features: [
        "3-hour photo session",
        "50 edited digital photos",
        "Online gallery",
        "2 locations",
        "Advanced retouching",
        "Unlimited outfit changes",
        "Rush delivery available",
        "Commercial usage rights"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$2,500",
      description: "Complete coverage for luxury events",
      features: [
        "Full day coverage (8 hours)",
        "150+ edited digital photos",
        "Premium online gallery",
        "Multiple locations",
        "Premium retouching",
        "Unlimited outfit changes",
        "Priority delivery",
        "Full usage rights",
        "Premium photo album"
      ],
      popular: false
    }
  ]

  return (
    <div className="pt-[70px]">
      {/* Header */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Investment</h2>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Pricing Plans</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Transparent pricing for exceptional photography services. Choose the plan that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-dark-card border-2 border-gold shadow-2xl shadow-gold/20' 
                    : 'bg-dark-card border border-dark-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl text-white mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-5xl text-gold">{plan.price}</span>
                    <span className="text-text-secondary">/session</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-text-secondary">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-gold/20' : 'bg-dark-section'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-gold' : 'text-white'}`} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/booking">
                  <button className={`w-full py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-black hover:bg-gold-hover'
                      : 'border border-gold text-gold hover:bg-gold hover:text-black'
                  }`}>
                    Book Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-text-secondary mb-4">Need something different?</p>
            <Link to="/contact" className="text-gold hover:text-gold-hover underline underline-offset-4">
              Contact us for custom pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-3xl text-white mb-4">What's Included?</h3>
            <p className="text-text-secondary mb-8">
              All packages include professional photography equipment, expert lighting setup, 
              and our signature post-processing. Travel within 20 miles is included; additional 
              locations may incur travel fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Professional Editing", desc: "Each photo carefully retouched" },
                { title: "High Resolution", desc: "Print-ready digital files" },
                { title: "Online Gallery", desc: "Easy sharing and downloading" }
              ].map((item) => (
                <div key={item.title} className="bg-dark-bg p-6 rounded-lg">
                  <h4 className="text-gold font-semibold mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing