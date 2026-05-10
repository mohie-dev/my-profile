"use client";

import { motion } from "framer-motion";
import { Trophy, Milestone, BookOpen, Star } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Mastered Advanced Distributed Systems",
    description: "Deep dive into microservices architecture, gRPC, and message brokers like RabbitMQ and Kafka.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Built Real-world API Gateways",
    description: "Architected and deployed custom API gateways managing authentication, rate limiting, and routing.",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: "2022",
    title: "Backend Specialization",
    description: "Transitioned focus entirely to backend engineering, mastering Node.js, Express, and PostgreSQL.",
    icon: <Milestone className="w-5 h-5" />,
  },
  {
    year: "2021",
    title: "Began Programming Journey",
    description: "Wrote my first lines of code. Discovered a passion for logic, algorithms, and system design.",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export function Achievements() {
  return (
    <section className="relative py-32 bg-[#080808]" id="journey">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Journey</span>
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
