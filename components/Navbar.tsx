import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Check if scrolled down more than 20px to change background style
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Smart Navbar Logic: Hide on scroll down, show on scroll up
    // Only apply logic if we have scrolled past the initial hero area (e.g., 100px)
    if (latest > 100 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Werte', href: '#values' },
    { name: 'Über uns', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-[20px] left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-0' : 'py-2'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`relative backdrop-blur-xl rounded-full border transition-all duration-300 flex items-center justify-between px-6 py-3 ${
             isScrolled 
               ? 'bg-black/80 border-white/10 shadow-xl shadow-black/50' 
               : 'bg-white/5 border-white/5'
          }`}>
            
            {/* Logo Small - Text Removed */}
            <a href="/" className="flex items-center gap-2 group">
               <img 
                 src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                 alt="Hansetool" 
                 className={`h-8 w-auto transition-all duration-500 brightness-0 invert ${isScrolled ? 'opacity-100' : 'opacity-0 -translate-x-4 pointer-events-none'}`} 
               />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a href="#contact" className="bg-white hover:bg-accent hover:text-black hover:scale-105 transition-all duration-300 text-black px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 group">
                 Anfrage
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-1"
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 md:hidden"
          >
             <div className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                   href="#contact"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="mt-8 bg-accent text-black px-8 py-4 rounded-full text-xl font-bold inline-block mx-auto"
                >
                   Kontakt aufnehmen
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};