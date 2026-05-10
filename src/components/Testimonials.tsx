"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Discipline is choosing between what you want now and what you want most. This applies equally to lifting weights and building scalable distributed systems.",
    author: "Engineering Mindset",
  },
  {
    text: "True mastery comes not from learning every new framework, but from deeply understanding the underlying fundamentals that power them all.",
    author: "Backend Philosophy",
  },
  {
    text: "Consistency compounds. The 1% improvements made every single day eventually result in monumental achievements.",
    author: "The Journey",
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 bg-[#050505]" id="philosophy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The principles that guide my approach to software engineering, problem-solving, and continuous growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 relative group"
            >
              <Quote className="w-10 h-10 text-white/10 absolute top-6 left-6" />
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                  &quot;{quote.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-electric-blue" />
                  <span className="text-white font-medium">{quote.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
