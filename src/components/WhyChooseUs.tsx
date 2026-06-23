import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Palette, Tag, Truck } from 'lucide-react';

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Materials',
      description: 'Bespoke walnut and teak timber slabs dried to optimum levels and treated with natural mineral hardwax oil wraps.',
    },
    {
      icon: Palette,
      title: 'Modern Designs',
      description: 'Timeless luxury aesthetics characterized by clean, floating structures, balanced shadows, and gorgeous wood flows.',
    },
    {
      icon: Tag,
      title: 'Affordable Pricing',
      description: 'Luxury craftsmanship at direct-to-consumer values, bypassing typical design showroom markups.',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'White-glove home delivery and flat unpacking setting in Harare and throughout national regions, handled safely.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        staggerChildren: 0.1,
        stiffness: 80,
        damping: 14,
        delay: i * 0.15,
      }
    })
  };

  return (
    <section ref={containerRef} className="py-24 bg-brand-white text-brand-dark relative z-10 border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Short introduction header info */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3"
          >
            The Topstar Standard
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-brand-dark"
          >
            Why Choose Topstar
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-[2px] bg-brand-gold mx-auto"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="why-choose-us-grid">
          {features.map((feature, idx) => (
            <motion.div
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              whileHover={{ 
                y: -10, 
                backgroundColor: '#1F1F1F', 
                color: '#FAFAF8',
                borderColor: '#C8A97E',
                transition: { duration: 0.3 } 
              }}
              key={idx}
              className="p-8 border border-brand-gold/20 bg-brand-bg/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon round enclosure */}
              <div className="p-4 bg-brand-white border border-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300 mb-6">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Title description copy */}
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight mb-3 transition-colors duration-300 text-brand-dark group-hover:text-brand-white">
                {feature.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-dark/70 group-hover:text-brand-white/80 transition-colors duration-300 font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
