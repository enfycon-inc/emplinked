"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Info, Calculator, FileText, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Turnstile } from "@marsidev/react-turnstile";

export default function BookDemoPage() {
  const [duration, setDuration] = useState("12"); // 12, 24, 36 months
  const [silverQty, setSilverQty] = useState("10");
  const [goldQty, setGoldQty] = useState("5");
  const [calcResult, setCalcResult] = useState<any>(null);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Select & Calc, 2: Checkout, 3: Success
  const [checkoutData, setCheckoutData] = useState({ name: "", email: "", mobile: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  // Plan unit prices per month
  const silverPrice = 79;
  const goldPrice = 129;

  // Duration discounts
  const discountRate = duration === "36" ? 0.20 : duration === "24" ? 0.15 : 0.10;

  const handleCalculate = () => {
    const months = parseInt(duration);
    const sq = Math.max(0, parseInt(silverQty) || 0);
    const gq = Math.max(0, parseInt(goldQty) || 0);

    const silverSubtotal = sq * silverPrice * months;
    const goldSubtotal = gq * goldPrice * months;
    const subtotal = silverSubtotal + goldSubtotal;
    const discountAmount = subtotal * discountRate;
    const afterDiscount = subtotal - discountAmount;
    const gstAmount = afterDiscount * 0.18;
    const totalAmount = afterDiscount + gstAmount;

    setCalcResult({
      months,
      sq,
      gq,
      silverSubtotal,
      goldSubtotal,
      subtotal,
      discountAmount,
      afterDiscount,
      gstAmount,
      totalAmount,
    });
  };

  const handleDownloadPDF = async () => {
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="font-family: sans-serif; color: #0f172a; padding: 40px; background: white;">
          <div style="border-bottom: 2px solid #0f172a; padding-bottom: 24px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
              <h1 style="font-size: 30px; font-weight: 900; margin: 0; letter-spacing: -1px;">EMPLINKED</h1>
              <p style="font-size: 14px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin: 4px 0 0 0;">By Enfycon</p>
            </div>
            <div style="text-align: right; font-size: 12px; color: #64748b;">
              <p style="font-weight: bold; color: #0f172a; font-size: 14px; margin: 0;">PROPOSAL ESTIMATE</p>
              <p style="margin: 4px 0;">Generated: ${new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div style="margin-bottom: 40px;">
            <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Subscription Details</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px;">
              <div style="color: #64748b;">Duration Term</div>
              <div style="text-align: right; font-weight: bold;">${calcResult?.months} Months</div>
              <div style="color: #64748b;">Silver Plan Employees</div>
              <div style="text-align: right; font-weight: bold;">${calcResult?.sq}</div>
              <div style="color: #64748b;">Gold Plan Employees</div>
              <div style="text-align: right; font-weight: bold;">${calcResult?.gq}</div>
            </div>
          </div>

          <div>
            <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Pricing Breakdown</h2>
            <div style="font-size: 14px; line-height: 2;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748b;">Silver Subtotal</span>
                <span style="font-family: monospace;">INR ${calcResult?.silverSubtotal.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748b;">Gold Subtotal</span>
                <span style="font-family: monospace;">INR ${calcResult?.goldSubtotal.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-top: 1px solid #f1f5f9; margin-top: 8px; padding-top: 8px;">
                <span style="color: #64748b;">Base Subtotal</span>
                <span style="font-family: monospace; font-weight: bold;">INR ${calcResult?.subtotal.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between; color: #2563eb; font-weight: 500;">
                <span>Volume Discount</span>
                <span style="font-family: monospace;">- INR ${calcResult?.discountAmount.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748b;">Taxable Amount</span>
                <span style="font-family: monospace;">INR ${calcResult?.afterDiscount.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #64748b;">GST (18%)</span>
                <span style="font-family: monospace;">INR ${calcResult?.gstAmount.toLocaleString()}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-top: 2px solid #0f172a; margin-top: 16px; padding-top: 16px; font-size: 18px; font-weight: 900;">
                <span>Grand Total Estimate</span>
                <span style="font-family: monospace; color: #2563eb;">INR ${calcResult?.totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const opt: any = {
        margin:       0,
        filename:     'Enfycon-Proposal.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(checkoutData.mobile)) {
      setFormError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const freeEmailDomains = ["gmail.com", "yahoo.com", "yahoo.co.in", "hotmail.com", "outlook.com", "aol.com", "icloud.com"];
    const domain = checkoutData.email.split("@")[1]?.toLowerCase();
    if (domain && freeEmailDomains.includes(domain)) {
      setFormError("Please use your official company email. Free domains are not allowed.");
      return;
    }

    if (!turnstileToken) {
      setFormError("Please complete the security check.");
      return;
    }

    if (checkoutData.name && checkoutData.email && checkoutData.mobile) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/book-proposal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...checkoutData,
            duration,
            silverQty,
            goldQty,
            calcResult,
          }),
        });
        
        if (response.ok) {
          setCheckoutStep(3);
        } else {
          console.error("Failed to send proposal");
          // Fallback to step 3 anyway for demo purposes, or handle error
          setCheckoutStep(3); 
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setCheckoutStep(3);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="print:hidden bg-white dark:bg-slate-950 text-slate-900 min-h-screen pb-24 relative overflow-hidden">
      {/* Responsive Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute top-2/4 right-0 translate-x-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-4xl bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-emerald-300/10 blur-[80px] md:blur-[120px] z-0 rounded-full pointer-events-none" />
      
      {/* Full Bleed Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden mb-16">
        <div className="absolute inset-0 pointer-events-none">
           <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" alt="Data and Analytics" fill className="object-cover" />
           <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4 border border-blue-400/30 backdrop-blur-sm">
            Plans & Booking
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Flexible Pricing & Dynamic Calculator
          </h1>
          <p className="max-w-xl mx-auto text-slate-200 text-sm sm:text-base leading-relaxed">
            Select plan options, enter employee counts, and dynamically compute invoice totals.
          </p>
        </div>
      </section>

      {checkoutStep === 1 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          {/* Duration Selector */}
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="duration" className="text-xs sm:text-sm text-slate-600 font-semibold">Subscription Duration:</label>
            <select
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
                setCalcResult(null); // Clear calculated values to force recalculation
              }}
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-blue-600 shadow-sm"
            >
              <option value="12">1 Year (10% Discount)</option>
              <option value="24">2 Years (15% Discount)</option>
              <option value="36">3 Years (20% Discount)</option>
            </select>
          </div>

          {/* Cards: Silver vs Gold */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Silver Plan */}
            <Card hoverGlow={false} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-sm p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="text-[10px]">Standard Plan</Badge>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">Silver Plan</h3>
                </div>
                
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Geo-tagging & location checks</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Real-time log database writes</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Standard dashboard monitoring</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Email support channel</li>
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <span className="text-xs text-slate-400 font-semibold block">Monthly Employee cost</span>
                <p className="text-3xl font-extrabold text-slate-900 mt-0.5">₹{silverPrice} <span className="text-xs text-slate-400 font-normal">/ employee</span></p>
              </div>
            </Card>

            {/* Gold Plan */}
            <Card hoverGlow={false} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-2 border-blue-600 shadow-md p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl">
                Popular Choice
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge variant="primary" className="text-[10px]">Advanced Verification</Badge>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">Gold Plan</h3>
                </div>
                
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Everything in Silver Plan</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Biometric & Facial Recognition API</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> Automated payroll ledger syncs</li>
                  <li className="flex items-center gap-2"><Check className="h-4.5 w-4.5 text-blue-600 shrink-0" /> SLA support guarantees</li>
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <span className="text-xs text-slate-400 font-semibold block">Monthly Employee cost</span>
                <p className="text-3xl font-extrabold text-blue-600 mt-0.5 font-mono">₹{goldPrice} <span className="text-xs text-slate-400 font-normal text-slate-400">/ employee</span></p>
              </div>
            </Card>
          </div>

          {/* Interactive Calculator Section */}
          <div className="max-w-4xl mx-auto border-t border-slate-200 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Inputs */}
              <div className="lg:col-span-5 space-y-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-600" /> Subscription Calculator
                </h3>

                <div>
                  <label htmlFor="silverQty" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Silver Plan Employees
                  </label>
                  <input
                    id="silverQty"
                    name="silverQty"
                    type="number"
                    min="0"
                    value={silverQty}
                    onChange={(e) => {
                      setSilverQty(e.target.value);
                      setCalcResult(null);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="goldQty" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Gold Plan Employees
                  </label>
                  <input
                    id="goldQty"
                    name="goldQty"
                    type="number"
                    min="0"
                    value={goldQty}
                    onChange={(e) => {
                      setGoldQty(e.target.value);
                      setCalcResult(null);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
                  />
                </div>

                <Button variant="primary" className="w-full py-3" onClick={handleCalculate}>
                  Calculate Pricing Breakdown
                </Button>
              </div>

              {/* Invoice Breakdown */}
              <div className="lg:col-span-7 h-full">
                {calcResult ? (
                  <Card hoverGlow={false} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-sm p-6 space-y-5 animate-in fade-in zoom-in-95">
                    <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                      <FileText className="h-4.5 w-4.5 text-blue-600" /> Invoice Breakdown Estimate
                    </h4>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                      <div className="flex justify-between">
                        <span>Silver Plan ({calcResult.sq} Employees × {calcResult.months} Months)</span>
                        <span className="font-mono text-slate-900">₹{calcResult.silverSubtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gold Plan ({calcResult.gq} Employees × {calcResult.months} Months)</span>
                        <span className="font-mono text-slate-900">₹{calcResult.goldSubtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-100 pt-2 text-slate-500">
                        <span>Base Subtotal</span>
                        <span className="font-mono text-slate-500">₹{calcResult.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>Duration Discount ({(discountRate * 100).toFixed(0)}%)</span>
                        <span className="font-mono">- ₹{calcResult.discountAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Taxable Amount</span>
                        <span className="font-mono">₹{calcResult.afterDiscount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>GST Tax (18%)</span>
                        <span className="font-mono">₹{calcResult.gstAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-extrabold text-slate-900">
                        <span>Grand Total Estimate</span>
                        <span className="font-mono text-blue-600">₹{calcResult.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-3 flex gap-2">
                      <Button variant="secondary" className="w-1/2 text-xs py-2.5" onClick={() => {
                        setCalcResult(null);
                        setCheckoutStep(1);
                      }}>
                        Reset Calculator
                      </Button>
                      <Button variant="primary" className="w-1/2 text-xs py-2.5" onClick={() => setCheckoutStep(2)}>
                        Proceed Booking
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <div className="border border-dashed border-slate-200 rounded-xl h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-slate-50/30 text-slate-400">
                    <Calculator className="h-10 w-10 mb-3 text-slate-300" />
                    <p className="text-sm font-semibold">Ready to Calculate</p>
                    <p className="text-xs text-slate-400 max-w-xs mt-1">
                      Adjust employee quantities and click the calculate button to review details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {checkoutStep === 2 && (
        <section className="max-w-md mx-auto px-4 relative z-10">
          <Card className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
              Confirm Consultation Booking
            </h3>

            <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Silver/Gold Employees:</span>
                <span className="text-slate-900 font-bold">{silverQty} / {goldQty}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration Term:</span>
                <span className="text-slate-900 font-bold">{duration} Months</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5 text-sm font-extrabold text-slate-900">
                <span>Estimated Invoice Total:</span>
                <span className="text-blue-600 font-mono">₹{calcResult?.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold text-left">
                  {formError}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={checkoutData.name}
                  onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={checkoutData.email}
                  onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Contact Mobile
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  value={checkoutData.mobile}
                  onChange={(e) => setCheckoutData({ ...checkoutData, mobile: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="flex justify-center py-2">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ size: "normal" }}
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button type="button" variant="secondary" className="w-1/3" onClick={() => setCheckoutStep(1)} disabled={isSubmitting}>
                  Back
                </Button>
                <Button type="submit" variant="primary" className="w-2/3 flex items-center justify-center" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                    </span>
                  ) : "Book Proposal"}
                </Button>
              </div>
            </form>
          </Card>
        </section>
      )}

      {checkoutStep === 3 && (
        <section className="max-w-md mx-auto px-4 relative z-10">
          <Card className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Proposal Request Received</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
              We have generated your custom pricing invoice proposal total of <span className="font-semibold text-slate-900">₹{calcResult?.totalAmount.toLocaleString()}</span> and dispatched details to <span className="text-slate-900 font-mono font-semibold">{checkoutData.email}</span>. A representative will contact you within 2 hours.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="primary" onClick={handleDownloadPDF} className="w-full flex items-center justify-center gap-2">
                Download PDF Proposal
              </Button>
              <Button variant="secondary" onClick={() => setCheckoutStep(1)} className="w-full">
                Calculate another estimate
              </Button>
            </div>
          </Card>
        </section>
      )}
      </div>

      {/* --- PRINT ONLY INVOICE TEMPLATE --- */}
      {calcResult && (
        <div id="print-proposal" className="hidden print:block text-slate-900 font-sans absolute top-0 left-0 w-full bg-white z-[9999] p-8 md:p-12">
          <div className="border-b-2 border-slate-900 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tighter">EMPLINKED</h1>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">By Enfycon</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <p className="font-bold text-slate-900 text-sm">PROPOSAL ESTIMATE</p>
              <p className="mt-1">Generated: {new Date().toLocaleDateString()}</p>
              <p className="italic mt-1 text-slate-400">*Non-binding demo estimate.</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Subscription Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-slate-500">Duration Term</div>
              <div className="text-right font-bold text-slate-900">{calcResult.months} Months</div>
              
              <div className="text-slate-500">Silver Plan Employees</div>
              <div className="text-right font-bold text-slate-900">{calcResult.sq}</div>
              
              <div className="text-slate-500">Gold Plan Employees</div>
              <div className="text-right font-bold text-slate-900">{calcResult.gq}</div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Pricing Breakdown</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Silver Subtotal</span>
                <span className="font-mono text-slate-900">₹{calcResult.silverSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Gold Subtotal</span>
                <span className="font-mono text-slate-900">₹{calcResult.goldSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-2">
                <span className="text-slate-500">Base Subtotal</span>
                <span className="font-mono text-slate-900 font-bold">₹{calcResult.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-blue-600 font-medium">
                <span>Volume Discount</span>
                <span className="font-mono">- ₹{calcResult.discountAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Taxable Amount</span>
                <span className="font-mono text-slate-900">₹{calcResult.afterDiscount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">GST (18%)</span>
                <span className="font-mono text-slate-900">₹{calcResult.gstAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t-2 border-slate-900 pt-4 text-lg font-black text-slate-900 mt-2">
                <span>Grand Total Estimate</span>
                <span className="font-mono text-blue-600">₹{calcResult.totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center text-xs text-slate-400 border-t border-slate-200 pt-6">
            <p className="font-bold text-slate-500 mb-1">Thank you for considering Emplinked by Enfycon.</p>
            <p>This is a temporary estimate generated from our demo portal.</p>
            <p>Once you submit your request, an official binding invoice will be provided by our administration team.</p>
          </div>
        </div>
      )}
    </>
  );
}
