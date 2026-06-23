import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining' },
    { id: 'office', label: 'Office' },
    { id: 'outdoor', label: 'Outdoor' }
  ];

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-brand-bg text-brand-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Titles */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3">
            Creative Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-brand-dark">
            Our Showroom Gallery
          </h2>
          <div className="w-16 h-[2px] bg-brand-walnut mx-auto" />
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="gallery-filters">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null); // Reset lightbox indexes to safe boundaries
                }}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans cursor-pointer border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold'
                    : 'bg-brand-white text-brand-dark/70 border-brand-gold/20 hover:border-brand-gold/50 hover:text-brand-dark hover:bg-brand-bg/70'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Bento Layout / Columns */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="gallery-images-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative overflow-hidden aspect-square sm:aspect-4/3 lg:aspect-square bg-white shadow-sm border border-brand-bg cursor-pointer group"
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details shown on hovering */}
                <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <Maximize2 className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-[8px] tracking-[3px] uppercase text-brand-gold font-bold block mb-1">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h4 className="font-serif text-base font-bold text-brand-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal overlay with exit hooks and sliding */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-md">
            {/* Backdrop trigger for clicking close */}
            <div 
              className="absolute inset-0 cursor-default" 
              onClick={() => setLightboxIndex(null)}
              id="lightbox-close-overlay"
            />

            {/* Main Lightbox Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col select-none z-10"
              id="lightbox-frame-container"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 bg-transparent text-brand-white hover:text-brand-gold p-2 cursor-pointer focus:outline-none"
                id="lightbox-close-btn"
                aria-label="Close Lightbox"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Center Box with content */}
              <div className="relative w-full h-[65vh] bg-neutral-900 border border-brand-white/10 flex items-center justify-center">
                {/* Prev arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 bg-brand-dark/70 hover:bg-brand-gold text-brand-white hover:text-brand-dark border border-brand-white/10 hover:border-brand-gold transition-colors cursor-pointer focus:outline-none z-20"
                  id="lightbox-prev-btn"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Slider Image */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={filteredGallery[lightboxIndex].imageUrl}
                    alt={filteredGallery[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Next arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 bg-brand-dark/70 hover:bg-brand-gold text-brand-white hover:text-brand-dark border border-brand-white/10 hover:border-brand-gold transition-colors cursor-pointer focus:outline-none z-20"
                  id="lightbox-next-btn"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Informational specs strip below the photo */}
              <div className="flex items-center justify-between py-4 text-brand-white border-b border-brand-white/10">
                <div>
                  <span className="font-sans text-[9px] tracking-[4px] uppercase text-brand-gold font-bold block mb-0.5">
                    {filteredGallery[lightboxIndex].category.replace('-', ' ')}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-brand-white leading-none">
                    {filteredGallery[lightboxIndex].title}
                  </h4>
                </div>
                
                {/* Page indicator */}
                <span className="font-mono text-xs text-brand-white/55">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
