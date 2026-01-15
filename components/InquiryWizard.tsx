import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Wrench, AlertTriangle, Calendar, Check, Box } from 'lucide-react';

interface InquiryWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryWizard: React.FC<InquiryWizardProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    category: '',
    size: 100,
    timing: ''
  });

  const WHATSAPP_NUMBER = "4915255905935";

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    const text = `Moin Hansetool-Team, ich interessiere mich für: *${data.category}*.\nFläche: ca. *${data.size} m²*.\nGewünschter Start: *${data.timing}*.\n\nBitte um Rückmeldung!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
    setTimeout(() => {
        setStep(1);
        setData({ category: '', size: 100, timing: '' });
    }, 500);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop with Blur */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#121212]/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Anfrage Assistent</span>
                        <div className="flex gap-1 mt-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`h-1 w-8 rounded-full transition-colors duration-300 ${step >= i ? 'bg-accent' : 'bg-gray-800'}`} />
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 overflow-y-auto min-h-[400px]">
                    <AnimatePresence mode="wait" custom={step}>
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-white leading-tight">Wobei dürfen wir helfen?</h2>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { id: 'Reinigung', icon: Sparkles, label: 'Reinigung & Hygiene', desc: 'Büro, Praxis, Fenster' },
                                        { id: 'Handwerk', icon: Wrench, label: 'Handwerk & Technik', desc: 'Reparaturen, Montage' },
                                        { id: 'Logistik', icon: Box, label: 'Logistik & Transport', desc: 'Umzüge, Entrümpelung' },
                                        { id: 'Notfall', icon: AlertTriangle, label: 'Notfall / Express', desc: 'Sofortige Hilfe benötigt' },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setData({ ...data, category: item.id });
                                                handleNext();
                                            }}
                                            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-accent/50 hover:bg-[#222] transition-all duration-300 text-left"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                                <item.icon size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-white text-lg">{item.label}</div>
                                                <div className="text-sm text-gray-500">{item.desc}</div>
                                            </div>
                                            <ArrowRight className="text-gray-600 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" size={20} />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl font-bold text-white leading-tight">Wie groß ist die Fläche?</h2>
                                <div className="py-8 text-center">
                                    <div className="inline-block bg-[#1a1a1a] px-8 py-4 rounded-3xl border border-white/10 mb-8">
                                        <span className="text-6xl font-bold text-accent font-mono tracking-tighter">{data.size}</span>
                                        <span className="text-xl text-gray-400 ml-2">m²</span>
                                    </div>

                                    <div className="relative h-12 flex items-center justify-center">
                                        <input 
                                            type="range" 
                                            min="20" 
                                            max="2000" 
                                            step="10"
                                            value={data.size}
                                            onChange={(e) => setData({ ...data, size: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-accent hover:accent-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                                            style={{ WebkitAppearance: 'none' }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 font-bold uppercase tracking-wider mt-2">
                                        <span>Klein (20m²)</span>
                                        <span>Mittel</span>
                                        <span>Groß (2000m²+)</span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        onClick={handleNext}
                                        className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/10"
                                    >
                                        Weiter <ArrowRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-white leading-tight">Wann sollen wir starten?</h2>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { label: 'Sofort / Notfall', sub: 'Innerhalb 24h', icon: AlertTriangle, color: 'text-red-500' },
                                        { label: 'Nächste Woche', sub: 'Flexibler Termin', icon: Calendar, color: 'text-accent' },
                                        { label: 'Dauerauftrag', sub: 'Regelmäßiger Service', icon: Check, color: 'text-blue-400' }
                                    ].map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => {
                                                setData({ ...data, timing: item.label });
                                                setTimeout(() => handleSubmit(), 150);
                                            }}
                                            className="group flex items-center gap-4 p-5 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-left"
                                        >
                                            <div className={`w-10 h-10 rounded-full bg-black/50 flex items-center justify-center ${item.color}`}>
                                                <item.icon size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-white text-lg">{item.label}</div>
                                                <div className="text-sm text-gray-500">{item.sub}</div>
                                            </div>
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-600 group-hover:border-accent group-hover:bg-accent transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};