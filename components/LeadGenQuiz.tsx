import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles, Wrench, Building2, Calendar, MessageCircle, Mail, Home, Factory, Briefcase, AlertTriangle, Clock, CalendarDays, ShieldCheck, Zap, Info } from 'lucide-react';

export const LeadGenQuiz = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    service: '',
    type: '',
    timing: ''
  });

  const totalSteps = 4; // 3 Questions + 1 Result View

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setTimeout(() => {
        if (step < totalSteps) setStep(step + 1);
    }, 250); 
  };

  const prevStep = () => {
      if (step > 1) setStep(step - 1);
  };

  const getSummary = () => {
      return `Moin Hansetool, ich interessiere mich für eine Projekt-Anfrage.\n\nThema: ${selections.service}\nObjektart: ${selections.type}\nZeitraum: ${selections.timing}\n\nBitte um Rückmeldung.`;
  }

  const sendWhatsApp = () => {
      const text = getSummary();
      window.open(`https://wa.me/4917647093890?text=${encodeURIComponent(text)}`, '_blank');
  };

  const sendMail = () => {
      const text = getSummary();
      window.location.href = `mailto:info@hansetool.de?subject=Projektanfrage&body=${encodeURIComponent(text)}`;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  // Dynamic visual content based on step to fill empty space
  const stepInfo = [
      {
          title: "Wir starten.",
          text: "Wählen Sie Ihren Bereich. Wir sind spezialisiert auf gewerbliche Anforderungen.",
          icon: Zap
      },
      {
          title: "Das Objekt.",
          text: "Ob Industriehalle oder Praxis – wir passen unser Equipment an Ihre Umgebung an.",
          icon: Building2
      },
      {
          title: "Der Zeitplan.",
          text: "Wir sind flexibel. Von 'Sofort' bis zur langfristigen Planung.",
          icon: CalendarDays
      },
      {
          title: "Fertig.",
          text: "Keine Warteschleifen. Senden Sie die Anfrage direkt an den Chef.",
          icon: Check
      }
  ];

  const currentInfo = stepInfo[step - 1] || stepInfo[0];

  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Area */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-accent font-bold uppercase tracking-widest mb-3 block text-sm">Projekt Planer</span>
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                        {step < 4 ? "Wobei können wir helfen?" : "Fertig! Wie wollen Sie fortfahren?"}
                    </h2>
                    
                    {/* Progress Bar */}
                    {step < 4 && (
                        <div className="w-full max-w-xs mx-auto h-1 bg-white/10 rounded-full mt-6 md:mt-8 overflow-hidden">
                            <motion.div 
                                className="h-full bg-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((step - 1) / 3) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    )}
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left: The Quiz Card */}
                    <div className="lg:col-span-8 bg-[#111] border border-white/5 rounded-3xl p-6 md:p-10 min-h-[450px] flex flex-col relative shadow-2xl overflow-hidden">
                        
                        {/* Background Detail inside Card */}
                        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-50"></div>

                        {/* Back Button - Now available on Step 4 too if desired, essentially resetting or going back */}
                        {step > 1 && (
                            <button 
                                onClick={prevStep}
                                className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold z-20 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-md"
                            >
                                <ArrowLeft size={14} /> Zurück
                            </button>
                        )}

                        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-4">
                            <AnimatePresence mode="wait" custom={step}>
                                
                                {/* STEP 1: SERVICE */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="w-full"
                                    >
                                        <h3 className="text-xl md:text-2xl text-white font-bold mb-6 text-center">Welche Leistung wird benötigt?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {[
                                                { id: 'Reinigung', icon: Sparkles, label: 'Reinigung', desc: 'Unterhalt, Glas, Spezial' },
                                                { id: 'Handwerk', icon: Wrench, label: 'Handwerk', desc: 'Reparatur, Wartung' },
                                                { id: 'Facility', icon: Building2, label: 'Hausmeister', desc: 'Betreuung, Kontrolle' },
                                            ].map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => handleSelect('service', item.id)}
                                                    className={`group relative p-5 rounded-2xl border text-left transition-all duration-300 ${
                                                        selections.service === item.id 
                                                        ? 'bg-accent border-accent text-black' 
                                                        : 'bg-white/5 border-white/5 text-white hover:border-white/20 hover:bg-white/10'
                                                    }`}
                                                >
                                                    <div className="mb-4 p-3 rounded-full bg-black/10 w-fit">
                                                        <item.icon size={24} className={selections.service === item.id ? 'text-black' : 'text-accent'} />
                                                    </div>
                                                    <div className="font-bold text-lg mb-1">{item.label}</div>
                                                    <div className={`text-sm ${selections.service === item.id ? 'text-black/70' : 'text-gray-400'}`}>{item.desc}</div>
                                                    
                                                    {selections.service === item.id && (
                                                        <div className="absolute top-4 right-4">
                                                            <Check size={20} />
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 2: TYPE */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="w-full"
                                    >
                                        <h3 className="text-xl md:text-2xl text-white font-bold mb-6 text-center">Um was für ein Objekt handelt es sich?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                                            {[
                                                { id: 'Gewerbe', icon: Factory, label: 'Gewerbe / Industrie' },
                                                { id: 'Buero', icon: Briefcase, label: 'Büro / Praxis' },
                                                { id: 'Privat', icon: Home, label: 'Privathaushalt' },
                                                { id: 'Verwaltung', icon: Building2, label: 'Hausverwaltung' },
                                            ].map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => handleSelect('type', item.id)}
                                                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                                                        selections.type === item.id 
                                                        ? 'bg-white text-black border-white' 
                                                        : 'bg-white/5 border-white/5 text-white hover:bg-white/10 hover:border-white/20'
                                                    }`}
                                                >
                                                    <item.icon size={24} className={selections.type === item.id ? 'text-accent' : 'text-gray-400'} />
                                                    <span className="font-bold text-lg">{item.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: TIMING */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="w-full"
                                    >
                                        <h3 className="text-xl md:text-2xl text-white font-bold mb-6 text-center">Wann sollen wir starten?</h3>
                                        <div className="grid grid-cols-1 gap-3 max-w-xl mx-auto">
                                            {[
                                                { id: 'Notfall', icon: AlertTriangle, label: 'Notfall (innerhalb 48 Std)', color: 'text-red-500' },
                                                { id: 'Schnell', icon: Clock, label: 'Schnellstmöglich (1-2 Wochen)', color: 'text-accent' },
                                                { id: 'Planung', icon: CalendarDays, label: 'In Planung / Regelmäßig', color: 'text-blue-400' },
                                            ].map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => handleSelect('timing', item.id)}
                                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group ${
                                                        selections.timing === item.id 
                                                        ? 'bg-white/10 border-accent' 
                                                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <item.icon size={24} className={item.color} />
                                                        <span className="font-bold text-lg text-white">{item.label}</span>
                                                    </div>
                                                    <ArrowRight className={`text-white transition-transform ${selections.timing === item.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 4: RESULT */}
                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="w-full text-center"
                                    >
                                        <div className="inline-block p-4 rounded-full bg-accent/20 mb-6">
                                            <Check size={40} className="text-accent" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">Fast geschafft!</h3>
                                        <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                                            Wir haben Ihre Angaben erfasst. Wählen Sie Ihren bevorzugten Weg, um die Anfrage abzuschicken.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                                            <button 
                                                onClick={sendWhatsApp}
                                                className="group flex flex-col items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
                                            >
                                                <MessageCircle size={32} />
                                                <div className="text-center">
                                                    <span className="block font-bold text-lg">Via WhatsApp</span>
                                                    <span className="text-xs opacity-90">Schnellste Antwort</span>
                                                </div>
                                            </button>

                                            <button 
                                                onClick={sendMail}
                                                className="group flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-lg"
                                            >
                                                <Mail size={32} className="text-gray-800" />
                                                <div className="text-center">
                                                    <span className="block font-bold text-lg">Per E-Mail</span>
                                                    <span className="text-xs opacity-70">Klassische Anfrage</span>
                                                </div>
                                            </button>
                                        </div>
                                        
                                        <div className="mt-8 text-xs text-gray-500">
                                            Ihre Daten werden lokal vorbreitet und erst beim Senden übertragen.
                                        </div>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Info / Filler Card */}
                    <div className="lg:col-span-4">
                        <motion.div 
                            key={currentInfo.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-full bg-accent/10 border border-accent/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                        >
                            {/* Decorative blobs */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[40px] rounded-full -mr-10 -mt-10"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full -ml-10 -mb-10"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                                    <currentInfo.icon size={24} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3">{currentInfo.title}</h4>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    {currentInfo.text}
                                </p>
                                
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="text-accent" size={20} />
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/50">100% Unverbindlich</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};