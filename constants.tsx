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

// Updated, more creative services with colorful 3D icons
export const SERVICES: (ServiceCategory & { variant?: "default" | "accent" | "outline" })[] = [
  {
    id: '1',
    title: 'Glanzleistung & Hygiene',
    description: 'Vom staubigen Lagerboden bis zur sterilen Praxis. Wir putzen nicht nur, wir werten auf. Mit modernster Technik und Blick fürs Detail.',
    items: ['Industriereinigung', 'Praxis-Hygiene', 'Glas- & Fassade', 'Teppich-Tiefenreinigung'],
    image: 'https://cdn-icons-png.flaticon.com/128/994/994928.png', // 3D Cleaning Bucket (Original)
    variant: 'default'
  },
  {
    id: '2',
    title: 'Technik & Instandhaltung',
    description: 'Hausmeister 2.0. Wenn es tropft, klemmt oder dunkel bleibt, sind wir schon unterwegs. Präventive Wartung statt teurer Reparaturen.',
    items: ['Wartung & Reparatur', 'Leuchtmittel-Service', 'Möbelmontage', 'Schließanlagen'],
    image: 'https://cdn-icons-png.flaticon.com/128/2276/2276313.png', // 3D Tools - Wrench & Hammer (Original)
    variant: 'default'
  },
  {
    id: '3',
    title: 'Logistik & Anpacken',
    description: 'Wir sind uns für nichts zu schade. Interne Umzüge, Entrümpelung von Kellern oder der Transport von A nach B. Schnell, stark, sauber.',
    items: ['Büroumzüge', 'Entsorgung', 'Transporte', 'Lagerlogistik'],
    image: 'https://cdn-icons-png.flaticon.com/128/870/870130.png', // 3D Delivery Truck (Original)
    variant: 'accent' // Highlight this one
  },
  {
    id: '4',
    title: 'Aussenanlagen & Grün',
    description: 'Der erste Eindruck zählt. Wir sorgen für geschnittene Hecken, laubfreie Wege und einen repräsentativen Eingangsbereich.',
    items: ['Grünpflege', 'Winterdienst', 'Parkplatzreinigung', 'Graffitientfernung'],
    image: 'https://cdn-icons-png.flaticon.com/128/489/489969.png', // 3D Plant/Tree (Original)
    variant: 'default'
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