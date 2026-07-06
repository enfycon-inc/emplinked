"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Database, MapPin, Smartphone, Lock, Share2, UserCheck, Mail, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "roles", title: "Roles & Responsibilities", icon: UserCheck },
    { id: "information", title: "Information We Collect", icon: Database },
    { id: "location", title: "Location & Biometrics", icon: MapPin },
    { id: "usage", title: "How We Use Information", icon: Smartphone },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "sharing", title: "Third-Party Disclosures", icon: Share2 },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Account for fixed header
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* ── HERO BANNER ── */}
      <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We are committed to protecting your workforce data. Here is everything you need to know about how we handle, secure, and process your information.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Table of Contents</h4>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                        isActive 
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" 
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                      {section.title}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 max-w-3xl">
            <div className="space-y-16 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              
              <section id="introduction" className="scroll-mt-32">
                <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-medium">
                  At <strong className="text-slate-900 dark:text-white">EnfyCon</strong> (including its subsidiaries, henceforth referred to as "Emplinked", "we", "our", or the "Company"), we understand that you are trusting us with highly confidential workforce information.
                </p>
                <p>
                  This Privacy Policy describes our practices regarding the collection, use, access, and disclosure of personal information when you use the Emplinked Workforce Platform, Mobile Apps, or Website. Emplinked is a cloud-based web platform that enables organizations to manage human resources, attendance, field tracking, and payroll.
                </p>
              </section>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />

              <section id="roles" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Roles and Responsibilities</h2>
                </div>
                <p>
                  For the purposes of the General Data Protection Regulation (GDPR) and similar global data protection laws, the <strong className="font-semibold text-slate-900 dark:text-white">Data Controller</strong> of the data processed through the Service is the Customer (the Employer) who permits End Users to access the Service. Emplinked acts solely as the <strong className="font-semibold text-slate-900 dark:text-white">Data Processor</strong> on behalf of the Customer.
                </p>
              </section>

              <section id="information" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Information We Collect</h2>
                </div>
                <p className="mb-6">
                  Personal Information gathered through the Service consists of details provided voluntarily by a Customer or End User. This may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Identity & Contact</h3>
                    <p className="text-sm">Name, birthdate, gender, nationality, phone numbers, addresses, and emergency contacts.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Employment Details</h3>
                    <p className="text-sm">Employee ID, job title, department, hire date, termination date, and right-to-work credentials.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sm:col-span-2">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Financial Data</h3>
                    <p className="text-sm">Bank account details, base salary, gross salary, overtime, bonuses, and tax codes.</p>
                  </div>
                </div>
              </section>

              <section id="location" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Location & Biometrics</h2>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">Attendance and Biometric Logs</h3>
                <p className="mb-8">
                  If a Customer utilizes our Time and Attendance module, including "Selfie Check-in", we process and retain biometric device logs and facial mapping data strictly for calculating attendance based on Customer configurations. The legal basis for processing this information is the explicit consent obtained by the Employer from the End User.
                </p>

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">Location Information</h3>
                <p>
                  When using the Emplinked Mobile App for field tracking, your Employer may enable location tracking technology for timekeeping and route optimization. We only collect GPS data when authorized by the Employer configurations during active shift hours.
                </p>
              </section>

              <section id="usage" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">How We Use Information</h2>
                </div>
                <p className="mb-6">
                  As a Data Processor, we use the collected information exclusively to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Provide, operate, and maintain our Services.",
                    "Process payroll, attendance, and HR workflows as directed by the Employer.",
                    "Improve platform security, monitor for fraudulent activity, and enforce our Terms of Service.",
                    "Provide customer support and respond to technical inquiries."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="security" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Data Security & Deletion</h2>
                </div>
                <p className="mb-6">
                  We implement industry-standard organizational and technical measures (including AES-256 encryption at rest and TLS in transit) to protect Personal Information.
                </p>
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Retention Policy</h4>
                  <p className="text-sm">
                    Upon termination of a Customer's contract, or upon a verified request from the Data Controller, we will securely delete or anonymize all associated End User data within 90 days, except where legally required to retain it (e.g. tax records).
                  </p>
                </div>
              </section>

              <section id="sharing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Third-Party Disclosures</h2>
                </div>
                <p>
                  We do not sell, rent, or trade your Personal Information to third parties. We may share data with trusted third-party sub-processors (such as secure cloud hosting providers like AWS or Azure) solely for the purpose of operating our Services. All sub-processors are bound by strict confidentiality and data protection agreements.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32 bg-blue-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-blue-100 dark:border-slate-800 text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Have Questions?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                  If you have any questions about this Privacy Policy or your data rights, please contact our Data Protection Officer.
                </p>
                <a 
                  href="mailto:privacy@emplinked.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-xl shadow-blue-700/20"
                >
                  Contact Privacy Team
                </a>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
