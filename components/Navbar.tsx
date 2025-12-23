import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-dark/90 backdrop-blur-md border-gray-border py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="z-50 relative flex items-center group">
           <img 
             src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
             alt="Hansetool" 
             className="h-20 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105" 
           />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-light/90 hover:text-white transition-colors font-medium">Leistungen</a>
          <a href="#values" className="text-light/90 hover:text-white transition-colors font-medium">Werte</a>
          <a href="#about" className="text-light/90 hover:text-white transition-colors font-medium">Über uns</a>
        </div>

        <div className="hidden lg:flex items-center gap-6">
           <div className="flex flex-col text-right text-xs text-gray-text hidden xl:block">
             <span className="block hover:text-white cursor-pointer transition-colors">info@hansetool.de</span>
             <span className="block hover:text-white cursor-pointer transition-colors">+49 (0) 40 123 456</span>
           </div>
           <div onClick={scrollToContact}>
             <Button text="Kontakt aufnehmen" />
           </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
};