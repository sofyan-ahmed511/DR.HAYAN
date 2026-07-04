'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { recognitionData } from '@/lib/recognitionData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function InternationalRecognition() {
    return (
        <section className="relative py-36 overflow-hidden bg-[#FAF9F6]">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-slate-200/20 blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-slate-300/20 blur-[160px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-center mb-28"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 shadow-sm mb-8">
                        <Sparkles className="w-4 h-4 text-slate-700" />
                        <span className="uppercase tracking-[0.25em] text-xs font-bold text-slate-500">
                            INTERNATIONAL RECOGNITION
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05] text-slate-900 mb-8">
                        Learning from the
                        <br />
                        <span className="italic font-light text-slate-500">
                            world&apos;s leading experts
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg leading-9 text-slate-500">
                        Continuous education and meaningful collaboration with internationally respected orthodontic pioneers remain a cornerstone of delivering modern, evidence-based orthodontic care.
                    </p>
                </motion.div>

                {/* ================= TIMELINE ITEMS ================= */}
                <div className="space-y-40">
                    {recognitionData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`grid lg:grid-cols-2 gap-16 xl:gap-24 items-center ${index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                        >
                            {/* ================= IMAGE SIDE ================= */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -120 : 120,
                                    rotate: index % 2 === 0 ? -5 : 5,
                                    scale: 0.88,
                                    filter: 'blur(8px)'
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    rotate: 0,
                                    scale: 1,
                                    filter: 'blur(0px)'
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.35
                                }}
                                transition={{
                                    duration: 1.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.015,
                                    rotate: index % 2 === 0 ? -1 : 1
                                }}
                                className="relative group cursor-pointer"
                            >
                                {/* Luxury Glow Layer */}
                                <div className="absolute -inset-8 rounded-[3.5rem] bg-gradient-to-br from-slate-200/40 via-white/5 to-transparent blur-3xl opacity-0 group-hover:opacity-75 transition-all duration-700" />

                                <div className="relative overflow-hidden rounded-[2.75rem] shadow-[0_40px_80px_-20px_rgb(15,23,42,0.15)]">
                                    <Image
                                        src={item.image}
                                        alt={`${item.name} - ${item.organization}`}
                                        width={920}
                                        height={1150}
                                        className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-[800ms] group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority={index === 0}
                                    />

                                    {/* Image Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Subtle Frame */}
                                    <div className="absolute inset-0 rounded-[2.75rem] ring-1 ring-white/30 pointer-events-none" />
                                </div>
                            </motion.div>

                            {/* ================= CONTENT SIDE ================= */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? 80 : -80
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.35
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="space-y-9 pt-4"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 shadow-sm hover:shadow transition-shadow"
                                >
                                    <Sparkles className="w-4 h-4 text-slate-600" />
                                    <span className="uppercase tracking-[0.25em] text-xs font-bold text-slate-500">
                                        COMMEMORATIVE MOMENT
                                    </span>
                                </motion.div>

                                {/* Name */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl lg:text-6xl font-serif tracking-tight leading-none text-slate-900"
                                >
                                    {item.name}
                                </motion.h3>

                                {/* Role + Organization */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 }}
                                >
                                    <p className="text-2xl font-medium text-slate-700">
                                        {item.role}
                                    </p>
                                    <p className="uppercase tracking-widest text-xs font-semibold text-slate-400 mt-1">
                                        {item.organization}
                                    </p>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-lg leading-relaxed text-slate-600 max-w-prose"
                                >
                                    {item.description}
                                </motion.p>

                                {/* Event & Year */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.85 }}
                                    className="flex flex-wrap gap-4 pt-4"
                                >
                                    <div className="rounded-2xl bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm">
                                        {item.event}
                                    </div>

                                    <motion.div
                                        whileHover={{ x: 8, scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="group rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        {item.year}
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                                    </motion.div>
                                </motion.div>

                                {/* Elegant Divider */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{
                                        delay: 1.05,
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}