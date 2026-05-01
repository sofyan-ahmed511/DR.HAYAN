'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { doctorInfo } from '@/lib/doctorData';

// NEW COMPONENTS
import MarqueeSection from '@/components/home/MarqueeSection';
import VisionaryStats from '@/components/home/VisionaryStats';
import ThreeSteps from '@/components/home/ThreeSteps';
import Transformations from '@/components/home/Transformations';
import WellnessJourney from '@/components/home/WellnessJourney';
import TestimonialsVisual from '@/components/home/TestimonialsVisual';
import EnhancedFAQ from '@/components/home/EnhancedFAQ';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden w-full">
      {/* Hero Section - Skyline Reference Style (Unchanged format) */}
      <section ref={heroRef} className="relative min-h-screen bg-white text-[#1A1A1A] pt-32 pb-12 overflow-hidden font-sans">
        {/* Subtle background lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-between px-12 opacity-5">
          <div className="w-px h-full bg-black"></div>
          <div className="w-px h-full bg-black"></div>
          <div className="w-px h-full bg-black"></div>
          <div className="w-px h-full bg-black"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-32 opacity-5">
          <div className="w-full h-px bg-black"></div>
          <div className="w-full h-px bg-black"></div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-20 mx-auto relative z-10 h-full flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center h-full">
            
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[3rem] leading-[1.05] sm:text-5xl md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-serif text-[#1A1A1A] tracking-tight mb-8"
                >
                  Orthodontic<br />
                  <span className="inline-block mt-2 italic bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-slate-400">
                    Specialty
                  </span>
                </motion.h1>
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-[#1A1A1A] px-2 py-2 pr-6 rounded-[2.5rem] font-semibold text-sm md:text-base transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] group hover:-translate-y-1"
                >
                  <span className="bg-white/80 w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 shadow-sm transition-transform">
                    <ArrowLeft className="w-4 h-4 rotate-135 text-[#1A1A1A]" />
                  </span>
                  Book Consultation
                </motion.a>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-sm relative z-10"
              >
                <p className="text-[15px] xl:text-base text-gray-500 leading-relaxed mb-6">
                  Where medical expertise meets artistic vision. Dr. Hayan delivers world-class orthodontic solutions with a focus on precision and patient experience.
                </p>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a href="#" className="relative group w-12 h-12 rounded-[1.2rem] border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1A1A1A] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:rounded-[1rem] transition-all duration-300">
                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-[#0077b5] text-white text-xs font-bold py-1 px-2.5 rounded shadow-lg whitespace-nowrap z-50">
                      LinkedIn
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0077b5]"></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="relative group w-12 h-12 rounded-[1.2rem] border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1A1A1A] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:rounded-[1rem] transition-all duration-300">
                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-gradient-to-r from-[#ee2a7b] to-[#6228d7] text-white text-xs font-bold py-1 px-2.5 rounded shadow-lg whitespace-nowrap z-50">
                      Instagram
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#6228d7]"></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href={`https://wa.me/${doctorInfo.contact.whatsapp}`} className="relative group w-12 h-12 rounded-[1.2rem] border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1A1A1A] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:rounded-[1rem] transition-all duration-300">
                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-[#25D366] text-white text-xs font-bold py-1 px-2.5 rounded shadow-lg whitespace-nowrap z-50">
                      WhatsApp
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#25D366]"></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.128.554 4.204 1.603 6.035L.141 23.859l5.94-1.558c1.782.955 3.791 1.458 5.845 1.458 6.646 0 12.036-5.388 12.036-12.035S18.677 0 12.031 0zm0 21.745c-1.802 0-3.565-.483-5.111-1.4l-.367-.218-3.793.994.994-3.793-.238-.38a9.907 9.907 0 0 1-1.521-5.303c0-5.467 4.452-9.916 9.919-9.916s9.916 4.449 9.916 9.916-4.449 9.916-9.916 9.916zm5.437-7.426c-.297-.149-1.764-.871-2.037-.971-.274-.099-.472-.149-.67.149-.199.297-.769.971-.943 1.169-.174.199-.348.223-.645.074-.298-.149-1.258-.464-2.398-1.482-.888-.792-1.487-1.77-1.662-2.068-.174-.298-.018-.458.131-.607.134-.134.298-.348.447-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.024-.521-.074-.149-.669-1.614-.919-2.21-.242-.581-.487-.502-.669-.511-.174-.009-.374-.009-.574-.009-.2 0-.522.074-.795.371-.274.299-1.044 1.021-1.044 2.489 0 1.468 1.069 2.887 1.218 3.086.149.198 2.083 3.197 5.097 4.498.718.312 1.278.498 1.716.637.721.229 1.378.196 1.895.118.577-.087 1.764-.722 2.012-1.419.248-.697.248-1.294.174-1.419-.074-.125-.274-.199-.574-.348z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Organic Fluid Image */}
            <div className="lg:col-span-4 flex justify-center relative h-full items-center py-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%", 
                    "30% 70% 70% 30% / 30% 30% 70% 70%", 
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ] 
                }}
                transition={{ 
                  opacity: { duration: 1, ease: "easeOut" },
                  scale: { duration: 1, ease: "easeOut" },
                  borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
                }}
                className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] overflow-hidden shrink-0 z-20 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                <Image
                  src="https://i.postimg.cc/d3gxxH71/IMG-7809.png"
                  alt="Dr. Hayan"
                  fill
                  className="object-cover object-center scale-[1.05]"
                  priority
                />  
              </motion.div>
              {/* Organic glowing background shapes */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-[60%_40%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none z-10"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300/20 rounded-[30%_70%_40%_60%/50%_30%_70%_50%] blur-[80px] pointer-events-none z-0"
              ></motion.div>
            </div>

            {/* Right Column - Floating Organic Chips */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start h-full py-10 pl-4 md:pl-12 relative z-30">
              
              <div className="relative flex flex-col gap-5 md:gap-7 ml-2 md:ml-6 lg:-ml-12">
                
                {/* Organic connecting dots instead of rigid lines */}
                <div className="absolute -left-6 top-[20%] bottom-[20%] flex flex-col justify-between items-center opacity-30 z-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                </div>

                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] xl:max-w-[460px] bg-white/70 backdrop-blur-2xl rounded-full border border-white/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] p-2 sm:p-3 pr-5 sm:pr-8 flex items-center gap-4 hover:scale-[1.02] hover:bg-white/90 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 relative bg-gradient-to-tr from-slate-50 to-white rounded-full overflow-hidden flex items-center justify-center p-2.5 shadow-inner border border-white shadow-slate-200/50">
                    <Image 
                      src="https://i.postimg.cc/288rN1Kd/Gemini-Generatervwj3orvwj3orvwj-removebg-preview.png" 
                      alt="Advanced 3D Technology" 
                      fill 
                      className="object-contain scale-[1.15] group-hover:scale-[1.25] transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="py-1">
                    <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base leading-tight mb-0.5">Advanced 3D Technology</h4>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-snug">Digital Precision Scanning for accurate treatment.</p>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] xl:max-w-[460px] lg:translate-x-8 bg-white/70 backdrop-blur-2xl rounded-full border border-white/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] p-2 sm:p-3 pr-5 sm:pr-8 flex items-center gap-4 hover:scale-[1.02] hover:bg-white/90 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 relative bg-gradient-to-tr from-slate-50 to-white rounded-full overflow-hidden flex items-center justify-center p-2.5 shadow-inner border border-white shadow-slate-200/50">
                    <Image 
                      src="https://i.postimg.cc/QM5rJ1Hg/Gemini-Generated-Image-l5mlosl5mlosl5ml-removebg-preview.png" 
                      alt="Invisible Braces Solutions" 
                      fill 
                      className="object-contain scale-[1.25] group-hover:scale-[1.35] transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="py-1">
                    <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base leading-tight mb-0.5">Invisible Braces</h4>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-snug">Aesthetic, comfortable, and discreet treatment.</p>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] xl:max-w-[460px] bg-white/70 backdrop-blur-2xl rounded-full border border-white/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] p-2 sm:p-3 pr-5 sm:pr-8 flex items-center gap-4 hover:scale-[1.02] hover:bg-white/90 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 relative bg-gradient-to-tr from-slate-50 to-white rounded-full overflow-hidden flex items-center justify-center p-2.5 shadow-inner border border-white shadow-slate-200/50">
                    <Image 
                      src="https://i.postimg.cc/cC1yWzT5/Gemini-Image-rvwj3orvwj3orvwj-removebg-preview.png" 
                      alt="Proven Results" 
                      fill 
                      className="object-contain scale-[1.15] group-hover:scale-[1.25] transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="py-1">
                    <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base leading-tight mb-0.5">Proven Results</h4>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-snug">Over 5000+ Successful Cases with exceptional outcomes.</p>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* NEW MODULAR SECTIONS REPLACING THE OLD ONES */}
      <MarqueeSection />
      <VisionaryStats />
      <ThreeSteps />
      <Transformations />
      <WellnessJourney />
      <TestimonialsVisual />
      <EnhancedFAQ />
      
    </div>
  );
}
