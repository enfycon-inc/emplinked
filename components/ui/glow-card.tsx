"use client";

import React, { useRef, useState } from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string; // e.g. "rgba(37, 99, 235, 0.15)"
}

export function GlowCard({ children, className = "", glowColor = "rgba(37, 99, 235, 0.15)", ...props }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl border border-slate-200/60 bg-white p-6 transition-all duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {/* Glow effect background */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 blur-[80px]"
          style={{
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            left: `${coords.x - 150}px`,
            top: `${coords.y - 150}px`,
            zIndex: 0,
          }}
        />
      )}

      {/* Card Content wrapper to sit above the glow */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
