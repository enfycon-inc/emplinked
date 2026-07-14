"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const screens = [
  { id: 1, src: "/images/user_provided_1.png", alt: "Leave Status Screen" },
  { id: 2, src: "/images/user_provided_2.png", alt: "Start Duty Screen" },
  { id: 3, src: "/images/user_provided_3.png", alt: "Emergency Alert Screen" },
  { id: 4, src: "/images/user_provided_4.png", alt: "Notifications Screen" },
];

export function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl border-[4px] border-slate-800 dark:border-slate-700">
      {/* Phone Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-1/3 h-5 bg-black rounded-b-xl"></div>
      </div>
      
      {/* Side Buttons */}
      <div className="absolute top-24 -left-[6px] w-[3px] h-12 bg-slate-800 dark:bg-slate-700 rounded-l-md"></div>
      <div className="absolute top-40 -left-[6px] w-[3px] h-12 bg-slate-800 dark:bg-slate-700 rounded-l-md"></div>
      <div className="absolute top-32 -right-[6px] w-[3px] h-16 bg-slate-800 dark:bg-slate-700 rounded-r-md"></div>

      {/* Screen container */}
      <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10">
        {screens.map((screen, index) => (
          <div
            key={screen.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* If the image isn't available yet, it will just show alt text or a fallback. 
                Next.js Image handles optimized loading. */}
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(max-width: 640px) 280px, 320px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Glossy overlay effect for realism */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
      </div>
    </div>
  );
}
