"use client";

import React from "react";
import { Target, Eye, Lightbulb, ShieldCheck, HeartHandshake, Zap, Shield, RefreshCw } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Innovation", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80", desc: "We constantly push boundaries, adopting new technologies to solve complex workforce challenges." },
    { title: "Reliability", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80", desc: "Our platform is built for enterprise stability, ensuring your operations never miss a beat." },
    { title: "Transparency", bgColor: "bg-cyan-50", image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=400&q=80", desc: "We foster open communication, clear pricing, and honest partnerships with all our clients." },
    { title: "Customer Success", bgColor: "bg-rose-50", image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400&q=80", desc: "Your growth is our growth. We provide dedicated support to ensure maximum ROI." },
    { title: "Security", bgColor: "bg-emerald-50", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80", desc: "We employ banking-grade security to protect your sensitive employee and payroll data." },
    { title: "Continuous Improvement", bgColor: "bg-purple-50", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80", desc: "We iterate rapidly based on user feedback to deliver increasingly better features." },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-24">
      
      {/* Clean Header with Stock Photo */}
      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Emplinked
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
            We built Emplinked to be the ultimate operational ecosystem. We handle everything from basic leave approvals to complex statutory payrolls, AI Consultant credits, vendor management, and enterprise E-invoicing—allowing leaders to focus on strategic growth rather than administrative chaos.
          </p>
        </div>
      </div>

      {/* Mission & Vision (Beautiful Split Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Mission Strategy" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Empowering Global Workforces</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              To provide businesses with a massively scalable, deeply integrated ecosystem that manages every single operational detail—from AI Liveness Detection and complex shift rosters, to automated Birthday Wishes and PF/ESI compliance—unlocking the true potential of their people.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-2 border border-indigo-100">
              Our Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Setting the Standard</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              To become the definitive global standard for enterprise workforce management, setting new benchmarks for software reliability, scalability, and user experience.
            </p>
          </div>
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200">
             <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" alt="Global Vision" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Values Grid (Beautiful Image Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50 dark:bg-slate-900/50 mt-12 rounded-[3rem] mb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Core Values
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The foundational principles that guide everything we build and how we operate every single day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className={`${v.bgColor} dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-5`}>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-300">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{v.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
