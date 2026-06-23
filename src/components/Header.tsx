import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Sofa } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/30 py-4 shadow-lg'
            : 'bg-transparent py-6 border-b border-white/5'
        }`}
        id="topstar-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group cursor-pointer text-left"
              id="header-logo-btn"
            >
              <div className="w-8 h-8 bg-brand-gold flex items-center justify-center font-serif font-bold text-brand-dark text-lg group-hover:rotate-6 transition-transform duration-300">T</div>
              <div>
                <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] text-brand-white leading-none block font-bold uppercase">
                  TOPSTAR
                </span>
                <span className="font-sans text-[8px] tracking-[4.5px] uppercase text-brand-gold block font-medium leading-none mt-1">
                  FURNITURE
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative font-sans text-sm tracking-widest uppercase py-2 cursor-pointer transition-colors duration-300 ${
                      isActive ? 'text-brand-gold font-semibold' : 'text-brand-white/80 hover:text-brand-gold'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center gap-4" id="desktop-contact">
              <a
                href="tel:+263771849946"
                className="flex items-center gap-2 text-brand-white hover:text-brand-gold transition-colors duration-300 font-sans text-sm tracking-wider"
              >
                <Phone className="h-4 w-4 text-brand-gold" />
                <span>+263 77 184 9946</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('contact')}
                className="bg-brand-gold hover:bg-brand-gold/95 text-brand-dark px-5 py-2.5 rounded-none font-sans text-xs uppercase tracking-[2px] font-semibold cursor-pointer shadow-md transition-colors"
                id="header-cta-btn"
              >
                Call Now
              </motion.button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-white hover:text-brand-gold p-2 cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Slide-out Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-brand-dark text-brand-white flex flex-col justify-between p-6 md:hidden"
            id="mobile-fullscreen-menu"
          >
            {/* Header top-padding spacing to align with trigger height */}
            <div className="flex items-center justify-between pt-4 border-b border-brand-gold/10 pb-6">
              <div className="flex items-center gap-2">
                <Sofa className="h-6 w-6 text-brand-gold" />
                <div>
                  <span className="font-serif text-xl tracking-widest text-brand-white block font-semibold">
                    TOPSTAR
                  </span>
                  <span className="font-sans text-[8px] tracking-[3px] uppercase text-brand-gold block">
                    FURNITURE
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-white hover:text-brand-gold focus:outline-none cursor-pointer"
                id="mobile-menu-close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col items-center gap-6 my-auto pt-10" id="mobile-nav-items">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-serif text-2xl tracking-wide py-1 cursor-pointer hover:text-brand-gold transition-colors ${
                    activeSection === item.id ? 'text-brand-gold font-semibold' : 'text-brand-white/80'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Quick Contacts */}
            <div className="border-t border-brand-gold/10 pt-6 pb-4 flex flex-col gap-4 text-center items-center" id="mobile-nav-footer">
              <p className="text-xs text-brand-white/50 tracking-widest uppercase font-sans">
                Get In Touch
              </p>
              <a
                href="tel:+263771849946"
                className="flex items-center justify-center gap-3 bg-brand-gold/10 border border-brand-gold/20 py-4 w-full rounded-none tracking-widest uppercase font-sans text-sm text-brand-gold hover:bg-brand-gold/20 transition-all font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>+263 77 184 9946</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
