"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
      
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/40 bg-white dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800/80 backdrop-blur-sm">
        <div style={{ transition: "opacity 0.25s ease", opacity: fading ? 0 : 1 }} className="bg-gray-50 dark:bg-slate-800/30 aspect-[16/10] relative p-0 overflow-hidden">
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
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  
  const currentBenefit = benefitsData[active] || benefitsData[0];

  // Auto-rotate tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % benefitsData.length);
        setFading(false);
      }, 200);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 200);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      {/* Left Sidebar Menu */}
      <div className="lg:col-span-4 lg:sticky lg:top-24 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 hide-scrollbar snap-x relative z-20">
        {benefitsData.map((b, idx) => (
          <button
            key={b.title}
            onClick={() => handleTabClick(idx)}
            className={`text-left px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 transition-all duration-300 border flex-shrink-0 snap-start w-64 md:w-auto ${
              active === idx
                ? "bg-slate-800 border-slate-700 shadow-sm"
                : "bg-transparent border-slate-800/50 hover:bg-slate-900 hover:border-slate-800"
            }`}
          >
            <div className={`p-2 rounded-xl transition-colors flex-shrink-0 ${active === idx ? "bg-slate-950 shadow-sm" : "bg-slate-800"}`}>
              {React.cloneElement(b.icon as React.ReactElement<{ className?: string }>, {
                className: `h-5 w-5 ${active === idx ? "text-blue-400" : "text-slate-400"}`
              })}
            </div>
            <h4 className={`font-bold transition-colors whitespace-normal leading-tight text-sm md:text-base ${active === idx ? "text-white" : "text-slate-400"}`}>
              {b.title}
            </h4>
          </button>
        ))}
      </div>

      {/* Right Presentation Window */}
      <div className="lg:col-span-8 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 min-h-[500px] flex flex-col">
        {/* Photo Area */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900 p-0">
          <div style={{ transition: "opacity 0.2s ease", opacity: fading ? 0 : 1 }} className="absolute inset-0 w-full h-full">
            <FeatureMockupDisplay type={currentBenefit.id as any} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />
        </div>

        {/* Content Area */}
        <div 
          className={`flex-grow p-10 lg:p-12 transition-colors duration-300 ${currentBenefit.color}`}
        >
          <div style={{ transition: "opacity 0.2s ease, transform 0.2s ease", opacity: fading ? 0 : 1, transform: fading ? "translateY(10px)" : "translateY(0)" }}>
            <div className="inline-flex items-center gap-2 bg-slate-950/50 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold mb-6 text-slate-200 shadow-sm border border-slate-800/50">
              {React.cloneElement(currentBenefit.icon as React.ReactElement<{ className?: string }>, { className: "h-4 w-4" })}
              {currentBenefit.title}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              {currentBenefit.title}
            </h3>
            <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
              {currentBenefit.desc}
            </p>
            <Button variant="primary" className="shadow-sm shadow-blue-700/20">
              See it in action <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/80 dark:from-slate-900 to-white dark:to-slate-950">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-[100px] -z-10 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Our Advantage</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Why Emplinked?
            </h3>
            <p className="text-base text-slate-400 leading-relaxed max-w-xl">
              It is the operational backbone that connects people, processes, and business intelligence into one secure ecosystem.
            </p>
          </div>
          
          <FeatureShowcase />
        </div>
      </section>

      {/* ── SIDE BY SIDE: Mobile App ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:rotate-3 lg:hover:rotate-0 transition-transform duration-500 border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <img 
                  alt="Emplinked Mobile App Interface" 
                  className="w-full h-auto object-cover" 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                />
              </div>
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" /> Employees can:
                  </h4>
                  <ul className="space-y-2">
                    {["Mark Attendance", "GPS Check-in", "Face Authentication", "Apply Leave", "View Payslips", "Submit Expenses"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <Check className="h-3.5 w-3.5 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-indigo-600" /> Managers can:
                  </h4>
                  <ul className="space-y-2">
                    {["Approve Requests", "Monitor Teams", "Review Attendance", "Track Field Employees", "View Reports"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <Check className="h-3.5 w-3.5 text-green-500" /> {item}
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
