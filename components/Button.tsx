import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'text';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href = '#', variant = 'primary', className = '' }) => {
  if (variant === 'text') {
    return (
      <a href={href} className={`group inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors ${className}`}>
        <span className="relative">
          {text}
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    );
  }

  return (
    <a href={href} className={`group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-white/90 hover:scale-[0.98] ${className}`}>
      <span className="mr-2">{text}</span>
      <div className="relative w-4 h-4 overflow-hidden">
        <ArrowRight className="absolute w-4 h-4 transform group-hover:translate-x-full transition-transform duration-300" />
        <ArrowRight className="absolute w-4 h-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </div>
    </a>
  );
};
