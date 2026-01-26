import React, { useRef, useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { SERVICES, VALUES, CLIENT_LOGOS } from './constants';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Sparkles, Wrench, Truck, Anchor, ShieldCheck, Zap, HeartHandshake, ArrowUpRight, ClipboardCheck, Loader2, Star, Clock, User, Search, ShoppingCart, Bell, Menu, Play, Battery, Wifi, Signal, Leaf, Layers, Box, X, Check, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Testimonials } from './components/ui/Testimonials';
import { ServiceCard } from './components/ui/service-card';
import { InquiryWizard } from './components/InquiryWizard';
import { DirectDispatch } from './components/DirectDispatch';
import { LeadGenQuiz } from './components/LeadGenQuiz';
import { Navbar } from './components/Navbar';
import { Marquee } from './components/ui/Marquee';
import { RevealText } from './components/ui/RevealText';
// @ts-ignore
import Lenis from 'lenis';

const GlobalBackground = () => {
    // PERFORMANCE OPTIMIZATION:
    // Replaced Framer Motion loops with CSS Animations (defined in index.html/tailwind config)
    // This moves the animation to the compositor thread, reducing main thread blocking.
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black transform-gpu pointer-events-none">
             {/* 1. Primary Emerald Nebula (Top Left) */}
             <div 
                className="absolute top-[-20%] left-[-10%] w-[90vw] h-[85vw] bg-emerald-950 rounded-full blur-[100px] mix-blend-screen opacity-[0.05] animate-blob-1"
             ></div>
             
             {/* 2. Secondary Teal Aurora (Top Right) */}
             <div 
                className="absolute top-[-10%] right-[-15%] w-[80vw] h-[80vw] bg-teal-950 rounded-full blur-[120px] mix-blend-screen opacity-[0.04] animate-blob-2"
             ></div>

             {/* 3. Deep Green Foundation (Bottom) */}
             <div 
                className="absolute bottom-[-30%] left-[10%] w-[120vw] h-[90vw] bg-emerald-950 rounded-full blur-[150px] opacity-[0.05] mix-blend-screen"
             ></div>

             {/* Noise Texture - Static is faster */}
             <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        </div>
    )
}

