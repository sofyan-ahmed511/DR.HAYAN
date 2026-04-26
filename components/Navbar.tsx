'use client';

import { useState, useEffect } from 'react';
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
      <div className="fixed top-0 inset-x-0 z-[100] flex justify-center pointer-events-none">
        <header
          className={`pointer-events-auto w-full transition-all duration-500 ${
            isNavSolid
              ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-4'
              : 'bg-transparent py-6 md:py-8'
          }`}
        >
          <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <h1 className="font-serif font-black text-2xl md:text-3xl text-[#1A1A1A] tracking-tight flex items-baseline">
              <span className="text-xl md:text-2xl mr-1.5 font-bold">DR.</span>
              <span className="italic">Hayan</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-8"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`text-[14px] font-medium transition-all relative py-2 ${
                  pathname === link.href 
                    ? 'text-[#1A1A1A]' 
                    : 'text-gray-500 hover:text-[#1A1A1A]'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E05D36]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {/* Cases Mega Menu Trigger */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setCasesDropdownOpen(true);
                setHoveredLink('cases');
              }}
              onMouseLeave={() => setCasesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-[14px] font-medium transition-all py-2 relative ${
                  pathname.startsWith('/cases') || casesDropdownOpen
                    ? 'text-[#1A1A1A]' 
                    : 'text-gray-500 hover:text-[#1A1A1A]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Clinical Cases
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${casesDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
                {pathname.startsWith('/cases') && !casesDropdownOpen && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E05D36]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:border-[#1A1A1A] text-[#1A1A1A] px-6 py-2.5 rounded-full font-medium text-[14px] transition-all hover:bg-[#1A1A1A] hover:text-white flex items-center gap-2"
            >
              Contact us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center transition-all rounded-full border border-gray-200 text-[#1A1A1A] hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mega Menu Dropdown inside the header */}
        <AnimatePresence>
          {casesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-slate-200/50 hidden lg:block z-[-1]"
              onMouseEnter={() => setCasesDropdownOpen(true)}
              onMouseLeave={() => setCasesDropdownOpen(false)}
            >
              <div className="container mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                        className="relative h-20 lg:h-[88px] rounded-2xl overflow-hidden group/item shadow-sm border border-slate-200 bg-white block"
                      >
                        {/* Image Container */}
                        <div className="absolute inset-y-0 left-0 w-[40%] transition-[width] duration-300 ease-out group-hover/item:w-full z-0 overflow-hidden bg-slate-100">
                          <Image 
                            src={category.iconImg || category.image} 
                            alt={category.title} 
                            fill 
                            className="object-cover" 
                            referrerPolicy="no-referrer" 
                          />
                          {/* Dark overlay that fades in only on hover */}
                          <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Text Content */}
                        <div className="absolute inset-y-0 right-0 w-[60%] transition-[width] duration-300 ease-out group-hover/item:w-full flex items-center justify-center p-3 z-10 pointer-events-none">
                          <span className="font-bold text-slate-700 text-xs lg:text-[14px] leading-tight text-center tracking-wide group-hover/item:text-white group-hover/item:text-[16px] group-hover/item:font-serif transition-colors duration-300 drop-shadow-sm">
                            {category.title}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </div>

    {/* Mobile Menu (Sidebar) */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-[70] overflow-y-auto lg:hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] border-r border-slate-100"
          >
            <div className="p-8 pt-28 flex flex-col h-full">
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
                          <div className="absolute inset-y-0 left-0 w-[40%] transition-[width] duration-300 ease-out group-hover/mitem:w-full z-0 overflow-hidden bg-slate-100">
                            <Image 
                              src={category.iconImg || category.image} 
                              alt={category.title} 
                              fill 
                              className="object-cover" 
                              referrerPolicy="no-referrer" 
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover/mitem:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Text Content */}
                          <div className="absolute inset-y-0 right-0 w-[60%] transition-[width] duration-300 ease-out group-hover/mitem:w-full flex items-center justify-center p-2 z-10 pointer-events-none">
                            <span className="font-bold text-slate-700 text-[11px] xs:text-xs leading-tight text-center tracking-wide group-hover/mitem:text-white group-hover/mitem:text-[14px] group-hover/mitem:font-serif transition-colors duration-300 drop-shadow-sm">
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
