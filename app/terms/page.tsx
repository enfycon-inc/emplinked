"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Users, ShieldCheck, XCircle, CreditCard, Copyright, AlertTriangle, RefreshCcw, Mail, ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", title: "Definitions & Access", icon: Users },
    { id: "responsibilities", title: "Customer Responsibilities", icon: ShieldCheck },
    { id: "acceptable-use", title: "Acceptable Use", icon: XCircle },
    { id: "billing", title: "Billing & Cancellation", icon: CreditCard },
    { id: "ip", title: "Intellectual Property", icon: Copyright },
    { id: "liability", title: "Liability & Indemnity", icon: AlertTriangle },
    { id: "modifications", title: "Modifications", icon: RefreshCcw },
    { id: "governing-law", title: "Governing Law", icon: Scale },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

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
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
      {/* Responsive Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute top-2/4 right-0 translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-4xl bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-emerald-300/10 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      {/* ── HERO BANNER ── */}
      <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 right-24 w-96 h-96 bg-indigo-500 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-500 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            These terms govern your use of the Emplinked platform. We believe in clear, fair agreements that protect both your organization and our software.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/60 dark:border-slate-700/50">
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
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400" 
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"}`} />
                      {section.title}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 max-w-3xl relative z-10">
            <div className="space-y-16 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              
              <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                These Terms of Service ("Terms") govern your access to and use of the Emplinked Workforce Platform, Mobile Apps, and Website, provided by <strong className="text-slate-900 dark:text-white">EnfyCon</strong> ("Emplinked", "we", "us", or "our"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />

              <section id="definitions" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Definitions & Access</h2>
                </div>
                
                <div className="grid gap-4 mb-8">
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-5 rounded-xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Customer (Employer)</h3>
                    <p className="text-sm">The entity or organization that purchases a subscription to use the Services for its workforce.</p>
                  </div>
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-5 rounded-xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">End User (Employee)</h3>
                    <p className="text-sm">An individual authorized by a Customer to access and use the Services (e.g., an employee or contractor).</p>
                  </div>
                </div>

                <p>
                  Subject to these Terms and the payment of applicable fees, Emplinked grants the Customer a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for internal business operations.
                </p>
              </section>

              <section id="responsibilities" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Customer Responsibilities</h2>
                </div>
                <p className="mb-6">As a Customer, you are solely responsible for:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Legal Compliance</strong>
                      <span className="text-sm">Ensuring that your use of the Services complies with all applicable local, state, and national laws, including labor laws, wage and hour regulations, and privacy laws.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Employee Consent</strong>
                      <span className="text-sm">Obtaining necessary and legally valid consent from End Users before utilizing features like "Selfie Check-in" (biometric data) or continuous GPS tracking.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Data Accuracy</strong>
                      <span className="text-sm">Verifying the accuracy of payroll calculations, tax deductions, and attendance records. Emplinked provides the calculation engine, but final verification is the Customer's legal duty.</span>
                    </div>
                  </li>
                </ul>
              </section>

              <section id="acceptable-use" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Acceptable Use Policy</h2>
                </div>
                <p className="mb-4">Users shall not:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-rose-400">
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the Services.</li>
                  <li>Use the Services to transmit malicious code, malware, or unlawful content.</li>
                  <li>Attempt to gain unauthorized access to the platform's underlying infrastructure.</li>
                </ul>
              </section>

              <section id="billing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Billing & Cancellation</h2>
                </div>
                <p>
                  Services are billed on a subscription basis (monthly or annually). Payments are non-refundable unless otherwise stipulated in a separate Enterprise Agreement. Customers may cancel their subscription at any time, but no refunds will be provided for the remaining duration of the current billing cycle. 
                </p>
              </section>

              <section id="ip" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                    <Copyright className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Intellectual Property</h2>
                </div>
                <p>
                  Emplinked retains all rights, title, and interest in and to the Services, including all software, design, algorithms, and intellectual property. Customers retain all rights to the data they input into the system ("Customer Data"). Emplinked is granted a license to process Customer Data solely to provide the Services.
                </p>
              </section>

              <section id="liability" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Liability & Indemnity</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6 rounded-xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Indemnification</h3>
                    <p className="text-sm">
                      The Customer agrees to indemnify and hold harmless Emplinked (EnfyCon) against any claims, lawsuits, or penalties arising from the Customer's failure to comply with labor laws, failure to obtain employee consent for tracking/biometrics, or misuse of the platform.
                    </p>
                  </div>
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6 rounded-xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Limitation of Liability</h3>
                    <p className="text-sm">
                      To the maximum extent permitted by law, Emplinked shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Emplinked's total aggregate liability shall not exceed the total amount paid by the Customer in the 12 months preceding the event giving rise to the claim.
                    </p>
                  </div>
                </div>
              </section>

              <section id="modifications" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400">
                    <RefreshCcw className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Modifications</h2>
                </div>
                <p>
                  Emplinked reserves the right to modify or discontinue any part of the Services with reasonable notice to active Customers. We may update these Terms periodically. Continued use of the Services following an update constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Governing Law</h2>
                </div>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EnfyCon is registered, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/60 dark:border-slate-700/50 text-center shadow-sm">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                  <Mail className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legal Inquiries</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                  For legal inquiries or notices regarding these Terms, please contact the EnfyCon Legal Department.
                </p>
                <a 
                  href="mailto:legal@emplinked.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-xl shadow-blue-700/20"
                >
                  Contact Legal Team
                </a>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
