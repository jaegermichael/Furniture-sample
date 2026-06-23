import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const length = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  // Auto slide trigger with pause-on-hover integration
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark text-brand-white overflow-hidden relative z-10 border-t border-brand-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3">
            Client Voices
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-brand-white">
            Showroom Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto" />
        </div>

        {/* Carousel Slider Panel with Hover Pause triggers */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-brand-white/5 border border-brand-gold/15 p-8 sm:p-14 shadow-xl rounded-none flex flex-col items-center text-center select-none"
          id="testimonials-slider-box"
        >
          {/* Accent Double Quotes Logo */}
          <span className="absolute top-6 left-6 sm:top-10 sm:left-10 text-brand-gold/10 pointer-events-none">
            <Quote className="h-16 w-16" />
          </span>

          {/* Slider Layout with crossfades */}
          <div className="min-h-[220px] flex flex-col justify-between w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col items-center"
              >
                {/* 5-Star Grading */}
                <div className="flex gap-1 mb-6 text-brand-gold justify-center">
                  {Array.from({ length: activeTestimonial.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 fill-brand-gold" />
                  ))}
                </div>

                {/* Main Client Speech block */}
                <p className="font-serif text-base sm:text-xl lg:text-2xl text-brand-white/95 leading-relaxed font-normal mb-8 italic max-w-3xl">
                  "{activeTestimonial.review}"
                </p>

                {/* Client Profile Avatar & Bio credits */}
                <div className="flex items-center gap-4 text-left justify-center mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-gold/30 shadow-md">
                    <img
                      src={activeTestimonial.avatarUrl}
                      alt={activeTestimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-brand-white block">
                      {activeTestimonial.name}
                    </h4>
                    <span className="font-sans text-[11px] tracking-wider uppercase text-brand-white/60 block mt-0.5">
                      {activeTestimonial.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Steer Control Navigation arrows */}
          <div className="flex items-center gap-4 mt-12 z-20">
            <button
              onClick={prevSlide}
              className="p-3 bg-brand-dark/50 hover:bg-brand-gold border border-brand-gold/15 text-brand-gold hover:text-brand-dark transition-all shadow-sm rounded-none cursor-pointer"
              aria-label="Previous Testimonial"
              id="testi-prev-btn"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Pagination custom active indicator markers */}
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    dotIdx === activeIndex ? 'w-6 bg-brand-gold' : 'w-2 bg-brand-white/20'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-brand-dark/50 hover:bg-brand-gold border border-brand-gold/15 text-brand-gold hover:text-brand-dark transition-all shadow-sm rounded-none cursor-pointer"
              aria-label="Next Testimonial"
              id="testi-next-btn"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
