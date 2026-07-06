"use client";

import React from "react";
import { GraduationCap, HeartPulse, Factory, HardHat, Store, Truck, ArrowRight, Calculator, FileSpreadsheet, BrainCircuit, Bot, ShieldAlert, Eye, CheckCircle, Package, Activity, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
           <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="Tech industry" className="w-full h-full object-cover" />
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
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {industrySolutions.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-4 text-left p-5 rounded-2xl transition-all duration-300 border ${
                  activeIndustry === index
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  activeIndustry === index 
                    ? "bg-white/20 text-white" 
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}>
                  {industry.icon}
                </div>
                <span className="font-bold text-lg">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="h-64 sm:h-80 w-full relative">
                <img 
                  src={industrySolutions[activeIndustry].image} 
                  alt={industrySolutions[activeIndustry].name} 
                  className="w-full h-full object-cover"
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
      <div className="bg-slate-50 dark:bg-slate-900/50 py-24 mt-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Enterprise-Grade Use Cases</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">ENFYCON provides massive, comprehensive solutions to the most complex workforce challenges.</p>
          </div>

          <div className="space-y-16">
            {/* Payroll & Compliance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-500/30">
                  <Calculator className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced Payroll & Compliance</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Say goodbye to fragmented financial systems. ENFYCON offers deep payroll integrations and uncompromising compliance tools out of the box. 
                  Handle complex deduction policies, bonus structures, and hourly LOP effortlessly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                    <span><strong>Extensive Statutory Reporting:</strong> Auto-generate PF, ESI, PT, and Muster Reports.</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                    <span><strong>Advanced Payroll Tools:</strong> Salary Advances, Salary Payment Reports, Component Wise Reports.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10">
                   <Calculator className="h-48 w-48 text-emerald-500" />
                 </div>
                 <div className="relative z-10 space-y-4">
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                     <span className="font-semibold text-slate-800 dark:text-slate-300">PF Report</span>
                     <span className="text-xs bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">Generated</span>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                     <span className="font-semibold text-slate-800 dark:text-slate-300">ESI Report</span>
                     <span className="text-xs bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">Generated</span>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                     <span className="font-semibold text-slate-800 dark:text-slate-300">Salary Advance Report</span>
                     <span className="text-xs bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">Generated</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* AI & Intelligent Communication */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 p-4 opacity-5 dark:opacity-10">
                   <BrainCircuit className="h-48 w-48 text-indigo-500" />
                 </div>
                 <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 text-center">
                     <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">991</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">SMS Credits</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 text-center">
                     <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">540</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">WhatsApp</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 text-center">
                     <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">8</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">AI Consultant</div>
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-700 text-center">
                     <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">12K</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Liveness Det.</div>
                   </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="h-14 w-14 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-200 dark:border-indigo-500/30">
                  <BrainCircuit className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI & Intelligent Communication</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Stay connected with your workforce through our highly configurable Credit System. Automate vital communications, run company-wide polls, and deploy AI assistants all from a centralized credit bank.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-500 flex-shrink-0" />
                    <span><strong>AI & Security Credits:</strong> Configurable AI Consultant and Liveness Detection limits.</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-500 flex-shrink-0" />
                    <span><strong>Automated Alerts:</strong> Emergency Broadcasts, Automated Birthday Wishes, Polls.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Security & Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-14 w-14 bg-amber-100 dark:bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 border border-amber-200 dark:border-amber-500/30">
                  <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Uncompromising Security & Monitoring</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Maintain total operational oversight. Track field movements with extreme precision, monitor duty deviations, and manage access expirations seamlessly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Eye className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                    <span><strong>Advanced Tracking:</strong> Patrol Points, Distance Travelled, Department Visits.</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Eye className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                    <span><strong>Compliance Monitoring:</strong> ID Card Expiry tracking, Deviation Reports, MIS Reports.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 shadow-xl relative overflow-hidden flex flex-col justify-center">
                <div className="flex flex-col gap-3 relative z-10">
                   <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-rose-500 rounded-lg p-4 flex justify-between items-center shadow-sm">
                     <div>
                       <div className="font-semibold text-slate-800 dark:text-slate-300">ID Card Expired</div>
                       <div className="text-xs text-slate-500">John Doe (Guard)</div>
                     </div>
                     <ShieldAlert className="h-5 w-5 text-rose-500" />
                   </div>
                   <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-amber-500 rounded-lg p-4 flex justify-between items-center shadow-sm">
                     <div>
                       <div className="font-semibold text-slate-800 dark:text-slate-300">Duty Deviation</div>
                       <div className="text-xs text-slate-500">Patrol Route B missed</div>
                     </div>
                     <Eye className="h-5 w-5 text-amber-500" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-xl opacity-20 -z-10"></div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Don't see your industry?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Emplinked is a highly configurable platform. Let's discuss how we can tailor the system to your organization's exact requirements.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 h-14 text-base rounded-xl shadow-md">
                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
