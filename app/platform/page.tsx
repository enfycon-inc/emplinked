"use client";

import React from "react";
import { MapPin, DollarSign, Calendar, BarChart3, ShieldCheck, Zap, ArrowRight, Smartphone, Fingerprint, Bell, Download, Star, Users, FileText, CheckCircle, Activity, Briefcase, AlertTriangle, MessageSquare, CreditCard, Settings, Package, UserPlus, Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlatformPage() {
  const coreModules = [
    {
      title: "Real-Time Attendance & Geo-Tagging",
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-300",
      description: "Move beyond legacy punch cards. Advanced geo-tagging enables precise tracking of field employees while checked-in. Includes biometric and facial recognition to eliminate buddy-punching and streamline entry.",
    },
    {
      title: "Automated Payroll & Compliance",
      icon: <DollarSign className="h-6 w-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-300",
      description: "Flawless execution with zero errors. Automate your entire compensation lifecycle, from statutory compliance to dynamic overtime calculations across complex multi-tier payrolls.",
    },
    {
      title: "Shift & Roster Management",
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-300",
      description: "Dynamic scheduling for dynamic teams. Effortlessly manage complex, rotating shifts across multiple locations, handle sudden leave requests with intelligent auto-replacements, and ensure strict labor law adherence.",
    },
    {
      title: "Workforce Intelligence & Analytics",
      icon: <BarChart3 className="h-6 w-6 text-violet-600" />,
      bgColor: "bg-violet-50",
      borderColor: "hover:border-violet-300",
      description: "Transform raw attendance and productivity data into actionable insights. Interactive dashboards provide real-time visibility into labor costs, absentee trends, and organizational efficiency.",
    },
  ];

  const differentiators = [
    {
      title: "Enterprise Scalability",
      icon: <Zap className="h-5 w-5 text-amber-600" />,
      bgColor: "bg-amber-50",
      description: "Built on an enterprise-grade architecture capable of handling tens of thousands of concurrent users seamlessly.",
    },
    {
      title: "Military-Grade Security",
      icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
      bgColor: "bg-rose-50",
      description: "Advanced encryption ensuring sensitive workforce data remains strictly confidential and compliant with global privacy standards.",
    },
  ];

  const appFeatures = [
    { title: "Geo-Fenced Check-ins", icon: <MapPin className="h-5 w-5 text-blue-500" />, desc: "Ensure employees mark attendance at correct client locations." },
    { title: "Facial Recognition", icon: <Fingerprint className="h-5 w-5 text-indigo-500" />, desc: "Advanced biometric security to completely eliminate proxy attendance." },
    { title: "Real-Time Alerts", icon: <Bell className="h-5 w-5 text-amber-500" />, desc: "Instant push notifications for emergency alerts and company announcements." },
    { title: "HRMS on the Go", icon: <Calendar className="h-5 w-5 text-emerald-500" />, desc: "Apply for leaves, view holidays, and check payslips directly from your phone." }
  ];



  const fullCapabilities = [
    { title: "Master Data", icon: <Database className="h-5 w-5 text-blue-600" />, items: ["Client Groups", "Clients", "Units", "Posts", "Patrol Points", "ORG Details", "Contracts", "Cost Center", "GSTIN", "Review Links"] },
    { title: "Onboarding & HR", icon: <UserPlus className="h-5 w-5 text-emerald-600" />, items: ["Users", "Roles", "Departments", "Designations", "Leave", "Salary Advance", "Resignations", "Devices", "Expense Reimbursement"] },
    { title: "Policy Engine", icon: <ShieldCheck className="h-5 w-5 text-purple-600" />, items: ["Holiday Calendars", "Leave Policies", "Week-off", "OT Policy", "Duty & Incentive Policies"] },
    { title: "Activities & Workforce", icon: <Activity className="h-5 w-5 text-orange-600" />, items: ["Duties", "Request Duty", "Roster Management", "Shifts"] },
    { title: "Payroll & Deductions", icon: <DollarSign className="h-5 w-5 text-green-600" />, items: ["Payrolls", "Policy", "Bonus Policy", "Hourly LOP Policy"] },
    { title: "Management", icon: <CheckCircle className="h-5 w-5 text-indigo-600" />, items: ["Approvals Workflow", "Manager Self-Service"] },
    { title: "Extensive Reporting", icon: <FileText className="h-5 w-5 text-rose-600" />, items: ["Client Group Reports", "State Summary", "Manpower Reports", "Attendance Summary", "PF/ESI/PT", "Muster Reports", "Salary Advances"] },
    { title: "Advanced Monitoring", icon: <BarChart3 className="h-5 w-5 text-cyan-600" />, items: ["Current Stats", "Visits", "Patrol Points", "MIS Reports", "Daily Duties", "OT Reports", "Portal", "Users On Leave", "ID Card Expiry", "Distance Travelled", "Employee Joining", "Deviation Reports"] },
    { title: "Talent & Careers", icon: <Briefcase className="h-5 w-5 text-amber-600" />, items: ["Jobs", "Applications", "Hiring Process", "Interviews", "People", "Job Category"] },
    { title: "Incident Management", icon: <AlertTriangle className="h-5 w-5 text-red-600" />, items: ["Incidents", "Incident Board", "Assignment Groups", "Job Cards", "Incident Reports"] },
    { title: "Document Management", icon: <FileText className="h-5 w-5 text-slate-600" />, items: ["Doc Types", "Org Docs", "Compliance Documents"] },
    { title: "Communication & Alerts", icon: <MessageSquare className="h-5 w-5 text-sky-600" />, items: ["Birthday Wishes", "Notifications", "Emergency Alerts", "Polls"] },
    { title: "Operations & Audit", icon: <Package className="h-5 w-5 text-teal-600" />, items: ["Sales", "Vendors", "Products", "Visitors", "Manufacturer", "Audit"] },
    { title: "AI & Credit System", icon: <Zap className="h-5 w-5 text-yellow-600" />, items: ["Credit Configuration", "WhatsApp Credits", "SMS Credits", "Email Credits", "AI Consultant", "Liveness Detection", "Credit History"] },
    { title: "System Settings", icon: <Settings className="h-5 w-5 text-gray-600" />, items: ["System Property", "General Settings", "Branch Configuration", "Salary Advance Settings", "Notifications", "Template Selection", "E-Invoice", "Invoice Settings", "ID Configuration", "Logo Upload"] }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-24">
      {/* Clean Enterprise Hero with Photography */}
      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Enterprise Team" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-2 border border-blue-400/30 backdrop-blur-sm">
            The Complete Suite
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">The Ecosystem</h2>
            <p className="text-slate-200 leading-relaxed text-lg max-w-2xl mx-auto">
              Emplinked provides world-class, scalable solutions with enhanced features that automate complex systems, streamline human resource processes, and improve the efficiency of existing legacy procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Modules Grid with Colorful Touches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreModules.map((mod) => (
            <div key={mod.title} className={`bg-white dark:bg-slate-950 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 ${mod.borderColor} group`}>
              <div className={`h-14 w-14 rounded-xl ${mod.bgColor} dark:bg-slate-900 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform`}>
                {mod.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{mod.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Emplinked Play Store Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 relative">
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-white rounded-3xl p-4 shadow-xl flex-shrink-0 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
                  <Fingerprint className="w-full h-full text-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-1 text-white">Emplinked</h2>
                  <p className="text-blue-300 text-sm font-semibold mb-3">enfycon.com • Productivity</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-white text-xs ml-2 font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                The ultimate mobile HRMS application. Designed specifically to solve legacy attendance challenges, Emplinked turns every employee's smartphone into a highly secure, location-aware biometric terminal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {appFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-3">
                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-6 rounded-xl shadow-lg">
                  <Download className="mr-2 h-5 w-5" /> Download on Google Play
                </Button>
              </div>

            </div>

            {/* Right Column: Photography Showcase */}
            <div className="relative h-96 lg:h-auto bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Emplinked Mobile App Usage" 
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay gradient to blend images */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Live Dashboard Mockup Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The Command Center</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Experience a real-time, high-level overview of your entire organization. Our interactive dashboard processes thousands of data points instantly.</p>
        </div>
        
        {/* Mockup Container */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Attendance Statistics</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                Credits: 991 <Plus className="h-4 w-4" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
                Change Period: Today
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Attendance Card */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Attendance</h4>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">142 <span className="text-lg text-slate-500">/ 150</span></div>
              </div>
              <div className="bg-blue-600 text-white py-3 px-6 text-sm font-semibold flex justify-between items-center cursor-pointer hover:bg-blue-700 transition-colors">
                More info <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* On Duty Card */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">On Duty</h4>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">142</div>
                <p className="text-xs text-slate-500 text-right mt-1">App - 142</p>
              </div>
              <div className="bg-orange-500 text-white py-3 px-6 text-sm font-semibold flex justify-between items-center cursor-pointer hover:bg-orange-600 transition-colors">
                More info <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Vacant Posts Card */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Vacant Posts</h4>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">3</div>
              </div>
              <div className="bg-sky-500 text-white py-3 px-6 text-sm font-semibold flex justify-between items-center cursor-pointer hover:bg-sky-600 transition-colors">
                More info <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Emergency Alerts Card */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center">
                    <Bell className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Emergency Alerts</h4>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">1</div>
              </div>
              <div className="bg-rose-500 text-white py-3 px-6 text-sm font-semibold flex justify-between items-center cursor-pointer hover:bg-rose-600 transition-colors">
                More info <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Lower Dashboard Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Employees Graph Area */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Employees Trend</h4>
              {/* Fake Graph Representation */}
              <div className="h-48 w-full border-b border-slate-200 dark:border-slate-800 flex items-end justify-between px-4 pb-2 relative">
                {/* Y Axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400">
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                <div className="ml-8 w-full flex items-end justify-between h-full">
                  {[40, 60, 45, 80, 142, 145, 150].map((h, i) => (
                    <div key={i} className="w-12 bg-orange-500 rounded-t-sm transition-all duration-1000 ease-in-out hover:bg-orange-400 cursor-pointer" style={{ height: `${(h/150)*100}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-4 ml-8">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Attendance Status Donut Charts */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-900 dark:text-white">Attendance Status</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto rounded-full border-[6px] border-emerald-500 flex items-center justify-center mb-2">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">85%</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">On Time</span>
                </div>
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto rounded-full border-[6px] border-amber-500 flex items-center justify-center mb-2">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">10%</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Late Start</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Capabilities Grid */}
      <div className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4 border border-emerald-200 dark:border-emerald-400/30">
              Complete Ecosystem
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">The Ultimate Platform Library</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              ENFYCON is not just an attendance app. It is a massive, enterprise-grade operating system for your entire workforce. Explore the incredible depth of our modules below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fullCapabilities.map((cap) => (
              <div key={cap.title} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 hover:shadow-md dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-inner border border-slate-100 dark:border-slate-700/50">
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{cap.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 bg-blue-500 dark:bg-slate-500 rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Differentiators Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Why Emplinked?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff) => (
              <div key={diff.title} className="flex gap-4 group">
                <div className={`h-12 w-12 flex-shrink-0 rounded-xl ${diff.bgColor} dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform`}>
                  {diff.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{diff.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
