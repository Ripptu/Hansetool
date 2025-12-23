import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { SERVICES, VALUES, CLIENT_LOGOS } from './constants';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Sparkles, Wrench, Truck, Anchor, ShieldCheck, Zap, HeartHandshake, ArrowUpRight, ClipboardCheck } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Testimonials } from './components/ui/Testimonials';
import { ServiceCard } from './components/ui/service-card';

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax effect: moves the background image slower than the scroll
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [0.6, 0]);

  return (
    <section className="relative min-h-screen flex items-end pb-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black z-10 absolute"></div>
        <motion.div style={{ y, opacity }} className="w-full h-[120%] -top-[10%] relative">
             <img 
            src="https://webdesign.reikotec.com/wp-content/uploads/2024/10/FireflyGenerieremireinBildindemeinMannineinerSchreinereiinNahaufnahmezusehenistwi-scaled.jpg" 
            alt="Hansetool Handwerk und Reinigung" 
            className="w-full h-full object-cover"
            />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 mb-8 items-center flex-wrap"
        >
            <div className="bg-accent text-black px-3 py-1 rounded text-sm font-bold flex items-center gap-1 uppercase tracking-wider">
                Hamburg
            </div>
            <div className="bg-dark-lighter border border-gray-border px-4 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
                Gewerbe & Industrie
            </div>
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[7rem] leading-[1] font-bold text-white max-w-5xl tracking-tight mb-8"
        >
          Wir machen das.
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12"
        >
            Ihr bodenständiger Partner für Reinigung, Hausmeisterservice und Handwerk. Sauber, zuverlässig und ohne leere Versprechen.
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
        >
            <Button text="Angebot anfragen" href="#contact" />
            <Button text="Unsere Leistungen" variant="text" href="#services" />
        </motion.div>
      </div>
    </section>
  );
};

