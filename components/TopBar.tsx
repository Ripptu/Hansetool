import React from 'react';

export const TopBar = () => {
  return (
    <div className="bg-[#050505] border-b border-white/5 py-3 relative z-[60]">
      <div className="container mx-auto px-6 flex justify-center md:justify-end gap-8 text-sm font-medium">
        <a href="#services" className="text-gray-400 hover:text-white transition-colors">Leistungen</a>
        <a href="#contact" className="text-red-500 hover:text-red-400 transition-colors font-bold">Notfall</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a>
      </div>
    </div>
  );
};