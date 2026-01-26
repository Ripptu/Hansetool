import React from 'react';
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Endlich eine Reinigungsfirma, die mitdenkt. Unsere Hallenböden sehen top aus und die Kommunikation ist absolut unkompliziert. Echte Hamburger Handschlagqualität.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Weber",
    role: "Geschäftsführer, Weber Logistik",
  },
  {
    text: "Zuverlässig und gründlich. Das Team ist pünktlich vor Ort und erledigt auch kleine Reparaturen sofort mit. Genau das, was wir für unser Büro gesucht haben.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jürgens",
    role: "Office Managerin, TechPort HH",
  },
  {
    text: "Wir lassen mehrere Objekte in Altona von Hansetool betreuen. Von der Treppenhausreinigung bis zum Glühbirnenwechsel klappt alles reibungslos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Thomas Krüger",
    role: "Krüger Immobilienverwaltung",
  },
  {
    text: "Bodenständig und ehrlich. Ein Mann, ein Wort. Die Jungs packen ordentlich an, wenn es bei uns in der Werkstatt mal wieder chaotisch aussieht.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Uwe Müller",
    role: "Werkstattleiter, KFZ Müller",
  },
  {
    text: "Super flexibel bei unseren Events und sehr gründlich in der täglichen Unterhaltsreinigung. Das Preis-Leistungs-Verhältnis stimmt einfach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dennis Schröder",
    role: "StartUp Hub HafenCity",
  },
   {
    text: "Die Grundreinigung nach unserem Umbau war perfekt. Innerhalb von einem Tag war alles bezugsfertig. Großes Lob an das Team.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lisa Behrens",
    role: "Architekturbüro Behrens",
  },
  {
    text: "Kein langes Gerede, die Arbeit wird erledigt. Wir schätzen die direkte Art und die sauberen Ergebnisse in unserem Lager.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Frank Oetker",
    role: "Logistikleiter",
  },
  {
    text: "Wir nutzen den Hausmeisterservice seit einem Jahr. Es ist beruhigend zu wissen, dass sich jemand kümmert, wenn mal was klemmt.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Maria Sanchez",
    role: "Hausverwaltung Nord",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(5, 8);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <li 
                key={`${index}-${i}`}
                className="p-8 rounded-2xl border border-gray-border bg-dark-lighter shadow-lg max-w-xs w-full transition-all duration-300 hover:border-accent/50 group" 
              >
                <blockquote className="m-0 p-0">
                  <p className="text-gray-300 leading-relaxed font-normal m-0 text-sm italic">
                    "{text}"
                  </p>
                  <footer className="flex items-center gap-4 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image} // Images already have sizing params from the constant above
                      alt={`Avatar of ${name}`}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-border group-hover:ring-accent transition-all duration-300 bg-gray-800"
                    />
                    <div className="flex flex-col">
                      <cite className="font-bold not-italic text-white text-sm">
                        {name}
                      </cite>
                      <span className="text-xs text-gray-500 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 text-center">
            <span className="text-accent font-bold uppercase tracking-widest mb-2 text-sm">Kundenstimmen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Das sagen unsere Kunden.
            </h2>
            <p className="text-gray-text text-lg">
                Ehrliches Feedback von Unternehmen und Verwaltungen aus Hamburg.
            </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
};