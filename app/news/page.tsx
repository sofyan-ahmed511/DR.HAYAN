'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ChevronRight, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Info, 
  ArrowRight,
  PlayCircle,
  BookOpen,
  CheckCircle2,
  Stethoscope,
  X
} from 'lucide-react';
import { educationalVideos, educationCategories as categories, routineSteps } from '@/lib/newsData';

export default function EducationPage() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      {/* Hero Section - Inspired by Image 3 (Vertical Text) */}
      <section className="container mx-auto px-6 mb-24">
        {/* Search Bar - Inspired by Image 1 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search for dental tips, videos, or routines..."
              className="w-full bg-white border border-slate-200 rounded-2xl py-5 px-6 pl-14 shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary font-medium"
            />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Text Rail */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
            <div className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] font-black text-slate-300 whitespace-nowrap">
              EDUCATION • ADVICE • ROUTINE • HEALTH
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-black text-secondary leading-tight mb-6">
                Your Daily <br />
                <span className="text-primary">Dental Routine</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Maintaining a perfect smile starts with the right habits. Explore our professional guides and video tutorials to keep your teeth and gums healthy.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-secondary border border-slate-200 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-colors">
                  View Videos
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/news-hero/1000/1250"
                alt="Dental Care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Watch Intro</p>
                    <p className="text-white/70 text-sm">2:45 • Dental Basics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Categories - Inspired by Image 1 (Circular Icons) */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${cat.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-secondary border-4 border-transparent group-hover:border-primary/20 transition-all">
                  <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <span className="font-black text-secondary uppercase tracking-wider text-sm">{cat.title}</span>
              <span className="text-xs text-slate-400 mt-1">12 Videos</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Routine Steps - Inspired by Image 2 (Card Layout) */}
      <section className="bg-white py-32 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-secondary mb-6">
              The Professional <br />
              <span className="text-primary">Daily Routine</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Follow these simple yet effective steps every day to ensure your smile stays bright and your gums remain healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {routineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-50 rounded-[32px] p-8 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
              >
                <div className="text-6xl font-display font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <div className="relative h-48 mb-8 rounded-2xl overflow-hidden">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                <button className="text-primary font-bold flex items-center gap-2 group/btn">
                  Read More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section - Professional Advice */}
      <section className="py-32 bg-white text-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-xs uppercase tracking-widest mb-6">
                <Info className="w-4 h-4" /> Professional Advice
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
                Expert Tips for a <br />
                <span className="text-primary">Healthier Smile</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Change your toothbrush", desc: "Replace your toothbrush every 3-4 months, or sooner if bristles are frayed." },
                  { title: "Don't forget your tongue", desc: "Plaque can also build up on your tongue. Gently brush it every time you brush your teeth." },
                  { title: "Use fluoride toothpaste", desc: "Fluoride is a leading defense against tooth decay. It works by fighting germs." },
                  { title: "Limit sugary foods", desc: "Sugar eventually turns into acid in the mouth, which can then erode the enamel of your teeth." }
                ].map((tip, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 text-secondary">{tip.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/news-tips/1000/1000"
                  alt="Doctor Advice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-secondary font-black text-2xl">15+</p>
                    <p className="text-slate-400 font-bold text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="container mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm mb-4">
              <PlayCircle className="w-5 h-5" />
              Educational Library
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-secondary">
              Watch & <span className="text-primary">Learn</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:border-primary hover:text-primary transition-all">
              All Videos
            </button>
            <button className="px-6 py-3 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:border-primary hover:text-primary transition-all">
              Care Tips
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationalVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-black text-secondary">
                  {video.duration}
                </div>
              </div>
              <div className="px-2">
                <div className="text-primary font-black text-[10px] uppercase tracking-widest mb-2">
                  {video.category}
                </div>
                <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors leading-tight">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-secondary/90 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.url.split('v=')[1] || 'dQw4w9WgXcQ'}`}
                className="w-full h-full"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
