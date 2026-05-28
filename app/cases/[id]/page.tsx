'use client';

import { use } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { caseCategories } from '@/lib/casesData';
import { categoryDetails } from '@/lib/caseDetailsData';
import { ChevronLeft, Clock, Quote, Star, CheckCircle2, HeartPulse, HelpCircle, FileText, Activity } from 'lucide-react';
import Link from 'next/link';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// --- FULL WIDTH CASE SECTION ---
function CaseFullSection({ caseItem, index, subSection }: { caseItem: any, index: number, subSection: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <section className="w-full relative bg-white border-b border-slate-100 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Case Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif text-xl">
            {index + 1}
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-slate-900">
            Case Study Showcase
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-8">
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {caseItem.description}
            </h4>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {caseItem.notes}
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden transition-all hover:bg-slate-100">
              <div className="absolute top-0 right-0 p-6 md:p-8 text-slate-200">
                <FileText className="w-20 h-20 md:w-24 md:h-24 opacity-50" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  Patient Profile
                </p>
                <p className="text-xl md:text-2xl font-medium text-slate-900">{caseItem.patientInfo}</p>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-[2rem] text-white relative overflow-hidden transition-all hover:bg-black">
              <div className="absolute top-0 right-0 p-6 md:p-8 text-white/5">
                <Clock className="w-20 h-20 md:w-24 md:h-24" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Treatment Duration
                </p>
                <p className="text-2xl md:text-3xl font-serif text-amber-400">{caseItem.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Before / After Visual */}
        <div className="w-full mb-12 max-w-full overflow-hidden">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full flex justify-between items-center px-4 mb-2">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-900 font-medium text-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Before Treatment
              </div>
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-900 font-medium text-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> After Treatment
              </div>
            </div>
            
            <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[20/9] rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl group">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={caseItem.beforeImg} alt="Before" className="object-cover w-full h-full" />}
                itemTwo={<ReactCompareSliderImage src={caseItem.afterImg} alt="After" className="object-cover w-full h-full" />}
                className="w-full h-full"
              />
            </div>
            
            <div className="flex justify-center mt-2">
               <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                 <span className="hidden sm:inline">Drag the slider to compare before and after</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-70"><path d="m9 18-6-6 6-6"/><path d="m15 18 6-6-6-6"/></svg>
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Carousel */}
      {caseItem.progressImages && caseItem.progressImages.length > 0 && (
        <div className="w-full relative bg-[#0A0A0A] py-16 md:py-24 border-y border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] mt-12 md:mt-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10 gap-6">
              <div>
                <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                   <Activity className="w-4 h-4"/> Clinical Timeline
                </p>
                <h4 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Treatment Progression</h4>
              </div>
              <div className="flex gap-4 shrink-0 hidden md:flex">
                <button onClick={() => emblaApi?.scrollPrev()} className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 backdrop-blur-sm"><ChevronLeft className="w-6 h-6"/></button>
                <button onClick={() => emblaApi?.scrollNext()} className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all rotate-180 hover:scale-105 backdrop-blur-sm"><ChevronLeft className="w-6 h-6"/></button>
              </div>
            </div>
          </div>
          
          <div className="embla overflow-hidden relative z-10 w-full pl-6 lg:pl-12" ref={emblaRef}>
            <div className="embla__container flex">
  {caseItem.progressImages.map((img: any, idx: number) => (
  <div
    key={idx}
    className="
      embla__slide
      flex-[0_0_95%]
      sm:flex-[0_0_85%]
      md:flex-[0_0_75%]
      lg:flex-[0_0_65%]
      xl:flex-[0_0_58%]
      min-w-0
      mr-6
      md:mr-10
    "
  >
    <div className="bg-[#111111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500 hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={img.img}
          alt={img.label}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* CONTENT UNDER IMAGE */}
      <div className="p-6 md:p-8 bg-[#111111]">
        
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>

          <p className="text-amber-400 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
            Phase {idx + 1}
          </p>
        </div>

        <h5 className="text-white text-2xl md:text-3xl font-serif leading-tight mb-4">
          {img.label}
        </h5>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
          {img.timeframe}
        </p>

      </div>
    </div>
  </div>
))}
</div>
          </div>
          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8 relative z-10">
             <button onClick={() => emblaApi?.scrollPrev()} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 backdrop-blur-sm"><ChevronLeft className="w-5 h-5"/></button>
             <button onClick={() => emblaApi?.scrollNext()} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all rotate-180 hover:scale-105 backdrop-blur-sm"><ChevronLeft className="w-5 h-5"/></button>
          </div>
        </div>
      )}
    </section>
  )
}

