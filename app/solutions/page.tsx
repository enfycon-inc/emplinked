"use client";

import React from "react";
import { GraduationCap, HeartPulse, Factory, HardHat, Store, Truck, ArrowRight, Calculator, FileSpreadsheet, BrainCircuit, Bot, ShieldAlert, Eye, CheckCircle, Package, Activity, Users, Briefcase, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  const [activeIndustry, setActiveIndustry] = React.useState(0);

  const industrySolutions = [
    {
      id: "manufacturing",
      name: "Manufacturing & Logistics",
      icon: <Package className="h-5 w-5" />,
      problem: "Complex multi-shift operations, unauthorized overtime, and buddy punching across massive facilities.",
      solutions: [
        "Geofenced biometric attendance ensures check-ins only happen on the factory floor.",
        "AI Liveness Detection completely eliminates proxy attendance.",
        "Automated multi-shift rosters with dynamic overtime and late mark calculations.",
        "Instant Job Cards and Incident Reports directly from the mobile app."
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "healthcare",
      name: "Healthcare & Hospitals",
      icon: <Activity className="h-5 w-5" />,
      problem: "Ensuring 24/7 staff coverage, managing complex on-call schedules, and strict compliance tracking.",
      solutions: [
        "Real-Time Vacant Post Monitoring alerts admins instantly if a critical shift is unmanned.",
        "Emergency Alerts System for instant mass notifications via WhatsApp and SMS.",
        "Centralized vault for Compliance Documents (PF, ESI, medical certifications).",
        "Dynamic duty assignments for constantly changing ward requirements."
      ],
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=2091&q=80"
    },
    {
      id: "retail",
      name: "Retail & Quick Commerce",
      icon: <Users className="h-5 w-5" />,
      problem: "High attrition rates, managing distributed workforces, and tracking field delivery personnel.",
      solutions: [
        "Paperless mobile-first onboarding cuts hiring time from days to hours.",
        "Location-aware Beat Plans and live route tracking for field workers.",
        "AI Consultant integrated with WhatsApp to answer HR queries instantly.",
        "Automated attendance from hundreds of distributed store locations."
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: "corporate",
      name: "IT & Corporate",
      icon: <Briefcase className="h-5 w-5" />,
      problem: "Tracking hybrid work productivity, executing complex statutory payroll, and employee engagement.",
      solutions: [
        "Work From Home logs and hybrid office presence dashboards.",
        "Fully automated statutory payroll generating bank-ready formats and E-Invoices.",
        "Built-in employee engagement tools like Birthday Wishes, Polls, and Helpdesk.",
        "Seamless performance and appraisal modules."
      ],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industrySolutions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [industrySolutions.length]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Clean Header with Photography */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Tech industry" fill className="object-cover" />
           <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 text-indigo-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-2 border border-indigo-400/30 backdrop-blur-sm">
            Industry Solutions
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for your industry.
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Emplinked adapts to the unique workforce challenges of different sectors, providing tailored, highly specialized tools for every operational need.
          </p>
        </div>
      </div>

      {/* Interactive Industry Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 hide-scrollbar snap-x relative z-20">
            {industrySolutions.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-4 text-left p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300 flex-shrink-0 snap-start border ${
                  activeIndustry === index
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                  activeIndustry === index 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}>
                  {industry.icon}
                </div>
                <span className="font-bold text-base md:text-lg whitespace-nowrap lg:whitespace-normal">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 sm:h-80 w-full relative">
                <Image 
                  src={industrySolutions[activeIndustry].image} 
                  alt={industrySolutions[activeIndustry].name} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-3">
                    The Problem
                  </div>
                  <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
                    "{industrySolutions[activeIndustry].problem}"
                  </p>
                </div>
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Emplinked Solution</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {industrySolutions[activeIndustry].solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="mt-1 h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Capabilities Solutions */}
      <div className="bg-blue-50/80 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Enterprise-Grade Use Cases</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Emplinked provides massive, comprehensive solutions to the most complex workforce challenges.</p>
          </div>

          <div className="space-y-24">
            {/* Payroll & Compliance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80"
                  alt="Payroll"
                  width={64}
                  height={64}
                  className="rounded-2xl object-cover mb-8 shadow-md border border-slate-200 dark:border-slate-700"
                />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Advanced Payroll & Compliance</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Say goodbye to fragmented financial systems. Emplinked offers deep payroll integrations and uncompromising compliance tools out of the box. 
                  Handle complex deduction policies, bonus structures, and hourly LOP effortlessly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="leading-relaxed"><strong>Extensive Statutory Reporting:</strong> Auto-generate PF, ESI, PT, and Muster Reports.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="leading-relaxed"><strong>Advanced Payroll Tools:</strong> Salary Advances, Salary Payment Reports, Component Wise Reports.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 shadow-2xl shadow-emerald-500/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                   <Calculator className="h-64 w-64 text-white" />
                 </div>
                 <div className="relative z-10 space-y-5">
                   <div className="bg-white/10 rounded-xl p-5 border border-white/20 flex justify-between items-center shadow-lg backdrop-blur-md">
                     <span className="font-semibold text-white">PF Report</span>
                     <span className="text-xs font-bold bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/30">Generated</span>
                   </div>
                   <div className="bg-white/10 rounded-xl p-5 border border-white/20 flex justify-between items-center shadow-lg backdrop-blur-md">
                     <span className="font-semibold text-white">ESI Report</span>
                     <span className="text-xs font-bold bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/30">Generated</span>
                   </div>
                   <div className="bg-white/10 rounded-xl p-5 border border-white/20 flex justify-between items-center shadow-lg backdrop-blur-md">
                     <span className="font-semibold text-white">Salary Advance Report</span>
                     <span className="text-xs font-bold bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/30">Generated</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* AI & Intelligent Communication */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                   <BrainCircuit className="h-64 w-64 text-white" />
                 </div>
                 <div className="relative z-10 grid grid-cols-2 gap-5">
                   <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center shadow-lg backdrop-blur-md">
                     <div className="text-3xl font-bold text-white mb-2">991</div>
                     <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">SMS Credits</div>
                   </div>
                   <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center shadow-lg backdrop-blur-md">
                     <div className="text-3xl font-bold text-white mb-2">540</div>
                     <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">WhatsApp</div>
                   </div>
                   <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center shadow-lg backdrop-blur-md">
                     <div className="text-3xl font-bold text-white mb-2">8</div>
                     <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">AI Consultant</div>
                   </div>
                   <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center shadow-lg backdrop-blur-md">
                     <div className="text-3xl font-bold text-white mb-2">12K</div>
                     <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Liveness Det.</div>
                   </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=150&q=80"
                  alt="AI Network"
                  width={64}
                  height={64}
                  className="rounded-2xl object-cover mb-8 shadow-md border border-slate-200 dark:border-slate-700"
                />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">AI & Intelligent Communication</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Stay connected with your workforce through our highly configurable Credit System. Automate vital communications, run company-wide polls, and deploy AI assistants all from a centralized credit bank.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="leading-relaxed"><strong>AI & Security Credits:</strong> Configurable AI Consultant and Liveness Detection limits.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="leading-relaxed"><strong>Automated Alerts:</strong> Emergency Broadcasts, Automated Birthday Wishes, Polls.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Security & Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80"
                  alt="Security Camera"
                  width={64}
                  height={64}
                  className="rounded-2xl object-cover mb-8 shadow-md border border-slate-200 dark:border-slate-700"
                />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Uncompromising Security & Monitoring</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Maintain total operational oversight. Track field movements with extreme precision, monitor duty deviations, and manage access expirations seamlessly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="leading-relaxed"><strong>Advanced Tracking:</strong> Patrol Points, Distance Travelled, Department Visits.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                    <div className="mt-1 h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="leading-relaxed"><strong>Compliance Monitoring:</strong> ID Card Expiry tracking, Deviation Reports, MIS Reports.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-10 shadow-2xl shadow-orange-500/20 relative overflow-hidden flex flex-col justify-center group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                   <ShieldAlert className="h-64 w-64 text-white" />
                 </div>
                 <div className="flex flex-col gap-5 relative z-10">
                   <div className="bg-white/10 border-l-4 border-rose-400 rounded-xl p-5 flex justify-between items-center shadow-lg backdrop-blur-md">
                     <div>
                       <div className="font-bold text-white mb-1">ID Card Expired</div>
                       <div className="text-sm text-white/70 font-medium">John Doe (Guard)</div>
                     </div>
                     <ShieldAlert className="h-6 w-6 text-rose-400" />
                   </div>
                   <div className="bg-white/10 border-l-4 border-yellow-300 rounded-xl p-5 flex justify-between items-center shadow-lg backdrop-blur-md">
                     <div>
                       <div className="font-bold text-white mb-1">Duty Deviation</div>
                       <div className="text-sm text-white/70 font-medium">Patrol Route B missed</div>
                     </div>
                     <Eye className="h-6 w-6 text-yellow-300" />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful CTA Redesign */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative pb-20">
        <div className="relative rounded-[2.5rem] p-12 md:p-20 overflow-hidden bg-slate-900 shadow-2xl border border-slate-800">
          {/* Ambient Glowing Backgrounds */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/40 rounded-full blur-[80px] md:blur-[100px] z-0 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/40 rounded-full blur-[80px] md:blur-[100px] z-0 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-xl p-1">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Expert" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Don't see your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">industry?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Emplinked is a highly configurable, API-first ecosystem. Let's discuss how we can tailor the platform to your organization's exact requirements and workflows.
            </p>
            <Link href="/contact">
              <button className="flex items-center justify-center bg-white hover:bg-slate-100 text-slate-900 font-bold px-12 h-14 text-lg rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300">
                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5 text-blue-600" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
