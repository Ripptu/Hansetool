import React, { useRef, useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { SERVICES, VALUES, CLIENT_LOGOS } from './constants';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Sparkles, Wrench, Truck, Anchor, ShieldCheck, Zap, HeartHandshake, ArrowUpRight, ClipboardCheck, Loader2, Star, Clock, User, Search, ShoppingCart, Bell, Menu, Play, Battery, Wifi, Signal, Leaf, Layers, Box } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Testimonials } from './components/ui/Testimonials';
import { ServiceCard } from './components/ui/service-card';
import { InquiryWizard } from './components/InquiryWizard';
import { DirectDispatch } from './components/DirectDispatch';
import { BudgetCalculator } from './components/BudgetCalculator';
import { Navbar } from './components/Navbar';
// @ts-ignore
import Lenis from 'lenis';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black transform-gpu">
             {/* 
                Ultra-Subtle Implementation:
                - Switched to much darker base colors (emerald-900/950, teal-900).
                - Drastically reduced opacity (10-15%).
                - This creates a mostly black aesthetic with just a hint of "atmosphere" rather than a green wash.
             */}
             
             {/* 1. Primary Emerald Nebula (Top Left) - Very subtle glow */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.15, 1], 
                    rotate: [0, 5, 0],
                    x: [0, 20, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[90vw] h-[85vw] bg-emerald-900 rounded-full blur-[140px] opacity-15 mix-blend-screen will-change-transform"
             ></motion.div>
             
             {/* 2. Secondary Teal Aurora (Top Right) - Deep Cool Tone */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1], 
                    x: [0, -40, 0],
                    y: [0, 20, 0]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-15%] w-[80vw] h-[80vw] bg-teal-900 rounded-full blur-[160px] opacity-10 mix-blend-screen will-change-transform"
             ></motion.div>

             {/* 3. Deep Green Foundation (Bottom) - Almost black */}
             <motion.div 
                animate={{ 
                     opacity: [0.1, 0.15, 0.1],
                     scale: [1, 1.05, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-30%] left-[10%] w-[120vw] h-[90vw] bg-emerald-950 rounded-full blur-[200px] opacity-10 mix-blend-screen will-change-[opacity,transform]"
             ></motion.div>

             {/* 4. Wandering Highlight (Center/Top) - Faint shimmer */}
             <motion.div
                animate={{
                    x: [-50, 50, -50],
                    y: [-20, 20, -20],
                    opacity: [0.02, 0.05, 0.02]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-emerald-800 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"
             ></motion.div>

             {/* Noise Texture for premium matte finish */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        </div>
    )
}

const Hero = ({ onOpenWizard }: { onOpenWizard: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-0 pb-0 overflow-hidden">
      
      {/* Localized Spotlight for Hero Text - Very Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-900/10 blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo */}
        <motion.img 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src="https://i.postimg.cc/VLVz13zy/nur-logo.png"
            alt="Hansetool Logo"
            className="w-full max-w-[320px] md:max-w-[650px] mb-8 brightness-0 invert drop-shadow-2xl opacity-90 relative z-20"
        />

        {/* Headline */}
        <div className="relative">
             {/* Text Glow Backing - Reduced */}
             <div className="absolute inset-0 bg-emerald-900/20 blur-3xl rounded-full scale-150 pointer-events-none"></div>
             
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl text-white mb-8 tracking-tight max-w-5xl leading-tight relative z-20 flex flex-wrap justify-center gap-x-3"
            >
            <span className="font-serif italic font-semibold tracking-normal text-white">Wir machen das.</span>
            <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-white to-emerald-100 drop-shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                Einfach & Sauber.
            </span>
            </motion.h1>
        </div>

        {/* Subline */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed font-medium relative z-20"
        >
            Hansetool ist Ihr Partner für Reinigung, Hausmeister- und Handwerksservice in Hamburg. 
            Buchen Sie direkt online.
        </motion.p>

        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-50"
        >
            <button 
                onClick={onOpenWizard}
                className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1"
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
    <section id="about" className="py-24 bg-transparent overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/5 blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="flex items-center gap-4 mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium text-white">Kein anonymer Dienstleister. Wir packen an.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
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
  const icons: Record<string, any> = {
    '1': Sparkles,
    '2': Wrench,
    '3': Box,
    '4': Leaf
  };

  return (
    <section id="services" className="py-32 bg-transparent relative">
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 relative">
                <div className="absolute top-0 left-0 w-[300px] h-[100px] bg-emerald-900/10 blur-[80px] pointer-events-none mix-blend-screen"></div>
                <div className="max-w-2xl relative z-10">
                    <span className="text-accent font-bold uppercase tracking-widest mb-3 block text-sm">Unser Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Dienstleistungen für Profis.</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10 bg-[#000]/40 backdrop-blur-sm">
                {SERVICES.map((service, index) => {
                   const IconComponent = icons[service.id] || Layers;
                   return (
                    <div 
                        key={service.id} 
                        className="group relative p-10 border-r border-b border-white/10 hover:bg-[#0A0A0A]/60 transition-colors duration-500 min-h-[400px] flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-white/5 rounded-lg text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                                    <IconComponent size={24} strokeWidth={1.5} />
                                </div>
                                <span className="text-gray-700 font-mono text-sm">0{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.description}</p>
                        </div>
                    </div>
                   );
                })}
            </div>
        </div>
    </section>
  );
};

const ValuesSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  return (
    <section id="values" className="py-24 bg-transparent relative overflow-hidden">
        <motion.div style={{ y }} className="absolute top-0 right-0 w-full max-w-4xl h-[500px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none"></motion.div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20 relative">
                <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-teal-900/10 blur-[100px] pointer-events-none mix-blend-screen"></div>
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block relative z-10">Die DNA</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl tracking-tight relative z-10">
                    Keine Floskeln.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-800">Echtes Handwerk.</span>
                </h2>
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
                <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl p-10 flex flex-col justify-between text-black relative overflow-hidden group shadow-lg">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                     <div className="bg-black/10 p-4 rounded-2xl w-fit">
                        <Zap size={32} />
                     </div>
                     <div className="relative z-10">
                        <h3 className="text-4xl font-bold mb-4 leading-tight">24/7 Kopf bei der Sache.</h3>
                     </div>
                     <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={32} />
                     </div>
                </div>
                <div className="md:col-span-2 bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <Anchor className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">100% Hamburg</h3>
                    </div>
                </div>
                <div className="md:col-span-2 bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <ShieldCheck className="text-gray-600 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">Kein Pfusch</h3>
                    </div>
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
        }
    ];

    return (
        <section className="py-32 bg-transparent border-t border-white/5 relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 relative">
                    <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[200px] bg-emerald-900/10 blur-[100px] pointer-events-none mix-blend-screen"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-accent"></span>
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Einsatzbericht</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">Tatort<br /> Hamburg.</h2>
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
                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
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
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-xl relative">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 blur-[120px] pointer-events-none"></div>
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
                             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-1000" alt="Hamburg Map Texture" />
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
  
  // Smooth Scroll Hook (Lenis) - Optimized for performance
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

  // IMPORTANT: Removed 'bg-[#020202]' to allow GlobalBackground to be visible
  return (
    <div className={`min-h-screen font-sans selection:bg-accent selection:text-black transition-colors duration-500 ${isEmergencyMode ? 'bg-red-950' : 'bg-transparent'}`}>
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