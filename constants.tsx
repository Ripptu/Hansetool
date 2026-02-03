import { ServiceCategory, ValueItem, ClientLogo } from './types';

// Placeholder logos representing generic large Hamburg clients
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: '1', name: 'Hamburg Business', url: 'https://via.placeholder.com/150x50/333333/808080?text=Kunde+Hamburg+1' },
  { id: '2', name: 'Gewerbe Nord', url: 'https://via.placeholder.com/150x50/333333/808080?text=Kunde+Hamburg+2' },
  { id: '3', name: 'Immobilien Hanse', url: 'https://via.placeholder.com/150x50/333333/808080?text=Immobilien+Hanse' },
  { id: '4', name: 'Büro Management', url: 'https://via.placeholder.com/150x50/333333/808080?text=Büro+Mgmt' },
  { id: '5', name: 'Facility Care', url: 'https://via.placeholder.com/150x50/333333/808080?text=Facility+Care' },
  { id: '6', name: 'Hamburg Office', url: 'https://via.placeholder.com/150x50/333333/808080?text=Hamburg+Office' },
];

// Updated services with Color Themes for a modern UI
export const SERVICES = [
  {
    id: '1',
    title: 'Glanzleistung & Hygiene',
    description: 'Vom staubigen Lagerboden bis zu glasigen Fenstern. Wir putzen nicht nur, wir werten auf. Mit modernsten Techniken und Blick fürs Detail.',
    items: ['Büroreinigung', 'Glas- & Fassade', 'Teppich-Tiefenreinigung'],
    image: 'https://cdn-icons-png.flaticon.com/128/994/994928.png',
    theme: {
        primary: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'group-hover:border-cyan-500/50',
        glow: 'from-cyan-500/20 to-blue-600/5',
        gradient: 'from-cyan-400 to-blue-500'
    }
  },
  {
    id: '2',
    title: 'Technik & Instandhaltung',
    description: 'Hausmeisterservice 2.0. Wenn es tropft, klemmt oder dunkel bleibt, sind wir schon unterwegs. Präventive Wartung statt teurer Reparaturen.',
    items: ['Wartung & Reparatur', 'Leuchtmittel-Service', 'Möbelmontage', 'Sanitärmontage'],
    image: 'https://cdn-icons-png.flaticon.com/128/2276/2276313.png',
    theme: {
        primary: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'group-hover:border-amber-500/50',
        glow: 'from-amber-500/20 to-orange-600/5',
        gradient: 'from-amber-400 to-orange-500'
    }
  },
  {
    id: '3',
    title: 'Logistik & Anpacken',
    description: 'Wir sind uns für nichts zu schade. Interne Umzüge, Entrümpelung von Kellern oder der Transport von A nach B. Schnell, stark, sauber.',
    items: ['Büroumzüge', 'Entsorgung', 'Transporte'],
    image: 'https://cdn-icons-png.flaticon.com/128/870/870130.png',
    theme: {
        primary: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'group-hover:border-violet-500/50',
        glow: 'from-violet-500/20 to-purple-600/5',
        gradient: 'from-violet-400 to-purple-500'
    }
  },
  {
    id: '4',
    title: 'Aussenanlagen & Grün',
    description: 'Der erste Eindruck zählt. Wir sorgen für geschnittene Hecken, laubfreie Wege und einen repräsentativen Eingangsbereich.',
    items: ['Grünpflege', 'Parkplatzreinigung', 'Graffitientfernung'],
    image: 'https://cdn-icons-png.flaticon.com/128/489/489969.png',
    theme: {
        primary: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'group-hover:border-emerald-500/50',
        glow: 'from-emerald-500/20 to-green-600/5',
        gradient: 'from-emerald-400 to-green-500'
    }
  }
];

export const VALUES: ValueItem[] = [
  {
    id: '1',
    title: 'Bodenständig',
    description: 'Keine leeren Versprechen. Wir sind ein ehrlicher Dienstleister aus Hamburg.'
  },
  {
    id: '2',
    title: 'Zuverlässig',
    description: 'Wenn wir sagen, wir kommen, dann kommen wir. Pünktlichkeit ist unser Standard.'
  },
  {
    id: '3',
    title: 'Pragmatisch',
    description: 'Keine komplizierten Abläufe. Wir hören erst auf, wenn es fertig ist.'
  },
  {
    id: '4',
    title: 'Handschlagqualität',
    description: 'Wir stehen zu unserem Wort und arbeiten zu fairen Preisen.'
  }
];