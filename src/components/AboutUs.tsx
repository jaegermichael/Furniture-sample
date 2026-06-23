import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Award, Heart, CheckCircle2, Users } from 'lucide-react';
import { BEDROOM_IMAGE } from '../data';

// Custom CountUp hook / component to run clean React-based counters safely
function Counter({ value, duration = 2000, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%'} );

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-walnut block">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-15%' });

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-brand-bg relative overflow-hidden text-brand-dark">
      {/* Subtle organic background vector graphic (gold mesh style) */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Showroom Picture */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative select-none"
          >
            {/* Elegant framing design border decoration */}
            <div className="absolute -top-4 -left-4 w-1/3 h-1/3 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 border-b-2 border-r-2 border-brand-gold" />

            {/* Main Showroom Shot */}
            <div className="relative overflow-hidden shadow-2xl aspect-4/3">
              <img
                src={BEDROOM_IMAGE}
                alt="Topstar furniture luxury bedroom suite showroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Small floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="absolute -bottom-6 left-6 bg-brand-dark text-brand-white p-5 border border-brand-gold/25 shadow-xl hidden sm:flex items-center gap-4 max-w-xs"
            >
              <div className="p-3 bg-brand-gold text-brand-dark">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-serif text-brand-gold font-bold leading-none text-lg">ZIP-Certified</p>
                <p className="font-sans text-[10px] tracking-wider uppercase text-brand-white/75 mt-1">Premium Raw Wood Materials</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Copywriting & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Tiny intro */}
            <p className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3">
              Crafting Legacy
            </p>

            {/* Section H1 title */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-dark mb-6 leading-tight">
              Crafting Comfort <br />
              <span className="text-brand-walnut font-normal italic font-serif">Since Day One</span>
            </h2>

            {/* Description paragraphs */}
            <p className="font-sans text-sm sm:text-base text-brand-dark/80 font-light leading-relaxed mb-6">
              Topstar provides exquisite premium furniture designed to bring authentic comfort, modern luxury style, and generational durability into homes, creative offices, and refined commercial spaces.
            </p>
            <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed mb-10">
              Our absolute dedication to master joinery, selected walnut and teak timber slabs, and customer satisfaction has firmly established Topstar as a trustworthy name in furniture supply and spatial interior concepts.
            </p>

            {/* Stats list with animated digits */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-10 border-t border-brand-dark/10 pt-10" id="showroom-statistics-grid">
              
              <div className="flex gap-4 items-start">
                <div className="p-2 sm:p-2.5 bg-brand-white border border-brand-gold/20 text-brand-gold mt-1">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <Counter value={15} suffix="+" />
                  <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-brand-dark/65 block mt-1 font-semibold">
                    Years Experience
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 sm:p-2.5 bg-brand-white border border-brand-gold/20 text-brand-gold mt-1">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <Counter value={2500} suffix="+" />
                  <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-brand-dark/65 block mt-1 font-semibold">
                    Happy Clients
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 sm:p-2.5 bg-brand-white border border-brand-gold/20 text-brand-gold mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <Counter value={18} suffix="+" />
                  <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-brand-dark/65 block mt-1 font-semibold">
                    Signature Sets
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 sm:p-2.5 bg-brand-white border border-brand-gold/20 text-brand-gold mt-1">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <Counter value={480} suffix="+" />
                  <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-brand-dark/65 block mt-1 font-semibold">
                    Luxury Projects
                  </span>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
