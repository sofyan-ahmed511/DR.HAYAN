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
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FAFAFA] overflow-hidden"
        >
          {/* Subtle elegant organic background for intro splash */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ opacity: { duration: 1 }, scale: { duration: 1.5, ease: "easeOut" } }}
            style={{ background: 'radial-gradient(circle, rgba(226,232,240,0.6) 0%, rgba(226,232,240,0) 70%)' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ opacity: { duration: 1 }, scale: { duration: 1.5, ease: "easeOut" } }}
            style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, rgba(219,234,254,0) 70%)' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] pointer-events-none"
          ></motion.div>

          <div className="relative flex flex-col items-center justify-center z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-sans font-light text-[#1A1A1A] tracking-widest mb-1 uppercase">
                Dr.Hayan
              </h1>
              <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] italic mb-4">
                Orthodontic Specialty
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                className="h-[1px] bg-[#1A1A1A]/30 w-full mb-3"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500"
              >
                fixed your smile 
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
