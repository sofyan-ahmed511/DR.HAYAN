'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, X, ChevronLeft, Search, Filter } from 'lucide-react';
import { libraryVideos, videoCategories } from '@/lib/videoLibraryData';

function LibraryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  const [internalCategory, setInternalCategory] = useState<string | null>(null);
  const activeCategory = internalCategory || categoryParam;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const filteredVideos = useMemo(() => {
    return libraryVideos.filter((video) => {
      const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            video.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary selection:text-white pb-32 overflow-x-hidden w-full">
      {/* Visual Header */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex flex-col justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/guidance-lib-hero/2000/1000"
            alt="Knowledge Base"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 mx-auto max-w-7xl pt-10 text-center">
          <Link href="/guidance" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm mb-8 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ChevronLeft className="w-4 h-4" /> Back to Guidance Overview
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight mb-6 drop-shadow-xl">
            Educational Video Library
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Over 20+ professional visual guides explaining techniques, procedures, and best practices for complete oral healthcare.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl -mt-10 relative z-20">
        {/* Controls - Filter & Search */}
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col xl:flex-row gap-6 justify-between items-center mb-16">
          
          <div className="flex bg-slate-50 border border-slate-100 rounded-full p-2 overflow-x-auto w-full xl:w-auto custom-scrollbar no-scrollbar">
            <div className="flex items-center gap-2 px-1">
              {videoCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setInternalCategory(cat.id)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeCategory === cat.id 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-slate-500 hover:text-secondary hover:bg-slate-200/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full xl:w-auto min-w-[300px]">
             <input
               type="text"
               placeholder="Search guides..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-slate-50 border border-slate-200 rounded-full py-3.5 px-6 pl-14 text-secondary font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
             />
             <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

        </div>

        {/* Video Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl border border-slate-200">
             <Filter className="w-16 h-16 text-slate-200 mx-auto mb-6" />
             <h3 className="text-2xl font-black text-secondary mb-2">No guides found</h3>
             <p className="text-slate-500 font-medium">Try adjusting your filters or search query.</p>
             <button onClick={() => { setInternalCategory('all'); setSearchQuery(''); }} className="mt-8 text-primary font-bold hover:underline">Clear all filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group cursor-pointer flex flex-col bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200/50">
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/10 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                        <Play className="w-6 h-6 text-white ml-1 fill-current" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-black text-[10px] tracking-widest uppercase">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-4 bg-primary/10 w-fit px-3 py-1 rounded-md">
                      {videoCategories.find(c => c.id === video.category)?.label || 'Video Guide'}
                    </span>
                    <h3 className="text-2xl font-display font-black text-secondary leading-tight mb-4 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Video Modal Theatre */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-lg"
          >
            <div className="absolute inset-0" onClick={() => setSelectedVideo(null)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10 max-h-[90vh]"
            >
              {/* Left: Video Player */}
              <div className="w-full lg:w-2/3 bg-black relative aspect-video lg:aspect-auto flex items-center">
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  className="w-full h-full aspect-video"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
              
              {/* Right: Info & Description */}
              <div className="w-full lg:w-1/3 p-8 md:p-12 overflow-y-auto flex flex-col custom-scrollbar relative bg-slate-50">
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-primary text-[10px] uppercase font-black tracking-widest mb-4 bg-white border border-slate-200 shadow-sm w-fit px-3 py-1.5 rounded-lg">
                  {videoCategories.find(c => c.id === selectedVideo.category)?.label || 'Video Guide'}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary leading-tight mb-8">
                  {selectedVideo.title}
                </h2>
                
                <div className="w-full h-px bg-slate-200 mb-8" />
                
                <h4 className="text-sm font-black text-secondary uppercase tracking-widest mb-4">Detailed Explanation</h4>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-12">
                  {selectedVideo.description}
                </p>

                <div className="mt-auto bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-700">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                       <Play className="w-5 h-5 ml-1 fill-current" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Duration</div>
                      <div>{selectedVideo.duration} Minutes of Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function LibraryPage() {
  import('react').then(mod => {
    // Ensuring Suspense is available via import directly in file.
  });
  const { Suspense } = require('react');

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <LibraryContent />
    </Suspense>
  );
}
