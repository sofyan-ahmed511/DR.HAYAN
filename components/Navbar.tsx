'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Smile, PlayCircle, Star, Phone, ArrowLeft, Sparkles, Activity, Stethoscope, HeartPulse, ArrowUpDown, ArrowLeftRight, Scissors, Shield, ShieldCheck, AlertCircle, Syringe, Users, Baby, User, AlignJustify, MoveHorizontal, MoveDiagonal, SmilePlus, AlertTriangle, Layers, ScanLine } from 'lucide-react';
import { doctorInfo } from '@/lib/doctorData';
import { caseCategories } from '@/lib/casesData';

const iconMap: Record<string, any> = {
  Activity, Stethoscope, HeartPulse, ArrowUpDown, ArrowLeftRight, Scissors, Shield, ShieldCheck, Smile, AlertCircle, Syringe, Users, Baby, User, AlignJustify, MoveHorizontal, MoveDiagonal, SmilePlus, AlertTriangle, Layers, ScanLine
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [casesDropdownOpen, setCasesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openCasesMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setCasesDropdownOpen(true);
    setHoveredLink('cases');
  };

  const closeCasesMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCasesDropdownOpen(false);
      if (hoveredLink === 'cases') setHoveredLink(null);
    }, 300); // 300ms delay to safely bridge the gap
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Guidance', href: '/guidance' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  const isHomePage = pathname === '/';
  const isNavSolid = !isHomePage || isScrolled || mobileMenuOpen;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: isHomePage ? 1.0 : 0, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-[100] flex justify-center pointer-events-none pt-4 px-4 sm:px-6"
      >
        <header
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-[2rem] md:rounded-full ${
            isNavSolid
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 py-3 px-4 md:px-6'
              : 'bg-white/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-white/20 py-4 px-4 md:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-28 h-9 md:w-36 md:h-11">
                <Image 
                  src="https://i.postimg.cc/mD6PKqQD/Gemini-Generated-Image-fnac9nfnac9nfnac-1-removebg-preview.png" 
                  alt="Dr. Hayan Logo" 
                  fill 
                  sizes="144px"
                  priority
                  className="object-contain object-left border-0" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full p-1.5 border border-white/40 shadow-inner"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className={`text-[13px] font-medium transition-all relative px-5 py-2.5 rounded-full ${
                    pathname === link.href 
                      ? 'text-white bg-[#1A1A1A] shadow-md' 
                      : 'text-gray-600 hover:text-[#1A1A1A] hover:bg-white/60'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}

              {/* Cases Mega Menu Trigger */}
              <div
                className="relative group"
                onMouseEnter={openCasesMenu}
                onMouseLeave={closeCasesMenu}
              >
                <button
                  className={`flex items-center gap-1.5 text-[13px] font-medium transition-all px-5 py-2.5 rounded-full relative ${
                    pathname.startsWith('/cases') || casesDropdownOpen
                      ? 'text-white bg-[#1A1A1A] shadow-md' 
                      : 'text-gray-600 hover:text-[#1A1A1A] hover:bg-white/60'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Clinical Cases
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${casesDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-[#1A1A1A] px-6 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-lg shadow-primary/30 flex items-center gap-2 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center transition-all rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/50 text-[#1A1A1A] hover:bg-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mega Menu Dropdown inside the header bounds logic, updated to floating curved panel */}
          <AnimatePresence>
            {casesDropdownOpen && (
              <div 
                className="absolute top-full pt-4 left-0 w-full hidden lg:block z-50 pointer-events-auto"
                onMouseEnter={openCasesMenu}
                onMouseLeave={closeCasesMenu}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/80 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/60 rounded-[2rem] overflow-hidden p-3"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {caseCategories.map((category, index) => {
                      return (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/cases/${category.id}`}
                            className="relative h-28 lg:h-32 rounded-2xl overflow-hidden group/item shadow-sm border border-slate-100 bg-slate-900 block"
                          >
                            {/* Image Container */}
                            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-900">
                              <Image 
                                src={category.iconImg || category.image} 
                                alt={category.title} 
                                fill 
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover opacity-80 group-hover/item:scale-110 group-hover/item:opacity-100 transition-all duration-700" 
                                referrerPolicy="no-referrer" 
                              />
                            </div>
                            
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-slate-900/40 group-hover/item:bg-slate-900/60 transition-colors duration-400 z-10" />
                            
                            {/* Text Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 z-20 pointer-events-none">
                              <span className="font-bold text-white text-[14px] lg:text-[16px] leading-tight text-center drop-shadow-md group-hover/item:scale-105 transition-transform duration-300">
                                {category.title}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </header>
      </motion.div>

    {/* Mobile Menu (Sidebar) */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: '-100%', scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: '-100%', scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-screen h-[100dvh] bg-white z-[70] overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="p-8 pt-24 flex flex-col h-full relative">
              {/* Close Button inside Sidebar */}
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/50 hover:bg-slate-200 text-[#1A1A1A] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">Menu</p>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between group text-2xl font-display font-black p-4 rounded-2xl transition-all ${
                        pathname === link.href ? 'bg-primary/5 text-primary' : 'text-secondary hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity rotate-180" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">Clinical Cases</p>
                <div className="grid grid-cols-2 gap-3 px-2">
                  {caseCategories.map((category, index) => {
                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navLinks.length + index) * 0.05 }}
                      >
                        <Link
                          href={`/cases/${category.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="relative h-20 rounded-xl overflow-hidden group/mitem border border-slate-200 bg-white shadow-sm block"
                        >
                          {/* Image Container */}
                          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-100">
                            <Image sizes="(max-width: 768px) 100vw, 400px" 
                              src={category.iconImg || category.image} 
                              alt={category.title} 
                              fill 
                              className="object-cover" 
                              referrerPolicy="no-referrer" 
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-slate-900/40 group-hover/mitem:bg-slate-900/60 transition-colors duration-300" />
                          </div>
                          
                          {/* Text Content */}
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center p-3 z-10 pointer-events-none">
                            <span className="font-bold text-white text-[13px] sm:text-[15px] leading-tight text-center tracking-wide group-hover/mitem:scale-105 transition-transform duration-300 drop-shadow-md">
                              {category.title}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-12"
              >
                <a
                  href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white text-center px-8 py-5 rounded-[2rem] font-black shadow-xl flex items-center justify-center gap-3 hover:bg-primary transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
  );
}

