"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppMockup } from "@/components/ui/app-mockup";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Check,
  PlayCircle,
  Smartphone,
  Cloud,
  MapPin,
  Lock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { HeroMockupDisplay } from "@/components/ui/hero-mockups";
import { FeatureMockupDisplay } from "@/components/ui/feature-mockups";
import { CylinderCarousel } from "@/components/ui/cylinder-carousel";

const heroSlides: { label: string; type: "analytics" | "mobile" | "payroll" | "scheduling" }[] = [
  {
    label: "Analytics Dashboard",
    type: "analytics",
  },
  {
    label: "Mobile App",
    type: "mobile",
  },
  {
    label: "Payroll Processing",
    type: "payroll",
  },
  {
    label: "Shift Scheduling",
    type: "scheduling",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setFading(false);
      }, 4000);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto lg:max-w-none relative z-10">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-[2rem] blur-xl opacity-60 -z-10" />
      
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/60 dark:bg-slate-900/60 border border-white/60 dark:border-slate-700/50 backdrop-blur-2xl">
        <div style={{ transition: "opacity 0.25s ease", opacity: fading ? 0 : 1 }} className="bg-white/40 dark:bg-slate-800/30 aspect-[16/10] relative p-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full p-2">
            <HeroMockupDisplay type={heroSlides[current].type} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => goTo(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 shadow-sm ${
              i === current
                ? "bg-blue-700 text-white border-blue-700 ring-2 ring-blue-700/20"
                : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const benefitsData = [
  { 
    id: "time-theft",
    title: "Eliminate Time Theft", 
    desc: "Use AI liveness detection and geofencing to guarantee absolute attendance accuracy.",
    color: "bg-emerald-900/20",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />
  },
  { 
    id: "zero-error-payroll",
    title: "Zero-Error Payroll Automation", 
    desc: "Turn complex, multi-tier compliance rules and dynamic overtime into flawless, single-click payroll generation.",
    color: "bg-indigo-900/20",
    icon: <DollarSign className="h-6 w-6 text-indigo-400" />
  },
  { 
    id: "field-forces",
    title: "Manage Distributed Field Forces", 
    desc: "Gain absolute visibility over remote workers, sales teams, and multi-location retail staff via real-time GPS tracking.",
    color: "bg-blue-900/20",
    icon: <MapPin className="h-6 w-6 text-blue-400" />
  },
  { 
    id: "shift-control",
    title: "Dynamic Shift & Roster Control", 
    desc: "Prevent understaffing and seamlessly handle rotating shifts and sudden leave requests.",
    color: "bg-amber-900/20",
    icon: <Clock className="h-6 w-6 text-amber-400" />
  },
  { 
    id: "hr-resolutions",
    title: "Instant HR Issue Resolution", 
    desc: "Digitize leave applications, expense claims, and document management directly through the employee's smartphone.",
    color: "bg-purple-900/20",
    icon: <Users className="h-6 w-6 text-purple-400" />
  },
  { 
    id: "analytics",
    title: "Data-Driven Decisions", 
    desc: "Transform raw attendance and productivity data into actionable insights for executives.",
    color: "bg-cyan-900/20",
    icon: <BarChart3 className="h-6 w-6 text-cyan-400" />
  }
];

function FeatureShowcase() {
  // Triple the items to ensure a perfectly seamless infinite scroll loop
  const marqueeItems = [...benefitsData, ...benefitsData, ...benefitsData];

  return (
    <div className="w-full relative overflow-hidden group py-4">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
      
      {/* Scrollable Container */}
      <div className="animate-marquee flex gap-6 lg:gap-8 px-4">
        {marqueeItems.map((b, idx) => (
          <div 
            key={`${b.id}-${idx}`} 
            className="flex-none w-[280px] sm:w-[320px] flex flex-col items-center cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Header/Title exactly like Mobbin (Clean Text) */}
            <div className="text-center mb-6 h-12 flex items-center justify-center">
              <h4 className="font-bold text-gray-900 dark:text-slate-200 transition-colors duration-300 text-[1.1rem]">
                {b.title}
              </h4>
            </div>

            {/* Completely transparent container with NO box styling */}
            <div className={`relative flex flex-col h-[580px] w-full transition-all duration-500`}>
              {/* Full-bleed graphic/mockup inside the card */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 w-full h-full scale-[1.02] transition-transform duration-700 ease-out hover:scale-100">
                  <FeatureMockupDisplay type={b.id as any} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const partnerLogos = [
    { name: "Volt Network", icon: <Cloud className="w-8 h-8 mr-3 text-blue-600" /> },
    { name: "Hyperglow IT", icon: <TrendingUp className="w-8 h-8 mr-3 text-emerald-500" /> },
    { name: "Apex Logistics", icon: <MapPin className="w-8 h-8 mr-3 text-indigo-600" /> },
    { name: "Cybernetics", icon: <ShieldCheck className="w-8 h-8 mr-3 text-violet-600" /> },
    { name: "VedaX Analytics", icon: <BarChart3 className="w-8 h-8 mr-3 text-sky-500" /> },
    { name: "Tongwei Corp", icon: <Users className="w-8 h-8 mr-3 text-amber-500" /> },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-white dark:bg-slate-950">
        {/* Responsive Ambient Background Glows */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/30 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] max-w-4xl bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-emerald-300/20 blur-[60px] md:blur-[100px] z-0 rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left */}
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-slate-700 shadow-sm text-gray-700 dark:text-gray-300 text-xs font-semibold px-4 py-2 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
                Introducing Emplinked Workforce Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Build a Smarter <span className="text-blue-700 dark:text-blue-400">Workforce.</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Automate Operations. Empower Every Employee.
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  Modern organizations need more than an HRMS—they need a connected workforce platform. 
                  Emplinked helps businesses automate attendance, payroll, leave, compliance, field operations, 
                  employee engagement, and workforce analytics through one unified cloud platform.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/book-demo">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-blue-700/20">
                    Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button variant="secondary" size="lg" className="bg-white dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
                    Explore the Platform
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — Rotating Carousel */}
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-16 border-y border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Trusted by Organizations Focused on Operational Excellence
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Designed for growing businesses, educational institutions, healthcare providers, manufacturers, retailers, logistics companies, and enterprises looking to modernize workforce operations.
            </p>
          </div>
          <LogoMarquee items={partnerLogos} />
        </div>
      </section>

      {/* ── WHY EMPLINKED CAROUSEL ── */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Responsive Vibrant Ambient Glow behind 3D Carousel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] md:w-[1000px] md:h-[800px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16 space-y-4 mx-auto text-center">
            <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Our Advantage</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Why Emplinked?
            </h3>
          </div>
        </div>
        
        {/* Full-bleed edge-to-edge 3D carousel */}
        <div className="w-full relative z-20">
          <CylinderCarousel items={benefitsData} />
        </div>
      </section>

      {/* ── SIDE BY SIDE: Mobile App ── */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800 relative overflow-hidden">
        {/* Responsive Ambient Glows for Mobile App Section */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-300/20 dark:bg-emerald-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <AppMockup />
            </div>
            
            <div className="space-y-6 lg:pl-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Mobile Application
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  Workforce in Your Pocket.
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  The Emplinked mobile application keeps employees and managers connected wherever work happens. Available for Android and iOS.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Employee Card */}
                <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-5 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Employees can:</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {["Mark Attendance", "GPS Check-in", "Face Authentication", "Apply Leave", "View Payslips", "Submit Expenses"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-3.5 w-3.5 text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Manager Card */}
                <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-5 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Managers can:</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {["Approve Requests", "Monitor Teams", "Review Attendance", "Track Field Employees", "View Reports"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-3.5 w-3.5 text-indigo-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-blue-700 dark:bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-white blur-[150px] rounded-full" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-400 blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Ready to transform your workforce?
          </h2>
          <p className="text-sm lg:text-base text-blue-100 leading-relaxed max-w-xl mx-auto font-medium">
            Book a personalized demo and discover how Emplinked can modernize your workforce operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link 
              href="/book-demo" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-md bg-white text-blue-700 hover:bg-blue-50 transition-colors shadow-xl"
            >
              Book a Demo
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-md bg-blue-800 border border-blue-600 text-white hover:bg-blue-900 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
