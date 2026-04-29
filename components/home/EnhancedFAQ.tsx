'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { faqs } from '@/lib/homeData';
import { doctorInfo } from '@/lib/doctorData';

export default function EnhancedFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#F6F5F2] relative z-20">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A] mb-6">
            Frequently Asked <span className="font-serif italic font-light text-slate-500">Questions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
           <div className="md:col-span-5">
             <div className="sticky top-32 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
               <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Still have questions?</h3>
               <p className="text-slate-500 font-medium mb-8">We are here to help you understand every part of the orthodontic process.</p>
               <Link href={`https://wa.me/${doctorInfo?.contact?.whatsapp || ''}`} className="w-full bg-[#1A1A1A] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors flex items-center justify-center gap-3 group">
                 Contact Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
           </div>
           <div className="md:col-span-7 flex flex-col gap-4">
             {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeFaq === index ? 'border-slate-300 shadow-md' : 'border-slate-100'}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 pr-6 ${activeFaq === index ? 'text-[#1A1A1A]' : 'text-slate-600 group-hover:text-[#1A1A1A]'}`}>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === index ? 'bg-[#1A1A1A] text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-[#1A1A1A] group-hover:text-white'}`}>
                      {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                       <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-500 font-medium leading-relaxed">
                            {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
