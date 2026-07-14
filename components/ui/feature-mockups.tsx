import React, { useState, useEffect } from 'react';
import { ScanFace, CheckCircle, MapPin, Map, Calendar, AlertTriangle, Users, FileText, Check, FileCheck2, UserCheck, ShieldCheck, Building, Clock, ChevronRight } from 'lucide-react';

import { HeroMockupDisplay } from './hero-mockups';

type FeatureType = 'time-theft' | 'zero-error-payroll' | 'field-forces' | 'shift-control' | 'hr-resolutions' | 'analytics';

interface FeatureMockupDisplayProps {
  type: FeatureType;
}

export function FeatureMockupDisplay({ type }: FeatureMockupDisplayProps) {
  if (type === 'analytics') return (
    <PhoneWrapper>
      <div className="w-full h-full overflow-hidden relative rounded-xl border border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 scale-[0.6] origin-top-left w-[166%] h-[166%] pointer-events-none">
          <HeroMockupDisplay type="analytics" />
        </div>
      </div>
    </PhoneWrapper>
  );
  if (type === 'time-theft') return <TimeTheftMockup />;
  if (type === 'zero-error-payroll') return <PayrollMockup />;
  if (type === 'field-forces') return <FieldForcesMockup />;
  if (type === 'shift-control') return <ShiftControlMockup />;
  if (type === 'hr-resolutions') return <HrResolutionsMockup />;
  return null;
}

// A standard mobile phone wrapper for all feature mockups to ensure perfect uniformity
function PhoneWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative p-2">
      <div className="relative z-10 w-full max-w-[300px] mx-auto h-[500px]">
        <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 p-5 overflow-hidden relative w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

