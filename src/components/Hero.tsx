import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  const { scrollY } = useScroll();
  
  // Create beautiful slow parallax translate for the background image
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const textY = useTransform(scrollY, [0, 800], [0, -50]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.55, 0.8]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-brand-dark flex items-center justify-center"
    >
      {/* Background Image Container with Ken Burns effect and Parallax scrolling */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] left-0 z-0 select-none overflow-hidden"
      >
        <img
          src={HERO_IMAGE}
          alt="Luxury living room furniture showcase"
          className="w-full h-full object-cover kenburns-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Dark warm color overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/20 mix-blend-multiply"
        />
      </motion.div>

      {/* Floating Decorative Elements (Subtle parallax circles) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {/* Gold Ring 1 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-brand-gold/10"
        />
        {/* Soft Amber Blur Circle */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[25%] right-[15%] w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl"
        />
      </div>

      {/* Main Hero Copy Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div style={{ y: textY }}>
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="font-sans text-xs sm:text-sm tracking-[6px] uppercase text-brand-gold mb-4 sm:mb-6 font-semibold"
          >
            Bespoke Luxury Furnishings
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-brand-white leading-tight font-bold mb-6 tracking-normal"
          >
            Furniture That Turns <br />
            <span className="text-brand-gold italic font-normal font-serif">Houses Into Homes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="font-sans text-base sm:text-xl text-brand-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed px-4"
          >
            Premium craftsmanship curated for exceptional comfort, warm elegance, and contemporary living spaces.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExplore}
              className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/95 text-brand-dark px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[3px] font-bold cursor-pointer shadow-lg transition-transform"
              id="hero-explore-btn"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onContact}
              className="w-full sm:w-auto bg-transparent border border-brand-white/30 text-brand-white px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[3px] font-semibold cursor-pointer transition-colors"
              id="hero-contact-btn"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onExplore}
        id="scroll-arrow-indicator"
      >
        <span className="font-sans text-[9px] tracking-[4px] uppercase text-brand-white/55 font-semibold">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
