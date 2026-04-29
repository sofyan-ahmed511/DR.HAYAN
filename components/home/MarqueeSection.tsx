import { motion } from 'motion/react';

export default function MarqueeSection() {
  const words = [
    "Digital Precision", "Invisible Braces", "Aesthetic Excellence",
    "Expert Care", "Advanced 3D Technology", "Perfect Smiles"
  ];
  return (
    <section className="py-8 bg-[#1A1A1A] overflow-hidden flex items-center border-y border-white/10">
      <div className="relative flex w-full flex-nowrap overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {Array(4).fill(words).flat().map((word, i) => (
            <div key={i} className="flex items-center">
              <span className="text-3xl md:text-5xl font-serif text-white/90 italic mx-8 whitespace-nowrap px-4 drop-shadow-sm">
                {word}
              </span>
              <span className="text-primary w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