const Hero = ({ onOpenWizard }: { onOpenWizard: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for image
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Parallax for text

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-0 pb-0 overflow-hidden">
      
      {/* Background Image Layer - INSTANT LOADING OPTIMIZATION */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
          {/* OPTIMIZED IMAGE: Custom WebP image provided */}
          <img 
            src="https://i.postimg.cc/vM6gf6z6/webp.webp" 
            alt="Hansetool Work" 
            className="w-full h-full object-cover scale-105"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          
          {/* Removed darkening overlay as requested */}
          
          {/* Smooth Fade to Black at Bottom only (for text readability) */}
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#000000] via-[#050505]/80 to-transparent"></div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center -mt-24 will-change-transform">
        
        {/* Logo - Optimized animation */}
        <motion.img 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src="https://i.postimg.cc/VLVz13zy/nur-logo.png"
            alt="Hansetool Logo"
            className="w-full max-w-[320px] md:max-w-[650px] mt-10 mb-2 brightness-0 invert drop-shadow-2xl opacity-90 relative z-20"
        />

        {/* Headline Container */}
        <div className="relative -mt-14 mb-6">
            <h1 className="text-3xl md:text-5xl text-white tracking-tight max-w-5xl leading-tight relative z-20 flex flex-wrap justify-center gap-x-3 items-baseline">
                <RevealText delay={0.1} className="inline-block">
                    <span className="font-serif italic font-semibold tracking-normal text-white">Wir machen das.</span>
                </RevealText>
                <RevealText delay={0.2} className="inline-block">
                    <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-white to-emerald-100 drop-shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                        Einfach & Sauber.
                    </span>
                </RevealText>
            </h1>
        </div>

        {/* Subline */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed font-medium relative z-20">
                Hansetool ist Ihr Partner für Reinigung, Hausmeister- und Handwerksservice in Hamburg. 
                Buchen Sie direkt online.
            </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 relative z-50"
        >
            <button 
                onClick={onOpenWizard}
                className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
                <div className="bg-black/10 p-1.5 rounded-full">
                    <Sparkles size={18} className="text-black" />
                </div>
                <div className="text-left">
                    <div className="text-[10px] font-medium opacity-60 uppercase leading-none mb-0.5">Start now</div>
                    <div className="text-sm font-bold leading-none">Angebot anfragen</div>
                </div>
            </button>
            <a 
                href="https://wa.me/4915255905935"
                className="flex items-center gap-3 bg-[#1a1a1a] text-white border border-white/10 px-8 py-3.5 rounded-full font-bold hover:bg-[#222] transition-all shadow-md hover:-translate-y-1"
            >
                <div className="bg-emerald-500/10 p-1.5 rounded-full">
                    <Phone size={18} className="text-emerald-500" />
                </div>
                <div className="text-left">
                    <div className="text-[10px] font-medium opacity-60 uppercase leading-none mb-0.5">Direct Line</div>
                    <div className="text-sm font-bold leading-none">WhatsApp</div>
                </div>
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const IntroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden scroll-mt-28" ref={ref}>
      <div className="container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-950/10 blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="flex items-center gap-4 mb-16 relative z-10">
            <RevealText>
                <h2 className="text-3xl md:text-5xl font-medium text-white">Kein anonymer Dienstleister. Wir packen an.</h2>
            </RevealText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
            <motion.div style={{ y }} className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl">
                <img 
                  src="https://i.postimg.cc/0xyrB3sK/hf-20260122-222646-1a20eff3-a60b-4f98-81bd-b116496e0b8a.jpg" 
                  alt="Hansetool Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy" 
                />
            </motion.div>
            <div className="space-y-8 sticky top-32">
                <p className="text-gray-400 text-lg leading-relaxed">
                    Hansetool steht für eine pragmatische Macher-Mentalität. Wir sind ein Dienstleistungsbetrieb aus Hamburg, der sich auf das Wesentliche konzentriert: Die Arbeit sauber und zuverlässig zu erledigen.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold">Für Gewerbe und Büro</h4>
                            <p className="text-gray-500">Unser Fokus liegt auf Firmen, Betrieben und Hallen. Wir verstehen die Anforderungen des Tagesgeschäfts.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold">Für Privatleute</h4>
                            <p className="text-gray-500">Auch für private Haushalte sind wir da. Ob Reparaturen, Entrümpelungen oder Pflegearbeiten – schnell und unkompliziert.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <Button text="Kontaktieren Sie uns" variant="text" href="#contact" className="text-white" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  const icons: Record<string, any> = {
    '1': Sparkles,
    '2': Wrench,
    '3': Box,
    '4': Leaf
  };

  return (
    <>
        <section id="services" className="py-32 bg-transparent relative overflow-hidden scroll-mt-28">
            {/* Colorful Ambient Backgrounds for the whole section - Optimized with transform-gpu */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-950/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen transform-gpu will-change-transform"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-950/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen transform-gpu will-change-transform"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-transparent"></div>
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Unser Portfolio</span>
                        </motion.div>
                        <RevealText>
                            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
                                Dienstleistungen <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">für Profis.</span>
                            </h2>
                        </RevealText>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => {
                    const IconComponent = icons[service.id] || Layers;
                    return (
                        <motion.div 
                            key={service.id} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }} // OPTIMIZATION: Only animate once to prevent re-loading on scroll
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className={`group relative rounded-3xl p-8 border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${service.theme.border} transform-gpu`}
                        >
                            {/* Dynamic Background Glow - Optimized */}
                            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.theme.glow} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-[opacity]`}></div>
                            
                            {/* Subtle Permanent Tint */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0`}></div>
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.theme.gradient}`}></div>

                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[380px]">
                                <div className="flex justify-between items-start mb-12">
                                    <div className={`p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                        <IconComponent size={28} className={service.theme.primary} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-white/10 font-bold text-6xl font-sans tracking-tighter absolute top-4 right-4 group-hover:text-white/20 transition-colors duration-500">0{index + 1}</span>
                                </div>

                                <div className="relative">
                                    {/* 3D Icon Floating */}
                                    <div className="absolute -right-4 bottom-24 w-28 h-28 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-500 pointer-events-none z-0">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                                    </div>

                                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10`}>
                                        {service.title.split('&').map((part, i) => (
                                            <span key={i} className="block">{part} {i === 0 && '&'}</span>
                                        ))}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors relative z-10">
                                        {service.description}
                                    </p>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors"></div>
                                    <button 
                                        onClick={() => setSelectedService(service)}
                                        className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${service.theme.primary} group-hover:gap-4 transition-all w-full text-left`}
                                    >
                                        Details <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                    })}
                </div>
            </div>
        </section>

        {/* SATISFYING SERVICE MODAL */}
        <AnimatePresence>
            {selectedService && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedService(null)}
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                >
                    <motion.div 
                        layoutId={`service-${selectedService.id}`}
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full max-w-lg bg-[#0f0f0f] border rounded-3xl overflow-hidden shadow-2xl relative ${selectedService.theme.border ? selectedService.theme.border.replace('group-hover:', '') : 'border-white/10'}`}
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                        {/* Header Background */}
                        <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${selectedService.theme.gradient} opacity-20`}></div>
                        
                        <div className="relative p-8">
                            <button 
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.theme.gradient} p-0.5 mb-6 shadow-lg`}>
                                   <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                      {/* Icon Mapping again strictly for modal */}
                                      {(() => {
                                        const Icon = icons[selectedService.id] || Layers;
                                        return <Icon size={32} className={selectedService.theme.primary} />;
                                      })()}
                                   </div>
                                </div>
                                
                                <h3 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{selectedService.description}</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Leistungsumfang</div>
                                {selectedService.items.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <Check size={16} className={selectedService.theme.primary} />
                                        <span className="text-gray-200 text-sm font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button 
                                    onClick={() => setSelectedService(null)}
                                    className="flex-1 py-4 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    Schließen
                                </button>
                                <a 
                                    href="#contact"
                                    onClick={() => setSelectedService(null)}
                                    className={`flex-1 py-4 rounded-xl font-bold text-black flex items-center justify-center gap-2 bg-gradient-to-r ${selectedService.theme.gradient} hover:scale-[1.02] transition-transform shadow-lg`}
                                >
                                    Anfragen <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

const ValuesSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  return (
    <section id="values" className="py-24 bg-transparent relative overflow-hidden scroll-mt-28">
        <motion.div style={{ y }} className="absolute top-0 right-0 w-full max-w-4xl h-[500px] bg-emerald-950/10 blur-[120px] rounded-full pointer-events-none"></motion.div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20 relative">
                <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-teal-950/10 blur-[100px] pointer-events-none mix-blend-screen"></div>
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block relative z-10">Die DNA</span>
                <RevealText>
                    <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl tracking-tight relative z-10">
                        Keine Floskeln.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-900">Echtes Handwerk.</span>
                    </h2>
                </RevealText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(200px,auto)]">
                <div className="md:col-span-4 bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-accent/30 transition-colors group">
                    <div className="flex justify-between items-start">
                        <div className="bg-[#1a1a1a] p-4 rounded-2xl text-accent shadow-sm">
                            <HeartHandshake size={40} />
                        </div>
                        <span className="text-5xl font-bold text-[#222] group-hover:text-[#333] transition-colors">01</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Moin statt Marketing</h3>
                        <p className="text-gray-400 text-lg max-w-lg">
                            Bei uns gibt es keine aalglatten Vertriebler. Sie sprechen mit Menschen, die wissen, wie man einen Schraubenzieher hält. Direkt, ehrlich, hanseatisch.
                        </p>
                    </div>
                </div>
                
                {/* IMPROVED GREEN CARD: More texture, better layout */}
                <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group shadow-lg hover:shadow-accent/20 transition-all duration-500">
                     {/* Grid Pattern Background */}
                     <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
                     
                     {/* Ambient Glow */}
                     <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

                     <div className="relative z-10 flex justify-between items-start mb-8">
                        <div className="bg-black/10 p-4 rounded-2xl w-fit backdrop-blur-sm border border-black/5">
                           <Zap size={32} className="text-black" />
                        </div>
                        <div className="hidden sm:block bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm border border-black/5">
                           <span className="text-xs font-bold uppercase tracking-widest text-black/70">Focus Mode</span>
                        </div>
                     </div>
                     
                     <div className="relative z-10 mt-auto">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-[0.95] tracking-tight text-black">
                            24/7<br/>
                            Kopf bei<br/>
                            der Sache.
                        </h3>
                        
                        <div className="space-y-3 border-t border-black/10 pt-6 mt-6">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                                    <Check size={14} className="text-black" />
                                </div>
                                <span className="font-semibold text-black/80">Mitdenken statt abarbeiten</span>
                            </div>
                            <div className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                                    <Check size={14} className="text-black" />
                                </div>
                                <span className="font-semibold text-black/80">Proaktive Mängelmeldung</span>
                            </div>
                        </div>
                     </div>

                     <div className="absolute bottom-8 right-8 bg-black text-white p-4 rounded-full opacity-0 translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
                        <ArrowRight size={24} />
                     </div>
                </div>

                <div className="md:col-span-2 bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <Anchor className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">100% Hamburg</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Wir kommen von hier, wir bleiben hier. Kurze Wege, schnelle Reaktion und ein Netzwerk in der ganzen Stadt.
                    </p>
                </div>
                <div className="md:col-span-2 bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <ShieldCheck className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">Kein Pfusch</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Wir arbeiten sauber oder gar nicht. Qualitätssicherung ist bei uns Chefsache – jeden Tag, auf jeder Baustelle.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

const ProjectShowcase = () => {
    const projects = [
        {
            id: 'p1',
            location: 'HAMBURG HAFENCITY',
            title: 'Bürokomplex Grundreinigung',
            desc: '5000m² Fläche, Glasfassade und Tiefgarage. Fertigstellung in 3 Tagen.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
            tag: 'REINIGUNG'
        },
        {
            id: 'p2',
            location: 'ALTONA ALTBAU',
            title: 'Sanierung & Instandsetzung',
            desc: 'Komplette Aufbereitung der Böden und Reparatur der Haustechnik.',
            image: 'https://media.istockphoto.com/id/2184055408/de/foto/ein-bauherr-hilft-bei-der-montage-eines-fensterrahmens.jpg?s=2048x2048&w=is&k=20&c=r7R1zsaPeG-luTnSu-CZBOIdZfw7j3Oi02IH0hiszQs=',
            tag: 'HANDWERK'
        },
        {
            id: 'p3',
            location: 'LOGISTIKZENTRUM BILLBROOK',
            title: 'Industriewartung',
            desc: 'Wartung der Förderanlagen und Hallenreinigung im laufenden Betrieb.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
            tag: 'INDUSTRIE'
        }
    ];

    return (
        <section className="py-32 bg-transparent border-t border-white/5 relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 relative">
                    <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[200px] bg-emerald-950/20 blur-[100px] pointer-events-none mix-blend-screen"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-accent"></span>
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Einsatzbericht</span>
                        </div>
                        <RevealText>
                            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">Tatort<br /> Hamburg.</h2>
                        </RevealText>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer border border-white/5"
                        >
                            {/* OPTIMIZED IMAGE LOADING for Showcases */}
                            <img 
                                src={`${project.image}&w=600&q=75&auto=format`} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="bg-accent/90 text-black text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">{project.tag}</span>
                                    <span className="text-white/30 font-mono text-xl font-bold">0{idx + 1}</span>
                                </div>
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-accent text-xs font-bold tracking-widest mb-1 uppercase font-mono">{project.location}</p>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                </div>
                            </div>
                            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactTerminal = () => {
    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5 scroll-mt-28">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-xl relative">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-950/20 blur-[120px] pointer-events-none"></div>
                    <div className="grid lg:grid-cols-5 min-h-[500px] relative z-10">
                        <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center relative">
                            <div className="absolute left-0 top-10 h-px w-20 bg-accent"></div>
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none">Genug gesehen?<br /><span className="text-accent">Starten wir.</span></h2>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="tel:+4940123456" className="group relative flex items-center justify-between bg-accent hover:bg-accent/90 text-black px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] min-w-[240px] shadow-lg">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">Dringend?</span>
                                        <span className="text-2xl font-bold">Anrufen</span>
                                    </div>
                                    <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                </a>
                                <a href="mailto:info@hansetool.de" className="group relative flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] min-w-[240px] shadow-sm">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Schriftlich</span>
                                        <span className="text-2xl font-bold">E-Mail</span>
                                    </div>
                                    <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-[#1a1a1a] relative overflow-hidden group">
                             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-1000" alt="Hamburg Map Texture" loading="lazy" />
                             <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                                <div className="border-l-4 border-accent pl-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Zentrale Hamburg</h3>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  
  // Smooth Scroll Hook (Lenis) - Optimized for performance & Anchor Link Handling
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(min-width: 1024px)").matches) {
       const lenis = new Lenis({
         duration: 0.8, // Slightly faster for snappier feel
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         direction: 'vertical',
         gestureDirection: 'vertical',
         smooth: true,
         smoothTouch: false,
         touchMultiplier: 2,
         wheelMultiplier: 1.2, // Faster scrolling
       });

       // Intercept all anchor links for Lenis smooth scroll
       const handleAnchorClick = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         const anchor = target.closest('a');
         if (anchor) {
           const href = anchor.getAttribute('href');
           if (href && href.startsWith('#') && href.length > 1) {
             e.preventDefault();
             const targetEl = document.querySelector(href);
             if (targetEl) {
               lenis.scrollTo(targetEl);
             }
           }
         }
       };
       
       document.addEventListener('click', handleAnchorClick);

       function raf(time: number) {
         lenis.raf(time);
         requestAnimationFrame(raf);
       }

       requestAnimationFrame(raf);
       
       return () => {
         lenis.destroy();
         document.removeEventListener('click', handleAnchorClick);
       }
    }
  }, []);

  return (
    <div className={`min-h-screen font-sans selection:bg-accent selection:text-black transition-colors duration-500 ${isEmergencyMode ? 'bg-red-950' : 'bg-transparent'}`}>
      
      {/* NO PRELOADER */}
      
      <GlobalBackground />
      <Navbar />
      
      {/* Emergency Overlay */}
      <AnimatePresence>
        {isEmergencyMode && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-red-900/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">NOTFALL?</h2>
                <a href="tel:+4915255905935" className="bg-white text-red-600 px-10 py-6 rounded-full text-3xl font-bold hover:scale-105 transition-transform shadow-2xl mb-6">
                    01525 5905935
                </a>
                <button 
                    onClick={() => setIsEmergencyMode(false)}
                    className="text-white/80 hover:text-white underline mt-8"
                >
                    Modus beenden
                </button>
            </motion.div>
        )}
      </AnimatePresence>

      <Hero onOpenWizard={() => setIsWizardOpen(true)} />
      <IntroSection />
      
      <Marquee />

      <ServicesSection />
      <LeadGenQuiz />
      <ValuesSection />
      <ProjectShowcase />
      <ContactTerminal />
      <Testimonials />
      <Footer />

      <DirectDispatch />
      <InquiryWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </div>
  );
}

export default App;