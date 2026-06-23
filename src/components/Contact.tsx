import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, ChevronRight, MessageSquareCode } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const containerRef = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate premium server-side contact submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1800);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-brand-white text-brand-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[5px] uppercase text-brand-gold font-bold mb-3">
            Inquire Now
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-brand-dark">
            Connect With Topstar
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch" id="contact-outer-block">
          
          {/* Left Side: showroom layout info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 bg-brand-bg/50 border border-brand-gold/15 p-8 sm:p-10 flex flex-col justify-between"
            id="contact-info-panel"
          >
            <div>
              {/* Heading card */}
              <span className="font-sans text-[10px] tracking-[4px] uppercase text-brand-gold font-bold mb-2 block">
                MAIN SHOWROOM
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark mb-8">
                Visit Our Gallery
              </h3>

              {/* Bio copy */}
              <p className="font-sans text-sm text-brand-dark/70 font-light leading-relaxed mb-10">
                Experience the weight, textures, and structural precision of our timber furniture in person. Our design consultants are available daily to assist with customized floor plans, materials pairings, and custom builds.
              </p>

              {/* Specs detailed lines */}
              <div className="space-y-8">
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-white text-brand-gold shadow-sm border border-brand-gold/10 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-brand-dark uppercase tracking-wider">
                      Phone Number
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-brand-dark/80 mt-1 font-semibold hover:text-brand-gold transition-colors">
                      <a href="tel:+263771849946">+263 77 184 9946</a>
                    </p>
                    <p className="font-sans text-[11px] text-brand-dark/50 mt-0.5">Calls, WhatsApp, and Telegram inquiries</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-white text-brand-gold shadow-sm border border-brand-gold/10 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-brand-dark uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-brand-dark/80 mt-1 font-semibold">
                      184 Samora Machel Avenue
                    </p>
                    <p className="font-sans text-xs text-brand-dark/60 mt-0.5">Eastlea, Harare, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-white text-brand-gold shadow-sm border border-brand-gold/10 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-brand-dark uppercase tracking-wider">
                      Business Hours
                    </h4>
                    <p className="font-sans text-sm text-brand-dark/80 mt-1 font-medium">
                      Monday – Friday: 08:00 – 17:00
                    </p>
                    <p className="font-sans text-sm text-brand-dark/80 font-medium">
                      Saturday: 08:30 – 13:00
                    </p>
                    <p className="font-sans text-[11px] text-brand-dark/50 mt-0.5">Closed Sundays and National Holidays</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Email notification anchor footer */}
            <div className="border-t border-brand-dark/10 pt-8 mt-12 flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-gold" />
              <span className="font-sans text-xs text-brand-dark/65">
                showroom@topstarfurniture.com
              </span>
            </div>

          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-brand-white border border-brand-gold/15 p-8 sm:p-12 shadow-xl relative overflow-hidden"
            id="contact-form-panel"
          >
            {/* Success state indicator with AnimatePresence */}
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form-active"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="showroom-contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-sans text-xs uppercase tracking-widest text-brand-gold font-bold mb-8">
                    Send An Inquiry
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name-input" className="font-sans text-[10px] tracking-widest text-brand-dark/60 uppercase font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-input"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="font-sans text-sm bg-brand-bg/30 border border-brand-bg/85 py-3 px-4 rounded-none text-brand-dark focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone-input" className="font-sans text-[10px] tracking-widest text-brand-dark/60 uppercase font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone-input"
                        placeholder="+263 77 184 9946"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="font-sans text-sm bg-brand-bg/30 border border-brand-bg/85 py-3 px-4 rounded-none text-brand-dark focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email-input" className="font-sans text-[10px] tracking-widest text-brand-dark/60 uppercase font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-input"
                      required
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="font-sans text-sm bg-brand-bg/30 border border-brand-bg/85 py-3 px-4 rounded-none text-brand-dark focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message-input" className="font-sans text-[10px] tracking-widest text-brand-dark/60 uppercase font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      id="message-input"
                      rows={5}
                      required
                      placeholder="I am interested in commissioning a bespoke Sovereign Sectional sofa set and custom Walnut Credenza..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="font-sans text-sm bg-brand-bg/30 border border-brand-bg/85 py-3 px-4 rounded-none text-brand-dark focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                    />
                  </div>

                  {/* Terms indicator */}
                  <p className="font-sans text-[10px] text-brand-dark/40 italic">
                    * Required inquiry record fields. We protect your shared details with strict storage policy regulations.
                  </p>

                  {/* Submission Button with loading states */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-dark text-brand-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold border border-brand-gold/15 py-4 rounded-none font-sans text-xs uppercase tracking-[3px] font-bold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
                    id="contact-submit-btn"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className={`h-3.5 w-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="h-full flex flex-col justify-center items-center text-center p-6 sm:p-12"
                  id="contact-form-success-alert"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="p-5 bg-brand-gold/10 text-brand-gold rounded-full mb-6 border border-brand-gold/30"
                  >
                    <CheckCircle2 className="h-14 w-14" />
                  </motion.div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark mb-4">
                    Inquiry Received Successfully!
                  </h3>
                  
                  <p className="font-sans text-sm sm:text-base text-brand-dark/70 font-light leading-relaxed max-w-md mb-8">
                    Thank you for reaching out to Topstar Furniture. One of our lead showroom interior specialists will review your specs and contact you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="border border-brand-dark/20 text-brand-dark bg-white hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold cursor-pointer transition-colors flex items-center gap-2"
                    id="contact-new-inquiry-btn"
                  >
                    <span>New Inquiry</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
