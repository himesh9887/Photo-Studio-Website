import { motion } from 'framer-motion'
import { Award, Users, Camera, Heart, Sparkles, ShieldCheck, Clock3 } from 'lucide-react'

const teamMembers = [
  { name: 'Alexander Chen', role: 'Founder & Lead Photographer', img: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?auto=format&fit=crop&w=700' },
  { name: 'Sophie Williams', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700' },
  { name: 'Marcus Johnson', role: 'Senior Photographer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700' },
]

const values = [
  { icon: Sparkles, title: 'Art Direction', text: 'Har shoot me cinematic framing aur polished visual storytelling maintain karte hain.' },
  { icon: ShieldCheck, title: 'Reliable Process', text: 'Pre-shoot planning, timeline discipline aur clear communication se smooth delivery hoti hai.' },
  { icon: Clock3, title: 'Fast Delivery', text: 'Optimized editing workflow ke saath premium output committed timeline me deliver hota hai.' },
]

const stats = [
  { icon: Camera, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Heart, value: '1000+', label: 'Projects Done' },
]

const About = () => {
  return (
    <div className="page-shell">
      <section className="relative min-h-[52vh] md:min-h-[62vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=2200')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/65" />
        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-kicker mb-4"
          >
            About Luxe Lens
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-white max-w-2xl"
          >
            Passionate Team Behind Timeless Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-5 max-w-xl text-sm md:text-base"
          >
            Hum log moments sirf capture nahi karte, unhe elegant visual memory me transform karte hain.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="section-kicker mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-5">A Decade of Creative Excellence</h2>
            <p className="text-text-secondary mb-4 text-sm md:text-base">
              Founded in 2014, Luxe Lens ek passion project tha jo aaj premium studio experience me evolve ho chuka hai. Har project ko hum visual quality, emotion aur detail-first mindset ke saath handle karte hain.
            </p>
            <p className="text-text-secondary mb-4 text-sm md:text-base">
              Weddings se fashion editorials tak, corporate campaigns se personal portraits tak, team ka focus ek hi rehta hai: client ki story ko refined aur memorable imagery me convert karna.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              {values.map((value) => (
                <div key={value.title} className="card-dark">
                  <value.icon className="w-6 h-6 text-gold mb-3" />
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-dark-border interactive-lift">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000"
                  alt="Photographer at work"
                  className="w-full h-full object-cover hover-zoom-soft"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl border border-gold/60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-dark-section">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-dark text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/10 mx-auto flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="font-display text-2xl md:text-4xl text-gold leading-none">{stat.value}</p>
                <p className="text-text-secondary text-xs md:text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="section-kicker mb-4">Meet The Team</p>
            <h2 className="font-display text-3xl md:text-5xl text-white">Artists Behind The Lens</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group card-dark text-center interactive-lift"
              >
                <div className="aspect-square max-w-[220px] mx-auto rounded-full overflow-hidden border border-dark-border mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover hover-zoom-soft"
                  />
                </div>
                <h3 className="font-display text-xl text-white">{member.name}</h3>
                <p className="text-gold text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