const LogoMarquee = () => {
  return (
    <div className="bg-dark border-t border-b border-gray-border py-12 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-sm text-gray-text uppercase tracking-widest">Vertrauen von Gewerbekunden aus Hamburg</p>
      </div>
      <div className="flex animate-scroll whitespace-nowrap items-center w-max">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
          <div key={`${logo.id}-${idx}`} className="mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
             {/* Text fallback for now since we don't have real logos */}
             <span className="text-2xl font-bold text-gray-500 font-mono">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
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
            <motion.div style={{ y }} className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-border/50">
                {/* Updated Image */}
                <img 
                  src="https://media.istockphoto.com/id/1730408068/de/foto/portr%C3%A4t-eines-jungen-fabrikarbeiters-mit-verschr%C3%A4nkten-t%C3%A4towierten-armen-der-einen-bremssattel.jpg?s=1024x1024&w=is&k=20&c=QJcuqx4h5SqvxAkxldh5XPGC28TFUywdvRagPaedoY8=" 
                  alt="Hansetool Mitarbeiter" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
            </motion.div>
            <div className="space-y-8 sticky top-32">
                <p className="text-gray-text text-lg leading-relaxed">
                    Hansetool steht für eine pragmatische Macher-Mentalität. Wir sind ein Dienstleistungsbetrieb aus Hamburg, der sich auf das Wesentliche konzentriert: Die Arbeit sauber und zuverlässig zu erledigen.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold">Für Gewerbe & Büros</h4>
                            <p className="text-gray-text">Unser Fokus liegt auf Firmen, Betrieben und Hallen. Wir verstehen die Anforderungen des Tagesgeschäfts.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold">Macher-Mentalität</h4>
                            <p className="text-gray-text">Keine komplizierten Abläufe. Wir kommen, arbeiten und gehen erst, wenn es fertig ist.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <Button text="Kontaktieren Sie uns" variant="text" href="#contact" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-dark">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Was wir tun</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Alles außer Standard.</h2>
                <p className="text-gray-text text-xl">
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
        <motion.div style={{ y }} className="absolute top-0 right-0 w-full max-w-4xl h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></motion.div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20">
                <span className="text-accent font-bold uppercase tracking-widest mb-2 block">Die DNA</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white max-w-4xl tracking-tight">
                    Keine Floskeln.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Echtes Handwerk.</span>
                </h2>
            </div>

            {/* Bento Grid Layout for Values */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(200px,auto)]">
                
                {/* Card 1: Main Feature - Large */}
                <div className="md:col-span-4 bg-[#151515] border border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-accent/30 transition-colors group">
                    <div className="flex justify-between items-start">
                        <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                            <HeartHandshake size={40} />
                        </div>
                        <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">01</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Moin statt Marketing</h3>
                        <p className="text-gray-400 text-lg max-w-lg">
                            Bei uns gibt es keine aalglatten Vertriebler. Sie sprechen mit Menschen, die wissen, wie man einen Schraubenzieher hält. Direkt, ehrlich, hanseatisch.
                        </p>
                    </div>
                </div>

                {/* Card 2: Vertical Highlight */}
                <div className="md:col-span-2 md:row-span-2 bg-accent rounded-3xl p-10 flex flex-col justify-between text-black relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                     <div className="bg-black/10 p-4 rounded-2xl w-fit">
                        <Zap size={32} />
                     </div>
                     <div className="relative z-10">
                        <h3 className="text-4xl font-bold mb-4 leading-tight">24/7 Kopf bei der Sache.</h3>
                        <p className="font-medium text-black/80">
                            Probleme kennen keinen Feierabend. Wir sind da, wenn es brennt. Lösungsorientiertes Denken ist unser Standardmodus.
                        </p>
                     </div>
                     <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={32} />
                     </div>
                </div>

                {/* Card 3: Hamburg specific */}
                <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 hover:bg-[#222] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <Anchor className="text-white/40 group-hover:text-accent transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white">100% Hamburg</h3>
                    </div>
                    <p className="text-gray-400">
                        Wir kennen die Stadt, den Verkehr und die Mentalität. Kurze Wege, schnelle Reaktionszeiten.
                    </p>
                </div>

                {/* Card 4: Quality */}
                <div className="md:col-span-2 bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 hover:bg-[#222] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                        <ShieldCheck className="text-white/40 group-hover:text-accent transition-colors" size={32} />
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
        {
            id: 'p4',
            location: 'EIMSBÜTTEL PRAXIS',
            title: 'Hygiene-Konzept',
            desc: 'Tägliche Desinfektion und Unterhaltsreinigung für medizinisches Zentrum.',
            image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',
            tag: 'HYGIENE'
        }
    ];

    return (
        <section className="py-32 bg-[#101010] border-t border-white/5 relative overflow-hidden">
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
                        <div className="bg-[#1a1a1a] px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-gray-400 font-mono text-sm">LIVE STATUS: IM EINSATZ</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
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
        <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-border">
            {/* Background Tech Elements */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white'}`}></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#151515] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
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
                                <a href="tel:+4940123456" className="group relative flex items-center justify-between bg-accent hover:bg-accent/90 text-black px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] min-w-[240px]">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">Dringend?</span>
                                        <span className="text-2xl font-bold">Anrufen</span>
                                    </div>
                                    <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                </a>

                                <a href="mailto:info@hansetool.de" className="group relative flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] min-w-[240px]">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Schriftlich</span>
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
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-1000"
                                alt="Hamburg Map Texture"
                             />

                             <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                                <div className="border-l-4 border-accent pl-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Zentrale Hamburg</h3>
                                    <p className="text-gray-400">
                                        Große Bleichen 12<br/>
                                        20354 Hamburg
                                    </p>
                                    <div className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
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
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <IntroSection />
      <ServicesSection />
      <ValuesSection />
      <ProjectShowcase />
      <Testimonials />
      <ContactTerminal />
      <Footer />
    </div>
  );
}

export default App;