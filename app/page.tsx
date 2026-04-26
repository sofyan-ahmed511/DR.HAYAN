'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, Star, PlayCircle, ArrowLeft, CheckCircle2, Quote, Plus, Minus, Play, Info, Phone, X, Clock, Sparkles, ImageIcon } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { doctorInfo } from '@/lib/doctorData';
import { services, features, faqs, testimonials } from '@/lib/homeData';
import { caseCategories, generateMockCases } from '@/lib/casesData';
import { educationalVideos } from '@/lib/newsData';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'ltr', duration: 40, dragFree: false }, [Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]);
  const [emblaRefTestimonials, emblaApiTestimonials] = useEmblaCarousel({ loop: true, direction: 'ltr', duration: 40, dragFree: false }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);
  const [emblaRefServices, emblaApiServices] = useEmblaCarousel({ loop: true, align: 'start', direction: 'ltr', duration: 40, dragFree: true });
  const [emblaRefCases, emblaApiCases] = useEmblaCarousel({ loop: true, align: 'start', direction: 'ltr', duration: 40, dragFree: true });
  const [emblaRefVideos, emblaApiVideos] = useEmblaCarousel({ loop: true, align: 'start', direction: 'ltr', duration: 40, dragFree: true });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Skyline Reference Style */}
      <section ref={heroRef} className="relative min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-32 pb-12 overflow-hidden font-sans">
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

        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center h-full">
            
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight mb-8"
                >
                  DR.<br />
                  <span className="italic"> HAYAN</span>
                </motion.h1>
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
                  className="inline-flex items-center justify-center bg-[#E05D36] text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-[#c24b29] transition-colors shadow-lg shadow-[#E05D36]/20 group"
                >
                  Book Consultation <ArrowLeft className="w-4 h-4 ml-2 rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-xs"
              >
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Where medical expertise meets artistic vision. Dr. Hayan delivers world-class orthodontic solutions with a focus on precision and patient experience.
                </p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FDFBF7] shadow-sm relative">
                    <Image src="https://picsum.photos/seed/home-clinic/200/200" alt="Clinic" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FDFBF7] -ml-4 shadow-sm relative">
                    <Image src="https://picsum.photos/seed/home-smile/200/200" alt="Smile" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FDFBF7] -ml-4 shadow-sm relative">
                    <Image src="https://picsum.photos/seed/home-care/200/200" alt="Care" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Oval Image */}
            <div className="lg:col-span-4 flex justify-center relative h-full items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[340px] aspect-[1/1.6] rounded-t-full rounded-b-full overflow-hidden "
              >
                <Image
                  src="https://i.ibb.co/0yjyt4Ps/IMG-7644-JPG.jpg"
                  alt="Dr. Hayan"
                  fill
                  className="object-cover object-center scale-110"
                  priority
                />  
              </motion.div>
              {/* Floating orange button on the image */}
             
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full py-10 pl-8">
              
              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-right flex flex-col items-end space-y-4"
              >
                <div className="flex items-center gap-1 text-[#E05D36]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-medium text-sm text-[#1A1A1A]">Roberto Carlos</span>
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 relative">
                    <Image src="https://picsum.photos/seed/home-roberto/100/100" alt="Roberto Carlos" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic leading-relaxed max-w-[280px] text-right">
                  &quot;DR.Hayan made finding my perfect smile effortless with detailed care and personalized recommendations!&quot;
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex justify-end gap-10 mt-16"
              >
                {doctorInfo.stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-serif text-[#1A1A1A] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

             

            </div>


          </div>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden z-20">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>Our Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-tight">
              {["Why", "Choose", "Our", "Clinic?"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`inline-block mr-3 ${word === "Our" || word === "Clinic?" ? "text-primary" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p className="text-slate-600 text-xl font-medium">We provide a unique treatment experience that combines exceptional medical expertise with the latest dental technology.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "tween", ease: "easeOut" }}
                  className="bg-white p-10 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-slate-100 relative overflow-hidden"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-[1.25rem] md:rounded-[1.5rem] shadow-sm flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-secondary mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Carousel Design */}
      <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-tight">
                {["Our", "Orthodontic", "Services"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`inline-block mr-3 ${word === "Orthodontic" ? "text-primary" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <p className="text-slate-600 text-xl font-medium">We offer a comprehensive range of orthodontic options to suit all ages and needs.</p>
            </motion.div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiServices && emblaApiServices.scrollPrev()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all bg-white shadow-sm">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={() => emblaApiServices && emblaApiServices.scrollNext()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all bg-white shadow-sm rotate-180">
                <ChevronLeft className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefServices}>
            <div className="embla__container flex -mx-4">
              {services.map((service) => (
                <div key={service.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                  <div className="bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-[1.25rem] md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                      <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-secondary mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-slate-600 mb-6 md:mb-8 flex-grow leading-relaxed text-sm md:text-base font-medium">{service.description}</p>
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${doctorInfo.contact.whatsapp}?text=Hello, I would like to inquire about ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-full font-black text-center transition-all duration-300 bg-slate-50 text-secondary hover:bg-primary hover:text-white border border-slate-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
                    >
                      Inquire Now
                      <ChevronLeft className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform rotate-180" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Theme */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {doctorInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                <div className="text-primary font-bold text-lg md:text-xl mb-2 md:mb-3">{stat.label}</div>
                <div className="text-slate-500 text-sm md:text-base font-medium max-w-[200px] mx-auto">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases - Carousel Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                <ImageIcon className="w-4 h-4" />
                <span>Clinical Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-secondary leading-tight">
                {["Our", "Success", "Stories"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`inline-block mr-4 ${word === "Success" ? "text-primary" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiCases && emblaApiCases.scrollPrev()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button onClick={() => emblaApiCases && emblaApiCases.scrollNext()} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all rotate-180">
                <ChevronLeft className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefCases}>
            <div className="embla__container flex -mx-4">
                {caseCategories.map((category) => {
                  const isSpecial = category.id === 'complex' || category.id === 'surgical' || category.id === 'cleft';
                  return (
                    <div key={category.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                      <div 
                        onClick={() => setSelectedCase({ ...category, patientInfo: "Female, 24 years old", duration: "18 months", description: `A comprehensive treatment for ${category.title.toLowerCase()} using the latest digital scanning and clear aligner technology.`, notes: "The patient achieved a perfect smile without any tooth extractions.", beforeImg: category.image, afterImg: `https://picsum.photos/seed/home-case-after-${category.id}/800/800` })}
                        className={`group block relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer border-2 ${isSpecial ? 'border-primary/30' : 'border-slate-100'}`}
                      >
                        <div className="absolute inset-0 z-0 bg-slate-100 group/img">
                          {/* Default State: After Image (Using `category.image` temporarily as the final result visual) */}
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                            referrerPolicy="no-referrer"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Hover State: Before Image */}
                          <Image
                            src={`https://picsum.photos/seed/home-case-before-${selectedCase?.id || 'default'}/800/800`}
                            alt="Before Treatment"
                            fill
                            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:scale-105 transform"
                            referrerPolicy="no-referrer"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${isSpecial ? 'from-primary/60 via-primary/20' : 'from-secondary/60 via-transparent'} to-transparent opacity-80 pointer-events-none transition-opacity`} />
                        </div>
                        
                        {isSpecial && (
                          <div className="absolute top-8 right-8 z-10 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            Specialized Case
                          </div>
                        )}

                        {/* View Indicator Capsule */}
                        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 bg-black/40 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 pointer-events-none">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 leading-tight drop-shadow-md">{category.title}</h3>
                          <p className="text-white/90 font-semibold mb-4 text-sm md:text-base drop-shadow-sm">{category.subtitle}</p>
                          <div className="flex flex-wrap gap-2">
                            {category.subSections.slice(0, 2).map((sub, i) => (
                              <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-bold border border-white/10 uppercase tracking-wider">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Details Modal (Added to homepage) */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 bg-secondary/95 backdrop-blur-md" onClick={() => setSelectedCase(null)}></div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden relative z-10 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-10 border-b border-slate-100 bg-white sticky top-0 z-20">
                <div className="pr-8 md:pr-0">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-1 leading-tight">{selectedCase.title}</h3>
                  <p className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">{selectedCase.subtitle}</p>
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 md:relative md:top-0 md:right-0 p-3 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full transition-all shadow-sm border border-slate-100 hover:scale-110"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-10 flex-grow custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10">
                  {/* Before Image */}
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm group">
                      <Image 
                        src={selectedCase.beforeImg} 
                        alt="Before Treatment" 
                        fill 
                        className="object-cover transition-transform duration-700" 
                        referrerPolicy="no-referrer" 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-secondary/5" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-lg">
                        Before
                      </div>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border-2 md:border-4 border-white ring-1 ring-primary/10 group">
                      <Image 
                        src={selectedCase.afterImg} 
                        alt="After Treatment" 
                        fill 
                        className="object-cover transition-transform duration-700" 
                        referrerPolicy="no-referrer" 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-lg">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-4 bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] border border-slate-100">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Info className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Patient Info</p>
                      <p className="text-base md:text-lg font-bold text-secondary truncate">{selectedCase.patientInfo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] border border-slate-100">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Clock className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Treatment Time</p>
                      <p className="text-base md:text-lg font-bold text-secondary truncate">{selectedCase.duration}</p>
                    </div>
                  </div>
                </div>
                
                {/* Case Description */}
                <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg md:text-xl font-display font-bold text-secondary mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary shadow-md shadow-primary/20"></span>
                    Case Details & Plan
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium break-words">
                    {selectedCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Educational Videos Carousel - Modern Design */}
      <section id="videos" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-6 border border-red-100">
                <PlayCircle className="w-4 h-4" />
                <span>Video Library</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight">Medical <span className="text-red-600">Tips</span> & Guidance</h2>
              <p className="text-slate-600 text-xl font-medium">Watch our latest educational videos to learn more about your dental health and available treatment options.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => emblaApiVideos && emblaApiVideos.scrollPrev()} className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-secondary hover:bg-red-600 hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => emblaApiVideos && emblaApiVideos.scrollNext()} className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-secondary hover:bg-red-600 hover:text-white transition-all rotate-180">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="embla overflow-hidden" ref={emblaRefVideos}>
            <div className="embla__container flex -mx-3">
              {educationalVideos.map((video) => (
                <div key={video.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-3">
                  <div className="group cursor-pointer bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-5 shadow-inner shrink-0">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-sm">
                          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-red-600 shadow-xl scale-90 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="px-2 pb-2 flex-grow flex flex-col">
                        <div className="text-xs font-bold text-red-600 mb-3 bg-red-50 inline-block px-3 py-1 rounded-full self-start">{video.category}</div>
                        <h3 className="font-black text-secondary text-lg leading-snug group-hover:text-red-600 transition-colors duration-300 line-clamp-2">{video.title}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 font-bold text-sm mb-6 border border-amber-100">
              <Star className="w-4 h-4 fill-amber-500" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight">Our <span className="text-amber-500">Patients&apos;</span> Feedback</h2>
            <p className="text-slate-600 text-xl font-medium">We take pride in our patients&apos; trust and are always happy to see their new smiles.</p>
          </motion.div>

          <div className="overflow-hidden" ref={emblaRefTestimonials}>
            <div className="embla__container flex -mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="bg-white p-10 rounded-[2.5rem] relative shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col"
                  >
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-amber-100 group-hover:text-amber-200 transition-colors duration-300 group-hover:scale-110 transform" />
                    <div className="flex items-center gap-5 mb-8 relative z-10">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-100 group-hover:border-amber-300 transition-colors duration-300 shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <h4 className="font-black text-secondary text-lg group-hover:text-amber-600 transition-colors duration-300">{testimonial.name}</h4>
                        <div className="flex items-center gap-1 text-amber-400 mt-1.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed italic text-lg relative z-10 font-medium flex-grow">&quot;{testimonial.text}&quot;</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/faq-bg/1920/1080?blur=10')" }}>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/pattern-faq/1920/1080')] opacity-[0.02] mix-blend-multiply pointer-events-none" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Info className="w-4 h-4" />
              <span>FAQs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-slate-600 text-xl font-medium">Answers to the most common questions about orthodontic treatment.</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-white rounded-[2rem] border-2 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${activeFaq === index ? 'border-primary/30 shadow-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-right focus:outline-none group"
                >
                  <span className={`font-black text-xl transition-colors duration-300 ${activeFaq === index ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === index ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    {activeFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                     <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg font-medium">
                        <div className="pt-6 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-tight">Ready for a <br className="hidden md:block" /> Perfect Smile?</h2>
            <p className="text-slate-600 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-medium">Book your consultation now and let us create the right treatment plan for you using the latest technology.</p>
            <a
              href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-2 group"
            >
              Contact Us via WhatsApp
              <ChevronLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform rotate-180" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
