import { Sofa, Phone, MapPin, Mail, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const categories = [
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining Sets' },
    { id: 'office', label: 'Office' },
    { id: 'outdoor', label: 'Outdoor' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-brand-white border-t border-brand-gold/15 pt-20 pb-10 relative z-10" id="topstar-footer">
      
      {/* Footer Top branding card bar / section divide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-brand-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Sofa className="h-8 w-8 text-brand-gold" />
            <div>
              <p className="font-serif text-2xl tracking-widest text-brand-white block font-bold leading-none">
                TOPSTAR
              </p>
              <p className="font-sans text-[10px] tracking-[5px] uppercase text-brand-gold block mt-1 font-semibold leading-none">
                FURNITURE
              </p>
            </div>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-white/55 max-w-md font-light leading-relaxed">
            Crafting luxury comfort and durable modern furniture. Hand-finished bespoke designs crafted for beautiful living spaces.
          </p>
        </div>
      </div>

      {/* Main 4-column block layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Column 1: description logo */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-lg font-bold tracking-tight text-brand-gold mb-6 uppercase">
              The Artisan Studio
            </h4>
            <p className="font-sans text-xs sm:text-sm text-brand-white/70 leading-relaxed font-light mb-6">
              Our products are characterized by continuous book-matched grain panels, joint strength, and natural, clean, organic profiles. We source our fine lumber responsibly and curate custom upholstery with luxurious textiles.
            </p>
          </div>
          {/* Tagline emblem */}
          <div className="flex items-center gap-2.5 text-brand-gold text-xs font-semibold uppercase tracking-wider bg-brand-white/5 border border-brand-gold/15 p-3 max-w-xs justify-center sm:justify-start">
            <Sparkles className="h-4 w-4" />
            <span>Guaranteed ZIP Certified</span>
          </div>
        </div>

        {/* Column 2: Quick links */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm tracking-widest text-brand-gold uppercase font-semibold mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="font-sans text-xs sm:text-sm text-brand-white/70 hover:text-brand-gold transition-colors duration-250 cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: categories */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm tracking-widest text-brand-gold uppercase font-semibold mb-6">
            Categories
          </h4>
          <ul className="space-y-3.5">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onNavigate('products')}
                  className="font-sans text-xs sm:text-sm text-brand-white/70 hover:text-brand-gold transition-colors duration-250 cursor-pointer focus:outline-none"
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Location directions phone info */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className="font-serif text-sm tracking-widest text-brand-gold uppercase font-semibold mb-6">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Phone className="h-4 w-4 text-brand-gold mt-1 flex-shrink-0" />
              <div>
                <p className="font-sans text-xs sm:text-sm text-brand-white/80 leading-relaxed font-semibold">
                  <a href="tel:+263771849946" className="hover:text-brand-gold transition-colors">+263 77 184 9946</a>
                </p>
                <span className="font-sans text-[10px] text-brand-white/50 uppercase tracking-wider block mt-0.5">Calls & Inquiry Center</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-4 w-4 text-brand-gold mt-1 flex-shrink-0" />
              <div>
                <p className="font-sans text-xs sm:text-sm text-brand-white/80 leading-relaxed font-semibold">
                  184 Samora Machel Avenue
                </p>
                <span className="font-sans text-[10px] text-brand-white/55 block mt-0.5">Eastlea, Harare, Zimbabwe</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="h-4 w-4 text-brand-gold mt-1 flex-shrink-0" />
              <div>
                <p className="font-sans text-xs sm:text-sm text-brand-white/80 leading-relaxed font-semibold">
                  showroom@topstarfurniture.com
                </p>
                <span className="font-sans text-[10px] text-brand-white/55 block mt-0.5">Standard Email Inquiries</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar: Social and copyrights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-bottom-bar">
        <p className="font-sans text-xs text-brand-white/55 font-light text-center sm:text-left">
          © {new Date().getFullYear()} Topstar Furniture. All rights reserved. Handcrafted designs for elegant living.
        </p>
        
        {/* Social Icons row & Go Up button */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <span className="font-sans text-[11px] text-brand-white/50 select-none">FOLLOW US:</span>
            <a href="tel:+263771849946" className="font-sans text-[11px] font-semibold text-brand-gold hover:underline">WhatsApp</a>
            <a href="#contact" className="font-sans text-[11px] font-semibold text-brand-gold hover:underline">Inquire</a>
          </div>

          <button
            onClick={handleScrollTop}
            className="p-2 sm:p-2.5 bg-brand-white/5 border border-brand-white/10 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all rounded-none cursor-pointer focus:outline-none"
            title="Scroll To Top"
            id="scroll-top-button"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
