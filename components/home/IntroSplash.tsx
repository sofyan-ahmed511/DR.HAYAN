'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The total duration of the intro animation before it hides itself
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent so the main content can start animating in
    }, 300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FAFAFA] overflow-hidden"
        >
          {/* Subtle elegant organic background for intro splash */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }} 
            transition={{ opacity: { duration: 2 }, rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-slate-200/40 rounded-[60%_40%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: -360 }} 
            transition={{ opacity: { duration: 2 }, rotate: { duration: 50, repeat: Infinity, ease: "linear" } }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-100/30 rounded-[30%_70%_40%_60%/50%_30%_70%_50%] blur-[80px] pointer-events-none"
          ></motion.div>

          <div className="relative flex flex-col items-center justify-center z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-sans font-light text-[#1A1A1A] tracking-widest mb-1 uppercase">
                Hayaan
              </h1>
              <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] italic mb-4">
                Dr. Hayan
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                className="h-[1px] bg-[#1A1A1A]/30 w-full mb-3"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500"
              >
                Orthodontic Specialty
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
