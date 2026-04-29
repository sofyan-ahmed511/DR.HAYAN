'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function ThreeSteps() {
  const steps = [
    { num: "01", title: "Digital Consultation", desc: "Connect with our experts online or in-clinic. We use advanced 3D scanning to map your entire dental structure." },
    { num: "02", title: "Customized Planning", desc: "Receive a personalized treatment timeline and a 3D preview of your future smile before we even begin." },
    { num: "03", title: "Witness the Change", desc: "Progress through your custom aligners or precise bracket system, tracking real-time improvements." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6F5F2] relative z-20">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        
        {/* Top Header Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end w-full mx-auto">
          <div>
            <div className="w-fit px-4 py-2 bg-slate-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-8">
              How It Works
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-[#1A1A1A] leading-[1.1]">
              Achieve Perfection <br/> 
              <span className="font-serif italic font-light text-slate-600">In 3 Simple Steps</span>
            </h2>
          </div>
          <div className="pb-4">
            <div className="w-full h-px bg-slate-200 mb-6"></div>
            <p className="text-slate-500 font-medium md:text-lg max-w-md leading-relaxed">
              Empower your confidence and boost your dental health with a seamless setup designed for modern comfort.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full mx-auto">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full min-h-[500px] lg:min-h-[600px] relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
             <Image 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1500&q=80"
              alt="Dental Consultation"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Steps */}
          <div className="flex flex-col gap-6 md:gap-10">
            {steps.map((step, i) => {
              const isActive = i === 1; // Highlight the middle one by default as per image style, or make them hoverable
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className={`flex gap-6 md:gap-10 items-center md:items-start p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-default group ${
                    isActive ? "bg-white shadow-[0_20px_50px_rgb(0,0,0,0.05)] scale-105 border border-slate-100" : "hover:bg-white/50"
                  }`}
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full flex items-center justify-center text-xl md:text-2xl transition-colors ${
                    isActive ? "bg-primary/10 text-primary font-medium" : "bg-slate-200/50 text-slate-500 font-light group-hover:bg-primary/5 group-hover:text-primary"
                  }`}>
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3">{step.title}</h4>
                    <p className={`text-sm md:text-base leading-relaxed font-medium ${isActive ? "text-slate-500" : "text-slate-400"}`}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
