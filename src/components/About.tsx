"use client";

import { motion } from "framer-motion";
import { Code2, Dumbbell, Brain, Target } from "lucide-react";

export function About() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]" id="about">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              My journey into software engineering started with a simple curiosity about how things work under the hood. Today, I specialize in <span className="text-white font-medium">backend development</span>, system design, and building scalable APIs.
            </p>
            <p>
              I thrive on architecting distributed systems and optimizing database performance. Technologies like Node.js, NestJS, and PostgreSQL are my daily tools, but I am framework-agnostic at heart.
            </p>
            <p>
              Beyond the screen, I maintain a strict gym lifestyle. The <span className="text-white font-medium">discipline and consistency</span> built in the gym directly translate to my engineering mindset—small, incremental progress compounds into massive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon={<Code2 className="text-electric-blue w-8 h-8" />}
              title="Lines of Code"
              value="500K+"
              delay={0.2}
            />
            <StatCard
              icon={<Target className="text-soft-purple w-8 h-8" />}
              title="Projects Built"
              value="30+"
              delay={0.3}
            />
            <StatCard
              icon={<Dumbbell className="text-electric-blue w-8 h-8" />}
              title="Gym Sessions"
              value="1,000+"
              delay={0.4}
            />
            <StatCard
              icon={<Brain className="text-soft-purple w-8 h-8" />}
              title="Hours Learning"
              value="5,000+"
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, value, delay }: { icon: React.ReactNode; title: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
    >
      <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-sm text-gray-400 uppercase tracking-wider">{title}</p>
    </motion.div>
  );
}
