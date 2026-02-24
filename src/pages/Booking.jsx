import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock3, Send, CheckCircle2 } from 'lucide-react'

const packageOptions = [
  'Portrait Photography',
  'Wedding Photography',
  'Commercial Photography',
  'Event Coverage',
  'Fashion Photography',
  'Luxury Product',
]

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Wedding Photography',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your booking request has been submitted.')
    setForm({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Wedding Photography',
      date: '',
      message: '',
    })
  }

  return (
    <div className="page-shell">
      <section className="section-padding bg-dark-section">
        <div className="container-custom text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="section-kicker mb-4">
            Reserve Your Date
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="section-title text-white mb-5"
          >
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base"
          >
            Apne project details share karein. Team within 24 hours aapko confirmation aur timeline ke saath contact karegi.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-8 card-dark"
          >
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Booking Form</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-secondary mb-2">Full Name</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} className="input-dark" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-text-secondary mb-2">Email Address</label>
                  <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="input-dark" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm text-text-secondary mb-2">Phone Number</label>
                  <input id="phone" name="phone" required value={form.phone} onChange={handleChange} className="input-dark" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm text-text-secondary mb-2">Service Type</label>
                  <select id="serviceType" name="serviceType" value={form.serviceType} onChange={handleChange} className="input-dark">
                    {packageOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm text-text-secondary mb-2">Preferred Date</label>
                <input id="date" type="date" name="date" required value={form.date} onChange={handleChange} className="input-dark" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-text-secondary mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="input-dark resize-none"
                  placeholder="Location, duration, deliverables, mood preferences..."
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit Request
              </button>
            </form>

            {status ? (
              <div className="mt-5 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {status}
              </div>
            ) : null}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="xl:col-span-4 space-y-5"
          >
            <div className="card-dark">
              <h3 className="font-display text-xl text-white mb-4">What Happens Next?</h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-gold" /> Team aapki request review karegi.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-gold" /> Aapko quote + availability bheja jayega.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-gold" /> Confirmation ke baad shoot slot lock hoga.</li>
              </ul>
            </div>
            <div className="card-dark">
              <h3 className="font-display text-xl text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <p className="flex items-center gap-2"><Clock3 className="w-4 h-4 text-gold" /> Response time: within 24 hours</p>
                <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-gold" /> Weekend slots are limited</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  )
}

export default Booking
