'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Play, 
  ChevronRight, 
  Sparkles, 
  Search,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { guidanceCategories, guidanceArticles, expertTips } from '@/lib/guidanceData';
import { libraryVideos } from '@/lib/videoLibraryData';

export default function GuidancePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 pointer-events-none">
          <div className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.8em] font-black text-slate-200 whitespace-nowrap">
            EDUCATIONAL GUIDANCE • PROFESSIONAL ADVICE • DENTAL CARE
          </div>
          <div className="w-px h-32 bg-slate-100" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-[10px] uppercase tracking-widest mb-8">
                  <Sparkles className="w-3 h-3" /> Knowledge is Power
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-black text-secondary leading-[0.9] mb-8 tracking-tighter">
                  Elevate Your <br />
                  <span className="text-primary">Oral Health.</span>
                </h1>
                <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                  Professional guidance and educational resources curated by Dr. Hayan to help you maintain a perfect smile for life.
                </p>
                
                <div className="max-w-md relative group">
                  <input 
                    type="text" 
                    placeholder="Search guidance..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 px-6 pl-14 shadow-sm group-focus-within:shadow-xl group-focus-within:bg-white transition-all text-secondary font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]"
              >
                <Image 
                  src="https://picsum.photos/seed/guidance-hero/1000/1000"
                  alt="Dental Guidance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase font-black tracking-widest mb-1">Success Rate</p>
                      <p className="text-white text-3xl font-black">99.9%</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Core Topics with Images */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tight mb-4">Core Focus Areas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore targeted knowledge bases detailing precise techniques for varied aspects of oral hygiene and prevention.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {guidanceCategories.map((cat, idx) => (
              <Link href={`/guidance/library?category=${cat.id}`} key={cat.id} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image 
                    src={cat.image || 'https://picsum.photos/seed/guidance-default/800/800'} 
                    alt={cat.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 shadow-sm border border-white/20">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-black text-white text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors">{cat.title}</span>
                    <span className="text-white/70 text-sm font-medium">{cat.count} Resources</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Guidance Sections */}
      {guidanceArticles.map((section, idx) => (
        <section key={section.id} className={`py-32 ${idx % 2 === 0 ? 'bg-white' : 'bg-secondary text-white'}`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className={`text-[10px] font-black uppercase tracking-[0.5em] mb-6 ${idx % 2 === 0 ? 'text-primary' : 'text-primary'}`}>
                    {section.subtitle}
                  </p>
                  <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight tracking-tighter">
                    {section.title}
                  </h2>
                  <p className={`text-lg mb-12 leading-relaxed max-w-lg ${idx % 2 === 0 ? 'text-slate-500' : 'text-slate-400'}`}>
                    {section.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {section.stats.map((stat, sIdx) => (
                      <div key={sIdx} className={`p-8 rounded-[32px] ${idx % 2 === 0 ? 'bg-slate-50 border border-slate-100' : 'bg-white/5 border border-white/10'}`}>
                        <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
                        <p className={`text-[10px] font-black uppercase tracking-widest ${idx % 2 === 0 ? 'text-slate-400' : 'text-white/50'}`}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link href={`/guidance/library?category=${section.id}`} className={`inline-flex items-center gap-4 font-black text-sm uppercase tracking-widest group ${idx % 2 === 0 ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'} transition-colors`}>
                    <span className="relative">
                      Explore Video Guide
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white group-hover:translate-x-3 transition-transform duration-300 shadow-lg shadow-primary/30">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              </div>

              <div className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/5] lg:aspect-square">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl"
                >
                  <Image 
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 ${idx % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/20'}`} />
                </motion.div>
                
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 md:w-64 md:h-64 rounded-full blur-[80px] opacity-30 pointer-events-none ${idx % 2 === 0 ? 'bg-primary' : 'bg-blue-400'}`} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Video Library */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6">Video Library</p>
              <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
                Visual <br />
                <span className="text-primary">Learning.</span>
              </h2>
            </div>
            <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-black text-xs uppercase tracking-widest hover:bg-primary hover:border-primary transition-all">
              View All Tutorials
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {libraryVideos.slice(0, 3).map((video, idx) => (
              <Link href="/guidance/library" key={video.id} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="relative aspect-video rounded-[32px] overflow-hidden mb-6 shadow-2xl">
                    <Image 
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {video.duration}
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-2">{video.category.replace('-', ' ')}</p>
                    <h3 className="text-xl md:text-2xl font-black group-hover:text-primary transition-colors leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advice */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/guidance-cta/1000/1000"
                  alt="Professional Advice"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl max-w-[280px] md:max-w-xs z-10"
              >
                <p className="text-white text-base md:text-lg font-bold leading-relaxed">
                  &quot;The best treatment is prevention. A few minutes a day can save you years of dental problems.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20" />
                  <div>
                    <p className="text-white font-black text-xs md:text-sm uppercase tracking-widest">Dr. Hayan</p>
                    <p className="text-white/60 text-[10px] font-bold">Consultant Orthodontist</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6">Expert Tips</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-secondary leading-tight mb-10 md:mb-12 tracking-tighter">
                Quick <br />
                <span className="text-primary">Guidelines.</span>
              </h2>
              <div className="space-y-4">
                {expertTips.map((tip, i) => (
                  <Link href={`/guidance/library?category=all`} key={i} className="block">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h4 className="font-black text-secondary uppercase tracking-widest text-[10px] md:text-xs mb-1">{tip.title}</h4>
                          <p className="text-slate-500 text-xs md:text-sm">{tip.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-2 transition-transform shrink-0" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
