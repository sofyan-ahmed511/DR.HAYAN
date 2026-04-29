'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Activity, ScanLine, ShieldCheck, LucideIcon } from 'lucide-react';

export default function WellnessJourney() {
  const cards = [
// ... (I will need to replace the whole file or just do a regex style replacement, wait no, I will redefine cards correctly using standard loop or destructuring)
    {
      title: "Find Your Treatment",
      desc: "Browse our specialized orthodontic services, from traditional brackets to clear aligners.",
      icon: Activity,
      colSpan: "lg:col-span-4",
      bgImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Flexible Financing",
      desc: "Choose from monthly plans, insurance matching, or upfront discounts.",
      icon: ShieldCheck,
      colSpan: "lg:col-span-8",
      splitImg: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Track Progress",
      desc: "Monitor your dental shift journey with our custom app.",
      icon: ScanLine,
      colSpan: "lg:col-span-5",
      bgImg: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced Care",
      desc: "Experience AI-driven movement prediction algorithms.",
      icon: ScanLine,
      colSpan: "lg:col-span-7",
      bgImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[#2C3E50] leading-[1.05] max-w-2xl">
            Everything You Need For Your <span className="font-serif italic font-light text-[#4A5D70]">Smile Journey</span>
          </h2>
          <Link href="/guidance" className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#2C3E50] hover:text-primary transition-colors pb-4 border-b border-slate-200 hover:border-primary cursor-pointer w-fit">
            Explore All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-[#E6EEF5] rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative min-h-[400px] lg:col-span-4`}
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2C3E50] mb-8 relative z-10 shadow-sm group-hover:scale-110 transition-transform">
              {(() => { const Icon = cards[0].icon; return <Icon className="w-5 h-5" />; })()}
            </div>
            <div className="relative z-10 w-2/3 md:w-full mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2530] mb-4">{cards[0].title}</h3>
              <p className="text-[#5A6D80] font-medium leading-relaxed">{cards[0].desc}</p>
            </div>
            {/* Background image half */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-slate-200 overflow-hidden">
               <Image src={cards[0].bgImg!} alt="bg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`bg-[#F0F4F8] rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row justify-between group overflow-hidden relative min-h-[400px] lg:col-span-8`}
          >
            <div className="flex-1 pr-8 relative z-10 mb-8 sm:mb-0">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2C3E50] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {(() => { const Icon = cards[1].icon; return <Icon className="w-5 h-5" />; })()}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2530] mb-4">{cards[1].title}</h3>
              <p className="text-[#5A6D80] font-medium leading-relaxed max-w-xs">{cards[1].desc}</p>
            </div>
            {/* Split Image Style */}
            <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto rounded-2xl overflow-hidden relative self-end h-full min-h-[200px]">
              <Image src={cards[1].splitImg!} alt="bg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`bg-[#DCE7F0] rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative min-h-[400px] lg:col-span-5`}
          >
            <div className="absolute inset-0 z-0">
               <Image src={cards[2].bgImg!} alt="bg" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#DCE7F0] via-[#DCE7F0]/80 to-transparent"></div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2C3E50] mb-8 relative z-10 shadow-sm group-hover:scale-110 transition-transform">
              {(() => { const Icon = cards[2].icon; return <Icon className="w-5 h-5" />; })()}
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2530] mb-4">{cards[2].title}</h3>
              <p className="text-[#3A4D60] font-medium leading-relaxed">{cards[2].desc}</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`bg-[#1B2A38] rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative min-h-[400px] lg:col-span-7`}
          >
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700">
               <Image src={cards[3].bgImg!} alt="bg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A38] to-transparent"></div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 relative z-10 border border-white/20 group-hover:bg-white group-hover:text-[#1B2A38] transition-colors">
              {(() => { const Icon = cards[3].icon; return <Icon className="w-5 h-5" />; })()}
            </div>
            <div className="relative z-10 max-w-md mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{cards[3].title}</h3>
              <p className="text-[#AABBCB] font-medium leading-relaxed">{cards[3].desc}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
