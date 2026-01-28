import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const DirectDispatch = () => {
  const WHATSAPP_NUMBER = "4917647093890";
  const message = "Moin, hier ist ein Foto vom Schaden / der Situation:";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3"
    >
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/20 hover:scale-110 transition-transform flex items-center justify-center">
        <Camera size={24} />
      </div>
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Foto vom Schaden senden
      </span>
    </motion.a>
  );
};