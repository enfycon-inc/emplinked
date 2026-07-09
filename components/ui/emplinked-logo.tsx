import React from "react";

interface EmplinkedLogoProps {
  className?: string;
}

export const EmplinkedLogo: React.FC<EmplinkedLogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="app-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" /> {/* Blue 600 */}
          <stop offset="100%" stopColor="#4F46E5" /> {/* Indigo 600 */}
        </linearGradient>
        <linearGradient id="app-grad-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
        </linearGradient>
        <filter id="app-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* App Icon Base */}
      <rect x="5" y="5" width="90" height="90" rx="25" fill="url(#app-grad)" filter="url(#app-shadow)" />
      
      {/* Glassy Overlay for 3D App Icon feel */}
      <rect x="5" y="5" width="90" height="90" rx="25" fill="url(#app-grad-glass)" />

      {/* Ultra-Clean Modern "E" */}
      <path 
        d="M 65 30 L 40 30 C 34.477 30 30 34.477 30 40 L 30 60 C 30 65.523 34.477 70 40 70 L 65 70" 
        stroke="white" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 30 50 L 55 50" 
        stroke="white" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};
