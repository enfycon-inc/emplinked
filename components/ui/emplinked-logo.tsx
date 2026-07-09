import React from "react";

interface EmplinkedLogoProps {
  className?: string;
}

export const EmplinkedLogo: React.FC<EmplinkedLogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cube-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" /> {/* Blue 600 */}
          <stop offset="100%" stopColor="#4F46E5" /> {/* Indigo 600 */}
        </linearGradient>
        <linearGradient id="cube-right" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" /> {/* Emerald 500 */}
          <stop offset="100%" stopColor="#059669" /> {/* Emerald 600 */}
        </linearGradient>
        <linearGradient id="cube-top" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" /> {/* Sky 400 */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Blue 600 */}
        </linearGradient>
      </defs>

      {/* Top Face */}
      <path d="M50 10 L90 32.5 L50 55 L10 32.5 Z" fill="url(#cube-top)" />
      
      {/* Left Face */}
      <path d="M10 32.5 L50 55 L50 95 L10 72.5 Z" fill="url(#cube-left)" />
      
      {/* Right Face */}
      <path d="M90 32.5 L50 55 L50 95 L90 72.5 Z" fill="url(#cube-right)" />

      {/* Glossy Overlay for Premium Feel */}
      <path d="M50 10 L90 32.5 L50 55 L10 32.5 Z" fill="#ffffff" fillOpacity="0.2" />
      <path d="M10 32.5 L50 55 L50 75 L10 52.5 Z" fill="#ffffff" fillOpacity="0.1" />
      
      {/* Central Core Connection Node */}
      <circle cx="50" cy="55" r="8" fill="#ffffff" />
    </svg>
  );
};
