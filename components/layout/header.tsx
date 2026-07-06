"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDarkHero = pathname !== "/";
  const isLightHero = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-sm py-1" 
          : "bg-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-700/20 group-hover:scale-105 transition-transform">
            E
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isDarkHero && !scrolled ? "text-white" : "text-slate-900 dark:text-white"}`}>
            Emplinked
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-colors duration-300 ${scrolled ? "bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/50" : isDarkHero ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 backdrop-blur-md"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm px-4 py-1.5 rounded-full transition-all duration-300 font-medium ${
                pathname === link.href
                  ? (isDarkHero && !scrolled) 
                    ? "bg-white/20 text-white shadow-sm border border-white/20 backdrop-blur-md"
                    : "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700"
                  : (isDarkHero && !scrolled)
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50/80 dark:hover:bg-slate-800/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/book-demo">
            <Button variant="primary" size="sm" className="shadow-md shadow-blue-700/20 group">
              Book a Demo
              <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors duration-300 ${isDarkHero && !scrolled ? "text-slate-200 hover:text-white hover:bg-white/10" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 px-4 py-4 space-y-3 shadow-xl absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                pathname === link.href 
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400" 
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 dark:border-slate-800 mt-2">
            <Link href="/book-demo" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full justify-center">Book a Demo</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
