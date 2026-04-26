import Link from 'next/link';
import { doctorInfo } from '@/lib/doctorData';
import { caseCategories } from '@/lib/casesData';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Large Background Text */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden h-1/2">
        <h2 className="text-[20vw] font-display font-black text-white/[0.03] leading-none uppercase select-none whitespace-nowrap tracking-[0.2em]">
          HAYAN
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-5 group inline-flex">
              <div>
                <h1 className="font-serif font-black text-2xl md:text-3xl tracking-tight flex items-baseline">
                  <span className="text-xl md:text-2xl mr-1.5 font-bold">DR.</span>
                  <span className="italic">Hayan</span>
                </h1>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-1 mt-1">Orthodontics Specialist</p>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              {doctorInfo.shortBio}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: doctorInfo.social.instagram },
                { icon: Facebook, href: doctorInfo.social.facebook },
                { icon: Youtube, href: doctorInfo.social.youtube }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-base mb-5 text-white uppercase tracking-widest">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-primary transition-all text-sm font-medium">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-primary transition-all text-sm font-medium">About</Link></li>
              <li><Link href="/guidance" className="text-slate-300 hover:text-primary transition-all text-sm font-medium">Guidance</Link></li>
              <li><Link href="/about#experience" className="text-slate-300 hover:text-primary transition-all text-sm font-medium">Experience</Link></li>
            </ul>
          </div>

          {/* Cases Links */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-base mb-5 text-white uppercase tracking-widest">Treatments</h3>
            <ul className="space-y-3">
              {caseCategories.slice(0, 4).map(cat => (
                <li key={cat.id}>
                  <Link href={`/cases/${cat.id}`} className="text-slate-300 hover:text-primary transition-all text-sm font-medium">
                    {cat.subtitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-base mb-5 text-white uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{doctorInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors font-medium" dir="ltr">{doctorInfo.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors font-medium">{doctorInfo.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1.5 font-medium">
            Made with <span className="text-red-500/60 animate-pulse">♥</span> for perfect smiles
          </p>
        </div>
      </div>
    </footer>
  );
}
