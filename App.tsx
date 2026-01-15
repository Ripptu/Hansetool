import React, { useRef, useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { SERVICES, VALUES, CLIENT_LOGOS } from './constants';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Sparkles, Wrench, Truck, Anchor, ShieldCheck, Zap, HeartHandshake, ArrowUpRight, ClipboardCheck, Loader2, Star, Clock, User, Search, ShoppingCart, Bell, Menu, Play, Battery, Wifi, Signal } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Testimonials } from './components/ui/Testimonials';
import { ServiceCard } from './components/ui/service-card';
import { InquiryWizard } from './components/InquiryWizard';
import { DirectDispatch } from './components/DirectDispatch';
import { BudgetCalculator } from './components/BudgetCalculator';
import { Navbar } from './components/Navbar';
// @ts-ignore
import Lenis from 'lenis';

const Hero = ({ onOpenWizard }: { onOpenWizard: () => void }) => {
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 800], [0, -100]); 
  const bubbleY = useTransform(scrollY, [0, 800], [0, -200]);

  return (
    <section className="relative min-h-[140vh] flex flex-col items-center pt-32 pb-0 overflow-hidden bg-dark">
      
      {/* Dark Gradient Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Large Centered Logo */}
        <motion.img 
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://i.postimg.cc/VLVz13zy/nur-logo.png"
            alt="Hansetool Logo"
            className="w-40 md:w-64 mb-10 brightness-0 invert drop-shadow-2xl opacity-90"
        />

        {/* Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-[1.1]"
        >
          Wir machen das.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-500">
             Einfach & Sauber.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-medium"
        >
            Hansetool ist Ihr digitaler Partner für Reinigung, Hausmeister- und Handwerksservice in Hamburg. 
            Laden Sie die App oder buchen Sie direkt online.
        </motion.p>

        {/* Buttons (Dark Mode Style) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-24"
        >
            <button 
                onClick={onOpenWizard}
                className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
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
                <div className="bg-green-500/20 p-1.5 rounded-full">
                    <Phone size={18} className="text-green-500" />
                </div>
                <div className="text-left">
                    <div className="text-[10px] font-medium opacity-60 uppercase leading-none mb-0.5">Direct Line</div>
                    <div className="text-sm font-bold leading-none">WhatsApp</div>
                </div>
            </a>
        </motion.div>

        {/* PHONE & CONNECTIONS WRAPPER */}
        <div className="relative w-full max-w-5xl h-[800px]">
            
            {/* SVG Lines - Background Layer (Darker Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 800">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#333" stopOpacity="0" />
                        <stop offset="50%" stopColor="#444" stopOpacity="1" />
                        <stop offset="100%" stopColor="#333" stopOpacity="0" />
                    </linearGradient>
                </defs>
                
                {/* Top Left Line */}
                <motion.path 
                    d="M500 200 C 400 200, 300 200, 200 150" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
                <circle cx="200" cy="150" r="4" fill="#333" />

                {/* Top Right Line */}
                <motion.path 
                    d="M500 200 C 600 200, 700 200, 800 150" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
                <circle cx="800" cy="150" r="4" fill="#333" />

                {/* Bottom Left Line */}
                <motion.path 
                    d="M450 500 C 350 500, 250 500, 180 550" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                />
                 <circle cx="180" cy="550" r="4" fill="#333" />

                {/* Bottom Right Line */}
                <motion.path 
                    d="M550 500 C 650 500, 750 500, 820 550" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                />
                <circle cx="820" cy="550" r="4" fill="#333" />
            </svg>

            {/* FLOATING BUBBLES (Dark Mode) */}
            
            {/* Bubble 1: Top Left (Woman / Customer) */}
            <motion.div 
                style={{ y: bubbleY }}
                className="absolute left-[10%] top-[5%] md:left-[15%] md:top-[12%] z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
            >
                <div className="relative group cursor-pointer">
                    <div className="w-16 h-16 rounded-full p-1 bg-[#1a1a1a] border border-white/10 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Customer" />
                    </div>
                </div>
            </motion.div>

             {/* Bubble 2: Top Right (Man / Worker) */}
             <motion.div 
                style={{ y: bubbleY }}
                className="absolute right-[10%] top-[5%] md:right-[15%] md:top-[12%] z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
            >
                <div className="relative group cursor-pointer">
                    <div className="w-16 h-16 rounded-full p-1 bg-[#1a1a1a] border border-white/10 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Worker" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-black p-1 rounded-full shadow-lg shadow-accent/20">
                        <CheckCircle2 size={12} />
                    </div>
                </div>
            </motion.div>

            {/* Bubble 3: Bottom Left (Cleaning Icon) */}
            <motion.div 
                style={{ y: bubbleY }}
                className="absolute left-[5%] bottom-[30%] md:left-[12%] md:bottom-[25%] z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, type: "spring" }}
            >
                 <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-white/10 shadow-2xl flex items-center justify-center">
                     <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Sparkles size={20} className="text-blue-400" />
                     </div>
                 </div>
            </motion.div>

            {/* Bubble 4: Bottom Right (Product/Tool) */}
            <motion.div 
                style={{ y: bubbleY }}
                className="absolute right-[5%] bottom-[30%] md:right-[12%] md:bottom-[25%] z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
            >
                 <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-white/10 shadow-2xl flex items-center justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/994/994928.png" className="w-8 h-8 object-contain opacity-80" alt="Tool" />
                 </div>
            </motion.div>


            {/* REALISTIC IPHONE MOCKUP (DARK MODE) */}
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
                style={{ y: phoneY }}
                className="absolute left-1/2 top-0 -translate-x-1/2 z-30"
            >
                <div className="relative w-[320px] h-[650px] bg-black rounded-[55px] shadow-[0_0_80px_-20px_rgba(0,0,0,0.6)]">
                    
                    {/* Metal Frame (Dark Titanium) */}
                    <div className="absolute inset-0 rounded-[55px] border-[6px] border-[#2a2a2a] bg-[#1a1a1a] shadow-inner z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 rounded-[55px] border-[2px] border-black/50 z-20 pointer-events-none"></div>
                    
                    {/* Buttons - Side */}
                    <div className="absolute top-28 -left-[7px] w-[3px] h-7 bg-[#2a2a2a] rounded-l-md shadow-sm z-0"></div> 
                    <div className="absolute top-40 -left-[7px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-md shadow-sm z-0"></div> 
                    <div className="absolute top-56 -left-[7px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-md shadow-sm z-0"></div> 
                    <div className="absolute top-44 -right-[7px] w-[3px] h-16 bg-[#2a2a2a] rounded-r-md shadow-sm z-0"></div> 

                    {/* Black Bezel */}
                    <div className="absolute inset-[6px] bg-black rounded-[49px] overflow-hidden z-30">
                        
                        {/* SCREEN CONTENT (Dark Mode App UI) */}
                        <div className="w-full h-full bg-[#000000] flex flex-col relative overflow-hidden font-sans select-none text-white">
                            
                            {/* Dynamic Island Area */}
                            <div className="absolute top-0 w-full h-12 z-50 flex justify-center items-end pb-1 pointer-events-none">
                                <div className="w-[100px] h-[28px] bg-black rounded-full flex justify-center items-center relative z-50 border border-white/5">
                                    {/* Camera dot */}
                                    <div className="absolute right-3 w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="flex justify-between items-center px-6 pt-3.5 pb-2">
                                <span className="text-white text-[12px] font-semibold pl-2">9:41</span>
                                <div className="flex gap-1.5 items-center pr-2 text-white">
                                    <Signal size={12} fill="currentColor" />
                                    <Wifi size={12} />
                                    <Battery size={16} />
                                </div>
                            </div>

                            {/* App Content */}
                            <div className="px-5 pt-4 pb-6 flex-1 flex flex-col overflow-y-auto no-scrollbar">
                                
                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Hamburg</div>
                                        <div className="font-bold text-xl text-white leading-none">Moin, Chef.</div>
                                    </div>
                                    <div className="w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center relative">
                                        <Bell size={18} className="text-gray-300" />
                                        <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-accent rounded-full"></div>
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-3 flex items-center gap-3 mb-6">
                                    <Search size={18} className="text-gray-500" />
                                    <span className="text-gray-500 text-sm">Was muss erledigt werden?</span>
                                </div>

                                {/* Categories / Tags */}
                                <div className="flex gap-2 overflow-x-hidden mb-6 no-scrollbar pb-1">
                                    <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Alle</div>
                                    <div className="bg-[#1a1a1a] border border-white/10 text-gray-300 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Reinigung</div>
                                    <div className="bg-[#1a1a1a] border border-white/10 text-gray-300 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Technik</div>
                                </div>

                                {/* Featured Card (Dark Glass) */}
                                <div className="relative mb-6">
                                    <div className="bg-[#111] rounded-[2rem] p-6 h-[240px] flex flex-col items-center justify-center relative overflow-hidden group border border-white/10">
                                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/5">
                                            <HeartHandshake size={16} className="text-accent" />
                                        </div>
                                        
                                        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop" className="w-28 h-28 object-cover rounded-full shadow-2xl mb-4 z-10 border-4 border-[#1a1a1a] opacity-90" />
                                        
                                        <div className="text-center z-10">
                                            <h3 className="font-bold text-white text-lg mb-0.5">Küchenreinigung</h3>
                                            <p className="text-gray-400 text-xs mb-2">Gewerbe & Privat</p>
                                            <div className="text-black font-extrabold text-sm bg-accent px-3 py-1 rounded-full">ab 49€</div>
                                        </div>

                                        {/* Floating Elements in card */}
                                        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Mini List Heading */}
                                <div className="flex justify-between items-end mb-3 px-1">
                                    <span className="font-bold text-white text-sm">Beliebt</span>
                                    <span className="text-accent text-xs font-bold">Alle ansehen</span>
                                </div>

                                {/* Mini List */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 bg-[#111] p-3 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                            <Wrench size={18} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-white text-sm">Reparatur</div>
                                            <div className="text-gray-500 text-[10px]">Sanitär & Elektro</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                                            <ArrowUpRight size={14} className="text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#111] p-3 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                                            <Truck size={18} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-white text-sm">Transport</div>
                                            <div className="text-gray-500 text-[10px]">Innerhalb Hamburg</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                                            <ArrowUpRight size={14} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Bottom Bar */}
                             <div className="bg-[#050505]/80 backdrop-blur-md border-t border-white/5 pt-3 pb-6 px-8 flex justify-between items-center z-40">
                                 <div className="flex flex-col items-center gap-1">
                                     <div className="text-white"><Menu size={22} strokeWidth={2.5} /></div>
                                 </div>
                                 <div className="text-gray-500 hover:text-white transition-colors"><Search size={22} /></div>
                                 <div className="text-gray-500 hover:text-white transition-colors"><User size={22} /></div>
                             </div>

                             {/* Home Indicator */}
                             <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
                        </div>
                        
                        {/* Screen Gloss/Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-10 pointer-events-none z-40 rounded-[49px]"></div>
                    </div>
                </div>
                
                {/* Shadow underneath phone */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-accent/5 blur-[50px] rounded-full z-[-1]"></div>
            </motion.div>

        </div>

      </div>
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
    <section id="about" className="py-24 bg-dark overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white">Kein anonymer Dienstleister. Wir packen an.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div style={{ y }} className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl">
                <img 
                  src="https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260115_170237_e68ce8dc-208d-442d-b08c-415e753434a0.png&w=1080&q=75" 
                  alt="Hansetool Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
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
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold">Macher-Mentalität</h4>
                            <p className="text-gray-500">Keine komplizierten Abläufe. Wir kommen, arbeiten und gehen erst, wenn es fertig ist.</p>
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

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Was wir tun</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Alles außer Standard.</h2>
                <p className="text-gray-400 text-xl">
                    Wir bieten Ihnen das komplette Paket für Ihre Immobilie. Maßgeschneidert, effizient und immer mit dem Ziel, Sie zu entlasten.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                   <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        href="#contact"
                        imgSrc={service.image}
                        imgAlt={service.title}
                        variant={service.variant || 'default'}
                        className="min-h-[320px]"
                   />
                ))}
            </div>
        </div>
    </section>
  );
};

const ValuesSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  return (
    <section id="values" className="py-24 bg-dark relative overflow-hidden">
        {/* Parallax Background decorative elements */}
        <motion.div style={{ y }} className="absolute top-0 right-0 w-full max-w-4xl h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></motion.div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20">
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Die DNA</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl tracking-tight">
                    Keine Floskeln.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-600">Echtes Handwerk.</span>
                </h2>
            </div>

            {/* Bento Grid Layout for Values */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(200px,auto)]">
                
                {/* Card 1: Main Feature - Large */}
                <div className="md:col-span-4 bg-[#111] border border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-accent/30 transition-colors group">
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

                {/* Card 2: Vertical Highlight */}
                <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl p-10 flex flex-col justify-between text-black relative overflow-hidden group shadow-lg">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                     <div className="bg-black/10 p-4 rounded-2xl w-fit">
                        <Zap size={32} />
                     </div>
                     <div className="relative z-10">
                        <h3 className="text-4xl font-bold mb-4 leading-tight">24/7 Kopf bei der Sache.</h3>
                        <p className="font-medium text-black/80">
                            Suchen Sie etwas Spezielles? Wir machen es möglich – kontaktieren Sie uns einfach für eine individuelle Anfrage.
                        </p>
                     </div>
                     <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={32} />
                     </div>
                </div>

                {/* Card 3: Hamburg specific */}
                <div className="md:col-span-2 bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <Anchor className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">100% Hamburg</h3>
                    </div>
                    <p className="text-gray-400">
                        Wir kennen die Stadt, den Verkehr und die Mentalität. Kurze Wege, schnelle Reaktionszeiten.
                    </p>
                </div>

                {/* Card 4: Quality */}
                <div className="md:col-span-2 bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <ShieldCheck className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">Kein Pfusch</h3>
                    </div>
                    <p className="text-gray-400">
                        Wir machen es einmal – und zwar richtig. Nachbesserungen kosten Zeit und Nerven. Die sparen wir uns.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

const ProjectShowcase = () => {
    // Unique data for projects
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
            image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?q=80&w=600&auto=format&fit=crop',
            tag: 'HANDWERK'
        },
        {
            id: 'p3',
            location: 'LOGISTIKZENTRUM BILLBROOK',
            title: 'Industriewartung',
            desc: 'Wartung der Förderanlagen und Hallenreinigung im laufenden Betrieb.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
            tag: 'INDUSTRIE'
        },
        // Removed Medical Project p4 as requested
    ];

    return (
        <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden text-white">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-accent"></span>
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Einsatzbericht</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Tatort<br /> Hamburg.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-gray-400 font-mono text-sm">LIVE STATUS: IM EINSATZ</span>
                        </div>
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
                            {/* Background Image */}
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="bg-accent/90 text-black text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                        {project.tag}
                                    </span>
                                    <span className="text-white/30 font-mono text-xl font-bold">0{idx + 1}</span>
                                </div>
                                
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-[1px] w-12 bg-accent mb-4 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                    <p className="text-accent text-xs font-bold tracking-widest mb-1 uppercase font-mono">{project.location}</p>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:text-right">
                    <a href="#contact" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-medium group">
                        <span>Alle Referenzen ansehen</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

const ContactTerminal = () => {
    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
            {/* Background Tech Elements */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/20'}`}></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-xl">
                    <div className="grid lg:grid-cols-5 min-h-[500px]">
                        
                        {/* Left Side: The "Dispatcher" - Action Oriented */}
                        <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center relative">
                            {/* Decorative Grid Line */}
                            <div className="absolute left-0 top-10 h-px w-20 bg-accent"></div>
                            
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none">
                                Genug gesehen?<br />
                                <span className="text-accent">Starten wir.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-lg">
                                Keine Warteschleifen. Keine Formulare. Melden Sie sich direkt beim Dispatch. Wir sind bereit.
                            </p>

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

                            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 font-mono">
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    DISPATCH ONLINE
                                </span>
                                <span>|</span>
                                <span>ANTWORTZEIT: &lt; 2 STUNDEN</span>
                            </div>
                        </div>

                        {/* Right Side: Map / Visual */}
                        <div className="lg:col-span-2 bg-[#1a1a1a] relative overflow-hidden group">
                             {/* Abstract Map Graphic (CSS) */}
                             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                             
                             {/* Overlay Map Image */}
                             <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-1000"
                                alt="Hamburg Map Texture"
                             />

                             <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                                <div className="border-l-4 border-accent pl-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Zentrale Hamburg</h3>
                                    <div className="mt-6 inline-flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
                                        <MapPin className="w-4 h-4" /> Route berechnen
                                    </div>
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
  
  // Smooth Scroll Hook (Lenis) - Only for Web View (Desktop)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(min-width: 1024px)").matches) {
       const lenis = new Lenis({
         duration: 1.2,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         direction: 'vertical',
         gestureDirection: 'vertical',
         smooth: true,
         smoothTouch: false,
         touchMultiplier: 2,
       });

       function raf(time: number) {
         lenis.raf(time);
         requestAnimationFrame(raf);
       }

       requestAnimationFrame(raf);
       
       return () => {
         lenis.destroy();
       }
    }
  }, []);

  return (
    <div className={`min-h-screen font-sans selection:bg-accent selection:text-black transition-colors duration-500 ${isEmergencyMode ? 'bg-red-950' : 'bg-dark'}`}>
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
                <div className="animate-pulse mb-8">
                    <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <Phone size={48} className="text-white" />
                    </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">NOTFALL?</h2>
                <p className="text-2xl text-red-200 mb-12 max-w-xl">
                    Wir sind 24/7 für Sie erreichbar. Zögern Sie nicht bei Wasserrohrbruch, Stromausfall oder Sturmschäden.
                </p>
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
      {/* LogoMarquee removed */}
      <IntroSection />
      <ServicesSection />
      <BudgetCalculator />
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