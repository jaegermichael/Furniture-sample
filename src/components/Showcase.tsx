import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Ruler, Check } from 'lucide-react';
import { SHOWCASE_DATA } from '../data';
import { ShowcaseItem } from '../types';

interface IndividualShowcaseRowProps {
  item: ShowcaseItem;
  index: number;
  key?: string;
}

function ShowcaseRow({ item, index }: IndividualShowcaseRowProps) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: '-20%' });
  const isLeft = item.side === 'left';

  return (
    <div
      ref={rowRef}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
        isLeft ? '' : 'lg:flex-row-reverse'
      } py-16`}
    >
      {/* Visual side - sliding from left or right */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full lg:w-1/2 aspect-16/10 lg:aspect-4/3 relative overflow-hidden shadow-xl select-none group"
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors duration-450" />
      </motion.div>

      {/* Copy specs side - fading from opposite */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        {/* Tiny uppercase indicator label */}
        <span className="font-sans text-[10px] tracking-[4.5px] uppercase text-brand-gold font-bold mb-3 block">
          {item.subtitle}
        </span>
        
        {/* Collection main heading */}
        <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-brand-white mb-4">
          {item.title}
        </h3>

        {/* Narrative text block */}
        <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-white/70 font-light mb-8">
          {item.description}
        </p>

        {/* Key bullets specification summary board */}
        <div className="mb-0 space-y-3 border-t border-brand-white/10 pt-6">
          {item.specs.map((spec, sIdx) => (
            <div key={sIdx} className="flex gap-3 items-start">
              <div className="p-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div>
                <dt className="font-sans text-xs uppercase tracking-widest text-brand-gold font-bold leading-normal">
                  {spec.label}
                </dt>
                <dd className="font-sans text-xs sm:text-sm text-brand-white/85 mt-0.5 font-light">
                  {spec.value}
                </dd>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section id="showcase" ref={containerRef} className="py-24 bg-brand-dark text-brand-white relative overflow-hidden z-10">
      
      {/* Decorative vertical golden strip lines simulating luxury gallery */}
      <div className="absolute left-[8%] top-0 w-[1px] h-full bg-gradient-to-b from-brand-gold/5 via-brand-gold/10 to-transparent pointer-events-none" />
      <div className="absolute right-[8%] top-0 w-[1px] h-full bg-gradient-to-b from-brand-gold/5 via-brand-gold/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main section titles */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3"
          >
            Design Spaces
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Creative Space Showcase
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[2px] bg-brand-gold mx-auto"
          />
        </div>

        {/* Dynamic alternating list */}
        <div className="divide-y divide-brand-white/10" id="showcase-rows-wrapper">
          {SHOWCASE_DATA.map((item, idx) => (
            <ShowcaseRow key={item.id} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
