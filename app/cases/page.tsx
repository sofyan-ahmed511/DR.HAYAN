import { caseCategories } from '@/lib/casesData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export default function CasesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#1A1A1A] font-medium text-xs mb-6 uppercase tracking-widest shadow-sm">
            <Star className="w-4 h-4 text-amber-500" /> Clinical Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
            Orthodontic Excellence
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Explore our comprehensive collection of clinical case studies, demonstrating predictable outcomes and meticulous treatment planning tailored to each unique smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/cases/${category.id}`}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image 
                  src={category.image || category.iconImg} 
                  alt={category.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3 group-hover:text-amber-600 transition-colors">{category.title}</h3>
                  <p className="text-sm font-light text-slate-500 mb-6">{category.subtitle}</p>
                </div>
                <div className="flex items-center text-amber-600 font-medium text-sm gap-2 tracking-wide uppercase">
                  View Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
