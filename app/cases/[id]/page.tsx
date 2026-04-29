'use client';

import { useState, use } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { caseCategories, generateMockCases } from '@/lib/casesData';
import { categoryDetails } from '@/lib/caseDetailsData';
import { X, ChevronLeft, Info, Clock, ArrowRight, Play, CheckCircle2, LayoutGrid, HeartPulse, HelpCircle, GraduationCap, FileText, Settings, Microscope } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// --- SUBSECTION LAYOUTS ---

// Layout 0: Grid (3 columns) -> Clean and Professional
function CasesGrid({ cases, subSection, categoryTitle, setSelectedCase }: any) {
  return (
    <div className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-2">{subSection}</h2>
          <p className="text-slate-500 text-lg">Detailed clinical progression and documented outcomes.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-400 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
          <LayoutGrid className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">Grid View</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((caseItem: any, idx: number) => (
          <div
            key={caseItem.id}
            className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            onClick={() => setSelectedCase({ ...caseItem, categoryTitle, subSection })}
          >
            <div className="relative h-64 w-full bg-slate-100 overflow-hidden shrink-0">
              <Image src={caseItem.afterImg} alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm">Final Result</div>
              {/* Before Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image src={caseItem.beforeImg} alt="Before" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm">Original</div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-md">{caseItem.patientInfo}</span>
                <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{caseItem.duration}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 line-clamp-3">{caseItem.description}</p>
              <div className="mt-auto flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                View Full Case <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 1: Featured + List -> Clean and Professional
function CasesFeatured({ cases, subSection, categoryTitle, setSelectedCase }: any) {
  const featured = cases[0];
  const rest = cases.slice(1, 4);

  return (
    <div className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-2">{subSection}</h2>
          <p className="text-slate-500 text-lg">Highlighting specific corrective methodologies.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Featured Case */}
        <div 
          className="xl:col-span-8 group cursor-pointer bg-slate-900 text-white rounded-2xl overflow-hidden relative min-h-[450px] flex items-end p-8 hover:shadow-xl transition-all duration-300"
          onClick={() => setSelectedCase({ ...featured, categoryTitle, subSection })}
        >
          <div className="absolute inset-0 z-0">
             <Image src={featured.afterImg} alt="After" fill className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
          </div>
          <div className="relative z-10 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded border border-blue-500 text-xs font-medium uppercase tracking-wider">Featured Case</span>
              <span className="bg-white/10 px-3 py-1 rounded text-xs font-medium text-white flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {featured.duration}</span>
            </div>
            <p className="text-2xl font-medium mb-4 leading-snug max-w-2xl">{featured.description}</p>
            <div className="inline-flex items-center text-white text-sm font-medium hover:text-blue-200 transition-colors">
              Explore Full Details <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        {/* List of others */}
        <div className="xl:col-span-4 flex flex-col gap-4">
          {rest.map((caseItem: any) => (
             <div 
               key={caseItem.id}
               className="group flex gap-5 p-4 rounded-2xl hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer items-center"
               onClick={() => setSelectedCase({ ...caseItem, categoryTitle, subSection })}
             >
               <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                 <Image src={caseItem.afterImg} alt="After" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                 <div className="text-xs font-medium text-slate-500 mb-1">{caseItem.patientInfo}</div>
                 <p className="text-slate-800 font-medium text-sm line-clamp-2 leading-relaxed mb-2">{caseItem.description}</p>
                 <div className="text-sm font-medium text-blue-600 flex items-center group-hover:translate-x-1 transition-transform">
                   View <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 2: Alternating Large Cards -> Clean and Professional
function CasesAlternating({ cases, subSection, categoryTitle, setSelectedCase }: any) {
  return (
    <div className="mb-24">
      <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-2">{subSection}</h2>
          <p className="text-slate-500 text-lg">In-depth case studies and transformations.</p>
        </div>
      </div>
      <div className="space-y-12">
        {cases.slice(0, 3).map((caseItem: any, idx: number) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div 
              key={caseItem.id} 
              className={cn("flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group cursor-pointer", isReversed ? "lg:flex-row-reverse" : "")}
              onClick={() => setSelectedCase({ ...caseItem, categoryTitle, subSection })}
            >
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <Image src={caseItem.afterImg} alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 shadow-sm">Final Result</div>
                  <div className="bg-slate-900/90 text-white backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {caseItem.duration}</div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-md mb-4 inline-block">{caseItem.patientInfo}</div>
                <h3 className="text-2xl font-medium text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">{caseItem.description}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{caseItem.notes}</p>
                <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Analyze Case <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// Mapper to pick layout
function SubSectionRouter({ subSection, categoryId, setSelectedCase, categorySubtitle, index }: any) {
  const cases = generateMockCases(categoryId, subSection);
  if (index % 3 === 1) {
    return <CasesFeatured cases={cases} subSection={subSection} categoryTitle={categorySubtitle} setSelectedCase={setSelectedCase} />;
  }
  if (index % 3 === 2) {
    return <CasesAlternating cases={cases} subSection={subSection} categoryTitle={categorySubtitle} setSelectedCase={setSelectedCase} />;
  }
  return <CasesGrid cases={cases} subSection={subSection} categoryTitle={categorySubtitle} setSelectedCase={setSelectedCase} />;
}


// --- MODAL ---
function CaseDetailsModal({ selectedCase, onClose }: { selectedCase: any, onClose: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <motion.div
        initial={{ scale: 0.98, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white relative shrink-0">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-1">{selectedCase.categoryTitle}</h3>
            <p className="text-sm text-slate-500 font-medium">{selectedCase.subSection}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full transition-colors border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-0 flex-grow custom-scrollbar">
          
          {/* Gallery block */}
          <div className="relative bg-slate-100">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {selectedCase.progressImages?.map((img: any, idx: number) => (
                  <div key={idx} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-[16/9] md:aspect-[21/9]">
                    <Image src={img.img} alt={img.label} fill className="object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end drop-shadow-md">
                      <div>
                        <p className="text-white font-medium text-xs mb-2 flex items-center gap-1.5 drop-shadow-md">
                          <Clock className="w-3.5 h-3.5 drop-shadow-md" /> <span className="drop-shadow-md">{img.timeframe}</span>
                        </p>
                        <h4 className="text-white text-2xl lg:text-3xl font-medium tracking-tight drop-shadow-md decoration-white/50">{img.label}</h4>
                      </div>
                      <div className="bg-slate-900/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg font-medium text-sm shrink-0">
                        {idx + 1} / {selectedCase.progressImages.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => emblaApi && emblaApi.scrollPrev()} className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => emblaApi && emblaApi.scrollNext()} className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20 rotate-180"><ChevronLeft className="w-5 h-5" /></button>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center mb-4"><Info className="w-4 h-4 text-slate-600" /></div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Patient Profile</p>
                  <p className="text-lg font-medium text-slate-900">{selectedCase.patientInfo}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center mb-4"><Clock className="w-4 h-4 text-slate-600" /></div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Treatment Duration</p>
                  <p className="text-lg font-medium text-slate-900">{selectedCase.duration}</p>
                </div>
              </div>
              <div className="lg:col-span-8 bg-white">
                <h4 className="text-2xl font-medium text-slate-900 mb-4">Execution Strategy</h4>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedCase.description}</p>
                <div className="w-full h-px bg-slate-200 mb-8"></div>
                <h4 className="text-xl font-medium text-slate-900 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Clinical Notes</h4>
                <p className="text-slate-600 text-lg leading-relaxed">{selectedCase.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


// --- MAIN PAGE ---
export default function CaseCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.id;
  const category = caseCategories.find(c => c.id === categoryId);
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-medium text-slate-900 mb-4">Category Not Found</h1>
          <Link href="/" className="inline-flex px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Return Home</Link>
        </div>
      </div>
    );
  }

  // Use iconImg as the primary source for the hero background to ensure consistency with navbar,
  // falling back to image if iconImg isn't available.
  const heroImage = category.iconImg || category.image;

  // --- Dynamic Explainer Content based on Category ID ---
  const explainerInfo = categoryDetails[categoryId] || {
    layout: 'center-text',
    prefix: "Clinical Overview",
    title: `Managing ${category.title}`,
    desc: `Detailed insights into the diagnosis and treatment protocols for ${category.title.toLowerCase()}. Our focus is on achieving both functional and aesthetic harmonious results through advanced planning.`,
    points: ["Pre-treatment digital modeling", "Evidence-based correction techniques", "Long-term functional stability"],
    bgColor: "bg-white",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    causes: "A multi-factorial etiology usually involving genetic predispositions and environmental developmental factors.",
    duration: "Varies based on individual complexity and severity.",
    faq: [{q: "When is the best time to seek treatment?", a: "Early consultation is always recommended to assess whether interceptive treatment is beneficial."}],
    feedback: "The clinical team's structured approach transformed the outcome profoundly. Every step was clear and the functional result was perfect."
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Professional Minimal Hero Section (Full width background image) */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] flex flex-col justify-center overflow-hidden bg-slate-900 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={category.title}
            fill
            className="object-cover opacity-40 scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 mx-auto max-w-7xl pt-20 flex flex-col items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur border border-white/10 text-white font-medium text-xs mb-6 uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> Clinical Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
            {category.title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-light">
            Comprehensive documentation of our methodical approach and successful clinical transformations focused on {category.title.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* 2. Plain, Professional Explainer Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md ${explainerInfo.iconBg} ${explainerInfo.iconColor} font-medium text-xs mb-6 uppercase tracking-wider`}>
                <Microscope className="w-3.5 h-3.5" /> {explainerInfo.prefix}
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {explainerInfo.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {explainerInfo.desc}
              </p>
              <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                {explainerInfo.points.map((pt: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${explainerInfo.iconColor}`} />
                    <span className="text-slate-700 text-[15px] leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Element: Minimal and clean */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
                <Image src={heroImage} alt="Explainer" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 ml-1 text-slate-900" fill="currentColor" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive Information (Duration, Causes, Education, FAQ) - Unstacked & Professional */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 border-b border-slate-200 pb-20">
            {/* Etiology / Causes */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-medium text-slate-900 mb-6 flex items-center gap-3">
                <HeartPulse className="w-6 h-6 text-slate-400" /> Etiology & Causes
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {explainerInfo.causes}
              </p>
              <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Average Duration</h4>
                  <p className="text-sm text-slate-600">{explainerInfo.duration}</p>
                </div>
              </div>
            </div>

            {/* Education / Training Focus */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-medium text-slate-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-slate-400" /> Education & Protocols
              </h3>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                 <div className="w-full sm:w-2/5 relative h-48 sm:h-auto bg-slate-100">
                    <Image src="https://picsum.photos/seed/training-cert/800/800" alt="Training" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                    <div className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wide">Clinical Guide</div>
                    <h4 className="text-lg font-medium text-slate-900 mb-3">Understanding the Treatment Protocol</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">Patient education is paramount. Familiarize yourself with the clinical phases and expected milestones during this corrective process.</p>
                    <div className="mt-auto inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                      View Educational Materials <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* FAQ */}
            <div>
               <h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-8 flex items-center gap-3">
                 <HelpCircle className="w-6 h-6 text-slate-400" /> Frequently Asked Questions
               </h3>
               <div className="space-y-4">
                 {explainerInfo.faq?.map((item: any, idx: number) => (
                   <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white hover:border-slate-300 transition-colors">
                     <h4 className="text-[17px] font-medium text-slate-900 mb-3">{item.q}</h4>
                     <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Testimonial / Feedback */}
            <div className="flex flex-col justify-center">
               <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
                 <div className="absolute -right-8 -top-8 text-white/5">
                   <FileText className="w-48 h-48" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">Patient Insight</h3>
                   <p className="text-xl lg:text-2xl font-medium leading-snug mb-8">&quot;{explainerInfo.feedback}&quot;</p>
                   <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-serif text-lg italic text-slate-300">—</div>
                     <div>
                       <div className="text-sm font-medium text-white mb-1">Post-Treatment Feedback</div>
                       <div className="text-xs text-slate-400">Verified Clinical Patient</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Dynamic Clinical Cases Rendering */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Case Archive</h2>
            <h3 className="text-3xl font-medium text-slate-900">Documented Outcomes</h3>
          </div>
          {category.subSections.map((subSection, index) => (
             <SubSectionRouter 
               key={index}
               subSection={subSection}
               categoryId={categoryId}
               categorySubtitle={category.title}
               index={index}
               setSelectedCase={setSelectedCase}
             />
          ))}
        </div>
      </section>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <CaseDetailsModal 
            selectedCase={selectedCase} 
            onClose={() => setSelectedCase(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
