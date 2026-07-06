"use client";

import React from "react";

export interface LogoItem {
  name: string;
  icon: React.ReactNode;
}

interface LogoMarqueeProps {
  items: LogoItem[];
}

export function LogoMarquee({ items }: LogoMarqueeProps) {
  // Duplicate the list of items to ensure seamless infinite looping
  const doubleItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Soft gradient masks on both sides for premium look */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Inner Scroll Container */}
      <div className="animate-marquee whitespace-nowrap flex gap-4 items-center">
        {doubleItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center justify-center min-w-[240px] h-24 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {item.icon}
            <span className="text-xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
