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
  type: 'impressum' | 'privacy' | 'agb' | null; 
  onClose: () => void 
}> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const content = (() => {
      switch(type) {
          case 'impressum':
            return (
                <div className="space-y-6 text-gray-300">
                  <h3 className="text-xl font-bold text-white mb-4">Impressum</h3>
                  <div>
                    <h4 className="font-bold text-white">Name und Anschrift:</h4>
                    <p>Hansetool</p>
                    <p>Hufnerstraße 55a</p>
                    <p>22305 Hamburg</p>
                  </div>
            
                  <div>
                    <h4 className="font-bold text-white mt-4">Kontakt</h4>
                    <p>Telefon: 0176-47093890</p>
                    <p>E-Mail: info@hansetool.de</p>
                    <p>Website: <a href="https://www.hansetool.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.hansetool.de</a></p>
                  </div>
            
                  <div>
                    <h4 className="font-bold text-white mt-4">Geschäftsführer</h4>
                    <p>Giuseppe Vittorio Villani</p>
                  </div>
            
                  <div>
                    <h4 className="font-bold text-white mt-4">Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV</h4>
                    <p>Giuseppe Vittorio Villani (Kontakt s. o.)</p>
                  </div>
            
                  <div>
                    <h4 className="font-bold text-white mt-4">Haftungsausschluss</h4>
                    <p className="text-sm">Alle Informationen und sonstigen Angaben auf dieser Website sind unverbindlich und unterliegen dem Vorbehalt der jederzeitigen Änderung. Jede Haftung für die Richtigkeit und Vollständigkeit der Informationen sind ausgeschlossen. Alle auf unseren Internetseiten veröffentlichten Informationen wurden nach bestem Wissen und Gewissen erstellt. Trotzdem gelten diese als unverbindlich und bilden keinerlei Rechtsansprüche insbesondere nicht für unmittelbare oder mittelbare Folgeschäden.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mt-4">Haftungsausschluss für externe Inhalte und Links</h4>
                    <p className="text-sm">Unsere Website enthält Inhalte von Drittanbietern (z. B. eingebettete Tools oder Inhalte über iFrames) sowie Links zu externen Websites. Diese Inhalte und Links werden bereitgestellt, um Ihnen zusätzliche Informationen oder Funktionen anzubieten. Beim Zugriff auf solche Inhalte oder beim Anklicken externer Links verlassen Sie den Verantwortungsbereich unserer Website.</p>
                    <p className="text-sm mt-2">Wir übernehmen keine Verantwortung für die Inhalte, die Verfügbarkeit oder die Datenschutzpraktiken externer Websites oder eingebundener Drittinhalte. Die Verantwortung für diese Inhalte liegt ausschließlich bei den jeweiligen Anbietern. Eine kontinuierliche inhaltliche Kontrolle der verlinkten Seiten oder eingebetteten Inhalte ist uns nicht möglich und nicht zumutbar. Zum Zeitpunkt der Einbindung oder Verlinkung wurden die Inhalte jedoch auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.</p>
                    <p className="text-sm mt-2">Wir machen uns die Inhalte externer Anbieter ausdrücklich nicht zu eigen. Sollten uns Rechtsverletzungen bekannt werden, werden wir die entsprechenden Inhalte oder Links umgehend entfernen.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mt-4">Urheberschutz</h4>
                    <p className="text-sm">Der gesamte Inhalt dieser Website ist urheberrechtlich geschützt. Weitergabe, Veränderung, gewerbliche Nutzung, Vervielfältigung, Übermittlung, Veränderung oder Verwendung auf anderen Webseiten, herunterladen von Daten, insbesondere von Fotos etc., ist untersagt.</p>
                  </div>
                </div>
              );
          case 'privacy':
              return (
                <div className="space-y-6 text-gray-300">
                  <h3 className="text-xl font-bold text-white mb-4">Datenschutz</h3>
                  
                  <div>
                    <p className="text-sm">ICH übermittle Ihre Daten grundsätzlich NICHT an Dritte. Eine Weitergabe erfolgt nur, sofern die Daten gerade zur Weitergabe bestimmt sind, Sie vorher ausdrücklich in die Übermittlung eingewilligt haben oder wir aufgrund gesetzlicher Vorschriften hierzu verpflichtet bzw. berechtigt sind.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mt-4">Löschung Ihrer Daten</h4>
                    <p className="text-sm">Wir verarbeiten Ihre Daten grundsätzlich nur solange, wie sie für die Zwecke, für die sie erhoben worden sind, erforderlich sind. Wir zeichnen nichts auf. Ihre Daten werden daher nicht gespeichert.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mt-4">Ihre Rechte als betroffenen Person</h4>
                    <p className="text-sm">Sie haben gemäß Art. 15 DSGVO das Recht auf Auskunft seitens des Verantwortlichen über die Sie betreffenden personenbezogenen Daten sowie auf Berichtigung unrichtiger Daten gemäß Art. 16 DSGVO oder auf Löschung, sofern einer der in Art. 17 DSGVO genannten Gründe vorliegt, z.B. wenn die Daten für die verfolgten Zwecke nicht mehr benötigt werden. Sie haben zudem das Recht auf Einschränkung der Verarbeitung, wenn eine der in Art. 18 DSGVO genannten Voraussetzungen vorliegt und in den Fällen des Art. 20 DSGVO das Recht auf Datenübertragbarkeit.</p>
                    <p className="text-sm mt-2">In Fällen, in denen wir Ihre personenbezogenen Daten auf der Rechtsgrundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeiten, haben Sie zudem das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, es liegen nachweisbar zwingende schutzwürdige Gründe für die Verarbeitung vor, die gegenüber Ihren Interessen, Rechten und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
                    <p className="text-sm mt-2">Sie haben zudem das Recht hat auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden Daten gegen datenschutzrechtliche Bestimmungen verstößt. Das Beschwerderecht kann insbesondere bei einer Aufsichtsbehörde in dem Mitgliedstaat des Aufenthaltsorts der betroffenen Person oder des Orts des mutmaßlichen Verstoßes geltend gemacht werden.</p>
                  </div>
                  
                  <div>
                     <p className="text-sm mt-4">Quelle: <a href="https://www.datenschutz-notizen.de/videokonferenzen-mit-zoom-5327696/" className="underline hover:text-white">https://www.datenschutz-notizen.de/videokonferenzen-mit-zoom-5327696/</a></p>
                  </div>
                </div>
              );
          case 'agb':
            return (
                <div className="space-y-6 text-gray-300">
                    <h3 className="text-xl font-bold text-white mb-4">Allgemeine Geschäftsbedingungen</h3>
                    <div>
                        <h4 className="font-bold text-white">Allgemeines</h4>
                        <p className="text-sm">Für die Ausführung und Abwicklung von Aufträgen gelten unsere Allgemeinen Geschäftsbedingungen, die Ihnen auf Wunsch zugestellt werden.</p>
                        <p className="text-sm mt-2">Soweit unser Leistungsspektrum auch Arbeiten aus anderen Gewerken wie zum Beispiel Elektro oder Fliesen umfasst, werden diese Arbeiten durch von uns beauftragte Meisterbetriebe ausgeführt.</p>
                    </div>
                </div>
            );
          default:
              return null;
      }
  })();

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
            <h2 className="text-2xl font-bold text-white capitalize">
              {type === 'agb' ? 'AGB' : type}
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
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'impressum' | 'privacy' | 'agb' | null }>({
    isOpen: false,
    type: null
  });

  const openLegal = (type: 'impressum' | 'privacy' | 'agb') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegal = () => {
    setLegalModal({ ...legalModal, isOpen: false });
  };

  const footerLinks = [
      { name: 'Reinigung', href: '#services' },
      { name: 'Handwerk', href: '#services' },
      { name: 'Hausmeister', href: '#services' },
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
                    
                    <a href="tel:+4917647093890" className="flex items-center gap-4 text-white group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                            <Phone size={18} />
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wide">Anrufen</span>
                            <span className="text-lg font-medium">0176-47093890</span>
                        </div>
                    </a>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10 text-sm text-gray-500">
              <div className="flex gap-8 mb-4 md:mb-0">
                  <button onClick={() => openLegal('impressum')} className="hover:text-white transition-colors">Impressum</button>
                  <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">Datenschutz</button>
                  <button onClick={() => openLegal('agb')} className="hover:text-white transition-colors">AGB</button>
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