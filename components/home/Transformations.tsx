'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Transformations() {
  return (
    <section className="py-24 md:py-32 bg-white relative z-20 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] mb-4 md:mb-6 leading-[1.1]">
            Stunning <span className="font-serif italic font-light">Transformations</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm md:text-base lg:text-lg max-w-xl mx-auto px-4 md:px-0">
            From initial consultation to the final reveal, our advanced treatments deliver results that exceed expectations in record time.
          </p>
        </div>

        {/* Polaroids / Overlapping Photos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 lg:-ml-12 mb-32 relative">
          
          {/* Connecting Arrow/SVG (Mocked with absolute positioning) */}
          <div className="hidden md:block absolute top-[60%] left-1/2 -translate-x-1/2 z-0 w-[200px] h-px border-b border-dashed border-slate-300"></div>

          {/* Before Polaroid */}
          <motion.div 
            initial={{ opacity: 0, rotate: -10, x: -50 }}
            whileInView={{ opacity: 1, rotate: -6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white p-4 md:p-6 pb-12 md:pb-16 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 z-10 w-[280px] md:w-[340px] relative hover:rotate-0 hover:scale-105 transition-all duration-500"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-slate-100">
               <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                alt="Before"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="text-center font-bold text-xl text-[#1A1A1A] uppercase tracking-widest">Before</h4>
          </motion.div>

          {/* After Polaroid */}
          <motion.div 
            initial={{ opacity: 0, rotate: 10, x: 50 }}
            whileInView={{ opacity: 1, rotate: 6, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="bg-white p-4 md:p-6 pb-12 md:pb-16 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(var(--primary),0.15)] border border-slate-100 z-20 w-[280px] md:w-[340px] md:-ml-8 relative hover:rotate-0 hover:scale-105 transition-all duration-500"
            style={{ transformOrigin: 'bottom left' }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-slate-100">
               <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                alt="After"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <h4 className="text-center font-bold text-xl text-primary uppercase tracking-widest">After</h4>
            
            {/* Callout badge */}
            <div className="absolute -bottom-6 -right-6 md:right-[-40px] bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-xl">
              12 Months
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
