"use client";

import React, { useState, useEffect } from "react";
import { 
  Menu, UserCircle, MapPin, Calendar, Bell, 
  Megaphone, ChevronRight, Clock, CheckCircle2, 
  AlertCircle, AlertTriangle 
} from "lucide-react";
import Image from "next/image";

type ScreenState = "leave" | "duty" | "alert" | "notification";

interface AppMockupProps {
  autoPlay?: boolean;
  initialScreen?: ScreenState;
}

export function AppMockup({ autoPlay = true, initialScreen = "duty" }: AppMockupProps = {}) {
  const [activeScreen, setActiveScreen] = useState<ScreenState>(initialScreen);

  // Auto-cycle through screens
  useEffect(() => {
    if (!autoPlay) return;
    const screens: ScreenState[] = ["duty", "leave", "alert", "notification"];
    let currentIndex = screens.indexOf(initialScreen);
    if (currentIndex === -1) currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % screens.length;
      setActiveScreen(screens[currentIndex]);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, initialScreen]);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] bg-black rounded-[3rem] p-2.5 shadow-2xl border-[4px] border-slate-800 dark:border-slate-700 shrink-0">
      {/* Phone Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
        <div className="w-1/3 h-5 bg-black rounded-b-xl relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-800 rounded-full"></div>
          <div className="absolute top-1.5 right-3 w-2.5 h-2.5 bg-blue-900/40 rounded-full border border-blue-900/60 flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Side Buttons */}
      <div className="absolute top-24 -left-[6px] w-[3px] h-12 bg-slate-800 dark:bg-slate-700 rounded-l-md"></div>
      <div className="absolute top-40 -left-[6px] w-[3px] h-12 bg-slate-800 dark:bg-slate-700 rounded-l-md"></div>
      <div className="absolute top-32 -right-[6px] w-[3px] h-16 bg-slate-800 dark:bg-slate-700 rounded-r-md"></div>

      {/* Screen container */}
      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col font-sans">
        
        {/* Status Bar */}
        <div className="h-7 w-full bg-[#001c40] flex justify-between items-center px-5 pt-1 text-[10px] text-white/90 z-40 font-medium">
          <span>1:14</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-3 h-2.5 bg-white/90 rounded-[2px] relative overflow-hidden">
               <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/30"></div>
            </div>
            <span>4G</span>
            <span>48%</span>
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#001c40] px-4 pt-2 pb-12 relative z-30">
          <div className="flex items-center justify-between text-white">
            <Menu className="h-6 w-6" />
            <span className="font-bold tracking-widest text-sm">EMPLINKED</span>
            <div className="w-6" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Body Content overlapping header */}
        <div className="flex-1 px-4 -mt-6 relative z-40 overflow-hidden flex flex-col">
          
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-3.5 flex items-center justify-between mb-4 shrink-0">
            <div>
              <h3 className="font-bold text-[#001c40] text-[15px] leading-tight">Alex Johnson</h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5 tracking-wider">USER ID: 1013</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                <Image src="https://picsum.photos/seed/avatar1/100/100" alt="User" width={40} height={40} className="object-cover" />
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-4 shrink-0">
            <div className="flex justify-between items-center mb-2.5">
              <h4 className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">Categories</h4>
              <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center">
                <ChevronRight className="h-3 w-3 text-slate-500" />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="w-[18%] aspect-square rounded-lg bg-[#22c55e] flex items-center justify-center shadow-sm">
                <UserCircle className="h-5 w-5 text-white" />
              </div>
              <div className="w-[18%] aspect-square rounded-lg bg-[#0ea5e9] flex items-center justify-center shadow-sm">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="w-[18%] aspect-square rounded-lg bg-[#ec4899] flex items-center justify-center shadow-sm relative">
                <Calendar className="h-5 w-5 text-white" />
                {activeScreen === "leave" && <div className="absolute -bottom-2 w-4 h-1 rounded-full bg-[#ec4899]"></div>}
              </div>
              <div className="w-[18%] aspect-square rounded-lg bg-[#eab308] flex items-center justify-center shadow-sm relative">
                <Bell className="h-5 w-5 text-white" />
                {activeScreen === "notification" && <div className="absolute -bottom-2 w-4 h-1 rounded-full bg-[#eab308]"></div>}
              </div>
              <div className="w-[18%] aspect-square rounded-lg bg-[#ef4444] flex items-center justify-center shadow-sm relative">
                <Megaphone className="h-5 w-5 text-white" />
                {activeScreen === "alert" && <div className="absolute -bottom-2 w-4 h-1 rounded-full bg-[#ef4444]"></div>}
              </div>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden pb-6 scrollbar-hide relative">
            
            {/* START DUTY SCREEN */}
            <div className={`absolute inset-0 transition-all duration-500 ${activeScreen === "duty" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
              <div className="flex justify-between bg-white p-3 rounded-xl shadow-sm mb-4">
                <div className="text-center">
                  <div className="font-bold text-[#001c40] text-lg">0</div>
                  <div className="text-[9px] text-slate-500">Days On duty</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#001c40] text-lg">0</div>
                  <div className="text-[9px] text-slate-500">Late Start</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#001c40] text-lg">0</div>
                  <div className="text-[9px] text-slate-500">Leave</div>
                </div>
              </div>

              <h4 className="text-[11px] font-bold text-slate-500 tracking-wide uppercase mb-2">Duties</h4>
              <div className="bg-white p-3.5 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-semibold text-slate-600">10-08-2022 - TEST SHIVA</span>
                  <button className="bg-[#22c55e] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Start Duty
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="text-sm font-bold text-[#001c40]">17:00</div>
                    <div className="text-[9px] text-slate-500 mb-2">Log in Time</div>
                    <div className="text-[8px] text-slate-400">Branch</div>
                    <div className="text-[10px] font-bold text-slate-700">A-work unit</div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="text-sm font-bold text-[#001c40]">08:00</div>
                    <div className="text-[9px] text-slate-500 mb-2">Log Out Time</div>
                    <div className="text-[8px] text-slate-400">Post</div>
                    <div className="text-[10px] font-bold text-slate-700">Shiva Home</div>
                  </div>
                </div>
              </div>
            </div>

            {/* LEAVE STATUS SCREEN */}
            <div className={`absolute inset-0 transition-all duration-500 ${activeScreen === "leave" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
              <h4 className="text-[11px] font-bold text-slate-500 tracking-wide uppercase mb-2">My Leaves</h4>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#001c40]">1 day Leave</span>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-400">22nd, Jun 2022</div>
                      <div className="text-[9px] text-slate-500 flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-2.5 h-2.5" /> 17:12
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex justify-between items-center">
                    <div>
                      <div className="text-[9px] text-slate-400">Status</div>
                      <div className="text-[11px] font-bold text-[#eab308]">Pending</div>
                    </div>
                    <button className="bg-[#001c40] text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                      View
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#001c40]">1 day Leave</span>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-400">30th, May 2022</div>
                      <div className="text-[9px] text-slate-500 flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-2.5 h-2.5" /> 15:13
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex justify-between items-center">
                    <div>
                      <div className="text-[9px] text-slate-400">Status</div>
                      <div className="text-[11px] font-bold text-[#22c55e]">Approved</div>
                    </div>
                    <button className="bg-[#001c40] text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* EMERGENCY ALERT SCREEN */}
            <div className={`absolute inset-0 transition-all duration-500 ${activeScreen === "alert" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
              <h4 className="text-[11px] font-bold text-slate-500 tracking-wide uppercase mb-3">Alerts</h4>
              
              <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-3">
                <button className="w-full bg-[#ef4444] text-white font-bold py-3.5 rounded-lg shadow-sm text-sm uppercase tracking-wide">
                  High
                </button>
                <button className="w-full bg-[#f97316] text-white font-bold py-3.5 rounded-lg shadow-sm text-sm uppercase tracking-wide">
                  Medium
                </button>
                <button className="w-full bg-[#eab308] text-white font-bold py-3.5 rounded-lg shadow-sm text-sm uppercase tracking-wide">
                  Low
                </button>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button className="w-full bg-white border-2 border-[#001c40] text-[#001c40] font-bold py-2.5 rounded-lg text-sm uppercase tracking-wide">
                    Alert
                  </button>
                </div>
              </div>
            </div>

            {/* NOTIFICATIONS SCREEN */}
            <div className={`absolute inset-0 transition-all duration-500 ${activeScreen === "notification" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
              <h4 className="text-[11px] font-bold text-slate-500 tracking-wide uppercase mb-2">Notifications</h4>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-[#ef4444]" />
                    <span className="text-xs font-bold text-[#001c40] flex-1">Emergency Alert</span>
                    <span className="text-[9px] text-slate-400">26-05-2022</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    There is an emergency with HIGH severity in your location Region: Altitude branch: A-work unit.
                    Alert raised by Shiva Baira EmployeeId:AI0001
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-[#ef4444]" />
                    <span className="text-xs font-bold text-[#001c40] flex-1">Emergency Alert</span>
                    <span className="text-[9px] text-slate-400">07-03-2022</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    There is an emergency with MEDIUM severity in your location Region: Altitude branch: A-work unit.
                    Alert raised by Raju B N EmployeeId:AI0002
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
