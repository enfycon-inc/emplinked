import React, { useState, useEffect } from 'react';
import { Fingerprint, CheckCircle, MapPin, Map, Calendar, AlertTriangle, Users, FileText, Check, FileCheck2, UserCheck, ShieldCheck, Building, Clock, ChevronRight } from 'lucide-react';

import { HeroMockupDisplay } from './hero-mockups';

type FeatureType = 'time-theft' | 'zero-error-payroll' | 'field-forces' | 'shift-control' | 'hr-resolutions' | 'analytics';

interface FeatureMockupDisplayProps {
  type: FeatureType;
}

export function FeatureMockupDisplay({ type }: FeatureMockupDisplayProps) {
  if (type === 'analytics') return <div className="w-full h-full p-4"><HeroMockupDisplay type="analytics" /></div>;
  if (type === 'time-theft') return <TimeTheftMockup />;
  if (type === 'zero-error-payroll') return <PayrollMockup />;
  if (type === 'field-forces') return <FieldForcesMockup />;
  if (type === 'shift-control') return <ShiftControlMockup />;
  if (type === 'hr-resolutions') return <HrResolutionsMockup />;
  return null;
}

// 1. Eliminate Time Theft (Face Scan / Proxy Prevention)
function TimeTheftMockup() {
  const [scanState, setScanState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setScanState(s => (s + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-8 rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10 grid-bg opacity-50" />
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-800 dark:border-slate-700 shadow-2xl p-4 overflow-hidden relative aspect-[9/16]">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-white font-semibold">Selfie Check-in</span>
            <span className="text-xs font-bold text-slate-400">09:00 AM</span>
          </div>

          {/* Camera Viewport */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[3/4] flex items-center justify-center border border-slate-700 shadow-inner">
            <div className={`absolute w-full h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 ${scanState === 1 || scanState === 2 ? 'top-1/2 opacity-100 transition-all duration-1000' : 'top-0 opacity-0'} ${scanState === 2 ? 'top-[90%]' : ''}`} />
            
            {/* Abstract Face wireframe */}
            <div className="w-32 h-40 border-2 border-dashed rounded-[3rem] flex flex-col items-center justify-center gap-4 relative transition-colors duration-500" style={{ borderColor: scanState >= 2 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(59, 130, 246, 0.3)' }}>
              <div className="w-10 h-10 border-t-2 border-blue-500 absolute top-0 left-0 rounded-tl-[3rem]" />
              <div className="w-10 h-10 border-t-2 border-blue-500 absolute top-0 right-0 rounded-tr-[3rem]" />
              <div className="w-10 h-10 border-b-2 border-blue-500 absolute bottom-0 left-0 rounded-bl-[3rem]" />
              <div className="w-10 h-10 border-b-2 border-blue-500 absolute bottom-0 right-0 rounded-br-[3rem]" />
              <Fingerprint className={`w-16 h-16 ${scanState >= 2 ? 'text-emerald-500' : 'text-blue-500'}`} />
            </div>

            {/* Liveness detected notification */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 transition-opacity duration-500 flex items-center gap-2 ${scanState >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <ShieldCheck className={`w-4 h-4 ${scanState >= 2 ? 'text-emerald-400' : 'text-blue-400'}`} />
              <span className="text-xs text-white font-semibold whitespace-nowrap">
                {scanState === 1 ? 'Detecting Liveness...' : scanState >= 2 ? 'Liveness Verified' : ''}
              </span>
            </div>
          </div>

          {/* Verification Badge */}
          <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${scanState === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-emerald-500 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-400">
              <CheckCircle className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-none">Access Granted</span>
                <span className="text-[10px] opacity-90 mt-1">Geofence Matched • 100% ID</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// 2. Zero-Error Payroll (Multi-tier compliance into payslip)
function PayrollMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-12 relative overflow-hidden rounded-xl shadow-2xl">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="w-full max-w-2xl bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">
        
        {/* Left: Calculation Engine */}
        <div className="md:w-1/2 p-6 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Rules Engine</h3>
          </div>

          <div className="space-y-4">
            <div className={`p-3 rounded-lg border transition-colors duration-500 ${step >= 0 ? 'bg-white dark:bg-slate-800 border-emerald-200 dark:border-emerald-800/50' : 'bg-transparent border-transparent'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Regular Hours (160h)</span>
                <Check className={`w-3 h-3 ${step >= 0 ? 'text-emerald-500' : 'text-slate-300'}`} />
              </div>
              <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full bg-emerald-500 transition-all duration-1000 ${step >= 0 ? 'w-full' : 'w-0'}`} />
              </div>
            </div>

            <div className={`p-3 rounded-lg border transition-colors duration-500 ${step >= 1 ? 'bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-800/50' : 'bg-transparent border-transparent'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Overtime 1.5x (12h)</span>
                <Check className={`w-3 h-3 ${step >= 1 ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'}`} />
              </div>
              <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full bg-amber-500 transition-all duration-1000 ${step >= 1 ? 'w-full' : 'w-0'}`} />
              </div>
            </div>

            <div className={`p-3 rounded-lg border transition-colors duration-500 ${step >= 2 ? 'bg-white dark:bg-slate-800 border-rose-200 dark:border-rose-800/50' : 'bg-transparent border-transparent'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Statutory Compliance (PF/PT)</span>
                <Check className={`w-3 h-3 ${step >= 2 ? 'text-rose-500' : 'text-slate-300 dark:text-slate-600'}`} />
              </div>
              <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full bg-rose-500 transition-all duration-1000 ${step >= 2 ? 'w-full' : 'w-0'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Final Payslip Output */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <div className={`transform transition-all duration-1000 ${step === 3 ? 'scale-100 opacity-100 translate-x-0' : 'scale-95 opacity-50 translate-x-4'}`}>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 border border-emerald-100 dark:border-emerald-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-400 text-sm">Generated Payslip</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-500 mt-1">August 2026</p>
                </div>
                <FileCheck2 className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              
              <div className="space-y-3 pt-3 border-t border-emerald-200 dark:border-emerald-800/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Gross Pay</span>
                  <span className="font-medium text-slate-900 dark:text-white">$4,250.00</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Total Deductions</span>
                  <span className="font-medium text-rose-600 dark:text-rose-400">-$340.00</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-emerald-200 dark:border-emerald-800/50">
                  <span className="text-slate-900 dark:text-white">Net Payable</span>
                  <span className="text-emerald-600 dark:text-emerald-400">$3,910.00</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold py-3 rounded-lg shadow-md hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" /> 1-Click Disburse
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// 3. Manage Field Forces (Geo-fenced mapping)
function FieldForcesMockup() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl relative overflow-hidden flex items-center justify-center">
      {/* Abstract Map Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 dark:opacity-5 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
           <div key={i} className="border-r border-b border-slate-300 dark:border-slate-500" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        
        {/* Left Map View */}
        <div className="bg-white dark:bg-slate-950 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex-1 relative aspect-square md:aspect-auto">
          <div className="absolute inset-2 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800">
            {/* Map Roads placeholder */}
            <div className="absolute top-1/4 w-full h-2 bg-white dark:bg-slate-800 -rotate-12" />
            <div className="absolute left-1/3 w-3 h-full bg-white dark:bg-slate-800 rotate-6" />
            
            {/* Geofenced Zone 1 */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 border-2 border-blue-500/50 rounded-full flex items-center justify-center">
              <div className="relative">
                <MapPin className="text-blue-600 dark:text-blue-400 w-8 h-8 relative z-10 drop-shadow-md" />
                {/* User avatar indicator */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center z-20">
                  <UserCheck className="w-3 h-3 text-white" />
                </div>
                {/* Pulse effect */}
                <div className={`absolute inset-0 bg-blue-400 rounded-full transition-all duration-1000 ${pulse ? 'scale-150 opacity-0' : 'scale-100 opacity-50'}`} />
              </div>
            </div>

             {/* Geofenced Zone 2 (Empty) */}
             <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-slate-500/10 dark:bg-slate-500/20 border-2 border-dashed border-slate-400/50 rounded-full flex items-center justify-center">
               <Building className="text-slate-400 w-6 h-6" />
             </div>
          </div>
        </div>

        {/* Right Status Panel */}
        <div className="w-full md:w-64 flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Live Fleet Status</h3>
            
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-slate-900 rounded-lg p-3 border border-blue-100 dark:border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">Sarah Jenkins</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded uppercase font-bold">In Zone</span>
                </div>
                <div className="text-[10px] text-slate-500">Site A (Downtown HQ)</div>
                <div className="text-[10px] text-slate-500">Checked in 08:42 AM</div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border border-slate-100 dark:border-slate-700 opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">Mike Ross</span>
                  </div>
                  <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded uppercase font-bold">En Route</span>
                </div>
                <div className="text-[10px] text-slate-500">Destination: Site B</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// 4. Shift & Roster Control (Drag drop UI resolving a vacant shift)
function ShiftControlMockup() {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setResolved(r => !r), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 relative">
      {/* Alert Banner */}
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 transition-all duration-500 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${resolved ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 translate-y-0 opacity-100' : 'bg-rose-100 text-rose-700 border border-rose-200 -translate-y-2 opacity-100'}`}>
        {resolved ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
        {resolved ? 'Shift Coverage Optimized' : '1 Vacant Shift Detected!'}
      </div>

      <div className="w-full max-w-xl bg-white dark:bg-slate-950 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-12">
        <div className="bg-slate-100 dark:bg-slate-800/50 p-3 flex border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 uppercase w-20">Role</div>
          <div className="flex-1 grid grid-cols-3 gap-2">
            {['Morning', 'Afternoon', 'Night'].map(s => <div key={s} className="text-xs font-bold text-slate-500 text-center uppercase">{s}</div>)}
          </div>
        </div>
        
        {/* Row 1 */}
        <div className="flex p-3 border-b border-slate-100 dark:border-slate-800/50 items-center">
           <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 w-20">Security</div>
           <div className="flex-1 grid grid-cols-3 gap-2">
             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 text-center text-xs text-blue-700 dark:text-blue-300">J. Smith</div>
             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 text-center text-xs text-blue-700 dark:text-blue-300">A. Lee</div>
             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 text-center text-xs text-blue-700 dark:text-blue-300">M. Davis</div>
           </div>
        </div>

        {/* Row 2 (With Vacancy) */}
        <div className="flex p-3 items-center relative">
           <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 w-20">Supervisor</div>
           <div className="flex-1 grid grid-cols-3 gap-2 relative">
             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 text-center text-xs text-blue-700 dark:text-blue-300">T. Hanks</div>
             
             {/* The Target Slot */}
             <div className={`rounded p-2 text-center text-xs transition-all duration-500 ${resolved ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 border-dashed text-rose-700 dark:text-rose-400'}`}>
                {resolved ? 'E. Stone (Assigned)' : 'VACANT'}
             </div>

             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 text-center text-xs text-blue-700 dark:text-blue-300">C. Pratt</div>

             {/* The dragged element */}
             {!resolved && (
               <div className="absolute right-0 top-10 translate-y-4 bg-emerald-500 text-white shadow-xl rounded p-2 text-center text-xs font-bold w-1/3 z-20 animate-bounce cursor-pointer flex items-center justify-center gap-1 border border-emerald-400">
                 <Calendar className="w-3 h-3" /> Auto-Fill
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}

// 5. Instant HR Resolutions (Mobile request -> Web approval)
function HrResolutionsMockup() {
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setApproved(a => !a), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-8 flex items-center justify-center gap-4 md:gap-12 relative overflow-hidden">
      
      {/* Employee Mobile View */}
      <div className="w-48 bg-white dark:bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-800 dark:border-slate-700 shadow-xl overflow-hidden hidden md:flex flex-col relative">
        <div className="absolute top-0 inset-x-0 h-5 bg-slate-800 dark:bg-slate-700 rounded-b-2xl w-20 mx-auto z-20"></div>
        <div className="bg-blue-600 p-3 pt-6 text-white text-[10px] font-bold text-center">Sick Leave Request</div>
        <div className="p-3 flex-1 flex flex-col gap-2">
          <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded shadow-sm text-[8px] space-y-1 border border-slate-100 dark:border-slate-800">
             <div className="font-bold text-slate-900 dark:text-white">Dates:</div>
             <div className="text-slate-500">Upcoming Week</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded shadow-sm text-[8px] space-y-1 border border-slate-100 dark:border-slate-800">
             <div className="font-bold text-slate-900 dark:text-white">Reason:</div>
             <div className="text-slate-500">Fever and flu.</div>
          </div>
          <div className="mt-auto">
             <div className={`text-[10px] text-center font-bold py-1.5 rounded transition-colors duration-500 ${approved ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {approved ? 'Approved' : 'Pending...'}
             </div>
          </div>
        </div>
      </div>

      {/* Connection arrow */}
      <div className="hidden md:flex text-slate-400">
        <ChevronRight className="w-8 h-8" />
      </div>

      {/* Manager Web Dashboard View */}
      <div className="w-full max-w-sm bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative">
        <div className="border-b border-slate-200 dark:border-slate-800 p-3 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
          <span className="text-xs font-bold text-slate-800 dark:text-white">Manager Portal</span>
          <span className="text-[10px] bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-bold">1 Action Required</span>
        </div>
        
        <div className="p-4">
          <div className={`p-4 rounded-lg border transition-all duration-500 ${approved ? 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 opacity-60' : 'bg-white border-blue-200 dark:bg-slate-800 dark:border-blue-800 shadow-md scale-105'}`}>
             <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">AM</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Alex M.</div>
                </div>
                <div className="text-[10px] text-slate-500">2 mins ago</div>
             </div>
             
             <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Requested 2 days of Sick Leave.</p>
             
             {!approved ? (
               <div className="flex gap-2">
                 <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2 rounded transition-colors shadow-sm">
                   Approve
                 </button>
                 <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-xs font-bold py-2 rounded transition-colors">
                   Deny
                 </button>
               </div>
             ) : (
               <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold py-2 rounded text-center flex items-center justify-center gap-1">
                 <CheckCircle className="w-3 h-3" /> Approved successfully
               </div>
             )}
          </div>
        </div>
      </div>

    </div>
  );
}
