import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface CTAProps {
  onBrowseProducts: () => void;
}

export default function CTA({ onBrowseProducts }: CTAProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Create subtle parallax translation moving background image
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      id="cta"
      ref={containerRef}
      className="relative py-28 bg-brand-dark overflow-hidden text-brand-white text-center flex items-center justify-center border-t border-brand-gold/10"
    >
      {/* Background with walnut texture image parallax translation */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] left-0 z-0 opacity-40 select-none pointer-events-none"
      >
        <img
          src={HERO_IMAGE}
          alt="Bespoke furniture layout"
          className="w-full h-full object-cover blur-[2px]"
          referrerPolicy="no-referrer"
        />
        {/* Deep rich dark and walnut tone overlay cascade */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark/95" />
      </motion.div>

      {/* Main Container Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiny gold seal circle badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center mb-6 bg-brand-gold/5"
        >
          <span className="font-serif text-brand-gold text-lg italic leading-none font-semibold">T</span>
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-white leading-tight mb-4"
        >
          Ready to Upgrade Your Space?
        </motion.h2>

        {/* Text body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-sans text-base sm:text-lg text-brand-white/80 max-w-xl mx-auto mb-10 font-light leading-relaxed"
        >
          Discover premium bespoke furniture that elegantly combines striking beauty, organic comfort, and lasting generational quality.
        </motion.p>

        {/* Buttons duo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          id="cta-buttons-wrapper"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBrowseProducts}
            className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/95 text-brand-dark px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[3px] font-bold cursor-pointer transition-colors shadow-lg flex items-center justify-center gap-2"
            id="cta-browse-btn"
          >
            <span>Browse Products</span>
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>

          <motion.a
            href="tel:+263771849946"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-transparent border border-brand-white/30 hover:border-brand-gold text-brand-white px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[3px] font-semibold transition-all flex items-center justify-center gap-3"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            <span>Call +263 77 184 9946</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
