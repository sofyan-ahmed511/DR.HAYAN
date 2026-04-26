'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { timeline, skills, certifications, values } from '@/lib/aboutData';
import { doctorInfo } from '@/lib/doctorData';
import { Award, GraduationCap, Heart, Star, CheckCircle2, ArrowLeft, Quote, ChevronLeft, ChevronRight, Plus, Sparkles, ShieldCheck, BookOpen, Smile, Stethoscope, User, Activity, X } from 'lucide-react';

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const [emblaRefTimeline, emblaApiTimeline] = useEmblaCarousel({ loop: true, align: 'start', duration: 40, dragFree: true });
  const [emblaRefCerts, emblaApiCerts] = useEmblaCarousel({ loop: true, align: 'start', duration: 40, dragFree: true });
  const [emblaRefValues, emblaApiValues] = useEmblaCarousel({ loop: true, align: 'start', duration: 40, dragFree: true });
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/about-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]" />
        
        {/* White Shadow at bottom behind content */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/40 to-transparent z-[5] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-sm mb-8 backdrop-blur-md border border-white/20 shadow-lg">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Global Expertise, Local Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
              Meet Your <span className="text-primary">Doctor</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-sans font-light max-w-2xl mx-auto">
              A journey of passion and continuous learning to provide the best orthodontic care in Egypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section - Split Layout */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://picsum.photos/seed/pattern-dots/1920/1080')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="https://picsum.photos/seed/doctor-portrait/800/1000"
                    alt={doctorInfo.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-8 right-8 left-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-4xl font-black mb-3">{doctorInfo.name}</h3>
                    <p className="text-primary font-bold text-xl">{doctorInfo.title}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-primary text-white p-4 md:p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 transform rotate-[-5deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border-4 border-white">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 drop-shadow-md">+15</span>
                  <span className="text-xs md:text-sm font-bold text-center leading-tight">Years of<br/>Experience</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                  <Heart className="w-4 h-4 fill-primary" />
                  <span>Personal Bio</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 md:mb-8 leading-tight">Passion for Creating <br/><span className="text-primary">Smiles</span></h2>
                <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  <p>{doctorInfo.fullBio}</p>
                  <div className="bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-r-4 border-primary italic font-bold text-secondary text-lg md:text-xl shadow-sm relative overflow-hidden group/quote">
                    <Quote className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 text-primary/5 group-hover/quote:text-primary/10 transition-colors duration-500 group-hover/quote:scale-110 transform" />
                    <span className="relative z-10">&quot;{doctorInfo.philosophy}&quot;</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 1: Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Journey</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight">Professional <span className="text-primary">Milestones</span></h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiTimeline && emblaApiTimeline.scrollPrev()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={() => emblaApiTimeline && emblaApiTimeline.scrollNext()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all rotate-180">
                <ChevronLeft className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefTimeline}>
            <div className="embla__container flex -mx-4">
              {timeline.map((item, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                    <span className="inline-block px-5 py-2 bg-primary/10 text-primary font-black text-sm rounded-full mb-6 w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-primary font-bold mb-5">{item.institution}</p>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Skills Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-6">Specialized <span className="text-primary">Skills</span></h2>
            <p className="text-slate-600 text-lg font-medium">We combine clinical mastery with the latest digital innovations to deliver world-class orthodontic results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 text-primary group-hover:text-white relative z-10 shadow-sm">
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors relative z-10 mb-3">{skill.name}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors">{skill.description}</p>
                  <div className="mt-6 w-8 h-1 bg-slate-100 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500 relative z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Carousel 3: Certifications */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <Award className="w-4 h-4" />
                <span>Accreditations</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight">Global <span className="text-primary">Recognition</span></h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiCerts && emblaApiCerts.scrollPrev()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={() => emblaApiCerts && emblaApiCerts.scrollNext()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all rotate-180">
                <ChevronLeft className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefCerts}>
            <div className="embla__container flex -mx-4">
              {certifications.map((cert, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100 h-full flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                        <Plus className="w-12 h-12 text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                        <span className="text-white font-black text-sm uppercase tracking-widest">View Certificate</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                      <p className="text-primary font-bold">{cert.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel 4: Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl text-secondary">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <Heart className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Core <span className="text-primary">Values</span></h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiValues && emblaApiValues.scrollPrev()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={() => emblaApiValues && emblaApiValues.scrollNext()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all rotate-180">
                <ChevronLeft className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefValues}>
            <div className="embla__container flex -mx-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                    <div className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col group border border-slate-100 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary shadow-inner">
                        <Icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium text-lg">{value.description}</p>
                      <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-4 h-4" />
                        Our Commitment
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-tight">Ready to Start Your <br className="hidden md:block" /> Treatment Journey?</h2>
            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-sans font-light">Book your consultation now and let us create the right treatment plan for you using the latest technology.</p>
            <a
              href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-2 group"
            >
              Book Your Appointment Now
              <ChevronLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform rotate-180" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-secondary/95 backdrop-blur-md" onClick={() => setSelectedCert(null)}></div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col"
            >
              <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <div className="pr-8 md:pr-0">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary mb-1 leading-tight">{selectedCert.title}</h3>
                  <p className="text-sm md:text-base font-bold text-primary">{selectedCert.institution}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 md:relative md:top-0 md:right-0 p-2.5 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full transition-all border border-slate-100"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-y-auto">
                <div className="relative w-full h-full p-4 md:p-10">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-2 md:p-6"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
