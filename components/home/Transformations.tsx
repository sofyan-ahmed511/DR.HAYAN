'use client';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Transformations() {
  const [activeStage, setActiveStage] = useState<'before'|'during'|'after'>('after');

  const stages = {
    before: {
      label: "Initial State",
      img: "https://i.postimg.cc/9XdnW0S3/IMG-5558.jpg",
      desc: "Severe crowding and misalignment",
      color: "bg-slate-500",
      textColor: "text-slate-500",
      activeBg: "bg-slate-100"
    },
    
    after: {
      label: "Month 12 (Final)",
      img: "https://i.postimg.cc/XNfzVqhq/IMG-5566.jpg",
      desc: "Perfect occlusion and aesthetic smile",
      color: "bg-emerald-500",
      textColor: "text-emerald-600",
      activeBg: "bg-emerald-50"
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-white relative z-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 md:mb-6 leading-[1.1]">
            The Treatment <span className="font-serif italic font-light text-amber-400">Journey</span>
          </h2>
          <p className="text-white/60 font-medium text-sm md:text-base lg:text-lg max-w-xl mx-auto px-4 md:px-0">
            Follow the clinical progression from initial consultation, through the treatment phase, to the final perfected smile.
          </p>
        </div>

        {/* Interactive Viewer */}
        <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x py-2 px-2">
            {(Object.keys(stages) as Array<keyof typeof stages>).map((key) => {
              const stage = stages[key];
              const isActive = activeStage === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveStage(key)}
                  className={`flex items-start text-left gap-4 p-5 md:p-6 rounded-2xl transition-all duration-300 min-w-[260px] lg:min-w-0 snap-center border ${isActive ? 'bg-white text-[#1A1A1A] border-white shadow-xl scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'}`}
                >
                  <div className={`mt-1 w-3 h-3 rounded-full shrink-0 ${stage.color} ${isActive ? 'shadow-[0_0_15px_rgba(0,0,0,0.2)]' : ''}`}></div>
                  <div>
                    <h3 className={`font-bold uppercase tracking-widest text-xs md:text-sm mb-2 ${isActive ? stage.textColor : 'text-white/70'}`}>{stage.label}</h3>
                    <p className={`text-sm md:text-base leading-snug ${isActive ? 'text-slate-600 font-medium' : 'text-white/50 font-light'}`}>{stage.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3 h-[50vh] md:h-[60vh] lg:h-[70vh] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={stages[activeStage].img}
                  alt={stages[activeStage].label}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl mb-4`}>
                      <span className={`w-2 h-2 rounded-full ${stages[activeStage].color}`}></span>
                      {stages[activeStage].label}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
