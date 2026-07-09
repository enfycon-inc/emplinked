"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useAnimationFrame } from "framer-motion";
import { FeatureMockupDisplay } from "./feature-mockups";

export interface CarouselItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function CylinderCarousel({ items: originalItems }: { items: CarouselItem[] }) {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();
  const rotationRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  // Triple the items to 18 to create an ultra-wide cylinder that stretches edge-to-edge
  const items = [...originalItems, ...originalItems, ...originalItems];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Card width is 320px. 
  // With 18 items, the radius becomes massive (~950px), ensuring the cylinder covers ultra-wide screens.
  const itemWidth = 320;
  const radius = Math.round((itemWidth / 2) / Math.tan(Math.PI / items.length)) + 50;

  const divRef = useRef<HTMLDivElement>(null);

  // Infinite slow rotation loop
  useAnimationFrame((time, delta) => {
    if (!isClient || !divRef.current) return; // Prevent controls.set() before mount
    if (!isHovered) {
      // Rotate slowly to the left
      rotationRef.current -= delta * 0.015;
      controls.set({ rotateY: rotationRef.current, z: -radius });
    }
  });

  // Direct 1-to-1 mapping of mouse drag to cylinder rotation
  const handlePan = (e: any, info: any) => {
    if (!divRef.current) return;
    rotationRef.current += info.delta.x * 0.2; // Adjusted sensitivity for the wider radius
    controls.set({ rotateY: rotationRef.current, z: -radius });
  };

  if (!isClient) return null;

  return (
    <div 
      className="relative w-full h-[650px] flex items-center justify-center overflow-hidden [perspective:1000px] md:[perspective:2000px] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" 
    >
      {/* 3D Container */}
      <motion.div
        ref={divRef}
        onPan={handlePan}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={controls}
        initial={{ rotateY: 0, z: -radius }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[320px] h-[500px] cursor-grab active:cursor-grabbing flex items-center justify-center"
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i;
          
          return (
            <div
              key={`${item.id}-${i}`}
              className="absolute w-full h-full flex flex-col items-center justify-center"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden", // Hides the back of the cylinder
              }}
            >
              {/* The Phone Mockup */}
              <div className="w-full h-full relative group pointer-events-none drop-shadow-2xl">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <FeatureMockupDisplay type={item.id as any} />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      
    </div>
  );
}
