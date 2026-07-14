"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Command, Github, Twitter, Linkedin, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Turnstile } from "@marsidev/react-turnstile";
import { EmplinkedLogo } from "@/components/ui/emplinked-logo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the security check.");
      return;
    }
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Subscription failed.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-slate-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 pb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col space-y-5">
            {/* Minimalist Premium Wordmark */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center tracking-tighter">
                <span className="text-[22px] font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                  Emp
                </span>
                <span className="text-[22px] font-black bg-gradient-to-r from-orange-500 to-violet-600 bg-clip-text text-transparent filter drop-shadow-sm">
                  linked
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 mb-2.5 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              </div>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xs leading-relaxed">
              Emplinked is an intelligent workforce operating platform developed by EnfyCon, empowering organizations with automation, workforce intelligence, enterprise-grade security, and data-driven decision making.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/enfycon" target="_blank" rel="noopener noreferrer" className="h-8.5 w-8.5 flex items-center justify-center rounded-lg border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 transition-colors bg-white shadow-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/enfycon" target="_blank" rel="noopener noreferrer" className="h-8.5 w-8.5 flex items-center justify-center rounded-lg border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 transition-colors bg-white shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/enfycon" target="_blank" rel="noopener noreferrer" className="h-8.5 w-8.5 flex items-center justify-center rounded-lg border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 transition-colors bg-white shadow-sm">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2.5">
              <li><Link href="/platform" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">Core Features</Link></li>
              <li><Link href="/platform" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">Integrations</Link></li>
              <li><Link href="/platform" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">Platform Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">About Us</Link></li>
              <li><Link href="/solutions" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">Solutions</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors font-medium">Let's Talk</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col space-y-3.5">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Stay Updated</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Receive updates on new automation frameworks and process improvements.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              {status === "success" && (
                <div className="p-2.5 text-[11px] rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Thanks for subscribing! Check your inbox.
                </div>
              )}
              {status === "error" && (
                <div className="p-2.5 text-[11px] rounded bg-red-50 text-red-700 border border-red-200">
                  {errorMessage}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  id="newsletterEmail"
                  name="newsletterEmail"
                  aria-label="Email address for newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 flex-1 min-w-0 shadow-sm"
                />
                <Button type="submit" variant="primary" disabled={status === "loading"} className="px-4 py-2 shrink-0">
                  {status === "loading" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <>Subscribe <ArrowRight className="ml-1 h-3.5 w-3.5" /></>}
                </Button>
              </div>
              {status !== "success" && (
                <div className="transform scale-[0.70] origin-top-left -mb-4 h-[50px]">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} 
                    onSuccess={(token) => setTurnstileToken(token)}
                  />
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Emplinked. Developed by EnfyCon.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-800 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-800 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
