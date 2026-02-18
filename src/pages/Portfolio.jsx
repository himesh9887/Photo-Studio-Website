import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['All', 'Portrait', 'Wedding', 'Commercial', 'Fashion', 'Event']

  const portfolioItems = [
    { id: 1, category: 'Portrait', title: 'Elegant Portrait', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800' },
    { id: 2, category: 'Wedding', title: 'Garden Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800' },
    { id: 3, category: 'Commercial', title: 'Product Shoot', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800' },
    { id: 4, category: 'Fashion', title: 'Editorial', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800' },
    { id: 5, category: 'Event', title: 'Corporate Gala', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800' },
    { id: 6, category: 'Portrait', title: 'Business Headshot', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800' },
    { id: 7, category: 'Wedding', title: 'Beach Ceremony', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800' },
    { id: 8, category: 'Commercial', title: 'Brand Campaign', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800' },
    { id: 9, category: 'Fashion', title: 'Runway Show', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800' },
  ]

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  return (
    <div className="pt-[70px]">
      {/* Header */}
      <section className="section-padding bg-dark-section">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Our Work</h2>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Portfolio</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A curated selection of our finest work across various photography genres
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-dark-bg border-b border-dark-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === category
                    ? 'bg-gold text-black'
                    : 'border border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3">
                      <ZoomIn className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-gold uppercase tracking-widest text-sm">{item.category}</span>
                    <h4 className="font-display text-xl text-white">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-gold uppercase tracking-widest text-sm">{selectedImage.category}</span>
                <h4 className="font-display text-2xl text-white">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio