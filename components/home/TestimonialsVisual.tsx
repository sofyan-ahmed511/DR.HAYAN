'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialsVisual() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      text: "The doctors were very professional and caring. Highly recommended clinic! Excellent facilities and very knowledgeable team. My experience was great.",
      name: "Sharon Ahmed",
      role: "CEO of Orello Agency",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "I was extremely anxious about getting braces as an adult, but the transparent aligners changed everything. The process was smooth.",
      name: "Michael Chen",
      role: "Software Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Dr. Hayan's attention to detail is unmatched. He explained every phase of the treatment with 3D models before we began.",
      name: "Sarah Jenkins",
      role: "Event Planner",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Transformed my smile in just 14 months! Unbelievable precision and zero extractions needed. Highly advise to come here.",
      name: "David Ross",
      role: "Entrepreneur",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        
        <div className="bg-[#FAF8F5] rounded-3xl md:rounded-[3rem] px-6 py-16 md:p-24 relative shadow-sm border border-[#F2EFE9] text-center w-full mx-auto">
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
          </button>
          <button 
            onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-black transition-colors"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Quote */}
          <div className="max-w-3xl mx-auto min-h-[180px] md:min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={active}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#2C3E50] leading-snug tracking-tight mb-8"
              >
                "{testimonials[active].text}"
              </motion.h3>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="font-medium text-[#1A2530] text-sm md:text-base">{testimonials[active].name}</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-widest mt-1">{testimonials[active].role}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Avatar Selector */}
          <div className="flex justify-center gap-2 md:gap-3 mt-12 md:mt-16">
            {testimonials.map((t, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden transition-all duration-300 ${active === i ? 'ring-2 ring-offset-2 ring-[#1A1A1A] ring-offset-[#FAF8F5] scale-110 shadow-lg' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`}
              >
                <Image src={t.img} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>

          {/* Dots below avatars */}
          <div className="flex justify-center gap-1.5 mt-6">
             {testimonials.map((_, i) => (
               <div key={i} className={`h-1 rounded-full transition-all duration-300 ${active === i ? 'w-4 bg-[#1A1A1A]' : 'w-1 bg-slate-300'}`}></div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
