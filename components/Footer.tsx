import Link from 'next/link';
import Image from 'next/image';
import { doctorInfo } from '@/lib/doctorData';
import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden flex flex-col items-center bg-white pt-24 min-h-[800px]">
      
      {/* Background Section (Mimics the MindWell gradient + image) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fading gradient from the page's light background */}
        <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        
        {/* Scenic mountain/lake background for the plush, calming feel */}
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Serene landscape" 
          className="absolute bottom-0 w-full h-[80%] object-cover object-bottom opacity-90"
        />
        
        {/* Overlay to give the glass-like misty effect */}
        <div className="absolute inset-0 bg-[#e2ebf0]/20 backdrop-blur-[1px] z-10 mix-blend-overlay" />
        <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-[#1b2a38] via-[#213647]/80 to-transparent z-20" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-10 pb-6 flex flex-col items-center h-full">
        
        {/* Top Header / Subscribe Section */}
        <div className="text-center w-full max-w-3xl mb-auto pb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-[#2C3E50] tracking-tight leading-[1.1] mb-6">
            Rethink your <span className="font-bold text-[#1A2530]">Benefits</span><br />
            <span className="italic text-[#4A5D70]">of Orthodontics</span>
          </h2>
          <p className="text-[#5A6D80] font-medium mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            {doctorInfo.shortBio.split('.')[0]}. If you want a perfect smile, we can design it for you.
          </p>
          
          {/* Subscribe Input */}
          <div className="flex bg-white/90 backdrop-blur-xl rounded-full p-1.5 shadow-2xl max-w-md mx-auto border border-white shadow-blue-900/10 hover:shadow-blue-900/20 transition-shadow">
            <div className="flex-1 flex items-center px-4">
              <Send className="w-5 h-5 text-slate-300 mr-3" />
              <input 
                type="email" 
                placeholder="email address" 
                className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="bg-[#8CB1E0] hover:bg-[#7A9FD0] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm">
              Submit
            </button>
          </div>
        </div>

        {/* Lower Section with Arc, Huge Text, and Pill Links */}
        <div className="w-full relative flex justify-center items-end mt-24">
          
          {/* Huge Background Text */}
          <h1 className="absolute bottom-12 whitespace-nowrap text-[18vw] font-serif font-black text-white/40 tracking-tight select-none z-0 mix-blend-overlay drop-shadow-2xl opacity-60">
            Dr. Hayan
          </h1>

          {/* The Arc Graphic */}
          <div className="relative w-[300px] md:w-[600px] lg:w-[800px] h-[150px] md:h-[300px] lg:h-[400px] border-t-[1px] border-l-[1px] border-r-[1px] border-white/30 rounded-t-full z-10 flex flex-col justify-end items-center pb-4">
            {/* Person Silhouette Placeholder - subtle aesthetic element */}
            <div className="w-12 h-16 md:w-16 md:h-24 bg-white/10 backdrop-blur-sm rounded-t-full border border-white/20 mt-auto mb-[-2px]"></div>
          </div>

          {/* Pill Links (Left Side) */}
          <div className="absolute left-0 md:left-[5%] bottom-20 md:bottom-32 flex flex-col gap-3 md:gap-5 z-20">
            <Link href="/" className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 ml-0">
              Home
            </Link>
            <Link href="/about" className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 ml-2 md:ml-6">
              About Us
            </Link>
            <Link href={`mailto:${doctorInfo.contact.email}`} className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 ml-4 md:ml-12">
              Contact Us
            </Link>
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full w-fit shadow-xl ml-6 md:ml-16">
              {doctorInfo.contact.phone}
            </div>
          </div>

          {/* Pill Links (Right Side) */}
          <div className="absolute right-0 md:right-[5%] bottom-20 md:bottom-32 flex flex-col gap-3 md:gap-5 items-end z-20">
             <Link href="/guidance" className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 mr-0">
              Guidance
            </Link>
            <Link href="/cases" className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 mr-2 md:mr-6">
              Treatments
            </Link>
            <Link href="/about#experience" className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/20 hover:text-white transition-all w-fit shadow-xl hover:scale-105 mr-4 md:mr-12">
              Specialists
            </Link>
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium px-6 md:px-8 py-2 md:py-3 rounded-full w-fit shadow-xl mr-6 md:mr-16 truncate max-w-[200px] md:max-w-[300px]">
              {doctorInfo.contact.address.split(',')[0]}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 mt-6 z-20 gap-6">
          <div className="flex items-center gap-6">
            <a href={doctorInfo.social.instagram} className="text-white/70 hover:text-white text-sm font-medium transition-colors">Instagram</a>
            <a href={doctorInfo.social.facebook} className="text-white/70 hover:text-white text-sm font-medium transition-colors">Facebook</a>
            <a href={doctorInfo.social.youtube} className="text-white/70 hover:text-white text-sm font-medium transition-colors">LinkedIn</a>
          </div>

          <div className="text-white/60 text-sm font-medium flex items-center gap-2">
            <span className="opacity-80">©</span> 2026 {doctorInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6 hidden md:flex">
            <Link href="#" className="text-white/50 hover:text-white text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm font-medium transition-colors">Terms Of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

