'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { skills, timeline, certifications, values } from '@/lib/aboutData';
import { doctorInfo } from '@/lib/doctorData';
import { ArrowRight, X, ChevronLeft, ChevronRight, HeartHandshake } from 'lucide-react';
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white pb-24 overflow-x-hidden w-full">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-sm font-bold tracking-wider uppercase mb-8">
              / About Us
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[0.95] mb-6 text-slate-900">
              Empowering <br />
              <span className="italic text-slate-500 font-light">Visionary</span> <br />
              Smiles.
            </h1>
            <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-6 py-3 rounded-full mt-6 hover:bg-slate-800 transition-colors cursor-pointer group shadow-xl hover:shadow-2xl">
              <span className="font-semibold text-sm">Start Today</span>
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="pb-4"
          >
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1720685193975-3b449a7cb905?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fERlbnRpc3RyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Modern clinic" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FIXED BACKGROUND STATS */}
      <section className="my-32 relative overflow-hidden h-[80vh] flex flex-col justify-center rounded-[3rem] mx-4 md:mx-12 shadow-2xl">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVudGlzdHJ5JTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D")' }}
          
        />
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        
        <div className="relative z-20 max-w-5xl mx-auto w-full px-6 flex flex-col gap-8 md:gap-12">
          {[
            { text: "By making your orthodontic care professional and tailored, you experience lifelong confidence.", num: "15+", sub: "Years of Service" },
            { text: "By constantly integrating the latest digital 3D systems and treatment methodologies.", num: "80+", sub: "Advanced Courses" },
            { text: "By maintaining meticulous clinical quality and offering genuine patient-first compassion.", num: "3K+", sub: "Happy Patients" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/95 backdrop-blur-xl rounded-full px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl max-w-4xl hover:scale-[1.02] transition-transform duration-500"
            >
              <p className="text-slate-700 font-medium text-sm md:text-base max-w-md text-center md:text-left">{stat.text}</p>
              <div className="text-center md:text-right shrink-0">
                <h3 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tighter">{stat.num}</h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE DOCTOR / EXPERTISE INTRO */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#D2C5B8] rounded-[3rem] p-8 md:p-12 pb-0 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
               <div className="relative aspect-[3/4] w-full rounded-t-[2.5rem] overflow-hidden drop-shadow-2xl">
                 <Image 
                   src="https://i.postimg.cc/qMhzt4KT/Gemini-Generated-Image-pd93supd93supd93.png" 
                   alt={doctorInfo.name} 
                   fill 
                   className="object-cover" 
                 />
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">// The Specialist</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter text-slate-900 leading-[1.05] mb-8">
                Experienced specialist <br /> you can trust.
              </h2>

              <p className="text-xl md:text-2xl font-serif text-slate-600 leading-snug italic mb-10">
                &quot;{doctorInfo.philosophy}&quot;
              </p>
              
              <div className="mb-8">
                <h3 className="text-3xl font-medium text-slate-900 mb-2">{doctorInfo.name}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-wide text-sm">{doctorInfo.title}</p>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium">
                {doctorInfo.fullBio}
              </p>
            </motion.div>
         </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY (TIMELINE) */}
      <section className="py-24 bg-white rounded-[3rem] mx-4 md:mx-12 shadow-sm border border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Professional Journey</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900">A Legacy of Excellence</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
            
            <div className="space-y-12 relative z-10">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-block px-3 py-1 bg-[#FAF9F6] border border-slate-100 text-slate-600 text-xs font-bold rounded-full mb-3 shadow-sm">
                      {item.year}
                    </div>
                    <h4 className="text-2xl font-medium text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-primary font-bold text-sm mb-3 uppercase tracking-wide">{item.institution}</p>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#FAF9F6] flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center font-serif italic pb-1">
                       {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINICAL EXPERTISE & SKILLS */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Clinical Expertise</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900 max-w-2xl leading-[1.1]">
              Comprehensive Orthodontic <br className="hidden md:block"/> Treatments & Skills
            </h2>
            <p className="text-slate-500 max-w-md">
              Specialized in a wide range of orthodontic treatments utilizing the latest digital and clinical methodologies to guarantee your best smile.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <skill.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3">{skill.name}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CERTIFICATES CAROUSEL */}
      <section className="pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#EAE6DF] rounded-[3rem] p-8 md:p-16 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">/ Achievements</p>
                <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900">Certificates & Awards</h2>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={scrollPrev}
                  className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden" 
              ref={emblaRef}
            >
              <div className="flex -ml-6 pb-8">
                {certifications.map((cert) => (
                  <div key={cert.id} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-6">
                    <div 
                      className="group cursor-pointer relative bg-white/50 backdrop-blur-sm p-4 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500"
                      onClick={() => setSelectedCert(cert.image)}
                    >
                      <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                        <Image 
                          src={cert.image} 
                          alt={cert.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                           <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 text-slate-900">
                              <span className="font-bold text-[10px] uppercase tracking-widest leading-none">+<br/>View</span>
                           </div>
                        </div>
                      </div>
                      <div className="px-4 pb-2 text-center">
                         <h4 className="text-xl font-medium text-slate-900 mb-1 leading-tight">{cert.title}</h4>
                         <p className="text-slate-500 text-sm font-medium">{cert.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS / STEPS (Moved to end) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
          <div className="sticky top-32">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-sm font-medium mb-6">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter text-slate-900 leading-[1.1] mb-8">
              Cultivate your <br className="hidden md:block"/> perfect smile <br className="hidden md:block"/> in 3 steps
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12 max-w-sm">
              Empower yourself with a seamless treatment setup designed for modern, predictable, and aesthetic results.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <Image src="https://images.unsplash.com/photo-1664529845836-433c172142ca?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fERlbnRpc3RyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Steps" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          <div className="space-y-6 pt-12 md:pt-32 relative">
            <div className="absolute left-[54px] top-[180px] bottom-10 w-px bg-slate-200 -z-10 hidden md:block" />
            
            {[
              { title: "Connect With Us", desc: "Book your consultation instantly. Experience precise digital scanning backed by cutting-edge technology. Zero messy impressions." },
              { title: "Define the Vision", desc: "Review your 3D digital smile design. Formulate a personalized treatment plan that fits your particular lifestyle and structural needs." },
              { title: "Watch It Grow", desc: "Start your customized journey. Track real-time progress and gain phenomenal aesthetic insights to build a thriving smile." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FAF9F6] rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 flex gap-6 md:gap-10 items-start group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
              >
                <div className="w-14 h-14 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center font-display font-black text-xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors shadow-sm">
                  0{idx+1}
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL / POPUP FOR CERTIFICATE */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-12 pl-6 pr-6 pt-24 pb-24"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-100 hover:scale-105 transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative w-full h-full p-4 bg-slate-100 flex items-center justify-center">
                <Image 
                  src={selectedCert} 
                  alt="Certificate Full View" 
                  fill 
                  className="object-contain p-4 mix-blend-multiply" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
