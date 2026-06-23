import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Phone, ArrowUp, Sofa, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural smooth exponential easeOut
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Monitor Scroll for Active Navigation highlighting and Back-To-Top indicator trigger
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top indicator visibility
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['home', 'products', 'about', 'showcase', 'gallery', 'contact'];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft navigation scrolling utilizing Lenis engine for maximum momentum consistency
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (lenisInstance) {
      const el = document.getElementById(sectionId);
      if (el) {
        lenisInstance.scrollTo(el, {
          offset: -80, // perfect header clear spacing offset
          duration: 1.5,
        });
      }
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-white min-h-screen text-brand-dark overflow-x-hidden selection:bg-brand-walnut selection:text-brand-white">
      
      {/* Scrollable Layout Overlay wrapper */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main id="topstar-main-content">
        
        {/* Core Sections Grid */}
        <Hero 
          onExplore={() => handleNavigate('products')} 
          onContact={() => handleNavigate('contact')} 
        />
        
        <FeaturedProducts onContactClick={() => handleNavigate('contact')} />
        
        <AboutUs />
        
        <WhyChooseUs />
        
        <Showcase />
        
        <Testimonials />
        
        <Gallery />
        
        <CTA onBrowseProducts={() => handleNavigate('products')} />
        
        <Contact />

      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Mobile Floating Sticky Tap-To-Call CTA Anchor bottom sheet bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-brand-dark/95 backdrop-blur-md border-t border-brand-gold/15 py-3.5 px-4 md:hidden flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-2">
          <Sofa className="h-4.5 w-4.5 text-brand-gold" />
          <div>
            <p className="font-serif text-xs font-bold text-brand-white leading-tight uppercase tracking-wider">Topstar Showroom</p>
            <p className="font-sans text-[10px] text-brand-gold font-semibold uppercase tracking-widest leading-none mt-0.5">Zimbabwe Branch</p>
          </div>
        </div>
        
        <motion.a 
          whileTap={{ scale: 0.95 }}
          href="tel:+263771849946"
          className="bg-brand-gold text-brand-dark px-4 py-2.5 rounded-none font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
          id="mobile-bottom-bar-cta"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>+263 77 184 9946</span>
        </motion.a>
      </div>

      {/* Desktop Scroll-To-Top indicator bottom right bubble */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => handleNavigate('home')}
            className="fixed bottom-6 right-6 z-35 p-3.5 bg-brand-dark border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all rounded-none cursor-pointer focus:outline-none shadow-xl hidden md:block"
            title="Scroll To Top"
            id="floating-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
