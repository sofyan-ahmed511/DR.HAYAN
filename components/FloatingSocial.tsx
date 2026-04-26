'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Facebook, Youtube, Linkedin, X, LayoutGrid } from 'lucide-react';
import { doctorInfo } from '@/lib/doctorData';

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/${doctorInfo.contact.whatsapp}`, color: 'bg-[#25D366]', label: 'WhatsApp' },
    { icon: Instagram, href: doctorInfo.social.instagram, color: 'bg-[#E1306C]', label: 'Instagram' },
    { icon: Facebook, href: doctorInfo.social.facebook, color: 'bg-[#1877F2]', label: 'Facebook' },
    { icon: Linkedin, href: doctorInfo.social.linkedin, color: 'bg-[#0A66C2]', label: 'LinkedIn' },
    { icon: Youtube, href: doctorInfo.social.youtube, color: 'bg-[#FF0000]', label: 'YouTube' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-3 mb-2"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1, delay: index * 0.02 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform group ${link.color}`}
                  aria-label={link.label}
                >
                  <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.label}
                  </span>
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl text-white transition-colors duration-300 flex items-center justify-center ${
          isOpen ? 'bg-slate-800 hover:bg-slate-900' : 'bg-primary hover:bg-primary-dark'
        }`}
        aria-label="تواصل معنا"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-7 h-7" /> : <LayoutGrid className="w-7 h-7" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
