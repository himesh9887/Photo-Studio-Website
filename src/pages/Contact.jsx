import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Luxury Avenue, Suite 500", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@luxelens.com", "bookings@luxelens.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat - Sun: 10:00 AM - 5:00 PM"]
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
            <h2 className="section-kicker mb-4">Get in Touch</h2>
            <h1 className="section-title text-white mb-6">Contact Us</h1>
            <p className="text-text-secondary text-sm md:text-lg max-w-2xl mx-auto">
              Have a question or ready to book? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Your Name</label>
                    <input
                      type="text"
                      className="input-dark w-full"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Email Address</label>
                    <input
                      type="email"
                      className="input-dark w-full"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    className="input-dark w-full"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">Message</label>
                  <textarea
                    rows="6"
                    className="input-dark w-full resize-none"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary rounded-lg w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-dark"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-text-secondary text-sm">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-dark-card rounded-lg overflow-hidden border border-dark-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