// --- SUBSECTION LAYOUT ---
function SubSectionRouter({
  subSection,
  category,
  categorySubtitle,
}: any) {

  const cases = category?.cases?.[subSection] || [];

  return (
    <div className="w-full">
      {/* Subsection Header Banner */}
      <div className="py-24 md:py-32 bg-[#F8F9FA] text-center border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
          <div className="w-[120%] h-px bg-black rotate-12"></div>
          <div className="w-[120%] h-px bg-black -rotate-12 absolute"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">
            Clinical Domain / {categorySubtitle}
          </h2>

          <h3 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] tracking-tight leading-[1.1]">
            {subSection}
          </h3>
        </div>
      </div>

      {/* Cases */}
      <div>
        {cases.map((caseItem: any, idx: number) => (
          <CaseFullSection
            key={caseItem.id}
            caseItem={caseItem}
            index={idx}
            subSection={subSection}
          />
        ))}
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function CaseCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.id;
  const category = caseCategories.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-medium text-slate-900 mb-4">Category Not Found</h1>
          <Link href="/" className="inline-flex px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-black transition-colors">Return Home</Link>
        </div>
      </div>
    );
  }

  const heroImage = category.iconImg || category.image;

  // --- Dynamic Explainer Content based on Category ID ---
  const explainerInfo = categoryDetails[categoryId] || {
    layout: 'center-text',
    prefix: "Clinical Overview",
    title: `Managing ${category.title}`,
    desc: `Detailed insights into the diagnosis and treatment protocols for ${category.title.toLowerCase()}. Our focus is on achieving both functional and aesthetic harmonious results through advanced planning.`,
    points: ["Pre-treatment digital modeling", "Evidence-based correction techniques", "Long-term functional stability"],
    causes: "A multi-factorial etiology usually involving genetic predispositions and environmental developmental factors.",
    duration: "Varies based on individual complexity and severity.",
    faq: [{q: "When is the best time to seek treatment?", a: "Early consultation is always recommended to assess whether interceptive treatment is beneficial."}],
    feedback: "The clinical team's structured approach transformed the outcome profoundly. Every step was clear and the functional result was perfect."
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-amber-500 selection:text-white overflow-x-hidden w-full">
      
      {/* 1. Professional Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover opacity-[0.35] scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Deep professional vignette/gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/20"></div>
        </div>

        <div className="container relative z-10 w-full px-6 lg:px-12 mx-auto max-w-[1400px]">
          <div className="max-w-4xl text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium text-xs mb-10 uppercase tracking-widest shadow-2xl"
            >
              <Star className="w-4 h-4 text-amber-500" /> Premium Clinical Documentation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-[8rem] font-serif text-white tracking-tight leading-[0.95] mb-8"
            >
              {category.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light"
            >
               Methodical documentation of structural transformations, showcasing predictability and clinical excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Structured Overview Section (Replacing the fake video) */}
      <section className="py-24 md:py-32 bg-[#121212] relative z-20 overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.4)]">
         {/* Subtle background tech pattern */}
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

         <div className="container relative mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left Content - Strong Points */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-amber-500"></div>
                  <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">The Approach</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
                  Structured Clinical Protocol
                </h2>
                <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-xl">
                  {explainerInfo.desc}
                </p>
                
                <div className="grid gap-0 border-t border-white/10">
                  {explainerInfo.points.map((pt: string, i: number) => (
                    <div key={i} className="flex gap-8 items-start py-8 border-b border-white/10 group hover:bg-white/[0.02] transition-colors -mx-6 px-6 sm:mx-0 sm:px-0">
                       <div className="text-amber-500/50 font-serif text-3xl font-light group-hover:text-amber-500 transition-colors">0{i+1}</div>
                       <div className="flex-grow pt-1">
                         <h3 className="text-2xl text-white mb-3 font-medium tracking-tight group-hover:text-white transition-colors">{pt}</h3>
                         <p className="text-base text-slate-500 leading-relaxed font-light">
                           Rigorous protocol execution ensures predictability and maintains the highest standards of care throughout the entire treatment phase.
                         </p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Strong Visual Substance */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
                   <Image sizes="(max-width: 768px) 100vw, 400px" src={heroImage} alt="Details" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                   
                   <div className="absolute bottom-10 left-10 right-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-4">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified Methodology
                      </div>
                      <h3 className="text-4xl lg:text-5xl text-white font-serif leading-tight">{explainerInfo.title}</h3>
                   </div>
                </div>
              </div>

            </div>
         </div>
      </section>

      {/* 3. Deep Dive Information (Statistics & FAQs) */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Etiology / Causes - High Contrast Dark Card */}
            <div className="lg:col-span-5 bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <HeartPulse className="w-40 h-40" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-12 border border-white/10">
                  <HeartPulse className="w-8 h-8 text-amber-500" />
                </div>
                <h2 className="text-4xl font-serif mb-8">Etiology & Causes</h2>
                <p className="text-slate-400 leading-relaxed text-xl font-light mb-12 max-w-sm">
                  {explainerInfo.causes}
                </p>
                
                <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">Average Treatment Duration</p>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-amber-500" />
                    <span className="text-2xl font-serif text-white">{explainerInfo.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial / Feedback - Large Display Card */}
            <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200 rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-12 right-12 text-slate-200 pointer-events-none">
                    <Quote className="w-32 h-32" />
                 </div>
                 <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="mb-12">
                     <div className="flex gap-1 mb-8">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-6 h-6 text-amber-500" fill="currentColor" />
                       )) }
                     </div>
                     <p className="text-3xl lg:text-5xl font-serif leading-[1.2] text-slate-900 max-w-2xl">
                       &quot;{explainerInfo.feedback}&quot;
                     </p>
                   </div>
                   
                   <div className="flex items-center gap-6 border-t border-slate-200 pt-8 mt-8">
                     <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center shadow-lg text-white font-serif italic text-2xl">
                        P
                     </div>
                     <div>
                       <div className="text-xl font-medium text-slate-900 mb-1">Patient Feedback</div>
                       <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Verified Clinical Record</div>
                     </div>
                   </div>
                 </div>
            </div>
          </div>
          
          {/* FAQ - Architectural Layout */}
          <div className="bg-white border-t border-slate-200 pt-24 mt-12">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <div>
                 <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Patient Knowledge Base</p>
                 <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
                   Frequently Asked Questions
                 </h2>
               </div>
               <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                 <HelpCircle className="w-8 h-8 text-slate-400" />
               </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {explainerInfo.faq?.map((item: any, idx: number) => (
                 <div key={idx} className="group cursor-pointer">
                   <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{item.q}</h3>
                   <p className="text-slate-600 leading-relaxed text-lg font-light">{item.a}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 4. Display the Sections (Each section contains 2 full-screen cases) */}
      <div className="w-full">
        {category.subSections.map((subSection, index) => (
           <SubSectionRouter
  key={index}
  subSection={subSection}
  category={category}
  categorySubtitle={category.title}
/>
        ))}
      </div>
      
    </div>
  );
}
