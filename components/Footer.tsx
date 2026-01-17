import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { HamburgSkyline } from './HamburgSkyline';
import { motion, AnimatePresence } from 'framer-motion';

const Clock: React.FC<{ timeZone: string; label: string }> = ({ timeZone, label }) => {
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
    <div className="text-right">
      <div className="text-gray-text text-sm mb-1">{label} - {time} Uhr</div>
    </div>
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

  return (
    <>
      <footer className="bg-dark pt-24 pb-0 border-t border-gray-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-6">
                  <img 
                    src="https://i.postimg.cc/VLVz13zy/nur-logo.png" 
                    alt="Hansetool" 
                    className="h-16 w-auto brightness-0 invert opacity-90" 
                  />
              </div>
              <p className="text-gray-text text-lg max-w-md">
                Bodenständig. Zuverlässig. Lösungsorientiert.<br/>
                Ihr Partner für Gewerbe und Immobilien in Hamburg.
              </p>
              
              <div className="space-y-2 pt-4">
                  <a href="mailto:info@hansetool.de" className="flex items-center gap-3 text-gray-text hover:text-white transition-colors">
                      <Mail className="w-5 h-5" /> info@hansetool.de
                  </a>
                  <a href="tel:+4940123456" className="flex items-center gap-3 text-gray-text hover:text-white transition-colors">
                      <Phone className="w-5 h-5" /> +49 (0) 40 123 456
                  </a>
                  <div className="flex items-center gap-3 text-gray-text">
                      <MapPin className="w-5 h-5" /> Hamburg & Umgebung
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                  <a href="#services" className="block text-gray-text hover:text-white transition-colors">Reinigung</a>
                  <a href="#services" className="block text-gray-text hover:text-white transition-colors">Hausmeisterservice</a>
                  <a href="#services" className="block text-gray-text hover:text-white transition-colors">Handwerk</a>
                  <a href="#services" className="block text-gray-text hover:text-white transition-colors">Umzüge</a>
              </div>
              <div className="space-y-8">
                  <div>
                      <Clock timeZone="Europe/Berlin" label="Hamburg" />
                      <p className="text-gray-text text-right text-xs mt-1">Einsatzgebiet Hamburg</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-border text-xs text-gray-text bg-dark relative z-10">
              <p>© 2025 Hansetool. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                  <button onClick={() => openLegal('impressum')} className="hover:text-white transition-colors">Impressum</button>
                  <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">Datenschutz</button>
              </div>
          </div>
        </div>
        
        {/* Hamburg Skyline Background at bottom */}
        <div className="absolute bottom-0 left-0 w-full text-[#1a1a1a] pointer-events-none opacity-50">
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
