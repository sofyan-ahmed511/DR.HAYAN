'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { skills, timeline } from '@/lib/aboutData';
import { doctorInfo } from '@/lib/doctorData';
import { ArrowRight, X, Award, Users } from 'lucide-react';
import { useState, useCallback } from 'react';

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null); // محتفظ بيه لو احتجته بعدين

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-slate-900 font-sans selection:bg-slate-900 selection:text-white pb-24 overflow-x-hidden w-full">

      {/* 1. HERO SECTION */}
      <section className="pt-48 lg:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-sm font-bold tracking-wider uppercase mb-8">
              / About Dr. Hayan Musab
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[0.95] mb-6 text-slate-900">
              Transforming<br />
              <span className="italic text-slate-500 font-light">Smiles</span> with Precision
            </h1>
            <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-6 py-3 rounded-full mt-6 hover:bg-slate-800 transition-colors cursor-pointer group shadow-xl hover:shadow-2xl">
              <span className="font-semibold text-sm">Book Consultation</span>
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="pb-4"
          >
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1720685193975-3b449a7cb905?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt="Modern Orthodontic Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="my-16 md:my-32 relative overflow-hidden min-h-[80vh] py-20 flex flex-col justify-center rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-12 shadow-2xl">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?w=1200&auto=format&fit=crop")' }} />
        <div className="absolute inset-0 bg-slate-900/40 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto w-full px-6 flex flex-col gap-6 md:gap-12">
          {[
            { text: "Syrian Orthodontist dedicated to transforming smiles through precise and detail-oriented care.", num: "6+", sub: "Years of Clinical Experience" },
            { text: "Actively pursuing continuous professional development with leading experts.", num: "8+", sub: "Advanced Courses & Workshops" },
            { text: "Committed to delivering exceptional functional and aesthetic results.", num: "500+", sub: "Happy Patients" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white/95 backdrop-blur-xl w-full rounded-3xl md:rounded-full px-6 py-6 md:px-12 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 shadow-2xl max-w-4xl hover:scale-[1.02] transition-transform duration-500 overflow-hidden"
            >
              <p className="text-slate-700 font-medium text-sm md:text-base w-full md:max-w-md text-center md:text-left">{stat.text}</p>
              <div className="text-center md:text-right shrink-0 mt-2 md:mt-0 w-full md:w-auto min-w-0 md:min-w-[120px]">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tighter">{stat.num}</h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE DOCTOR / BIO */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#D2C5B8] rounded-[3rem] p-8 md:p-12 pb-0 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="relative aspect-[3/4] w-full rounded-t-[2.5rem] overflow-hidden drop-shadow-2xl">
              <Image
                sizes="100vw"
                src="https://i.postimg.cc/qMhzt4KT/Gemini-Generated-Image-pd93supd93supd93.png"
                alt="Dr. Hayan Musab"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">// The Orthodontist</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter text-slate-900 leading-[1.05] mb-8">
              Experienced specialist <br /> you can trust.
            </h2>

            <p className="text-xl md:text-2xl font-serif text-slate-600 leading-snug italic mb-10">
              &quot;{doctorInfo.philosophy}&quot;
            </p>

            <div className="mb-8">
              <h3 className="text-3xl font-medium text-slate-900 mb-2">Dr. Hayan Musab</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wide text-sm">Orthodontist • Syrian Nationality</p>
            </div>

            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              {doctorInfo.fullBio}
            </p>


          </motion.div>
        </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY - WORK EXPERIENCE (4 items only) */}
      <section className="py-24 bg-white rounded-[3rem] mx-4 md:mx-12 shadow-sm border border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Professional Journey</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900">Work Experience</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12 relative z-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-block px-3 py-1 bg-[#FAF9F6] border border-slate-100 text-slate-600 text-xs font-bold rounded-full mb-3 shadow-sm">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 font-bold text-sm mb-3 uppercase tracking-wide">{item.institution}</p>
                    <p className="text-slate-500">{item.description}</p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#FAF9F6] flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center font-serif italic pb-1">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINICAL EXPERTISE & SKILLS */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Clinical Expertise</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900 max-w-2xl leading-[1.1]">
              Clinical Skills
            </h2>
            <p className="text-slate-500 max-w-md">
              Advanced techniques focused on delivering optimal functional and aesthetic orthodontic outcomes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">{skill.name}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. PERSONAL SKILLS */}
      <section className="py-24 bg-white mx-4 md:mx-12 rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Personal Approach</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900">Personal Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#FAF9F6] rounded-[2.5rem] p-10">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-10 h-10 text-slate-900" />
                <h3 className="text-2xl font-medium">Clinical Precision</h3>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li>• Advanced Orthodontic Diagnosis and Treatment Planning</li>
                <li>• Cephalometric Analysis and Radiographic Interpretation</li>
                <li>• Fixed Appliance Management and Precise Bracket Positioning</li>
                <li>• Wire Sequencing, Bending, and Treatment Adjustments</li>
                <li>• Temporary Anchorage Devices (TADs)</li>
                <li>• Clear Aligner Therapy Planning & Monitoring</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#FAF9F6] rounded-[2.5rem] p-10">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-10 h-10 text-slate-900" />
                <h3 className="text-2xl font-medium">Soft Skills</h3>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li>• Effective Patient Communication and Case Presentation</li>
                <li>• Strong Ability to Enhance Patient Understanding and Case Acceptance</li>
                <li>• Teamwork and Interdisciplinary Collaboration</li>
                <li>• Attention to Detail and High Level of Clinical Precision</li>
                <li>• Time Management and Efficient Workflow</li>
                <li>• Patient Education through Digital & Social Media</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. COURSES SECTION (New - Replaced Certificates) */}
      <section className="py-24 bg-white rounded-[3rem] mx-4 md:mx-12 shadow-sm border border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">/ Professional Development</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter text-slate-900">Advanced Courses & Training</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12 relative z-10">
              {[
                {
                  year: "18 Jan 2025",
                  title: "Advanced Orthodontic Mini Screws Course",
                  institution: "Egyptian Orthodontic Society",
                  description: "Specialized training in mini screws techniques."
                },
                {
                  year: "15 Jan 2025",
                  title: "Clear Aligner Therapy Course",
                  institution: "Prof. Giorgio Iodice",
                  description: "Advanced clear aligner treatment planning and execution."
                },
                {
                  year: "6 Nov 2022",
                  title: "Clear Aligner Therapy Course",
                  institution: "Prof. Ravindra Nanda",
                  description: "Advanced training with world-renowned orthodontist."
                },
                {
                  year: "5 Nov 2022",
                  title: "Advanced Orthodontic Diagnosis & Treatment Planning",
                  institution: "OneTrack Academy",
                  description: "Comprehensive diagnosis and planning methodologies."
                },
                {
                  year: "4 Nov 2022",
                  title: "Orthodontic Wire Bending Course",
                  institution: "OneTrack Academy",
                  description: "Hands-on training in wire sequencing and bending."
                },
                {
                  year: "2 Nov 2022",
                  title: "Orthodontic Mini Screws Course",
                  institution: "OneTrack Academy",
                  description: "Hands-on training in wire sequencing and bending."
                }
              ].map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-block px-3 py-1 bg-[#FAF9F6] border border-slate-100 text-slate-600 text-xs font-bold rounded-full mb-3 shadow-sm">
                      {course.year}
                    </div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-2">{course.title}</h3>
                    <p className="text-slate-600 font-bold text-sm mb-3 uppercase tracking-wide">{course.institution}</p>
                    <p className="text-slate-500">{course.description}</p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#FAF9F6] flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center font-serif italic pb-1">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
          <div className="sticky top-32">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-sm font-medium mb-6">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter text-slate-900 leading-[1.1] mb-8">
              Cultivate your <br className="hidden md:block" /> perfect smile <br className="hidden md:block" /> in 3 steps
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12 max-w-sm">
              Empower yourself with a seamless treatment setup designed for modern, predictable, and aesthetic results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1664529845836-433c172142ca?w=1800&auto=format&fit=crop&q=60"
                alt="Steps"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          <div className="space-y-6 pt-12 md:pt-32 relative">
            <div className="absolute left-[54px] top-[180px] bottom-10 w-px bg-slate-200 -z-10 hidden md:block" />

            {[
              { title: "Connect With Us", desc: "Book your consultation. Receive thorough clinical evaluation and digital records." },
              { title: "Define the Vision", desc: "Review your personalized treatment plan with clear expectations." },
              { title: "Watch It Grow", desc: "Start your customized journey with regular monitoring and precise adjustments." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#FAF9F6] rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 flex gap-6 md:gap-10 items-start group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
              >
                <div className="w-14 h-14 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center font-display font-black text-xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors shadow-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}