import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { HamburgSkyline } from './HamburgSkyline';

const Clock: React.FC<{ timeZone: string; label: string }> = ({ timeZone, label }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('de-DE', { timeZone, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="text-right">
      <div className="text-gray-text text-sm mb-1">{label} - {time} Uhr</div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-24 pb-0 border-t border-gray-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-6">
                 <img 
                   src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                   alt="Hansetool" 
                   className="h-16 w-auto brightness-0 invert opacity-90" 
                 />
            </div>
            <p className="text-gray-text text-lg max-w-md">
              Bodenständig. Zuverlässig. Lösungsorientiert.<br/>
              Ihr Partner für Gewerbe und Immobilien in Hamburg.
            </p>
            
            <div className="space-y-2 pt-4">
                <a href="mailto:info@hansetool.de" className="flex items-center gap-3 text-gray-text hover:text-white transition-colors">
                    <Mail className="w-5 h-5" /> info@hansetool.de
                </a>
                <a href="tel:+4940123456" className="flex items-center gap-3 text-gray-text hover:text-white transition-colors">
                    <Phone className="w-5 h-5" /> +49 (0) 40 123 456
                </a>
                <div className="flex items-center gap-3 text-gray-text">
                    <MapPin className="w-5 h-5" /> Hamburg & Umgebung
                </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
                <a href="#services" className="block text-gray-text hover:text-white transition-colors">Reinigung</a>
                <a href="#services" className="block text-gray-text hover:text-white transition-colors">Hausmeisterservice</a>
                <a href="#services" className="block text-gray-text hover:text-white transition-colors">Handwerk</a>
                <a href="#services" className="block text-gray-text hover:text-white transition-colors">Umzüge</a>
            </div>
            <div className="space-y-8">
                <div>
                    <Clock timeZone="Europe/Berlin" label="Hamburg" />
                    <p className="text-gray-text text-right text-xs mt-1">Einsatzgebiet Hamburg</p>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-border text-xs text-gray-text bg-dark relative z-10">
            <p>© 2025 Hansetool. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Impressum</a>
                <a href="#" className="hover:text-white">Datenschutz</a>
            </div>
        </div>
      </div>
      
      {/* Hamburg Skyline Background at bottom */}
      <div className="absolute bottom-0 left-0 w-full text-[#1a1a1a] pointer-events-none opacity-50">
        <HamburgSkyline />
      </div>
    </footer>
  );
};