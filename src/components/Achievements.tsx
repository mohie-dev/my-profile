"use client";

import { motion } from "framer-motion";
import { Trophy, Milestone, BookOpen, Star } from "lucide-react";

const milestones = [
  {
    year: "2026 - Now",
    title: "Starting My First Full-time Job",
    description: "My first contract as a Junior Backend Developer at 'Meta Software' in ITIDA | Smart Village.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: "2025 - 2026",
    title: "Built Real-world API Gateways",
    description: "Architected and deployed custom API gateways managing authentication, rate limiting, and routing. And implemnted my knowledge in System Design and API Design. And I was able to secure my first job at Meta Software as a Backend Developer in this period.",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: "2024 - 2025",
    title: "Backend Specialization",
    description: "Started to learn backend development, and I started to implement my own backend applications with Express.js and MongoDB",
    icon: <Milestone className="w-5 h-5" />,
  },
  {
    year: "2023 - 2024",
    title: "Began Programming Journey",
    description: "In October 2023, I started my programming journey, it was a big step in my life. I joind to DECI program that helped me to learn programming and development, and it was a great experience for me. I achieved my first milestone by finish level 1 & 2 in october 2024",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export function Achievements() {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="journey">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of continuous growth, technical milestones, and the relentless pursuit of engineering excellence.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-electric-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,240,255,0.2)] z-10">
                {milestone.icon}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-electric-blue/50 transition-colors duration-300">
                <div className="flex flex-col mb-2">
                  <span className="text-electric-blue font-bold tracking-widest text-sm mb-1">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                </div>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
