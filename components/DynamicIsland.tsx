import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, AlertTriangle } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors whitespace-nowrap"
  >
    {children}
  </a>
);

interface DynamicIslandProps {
  onEmergencyClick?: () => void;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({ onEmergencyClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-6 w-full z-50 flex justify-center pointer-events-none px-4">
      <motion.div
        className="pointer-events-auto bg-[#111]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
        style={{ borderRadius: 30 }}
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div layout className="flex items-center p-2 h-[60px]">
          
          <AnimatePresence mode="popLayout" initial={false}>
            {isExpanded ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                 exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                 className="flex items-center gap-1 mx-2"
               >
                   <NavLink href="#services">Leistungen</NavLink>
                   <NavLink href="#values">Werte</NavLink>
                   
                   {/* Emergency Toggle */}
                   <button 
                      onClick={(e) => {
                          e.stopPropagation();
                          onEmergencyClick?.();
                      }}
                      className="flex items-center gap-2 bg-red-500/20 text-red-500 px-3 py-2 rounded-full text-sm font-bold hover:bg-red-500 hover:text-white transition-colors border border-red-500/30 animate-pulse"
                   >
                      <AlertTriangle size={14} /> <span>NOTFALL?</span>
                   </button>

                   <div className="w-px h-4 bg-white/20 mx-2 hidden sm:block"></div>
                   <a href="#contact" className="hidden sm:flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors">
                      Kontakt <ArrowRight size={14} />
                   </a>
                   {/* Mobile Contact Icon only */}
                   <a href="#contact" className="sm:hidden flex items-center justify-center w-10 h-10 bg-accent text-black rounded-full hover:bg-white transition-colors">
                      <Phone size={16} />
                   </a>
               </motion.div>
            ) : (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="px-6 flex items-center gap-2"
               >
                  <img 
                    src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                    alt="Hansetool" 
                    className="h-10 w-auto brightness-0 invert" 
                  />
               </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};