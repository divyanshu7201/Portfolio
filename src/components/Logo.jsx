import React from 'react';

const Logo = ({ size = 48, glowColor = '#00f0ff' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <defs>
        {/* Metal Chrome Gradient for the main body of D */}
        <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="75%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Glow filter for the neon slash */}
        <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Mask to cut a clean diagonal gap in the D */}
        <mask id="slash-mask">
          {/* Default everything visible */}
          <rect x="0" y="0" width="100" height="100" fill="white" />
          {/* Draw a thick diagonal black line to cut the path */}
          <line 
            x1="12" 
            y1="88" 
            x2="52" 
            y2="48" 
            stroke="black" 
            strokeWidth="7" 
            strokeLinecap="round" 
          />
        </mask>
      </defs>

      {/* Main Letter D path with the cut mask applied */}
      <path 
        d="M 25 15 L 60 15 A 35 35 0 0 1 60 85 L 25 85 Z M 45 33 L 55 33 A 17 17 0 0 1 55 67 L 45 67 Z" 
        fill="url(#chrome-grad)"
        mask="url(#slash-mask)"
        fillRule="evenodd"
      />

      {/* Outer subtle stroke for metal realism */}
      <path 
        d="M 25 15 L 60 15 A 35 35 0 0 1 60 85 L 25 85 Z" 
        stroke="#cbd5e1"
        strokeWidth="0.5"
        mask="url(#slash-mask)"
      />

      {/* Inner subtle stroke */}
      <path 
        d="M 45 33 L 55 33 A 17 17 0 0 1 55 67 L 45 67 Z" 
        stroke="#475569"
        strokeWidth="0.5"
        mask="url(#slash-mask)"
      />

      {/* The glowing neon slash line */}
      <line 
        x1="10" 
        y1="90" 
        x2="50" 
        y2="50" 
        stroke={glowColor} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        filter="url(#neon-glow)" 
      />
      
      {/* Inner white hot core of the slash for high realistic glow */}
      <line 
        x1="10" 
        y1="90" 
        x2="50" 
        y2="50" 
        stroke="#ffffff" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default Logo;
