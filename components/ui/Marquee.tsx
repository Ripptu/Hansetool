import React from 'react';
import { motion } from 'framer-motion';

export const Marquee = () => {
  const items = [
    "REINIGUNG", "HANDWERK", "HAUSMEISTER", "HAMBURG", "ZUVERLÄSSIG", "SAUBER", "SCHNELL", "PROFI",
    "REINIGUNG", "HANDWERK", "HAUSMEISTER", "HAMBURG", "ZUVERLÄSSIG", "SAUBER", "SCHNELL", "PROFI"
  ];

  return (
    <div className="py-12 bg-accent text-black overflow-hidden relative z-20 -rotate-1 transform origin-left scale-105 border-y-4 border-black">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
              {item}
            </span>
            <span className="w-4 h-4 bg-black rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};