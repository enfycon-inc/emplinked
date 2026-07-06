"use client";

import React from "react";
import { MessageSquare, PhoneCall, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      
      {/* Full Bleed Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden mb-12">
        <div className="absolute inset-0 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Contact Support" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">Let's talk business.</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Book a personalized demo and discover how Emplinked can modernize your operations, save time, and boost enterprise efficiency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column: Clean Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 tracking-tight">Sales & Solutions</h3>
                  <a href="mailto:solutions@emplinked.com" className="text-blue-700 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1">
                    solutions@emplinked.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <PhoneCall className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 tracking-tight">Technical Support</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">24/7 dedicated support for platform issues.</p>
                  <a href="tel:+918049333600" className="text-blue-700 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1">
                    +91 80 4933 3600
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <MapPin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 tracking-tight">Headquarters</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    EnfyCon Technologies Pvt. Ltd.<br />
                    Global Tech Park, Block C<br />
                    Bangalore, India 560103
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">How can we help?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your workforce requirements..." 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none resize-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>

                <Button className="w-full h-12 text-sm rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold">
                  Submit Inquiry
                </Button>
                
                <p className="text-xs text-center text-slate-500 dark:text-slate-400 pt-2">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
