import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, HelpCircle } from 'lucide-react';

export const BudgetCalculator = () => {
  const [area, setArea] = useState(150);
  const [serviceType, setServiceType] = useState<'clean' | 'glass' | 'facility'>('clean');

  // Rough estimation logic (Demo values)
  const calculatePrice = () => {
    let baseRate = 0;
    if (serviceType === 'clean') baseRate = 22; // approx per hour needed adjusted by area
    if (serviceType === 'glass') baseRate = 4; // per sqm
    if (serviceType === 'facility') baseRate = 1.5; // per sqm retainer

    // Simple visual formula for demo purposes
    let result = 0;
    if (serviceType === 'clean') result = (area / 100) * 4 * 4 * 25; // 4h per 100sqm * 4 weeks * 25€
    if (serviceType === 'glass') result = area * 3.5; // One off
    if (serviceType === 'facility') result = area * 2.5; // Monthly retainer

    return Math.round(result);
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Transparenz</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Was kostet das?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Versteckte Kosten gibt es bei uns nicht. Nutzen Sie unseren Indikator für eine erste grobe Einschätzung. Für ein verbindliches Angebot kommen wir vorbei.
            </p>
            
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <HelpCircle className="text-accent shrink-0 mt-1" />
                <p className="text-sm text-gray-500">
                    Dieser Rechner dient nur zur groben Orientierung für Standard-Leistungen. Individuelle Anforderungen (Sicherheitsbereiche, Spezialchemie) werden separat kalkuliert.
                </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Localized glow for the card */}
             <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

             <div className="relative z-10 space-y-8">
                {/* Service Selector */}
                <div className="flex bg-black/40 p-1 rounded-xl">
                    {[
                        { id: 'clean', label: 'Büroreinigung' },
                        { id: 'glass', label: 'Glas/Fenster' },
                        { id: 'facility', label: 'Hausmeister' }
                    ].map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setServiceType(s.id as any)}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${serviceType === s.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                {/* Slider */}
                <div>
                    <div className="flex justify-between mb-4">
                        <span className="text-white font-medium">Fläche</span>
                        <span className="text-accent font-mono font-bold">{area} m²</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="2000" 
                      step="10"
                      value={area}
                      onChange={(e) => setArea(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>

                {/* Result */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">Geschätzter Preisrahmen</p>
                    <div className="text-5xl font-bold text-white mb-2">
                        {serviceType === 'glass' ? 'ca. ' : 'ab '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                             {calculatePrice()} €
                        </span>
                        <span className="text-lg text-gray-500 ml-2 font-normal">
                            {serviceType === 'glass' ? 'einmalig' : '/ Monat'}
                        </span>
                    </div>
                </div>

                <button className="w-full bg-accent hover:bg-white transition-colors text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                    <Calculator size={18} />
                    <span>Genaues Angebot anfordern</span>
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};