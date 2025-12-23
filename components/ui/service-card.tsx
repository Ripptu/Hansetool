import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "../../lib/utils";

// CVA for card variants - Customized for Hansetool Dark Theme
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-8 overflow-hidden rounded-2xl transition-all duration-300 ease-in-out group border",
  {
    variants: {
      variant: {
        default: "bg-[#1a1a1a] border-[#333] text-white hover:border-[#22C55E] hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]",
        accent: "bg-[#22C55E] border-[#22C55E] text-black",
        outline: "bg-transparent border-[#333] text-white hover:bg-[#1a1a1a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  href?: string;
  imgSrc: string;
  imgAlt: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, description, href = "#contact", imgSrc, imgAlt, ...props }, ref) => {
    
    const cardAnimation = {
      hover: {
        y: -5,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation = {
      hover: {
        scale: 1.1,
        rotate: 5,
        x: 10,
        y: -10,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    };
    
    const arrowAnimation = {
        hover: {
            x: 5,
            transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" as const },
        }
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-3xl font-bold tracking-tight mb-4 leading-tight">{title}</h3>
          <p className={cn("text-lg mb-8 leading-relaxed", variant === 'accent' ? 'text-black/80' : 'text-gray-400')}>
            {description}
          </p>
          
          <a
            href={href}
            aria-label={`Mehr über ${title}`}
            className={cn(
                "mt-auto inline-flex items-center text-sm font-bold uppercase tracking-wider",
                variant === 'accent' ? 'text-black' : 'text-white group-hover:text-[#22C55E] transition-colors'
            )}
          >
            Jetzt anfragen
            <motion.div variants={arrowAnimation}>
                <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </a>
        </div>
        
        {/* Decorative Image / Icon - No grayscale, higher opacity */}
        <div className="absolute -right-4 -bottom-4 w-48 h-48 opacity-80 group-hover:opacity-100 transition-all duration-500">
             <motion.img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-contain drop-shadow-xl"
                variants={imageAnimation}
            />
        </div>
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };