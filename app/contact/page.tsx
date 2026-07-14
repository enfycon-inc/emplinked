"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Shield, Clock, PhoneCall, Loader2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setErrorMessage("Please complete the security check.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: (formData.get("phoneCode") as string || "") + " " + (formData.get("phone") as string || ""),
      message: formData.get("message"),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send inquiry.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-24 relative overflow-hidden">
      
      {/* Responsive Ambient Background Glows */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/30 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-4xl bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-emerald-300/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      
      {/* Full Bleed Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden mb-12">
        <div className="absolute inset-0 pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Contact Support" fill className="object-cover" />
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
            
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 tracking-tight">Sales & Solutions</h3>
                  <a href="mailto:office@enfycon.com" className="text-blue-700 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1">
                    office@enfycon.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <PhoneCall className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 tracking-tight">Technical Support</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">24/7 dedicated support for platform issues.</p>
                  <div className="space-y-1.5">
                    <a href="tel:+12012017078" className="text-blue-700 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-2">
                      <span className="text-slate-500 font-normal text-xs uppercase tracking-wider">Global</span> +1 201-201-7078
                    </a>
                    <a href="tel:+916743513070" className="text-blue-700 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-2">
                      <span className="text-slate-500 font-normal text-xs uppercase tracking-wider">India</span> +91 674 351 3070
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <MapPin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 tracking-tight">Headquarters</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Enfycon<br />
                    3921 Long Prairie Road, Building 5<br />
                    Flower Mound, TX 75028, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center">
                  <MapPin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 tracking-tight">Regional Office (India)</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Enfycon<br />
                    N4/345, Block N4, IRC Village<br />
                    Bhubaneswar, Odisha 751015, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-2xl p-8 shadow-sm">
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-medium border border-emerald-200 dark:border-emerald-500/20">
                    Thank you! Your inquiry has been sent successfully. We will get back to you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-500/20">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      id="fullName"
                      type="text" 
                      name="fullName"
                      required
                      placeholder="Jane Doe" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      required
                      placeholder="jane@company.com" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
                    <input 
                      id="company"
                      type="text" 
                      name="company"
                      placeholder="Acme Corp" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2 relative z-50">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <PhoneInput name="phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">How can we help?</label>
                  <textarea 
                    id="message"
                    rows={4} 
                    name="message"
                    required
                    placeholder="Describe your workforce requirements..." 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all outline-none resize-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="flex justify-center py-2">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} 
                    onSuccess={(token) => setTurnstileToken(token)}
                  />
                </div>

                <Button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full h-12 text-sm rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold flex items-center justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
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
