'use client';

import { MessageCircle } from 'lucide-react';
import { doctorInfo } from '@/lib/doctorData';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      href={`https://wa.me/${doctorInfo.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        تواصل معنا
      </span>
    </motion.a>
  );
}
