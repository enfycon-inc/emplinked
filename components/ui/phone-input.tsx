"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { countries, getEmojiFlag, TCountryCode } from "countries-list";

type Country = {
  name: string;
  code: string;
  dialCode: string;
  flagUrl: string;
};

const COUNTRIES: Country[] = (Object.keys(countries) as TCountryCode[]).map((code) => {
  const data = countries[code];
  return {
    name: data.name,
    code: code,
    dialCode: `+${data.phone[0]}`,
    flagUrl: `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${code.toLowerCase()}.svg`
  };
}).sort((a, b) => a.name.localeCompare(b.name));

interface PhoneInputProps {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PhoneInput({ name, value, onChange }: PhoneInputProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const defaultCountry = COUNTRIES.find(c => c.code === "IN") || COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dialCode.includes(searchQuery)
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Input Field Container */}
      <div 
        className="flex items-center w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 focus-within:ring-1 focus-within:ring-blue-700 focus-within:border-blue-700 transition-all h-12 overflow-hidden"
      >
        {/* Flag Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 h-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors focus:outline-none bg-slate-900/5 dark:bg-white/5 border-r border-slate-200 dark:border-slate-800"
        >
          <img src={selectedCountry.flagUrl} alt={selectedCountry.code} className="w-5 h-[14px] rounded-[2px] shadow-sm object-cover bg-slate-200" />
          <ChevronDown className="h-3 w-3 text-slate-400" />
        </button>

        {/* Dial Code & Number Input */}
        <div className="flex flex-1 items-center px-3 h-full">
          <span className="text-slate-900 dark:text-slate-100 font-medium text-sm mr-2 select-none">
            {selectedCountry.dialCode}
          </span>
          <input
            type="hidden"
            name={`${name}Code`}
            value={selectedCountry.dialCode}
          />
          <input
            type="tel"
            name={name}
            value={value}
            onChange={onChange}
            className="flex-1 bg-transparent outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 w-full"
            placeholder="555-000-0000"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[280px] bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] shadow-2xl z-50 overflow-hidden text-slate-200">
          {/* Search Box */}
          <div className="p-3 border-b border-[#2a2a2a]">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1a1a] text-sm text-slate-200 placeholder:text-slate-500 rounded-md pl-9 pr-3 py-2 border border-blue-600/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                autoFocus
              />
            </div>
          </div>

          {/* Country List */}
          <div className="max-h-[260px] overflow-y-auto custom-scrollbar">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#2a2a2a] transition-colors text-left border-b border-[#2a2a2a] last:border-0 ${
                    selectedCountry.code === country.code ? "bg-[#2a2a2a]" : ""
                  }`}
                >
                  <img src={country.flagUrl} alt={country.code} className="w-5 h-[14px] rounded-[2px] shadow-sm object-cover bg-slate-200 flex-shrink-0" />
                  <span 
                    className={`text-sm ${
                      selectedCountry.code === country.code 
                        ? "text-rose-400/90 font-medium" 
                        : "text-slate-200"
                    }`}
                  >
                    {country.name}
                  </span>
                  <span className={`text-sm ml-auto ${
                      selectedCountry.code === country.code 
                        ? "text-slate-200 font-bold" 
                        : "text-slate-400"
                    }`}>
                    {country.dialCode}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-400 text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
          border: 2px solid #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}} />
    </div>
  );
}
