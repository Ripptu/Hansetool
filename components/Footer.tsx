import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, X, ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { HamburgSkyline } from './HamburgSkyline';
import { motion, AnimatePresence } from 'framer-motion';

const Clock: React.FC<{ timeZone: string; }> = ({ timeZone }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('de-DE', { timeZone, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
      <span className="font-mono">{time}</span>
  );
};

const LegalModal: React.FC<{ 
  isOpen: boolean; 
  type: 'impressum' | 'privacy' | null; 
  onClose: () => void 
}> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const content = type === 'impressum' ? (
    <div className="space-y-6 text-gray-300">
      <h3 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h3>
      <div>
        <p className="font-bold text-white">Hansetool Hamburg</p>
        <p>Musterstraße 1</p>
        <p>20457 Hamburg</p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">Kontakt</h4>
        <p>Telefon: +49 (0) 40 123 456</p>
        <p>E-Mail: info@hansetool.de</p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">Umsatzsteuer-ID</h4>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p>DE 123 456 789</p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
        <p>Max Mustermann</p>
        <p>Musterstraße 1</p>
        <p>20457 Hamburg</p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">Streitschlichtung</h4>
        <p className="text-sm">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br/> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        <p className="text-sm mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </div>
  ) : (
    <div className="space-y-6 text-gray-300">
      <h3 className="text-xl font-bold text-white mb-4">Datenschutzerklärung</h3>
      
      <div>
        <h4 className="font-bold text-white">1. Datenschutz auf einen Blick</h4>
        <p className="mt-2 text-sm">
          <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">2. Allgemeine Hinweise und Pflichtinformationen</h4>
        <p className="mt-2 text-sm">
          <strong>Datenschutz:</strong> Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p className="mt-2 text-sm">
          <strong>Hinweis zur verantwortlichen Stelle:</strong><br/>
          Hansetool Hamburg<br/>
          Musterstraße 1<br/>
          20457 Hamburg<br/>
          E-Mail: info@hansetool.de
        </p>
      </div>

      <div>
        <h4 className="font-bold text-white mt-4">3. Datenerfassung auf unserer Website</h4>
        <p className="mt-2 text-sm">
          <strong>Cookies:</strong> Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
        <p className="mt-2 text-sm">
          <strong>Kontaktformular / Anfrage-Wizard:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold text-white mt-4">4. Analyse-Tools und Tools von Drittanbietern</h4>
        <p className="mt-2 text-sm">
          Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym.
        </p>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#111] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#151515]">
            <h2 className="text-2xl font-bold text-white">
              {type === 'impressum' ? 'Impressum' : 'Datenschutz'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-8 overflow-y-auto custom-scrollbar">
            {content}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'impressum' | 'privacy' | null }>({
    isOpen: false,
    type: null
  });

  const openLegal = (type: 'impressum' | 'privacy') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegal = () => {
    setLegalModal({ ...legalModal, isOpen: false });
  };

  const footerLinks = [
      { name: 'Reinigung', href: '#services' },
      { name: 'Handwerk', href: '#services' },
      { name: 'Hausmeister', href: '#services' },
      { name: 'Notdienst', href: '#contact' },
  ];

  return (
    <>
      <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Massive Typographic Background */}
        <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
            <h1 className="text-[15vw] font-bold text-white leading-none tracking-tighter text-center whitespace-nowrap">
                HANSETOOL
            </h1>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-8">
               <a href="#" className="block mb-8">
                  <img 
                    src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                    alt="Hansetool" 
                    className="h-12 w-auto brightness-0 invert opacity-100" 
                  />
               </a>
               <p className="text-2xl font-medium text-white leading-tight max-w-md">
                   Wir bringen Ordnung in Hamburgs Gewerbe und Immobilien. <span className="text-gray-500">Direkt, sauber und ohne Schnickschnack.</span>
               </p>
               
               <div className="flex gap-4 pt-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110">
                          <Icon size={20} />
                      </a>
                  ))}
               </div>
            </div>

            {/* Quick Links with Hover Effect */}
            <div className="lg:col-span-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">Navigation</h4>
                <div className="flex flex-col gap-4">
                    {footerLinks.map((link) => (
                        <a key={link.name} href={link.href} className="group flex items-center justify-between text-lg text-gray-300 hover:text-white border-b border-white/5 pb-4 transition-colors">
                            {link.name}
                            <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact & Status */}
            <div className="lg:col-span-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">Status & Kontakt</h4>
                <div className="bg-[#111] rounded-2xl p-8 border border-white/5 space-y-6">
                    <div className="flex justify-between items-center pb-6 border-b border-white/5">
                        <span className="text-gray-400">Hamburg</span>
                        <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded-full text-xs font-bold">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <Clock timeZone="Europe/Berlin" />
                        </div>
                    </div>
                    
                    <a href="mailto:info@hansetool.de" className="flex items-center gap-4 text-white group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                            <Mail size={18} />
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wide">Schreiben</span>
                            <span className="text-lg font-medium">info@hansetool.de</span>
                        </div>
                    </a>
                    
                    <a href="tel:+4915255905935" className="flex items-center gap-4 text-white group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                            <Phone size={18} />
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wide">Anrufen</span>
                            <span className="text-lg font-medium">+49 (0) 40 123 456</span>
                        </div>
                    </a>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10 text-sm text-gray-500">
              <div className="flex gap-8 mb-4 md:mb-0">
                  <button onClick={() => openLegal('impressum')} className="hover:text-white transition-colors">Impressum</button>
                  <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">Datenschutz</button>
                  <a href="#" className="hover:text-white transition-colors">AGB</a>
              </div>
              <p>© 2025 Hansetool Hamburg. Built for Makers.</p>
          </div>
        </div>
        
        {/* Subtle City Silhouette at very bottom */}
        <div className="absolute bottom-0 left-0 w-full text-white/5 pointer-events-none">
          <HamburgSkyline />
        </div>
      </footer>

      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={closeLegal} 
      />
    </>
  );
};