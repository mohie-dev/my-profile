"use client";

import { motion } from "framer-motion";
import { Code2, Dumbbell, Brain, Target, Medal, UserCheck } from "lucide-react";
import Image from "next/image";

const images = [
  "/judo/judo-1.jpeg",
  "/judo/judo-2.jpeg",
  "/judo/judo-3.jpeg",
  "/judo/judo-4.jpeg",
  "/judo/judo-5.jpeg",
  "/judo/gym-1.jpeg",
  "/judo/gym-2.jpeg",
  "/judo/gym-3.jpeg",
  "/judo/gym-4.jpeg",
];

export function About() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]" id="about">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Behind the <span className="text-gradient">Code</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Engineering robust backend systems requires more than just knowing syntax. It requires discipline, continuous learning, and a relentless pursuit of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Story - 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="glass-card p-8 md:p-12 h-full flex flex-col justify-center border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-3xl -z-10 group-hover:bg-electric-blue/10 transition-colors duration-500" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue text-xs font-medium mb-6 w-fit">
                <Code2 className="w-3 h-3" />
                <span>The Engineer</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Building with Precision</h3>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  My journey into software engineering started with a simple curiosity about how things work under the hood. Today, I specialize in <span className="text-white font-medium">backend development</span>, system design, and building scalable APIs.
                </p>
                <p>
                  I thrive on architecting distributed systems and optimizing database performance. Technologies like Node.js, NestJS, and PostgreSQL are my daily tools, but I am framework-agnostic at heart.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                <SmallStat value="500K+" label="Lines of Code" icon={<Code2 className="w-4 h-4" />} />
                <SmallStat value="30+" label="Projects" icon={<Target className="w-4 h-4" />} />
                <SmallStat value="5,000+" label="Hours Learning" icon={<Brain className="w-4 h-4" />} />
                <SmallStat value="1,000+" label="Gym Sessions" icon={<Dumbbell className="w-4 h-4" />} />
              </div>
            </div>
          </motion.div>

          {/* Sport Side - 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-card p-8 border-white/5 flex-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft-purple/5 blur-2xl -z-10" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-purple/10 text-soft-purple text-xs font-medium mb-6 w-fit">
                <Medal className="w-3 h-3" />
                <span>The Athlete</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Discipline Off-Screen</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Beyond the screen, I am a <span className="text-white font-medium">high-level Judo player</span> and dedicated bodybuilder. These aren&apos;t just hobbies; they are the foundation of my engineering mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-gray-300">Competitive Judo</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-gray-300">Bodybuilding</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-gray-300 flex items-center gap-2">
                  <UserCheck className="w-3 h-3 text-soft-purple" />
                  Private Trainer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-64">
              <div className="relative rounded-2xl overflow-hidden group border border-white/5">
                <Image 
                  src={images[0]} 
                  alt="Judo Action" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative rounded-2xl overflow-hidden group border border-white/5">
                <Image 
                  src={images[1]} 
                  alt="Judo Medal" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative mt-20 py-10 overflow-hidden">
        {/* Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{
            x: [0, -1920], // Adjusted based on approximate width of doubled items
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-6 w-max"
        >
          {/* Double the array for seamless loop */}
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="relative w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 group/img"
            >
              <Image
                src={img}
                alt={`Gallery image ${idx}`}
                fill
                className="object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          
          {/* Add a stylized card at the end of the first loop set */}
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden glass-card flex flex-col items-center justify-center text-center p-6 border-white/5 group hover:border-electric-blue/30 transition-all duration-500 flex-shrink-0">
            <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Dumbbell className="w-10 h-10 text-electric-blue mb-4 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-lg font-bold text-white uppercase tracking-widest">Consistency</p>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-[0.4em]">Compounds</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SmallStat({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 group/stat">
      <div className="flex items-center gap-2 text-electric-blue group-hover/stat:translate-x-1 transition-transform">
        {icon}
        <span className="text-xl font-bold text-white">{value}</span>
      </div>
      <span className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}
