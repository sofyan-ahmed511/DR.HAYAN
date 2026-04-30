'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { doctorInfo } from '@/lib/doctorData';

export default function VisionaryStats() {
  const stats = [
    { text: "With over a decade of specialized orthodontic experience, we deliver precision and exceptional care.", value: "15+", label: "Years of Excellence" },
    { text: "Rely on an expert team utilizing the latest advancements in digital dentistry to shape your smile.", value: "50+", label: "Specialized Courses" },
    { text: "Thousands of patients have entrusted us with their smiles, resulting in life-changing transformations.", value: "5K+", label: "Happy Clients" },
  ];

  const carouselImages = [
    "https://images.unsplash.com/photo-1590680426861-12591a4593fc?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=400&q=80"
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB] relative z-20">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        {/* Top Stats Pills */}
        <div className="flex flex-col gap-4 md:gap-6 mb-24 w-full xl:max-w-7xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="w-full bg-white rounded-3xl lg:rounded-full px-6 py-6 md:py-8 md:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:scale-[1.01] transition-transform duration-500"
            >
              <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium mb-6 lg:mb-0 leading-relaxed lg:pr-8">
                {stat.text}
              </p>
              <div className="flex flex-col items-start lg:items-end lg:text-right shrink-0 min-w-[120px]">
                <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-light text-[#1A1A1A] tracking-tighter mb-1 flex items-start">
                  {stat.value.replace('+', '')}
                  <span className="text-3xl md:text-4xl lg:text-5xl text-primary ml-1 font-medium mt-1">+</span>
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Split Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center w-full mx-auto">
          {/* Left Text */}
          <div className="pb-8">
            <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-slate-300"></span> 01
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.1] md:leading-[1.05] mb-8 md:mb-12">
              we specialize in <br className="hidden md:block"/> designing and crafting <br className="hidden lg:block"/> high-quality <span className="text-primary italic">smiles</span> <br className="hidden lg:block"/> that blend aesthetics.
            </h2>
            <Link href="/about" className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-bold text-[#1A1A1A] text-sm uppercase tracking-wider group-hover:text-primary transition-colors">Learn More</span>
            </Link>
          </div>

          {/* Right Image Composition */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] overflow-hidden bg-white shadow-2xl aspect-[4/3] relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                alt="Clinic Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>

            {/* Floating nested card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-10 right-4 md:right-10 bg-[#1A1A1A] text-white p-4 md:p-6 rounded-3xl md:rounded-[2rem] shadow-2xl flex items-center gap-6 w-[300px] md:w-[380px] border border-white/10"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 relative bg-white/10">
                 <AnimatePresence mode="popLayout">
                   <motion.div
                     key={currentIdx}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.8 }}
                     className="absolute inset-0"
                   >
                     <Image 
                      src={carouselImages[currentIdx]}
                      alt="Detail"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">/0{currentIdx + 1}</div>
                <h4 className="font-semibold text-lg md:text-xl leading-tight mb-3">Designing in Solution</h4>
                <div className="flex gap-1">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-1 rounded-full ${currentIdx === idx ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'} transition-all duration-300`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
