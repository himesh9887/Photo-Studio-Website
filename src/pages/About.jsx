import { motion } from 'framer-motion'
import { Award, Users, Camera, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Camera, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Heart, value: "1000+", label: "Projects Done" },
  ]

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-xl"
          >
            Passionate about capturing life's beautiful moments
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h3 className="font-display text-4xl text-white mb-6">A Decade of Excellence</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Founded in 2014, Luxe Lens Studio has grown from a small passion project into one of the most sought-after photography studios in the city. Our journey began with a simple belief: that every moment deserves to be captured with artistry and elegance.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Over the years, we've had the privilege of documenting thousands of stories – from intimate weddings to grand corporate events, from personal portraits to high-fashion editorials. Each project is approached with the same dedication to excellence and attention to detail.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Today, our team of talented photographers and creative professionals continues to push the boundaries of visual storytelling, combining technical expertise with artistic vision to create images that truly resonate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800"
                  alt="Photographer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-display text-4xl text-gold mb-2">{stat.value}</h4>
                <p className="text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Our Team</h2>
            <h3 className="font-display text-4xl text-white">Meet the Artists</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alexander Chen", role: "Founder & Lead Photographer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400" },
              { name: "Sophie Williams", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400" },
              { name: "Marcus Johnson", role: "Senior Photographer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-300" />
                </div>
                <h4 className="font-display text-xl text-white mb-1">{member.name}</h4>
                <p className="text-gold text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About