import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Eye, X, PhoneCall, Ruler, ShieldCheck, Hammer } from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { Product } from '../types';

interface FeaturedProductsProps {
  onContactClick: () => void;
}

export default function FeaturedProducts({ onContactClick }: FeaturedProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining' },
    { id: 'office', label: 'Office' },
    { id: 'outdoor', label: 'Outdoor' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="products" className="py-24 bg-brand-dark text-brand-white relative z-10 border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%'} }
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3"
          >
            Exquisite Showroom
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%'} }
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Featured Collections
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-10%'} }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-[2px] bg-brand-gold mx-auto"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-16 max-w-4xl mx-auto" id="products-category-tabs">
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 font-sans text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'text-brand-dark font-semibold'
                    : 'text-brand-white/60 hover:text-brand-white/90 hover:bg-brand-white/5'
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-brand-gold rounded-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={selectedCategory} // force mount transitions on tab changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          id="products-grid-layout"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-brand-dark/40 border border-brand-gold/20 relative overflow-hidden group shadow-xl hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 flex flex-col"
            >
              {/* Image box with zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-brand-bg/10 select-none">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gold Category Badge */}
                <div className="absolute top-4 left-4 bg-brand-dark/95 border border-brand-gold/25 text-brand-gold text-[9px] uppercase tracking-widest px-3 py-1 font-semibold">
                  {product.category.replace('-', ' ')}
                </div>
              </div>

              {/* Product Content info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-white group-hover:text-brand-gold transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-gold/15 flex items-center justify-between">
                  <span className="font-sans text-xs tracking-wider uppercase text-brand-gold font-semibold">
                    {product.price}
                  </span>
                  
                  {/* View Details triggers details drawer */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1.5 text-brand-white/80 hover:text-brand-gold font-sans text-xs uppercase tracking-widest font-bold cursor-pointer relative group/btn"
                    id={`view-details-${product.id}`}
                  >
                    <span>View Details</span>
                    <Eye className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Elegant Detailed Product Modal Pop-up */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
              id="details-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-brand-dark text-brand-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-brand-gold/30"
              id="details-modal-box"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-brand-dark text-brand-white hover:bg-brand-gold hover:text-brand-dark p-2 border border-brand-gold/20 transition-colors cursor-pointer z-20"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Visual side */}
                <div className="relative aspect-4/3 md:aspect-auto md:h-full bg-brand-bg/5 min-h-[250px] overflow-hidden select-none">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent hidden md:block" />
                </div>

                {/* Content specs side */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Tiny category */}
                    <span className="font-sans text-[10px] tracking-[4.5px] uppercase text-brand-gold font-bold mb-2 block">
                      TOPSTAR SHOWROOM • {selectedProduct.category.replace('-', ' ')}
                    </span>
                    
                    {/* Header title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-white mb-3">
                      {selectedProduct.name}
                    </h3>

                    {/* Pricing */}
                    <p className="font-sans text-sm tracking-wider text-brand-gold font-bold mb-6">
                      {selectedProduct.price}
                    </p>

                    {/* Bio */}
                    <p className="font-sans text-sm text-brand-white/80 font-light leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Key Bullets */}
                    <div className="mb-6">
                      <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold font-semibold mb-3 flex items-center gap-1.5 border-b border-brand-gold/15 pb-1.5">
                        <Hammer className="h-3.5 w-3.5" />
                        <span>Craftsmanship Features</span>
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.map((detail, dIdx) => (
                          <li key={dIdx} className="font-sans text-xs text-brand-white/75 flex items-start gap-2">
                            <span className="text-brand-gold mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detail Grid spec sheet */}
                    <div className="mb-8">
                      <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold font-semibold mb-3 flex items-center gap-1.5 border-b border-brand-gold/15 pb-1.5">
                        <Ruler className="h-3.5 w-3.5" />
                        <span>Dimensions & Material Specs</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        {selectedProduct.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex flex-col border-b border-brand-gold/10 pb-1">
                            <span className="text-[10px] text-brand-white/50 uppercase tracking-wider">{spec.label}</span>
                            <span className="font-medium text-brand-white/90 leading-tight">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-brand-gold/20">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        onContactClick();
                      }}
                      className="w-full bg-brand-gold hover:bg-brand-gold/85 text-brand-dark py-3.5 px-6 rounded-none font-sans text-[11px] uppercase tracking-[3.5px] font-bold cursor-pointer transition-colors flex items-center justify-center gap-2"
                      id="modal-inquire-btn"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Inquire Now</span>
                    </button>
                    <a
                      href="tel:+263771849946"
                      className="w-full bg-transparent border border-brand-white/30 hover:border-brand-gold text-brand-white py-3.5 px-6 rounded-none font-sans text-[11px] uppercase tracking-[3.5px] font-semibold transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <PhoneCall className="h-4 w-4 text-brand-gold" />
                      <span>Call Showroom</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
