import React from 'react';

export const HamburgSkyline = ({ className = "" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 1200 180" className={`w-full h-auto ${className}`} preserveAspectRatio="none">
      <path 
        fill="currentColor" 
        fillOpacity="0.05"
        d="M0,180 L0,150 L50,150 L50,120 L80,120 L80,150 L120,150 L120,100 L160,100 L160,150 L200,150 L200,180 Z" 
      />
      {/* Telemichel (TV Tower) */}
      <path
        fill="currentColor"
        d="M300,180 L300,60 L295,60 L295,50 L305,50 L305,60 L300,60 M300,50 L300,20"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle cx="300" cy="40" r="8" fill="currentColor" />
      
      {/* Stylized Buildings & Crane */}
      <path 
        fill="currentColor" 
        d="M250,180 L250,140 L350,140 L350,180 M380,180 L380,110 L440,110 L440,180 M420,110 L420,90 L480,90 L460,110" 
      />
      
      {/* Elbphilharmonie Style Shape */}
      <path
        fill="currentColor"
        d="M500,180 L500,130 Q530,120 560,135 Q590,115 620,130 L620,180"
      />

      {/* Michaelis Kirche (Michel) Style */}
      <path
        fill="currentColor"
        d="M700,180 L700,100 L730,100 L730,180 M715,100 L715,80"
      />
      <circle cx="715" cy="75" r="5" fill="currentColor" />

      {/* Köhlbrandbrücke Style */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        d="M800,180 L850,100 L1100,180 M850,100 L850,180 M870,110 L870,180 M890,120 L890,180"
      />
      
      {/* Ground Line */}
      <rect x="0" y="178" width="1200" height="2" fill="currentColor" />
    </svg>
  );
};