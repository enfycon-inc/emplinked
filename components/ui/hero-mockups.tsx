import React from "react";
import { 
  BarChart3, Users, Clock, DollarSign, Calendar, 
  MapPin, CheckCircle2, ChevronDown, Bell, Search, 
  Menu, Fingerprint, Activity
} from "lucide-react";

export function HeroMockupDisplay({ type }: { type: 'analytics' | 'mobile' | 'payroll' | 'scheduling' }) {
  if (type === 'analytics') {
    return (
      <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col font-sans text-slate-800 dark:text-slate-200 text-[10px] sm:text-xs border border-slate-200 dark:border-slate-800 shadow-2xl">
        {/* Top Header */}
        <div className="p-4 flex justify-between items-start bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-sm sm:text-base">Dashboard</h3>
            <p className="text-slate-500 text-[8px] sm:text-[10px]">Attendance Statistics</p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-blue-600 text-white rounded-md font-bold text-[8px] sm:text-[10px] flex items-center shadow-sm">
              Credits: 991 +
            </div>
            <div className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md font-semibold text-[8px] sm:text-[10px] flex items-center shadow-sm">
              Change Period: Today
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
          
          {/* KPI Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Card 1: Attendance */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-600 dark:text-blue-400">
                    <Users className="h-3 w-3" />
                  </div>
                  Attendance
                </div>
                <div className="text-xl font-black">142 <span className="text-slate-400 text-xs font-semibold">/ 150</span></div>
              </div>
              <div className="bg-blue-600 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 2: On Duty */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1 relative">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded text-orange-600 dark:text-orange-400">
                    <Clock className="h-3 w-3" />
                  </div>
                  On Duty
                </div>
                <div className="text-xl font-black">142</div>
                <div className="absolute bottom-3 right-3 text-[8px] font-semibold text-slate-400">App - 142</div>
              </div>
              <div className="bg-orange-500 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 3: Vacant Posts */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-sky-100 dark:bg-sky-900/30 rounded text-sky-600 dark:text-sky-400">
                    <MapPin className="h-3 w-3" />
                  </div>
                  Vacant Posts
                </div>
                <div className="text-xl font-black">3</div>
              </div>
              <div className="bg-sky-500 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 4: Emergency Alerts */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-rose-100 dark:bg-rose-900/30 rounded text-rose-600 dark:text-rose-400">
                    <Bell className="h-3 w-3" />
                  </div>
                  Emergency Alerts
                </div>
                <div className="text-xl font-black">1</div>
              </div>
              <div className="bg-rose-500 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex-1 flex gap-3 mt-1 min-h-[120px]">
            {/* Employees Trend */}
            <div className="flex-grow bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-3 flex flex-col">
              <div className="font-bold mb-2">Employees Trend</div>
              <div className="flex-1 flex items-end gap-2 relative">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[6px] text-slate-400 pb-1">
                  <span>150</span><span>100</span><span>50</span>
                </div>
                <div className="ml-5 flex-1 flex items-end justify-between h-full border-b border-slate-100 dark:border-slate-800 gap-1 sm:gap-3 px-1">
                  {[20, 30, 50, 85, 110, 130, 140, 145].map((h, i) => (
                    <div key={i} className="flex-1 bg-orange-500 rounded-t-sm" style={{ height: `${(h/150)*100}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Attendance Status */}
            <div className="w-1/3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-3 flex flex-col">
              <div className="font-bold mb-2">Attendance Status</div>
              <div className="flex-1 flex items-center justify-around">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-[4px] border-emerald-500 flex items-center justify-center font-bold text-xs border-r-emerald-100 dark:border-r-emerald-900/50">
                    85%
                  </div>
                  <span className="text-[8px] text-emerald-600 dark:text-emerald-500 font-bold">On Time</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-[4px] border-orange-500 flex items-center justify-center font-bold text-xs border-t-orange-100 dark:border-t-orange-900/50">
                    10%
                  </div>
                  <span className="text-[8px] text-orange-600 dark:text-orange-500 font-bold">Late Start</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-200 dark:border-slate-800 shadow-2xl">
        {/* Phone Frame */}
        <div className="w-[220px] h-full max-h-[450px] bg-white dark:bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-800 dark:border-slate-700 shadow-2xl relative overflow-hidden flex flex-col font-sans text-slate-800 dark:text-slate-200">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-5 bg-slate-800 dark:bg-slate-700 rounded-b-2xl w-28 mx-auto z-20"></div>
          
          <div className="flex-1 overflow-hidden flex flex-col pt-7 pb-2 px-3 relative bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <Menu className="h-4 w-4" />
              <div className="font-black text-blue-600 dark:text-blue-500 text-[10px]">Emplinked</div>
              <Bell className="h-4 w-4" />
            </div>
            
            <div className="flex items-center gap-3 mb-6 bg-white dark:bg-slate-950 p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="h-10 w-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-black text-sm">JD</div>
              <div>
                <div className="font-bold text-xs text-slate-400">Good Morning,</div>
                <div className="font-black text-[13px] leading-tight">John Doe</div>
              </div>
            </div>

            {/* Huge Check In Button */}
            <div className="flex-1 flex flex-col items-center justify-center py-2">
              <div className="relative group cursor-pointer mb-6">
                <div className="absolute -inset-2 bg-emerald-500 rounded-full blur opacity-40 animate-pulse"></div>
                <div className="h-32 w-32 bg-emerald-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl relative z-10 border-4 border-white dark:border-slate-950 transition-transform transform hover:scale-105">
                  <Fingerprint className="h-10 w-10 mb-1" />
                  <span className="font-black text-sm tracking-widest">CHECK IN</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-950 shadow-sm border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full">
                <MapPin className="h-3 w-3 text-emerald-500" /> HQ Office, New York
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 mt-auto overflow-hidden flex flex-col">
              <div className="p-3 pb-2 flex items-center gap-2 font-bold text-[10px]">
                <div className="p-1 bg-blue-100 text-blue-600 rounded"><Clock className="h-3 w-3" /></div>
                Today's Shift
              </div>
              <div className="bg-blue-600 p-2 flex justify-between items-center text-[9px] font-bold text-white">
                <div>09:00 AM</div>
                <div className="h-[1px] w-8 bg-blue-400"></div>
                <div>05:00 PM</div>
              </div>
            </div>
          </div>
          {/* Home indicator */}
          <div className="h-1 w-1/3 bg-slate-300 dark:bg-slate-600 mx-auto rounded-full mb-2"></div>
        </div>
      </div>
    );
  }

  if (type === 'payroll') {
    return (
      <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden flex flex-col font-sans text-slate-800 dark:text-slate-200 text-[10px] sm:text-xs">
        {/* Top Nav */}
        <div className="h-10 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 bg-white dark:bg-slate-950">
          <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-500 text-sm">
            <DollarSign className="h-4 w-4" /> Emplinked Payroll
          </div>
          <div className="flex items-center gap-3 text-slate-400">
             <div className="px-2 py-1 bg-blue-600 text-white rounded text-[10px] font-semibold hover:bg-blue-700 cursor-pointer shadow-sm">
               Run Payroll
             </div>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-bold text-sm sm:text-base">Payroll Processing</h3>
              <p className="text-slate-500 text-[8px] sm:text-[10px]">Active Cycle</p>
            </div>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm flex items-center gap-1 text-[9px]">
                Filter <ChevronDown className="h-2 w-2" />
              </div>
              <div className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm flex items-center gap-1 text-[9px]">
                Export <ChevronDown className="h-2 w-2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            {/* Card 1: Gross Payroll */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded text-emerald-600 dark:text-emerald-400">
                    <DollarSign className="h-3 w-3" />
                  </div>
                  Gross Pay
                </div>
                <div className="text-xl font-black">$245,600</div>
              </div>
              <div className="bg-emerald-600 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 2: Deductions */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-rose-100 dark:bg-rose-900/30 rounded text-rose-600 dark:text-rose-400">
                    <DollarSign className="h-3 w-3" />
                  </div>
                  Deductions
                </div>
                <div className="text-xl font-black text-rose-500">-$42k</div>
              </div>
              <div className="bg-rose-500 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 3: Net Payable */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-600 dark:text-blue-400">
                    <DollarSign className="h-3 w-3" />
                  </div>
                  Net Payable
                </div>
                <div className="text-xl font-black text-blue-600">$203,300</div>
              </div>
              <div className="bg-blue-600 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                More info <span>→</span>
              </div>
            </div>

            {/* Card 4: Status */}
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
              <div className="p-3 flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-1">
                  <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded text-orange-600 dark:text-orange-400">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  Status
                </div>
                <div className="text-[13px] font-black text-orange-600 leading-tight mt-1">Pending<br/>Review</div>
              </div>
              <div className="bg-orange-500 text-white text-[8px] sm:text-[10px] px-3 py-2 flex justify-between items-center font-bold">
                Approve <span>→</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="grid grid-cols-5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-2 text-[9px] font-semibold text-slate-500 uppercase">
              <div className="col-span-2">Employee</div>
              <div>Gross</div>
              <div>Deductions</div>
              <div>Net Pay</div>
            </div>
            <div className="overflow-hidden flex-1">
              {[
                { name: "John Doe", role: "Software Engineer", gross: "$8,500.00", ded: "$1,200.00", net: "$7,300.00" },
                { name: "Sarah Jenkins", role: "Marketing Lead", gross: "$6,200.00", ded: "$950.00", net: "$5,250.00" },
                { name: "Michael Chen", role: "Product Manager", gross: "$7,800.00", ded: "$1,100.00", net: "$6,700.00" },
                { name: "Emma Wilson", role: "HR Specialist", gross: "$5,400.00", ded: "$700.00", net: "$4,700.00" },
              ].map((emp, i) => (
                <div key={i} className="grid grid-cols-5 border-b border-slate-100 dark:border-slate-800/50 p-2 text-[10px] items-center hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <div className="col-span-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-[8px]">{emp.name.charAt(0)}</div>
                    <div>
                      <div className="font-semibold">{emp.name}</div>
                      <div className="text-[8px] text-slate-400">{emp.role}</div>
                    </div>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">{emp.gross}</div>
                  <div className="text-rose-500">{emp.ded}</div>
                  <div className="font-semibold text-emerald-600">{emp.net}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Shift Scheduling
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col font-sans text-slate-800 dark:text-slate-200 text-[10px] sm:text-xs border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* Top Nav */}
      <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 bg-white dark:bg-slate-950">
        <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-500 text-sm">
          <Calendar className="h-4 w-4" /> Emplinked Scheduler
        </div>
        <div className="flex items-center gap-2">
           <div className="flex bg-slate-100 dark:bg-slate-900 rounded-md p-1 shadow-inner border border-slate-200 dark:border-slate-800">
             <div className="px-3 py-1 bg-blue-600 text-white shadow-sm rounded-md text-[10px] font-bold">Week</div>
             <div className="px-3 py-1 text-slate-500 text-[10px] font-bold">Month</div>
           </div>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="font-black text-sm sm:text-base">Current Week Schedule</div>
          <div className="px-3 py-1.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md shadow-sm flex items-center gap-1 text-[9px] font-bold text-slate-500">
            <MapPin className="h-3 w-3 text-orange-500" /> Main Facility <ChevronDown className="h-3 w-3 ml-1" />
          </div>
        </div>

        {/* Scheduler Grid */}
        <div className="flex-1 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex overflow-hidden">
          {/* Employee Column */}
          <div className="w-24 sm:w-32 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="h-8 border-b border-slate-200 dark:border-slate-800 flex items-center px-3 text-[9px] font-black text-slate-400 uppercase tracking-wider">Employee</div>
            {["John Doe", "Sarah Jenkins", "Michael Chen", "Emma Wilson"].map((name, i) => (
              <div key={name} className="h-12 border-b border-slate-100 dark:border-slate-800/50 flex flex-col justify-center px-3 text-[10px]">
                <span className="font-bold truncate text-slate-800 dark:text-slate-200">{name}</span>
                <span className="text-[8px] font-semibold text-slate-400">40h/wk</span>
              </div>
            ))}
          </div>
          {/* Days Columns */}
          <div className="flex-1 grid grid-cols-5">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
              <div key={day} className="border-r border-slate-100 dark:border-slate-800/50 flex flex-col">
                <div className="h-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center text-[9px] font-black text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-900/50">{day}</div>
                {/* Rows for each employee */}
                {[0, 1, 2, 3].map((empIdx) => {
                  const hasShift = (i + empIdx) % 4 !== 0; 
                  const isMorning = (i + empIdx) % 2 === 0;
                  
                  return (
                    <div key={empIdx} className="h-12 border-b border-slate-100 dark:border-slate-800/50 p-1">
                      {hasShift && (
                        <div className={`w-full h-full rounded border-l-[3px] flex flex-col justify-center px-1.5 shadow-sm bg-white dark:bg-slate-900 ${
                          isMorning 
                            ? 'border-l-blue-500 border-y-slate-200 border-r-slate-200 text-blue-700 dark:border-y-slate-800 dark:border-r-slate-800 dark:text-blue-400' 
                            : 'border-l-orange-500 border-y-slate-200 border-r-slate-200 text-orange-600 dark:border-y-slate-800 dark:border-r-slate-800 dark:text-orange-400'
                        }`}>
                          <span className="font-bold text-[8px]">{isMorning ? '09:00 - 17:00' : '14:00 - 22:00'}</span>
                          <span className="text-[7px] font-semibold truncate opacity-80">{isMorning ? 'Morning Shift' : 'Evening Shift'}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
