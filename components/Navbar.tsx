import React, { useState } from 'react';
import { Hammer, Menu, X, Sparkles } from 'lucide-react';
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
    // Only apply logic if we have scrolled past the initial hero area
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl py-3' 
            : 'bg-black/20 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
               <img 
                 src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                 alt="Hansetool" 
                 className={`h-8 w-auto transition-all duration-500 brightness-0 invert opacity-100`} 
               />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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

            {/* CTA with Hammer - The "Cool" Version */}
            <div className="hidden md:block">
              <motion.a 
                href="#contact" 
                className="relative group overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-3 transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                whileHover="hover"
                initial="initial"
              >
                 {/* Animated Background Fill */}
                 <motion.div 
                    variants={{
                        initial: { scaleX: 0, originX: 0 },
                        hover: { scaleX: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-accent z-0"
                 />
                 
                 {/* Sheen Effect */}
                 <motion.div
                    variants={{
                        initial: { x: '150%' },
                        hover: { x: '-150%' }
                    }}
                    transition={{ duration: 0.8, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10 pointer-events-none"
                 />

                 <span className="relative z-20 text-sm font-bold text-white group-hover:text-black transition-colors duration-300">
                    Anfrage starten
                 </span>

                 {/* Hammer Animation */}
                 <motion.div 
                    className="relative z-20 text-accent group-hover:text-black transition-colors duration-300"
                    variants={{
                        initial: { rotate: 0 },
                        hover: { 
                            rotate: [0, -30, 20, 0], // Cock back, strike hard, settle
                            x: [0, -2, 2, 0],
                            transition: { duration: 0.5, ease: "backOut" }
                        }
                    }}
                 >
                    <Hammer size={18} fill="currentColor" className="drop-shadow-sm" />
                 </motion.div>

                 {/* Impact Sparks (Invisible normally, visible on hit) */}
                 <motion.div
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-black"
                    variants={{
                        initial: { opacity: 0, scale: 0 },
                        hover: { 
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 2],
                            transition: { delay: 0.2, duration: 0.3 }
                        }
                    }}
                 >
                    <Sparkles size={12} fill="currentColor" />
                 </motion.div>
              </motion.a>
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
                   className="mt-8 bg-accent text-black px-8 py-4 rounded-full text-xl font-bold inline-block mx-auto flex items-center gap-2 justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                   Kontakt aufnehmen <Hammer size={24} fill="currentColor" />
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};