// 1. Eliminate Time Theft
function TimeTheftMockup() {
  const [scanState, setScanState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setScanState(s => (s + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PhoneWrapper>
      <div className="flex justify-between items-center mb-6">
        <span className="text-slate-900 dark:text-white font-bold text-sm">Selfie Check-in</span>
        <span className="text-xs font-bold text-slate-400">09:00 AM</span>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex-1 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner">
        <div className={`absolute w-full h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 ${scanState === 1 || scanState === 2 ? 'top-1/2 opacity-100 transition-all duration-1000' : 'top-0 opacity-0'} ${scanState === 2 ? 'top-[90%]' : ''}`} />
        
        <div className="w-32 h-40 border-2 border-dashed rounded-[3rem] flex flex-col items-center justify-center gap-4 relative transition-colors duration-500" style={{ borderColor: scanState >= 2 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(59, 130, 246, 0.3)' }}>
          <ScanFace className={`w-16 h-16 ${scanState >= 2 ? 'text-emerald-500' : 'text-blue-500'}`} />
        </div>

        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700 transition-opacity duration-500 flex items-center gap-2 shadow-sm ${scanState >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <ShieldCheck className={`w-3 h-3 ${scanState >= 2 ? 'text-emerald-500' : 'text-blue-500'}`} />
          <span className="text-[10px] text-slate-900 dark:text-white font-bold whitespace-nowrap">
            {scanState === 1 ? 'Detecting...' : scanState >= 2 ? 'Verified' : ''}
          </span>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-30 ${scanState === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-emerald-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-500/20 border border-emerald-400">
          <CheckCircle className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Granted</span>
        </div>
      </div>
    </PhoneWrapper>
  );
}

// 2. Zero-Error Payroll
function PayrollMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <PhoneWrapper>
      <div className="flex items-center gap-2 mb-6 mt-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center">
          <Clock className="w-4 h-4" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-sm">Rules Engine</h3>
      </div>

      <div className="space-y-3 mb-6">
        {['Regular (160h)', 'Overtime (12h)', 'Compliance'].map((label, idx) => (
          <div key={idx} className={`p-3 rounded-xl border transition-colors duration-500 ${step >= idx ? 'bg-slate-50 dark:bg-slate-800 border-emerald-200 dark:border-emerald-800/50' : 'bg-transparent border-slate-100 dark:border-slate-800'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
              <Check className={`w-3 h-3 ${step >= idx ? 'text-emerald-500' : 'text-slate-300'}`} />
            </div>
            <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full bg-emerald-500 transition-all duration-1000 ${step >= idx ? 'w-full' : 'w-0'}`} />
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-auto bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800 transition-all duration-1000 ${step === 3 ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-50 translate-y-4'}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-emerald-900 dark:text-emerald-400 text-xs">Payslip</h4>
            <p className="text-[10px] text-emerald-700 font-medium">Aug 2026</p>
          </div>
          <FileCheck2 className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="flex justify-between text-sm font-black pt-3 border-t border-emerald-200 dark:border-emerald-800/50">
          <span className="text-slate-900 dark:text-white">Net</span>
          <span className="text-emerald-600">$3,910</span>
        </div>
      </div>
    </PhoneWrapper>
  );
}

// 3. Field Forces
function FieldForcesMockup() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <PhoneWrapper>
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 z-0">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
             <div key={i} className="border-r border-b border-slate-900 dark:border-white" />
          ))}
        </div>
        
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 border border-blue-500/50 rounded-full flex items-center justify-center">
          <div className="relative">
            <MapPin className="text-blue-600 w-8 h-8 relative z-10" />
            <div className={`absolute inset-0 bg-blue-400 rounded-full transition-all duration-1000 ${pulse ? 'scale-[2] opacity-0' : 'scale-100 opacity-50'}`} />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-center mb-6">
        <span className="text-slate-900 dark:text-white font-bold text-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">Field Tracking</span>
        <span className="text-xs font-bold text-slate-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm">Live</span>
      </div>

      <div className="mt-auto relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700">
        <h3 className="font-bold text-slate-900 dark:text-white text-xs mb-3">Live Fleet Status</h3>
        <div className="bg-blue-50 dark:bg-slate-900 rounded-xl p-3 border border-blue-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-xs text-slate-900 dark:text-white">Sarah Jenkins</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">In Zone</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1 font-medium">Site A (08:42 AM)</div>
        </div>
      </div>
    </PhoneWrapper>
  );
}

// 4. Shift Control
function ShiftControlMockup() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PhoneWrapper>
      <div className="flex justify-between items-center mb-6 mt-2">
        <h3 className="font-bold text-slate-900 dark:text-white text-sm">Roster Control</h3>
        <Calendar className="w-4 h-4 text-slate-400" />
      </div>

      <div className="space-y-3 flex-1">
        {[
          { r: "Security", m: "J. Smith", a: "A. Lee" },
          { r: "Supervisor", m: "T. Hanks", a: "VACANT" }
        ].map((row, i) => (
          <div key={i} className="flex gap-2">
            <div className="w-16 text-[10px] text-slate-500 flex items-center font-bold uppercase">{row.r}</div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-lg p-2 border border-slate-100 dark:border-slate-700 text-[10px] text-center text-blue-600 dark:text-blue-400 font-bold">{row.m}</div>
            <div className={`flex-1 rounded-lg p-2 border text-[10px] text-center font-bold ${row.a === 'VACANT' ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 text-rose-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-blue-600'}`}>
              {row.a}
            </div>
          </div>
        ))}
      </div>

      <div className={`bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-1000 ${pulse ? 'scale-105 shadow-xl shadow-rose-500/10' : 'scale-100'}`}>
        <AlertTriangle className="w-6 h-6 text-rose-500" />
        <div className="text-xs font-black text-rose-700 dark:text-rose-400 uppercase tracking-wide">1 Vacant Shift</div>
        <button className="mt-2 w-full bg-rose-600 text-white text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg font-bold hover:bg-rose-700">Auto-Fill Now</button>
      </div>
    </PhoneWrapper>
  );
}

// 5. HR Resolutions
function HrResolutionsMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PhoneWrapper>
      <div className="flex justify-between items-center mb-6 mt-2">
        <h3 className="font-bold text-slate-900 dark:text-white text-sm">Leave Request</h3>
        <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 rounded-full">New</span>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-black">A</div>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Alex Mercer</span>
        </div>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          Requesting 2 days off for medical reasons.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <div className={`bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 text-center transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Approved</span>
        </div>
        
        <button className={`w-full bg-blue-600 text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 ${step === 0 ? 'opacity-100 shadow-md shadow-blue-500/20' : 'opacity-40 scale-95'}`}>
          Review & Approve
        </button>
      </div>
    </PhoneWrapper>
  );
}
