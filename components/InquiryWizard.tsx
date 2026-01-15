import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Wrench, AlertTriangle, Check } from 'lucide-react';

interface InquiryWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryWizard: React.FC<InquiryWizardProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    category: '',
    size: 50,
    timing: ''
  });

  const WHATSAPP_NUMBER = "4915255905935";

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    const text = `Moin Hansetool, ich interessiere mich für: ${data.category}. Fläche ca. ${data.size}qm. Starttermin: ${data.timing}. Bitte um Rückmeldung!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
    // Reset after delay
    setTimeout(() => setStep(1), 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
          <X size={32} />
        </button>

        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800 rounded-full mb-12">
            <motion.div 
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Worum geht es?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'Reinigung', icon: Sparkles, label: 'Reinigung' },
                    { id: 'Handwerk', icon: Wrench, label: 'Handwerk' },
                    { id: 'Notfall', icon: AlertTriangle, label: 'Notfall' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setData({ ...data, category: item.id });
                        handleNext();
                      }}
                      className="group p-6 rounded-2xl border border-white/10 hover:border-accent hover:bg-white/5 transition-all text-left flex flex-col gap-4"
                    >
                      <item.icon className="w-8 h-8 text-accent" />
                      <span className="text-xl font-bold text-white">{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white">Wie groß ist die Fläche?</h2>
                <div className="py-12">
                   <div className="text-accent text-6xl font-bold mb-4 font-mono">{data.size} <span className="text-2xl text-white/50">m²</span></div>
                   <input 
                      type="range" 
                      min="10" 
                      max="2000" 
                      step="10"
                      value={data.size}
                      onChange={(e) => setData({ ...data, size: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
                   />
                   <div className="flex justify-between text-gray-500 mt-2 text-sm">
                      <span>Kleine Fläche</span>
                      <span>Großprojekt</span>
                   </div>
                </div>
                <button 
                  onClick={handleNext}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  Weiter <ArrowRight />
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white">Wann sollen wir starten?</h2>
                <div className="grid grid-cols-1 gap-4">
                  {['Sofort / Dringend', 'In den nächsten 2 Wochen', 'Regelmäßig / Dauerauftrag'].map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                         setData({ ...data, timing: time });
                         // Small delay to set state before submit logic triggers
                         setTimeout(() => handleSubmit(), 100); 
                      }}
                      className="p-6 rounded-2xl border border-white/10 hover:border-accent hover:bg-white/5 transition-all text-left flex items-center justify-between group"
                    >
                      <span className="text-xl font-bold text-white">{time}</span>
                      <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};