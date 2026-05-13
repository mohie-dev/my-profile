"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Junior Backend Engineer",
    company: "Meta Software",
    location: "Smart Village in ITIDA",
    duration: "02/2026 – Present",
    icon: <Briefcase className="w-5 h-5" />,
    description: [
      "Contributed to building and maintaining the Zimmah platform for secure asset ownership tracking.",
      "Designed and implemented secure RESTful APIs with authentication, validation, and middleware.",
      "Built systems for tracking ownership history with audit logging and high data integrity.",
      "Collaborated on production-level features, improving system performance and reliability.",
    ],
    isCurrent: true,
  },
  {
    role: "Backend Developer",
    company: "Independent Projects For Training",
    location: "Remote",
    duration: "08/2025 – 01/2026",
    icon: <Briefcase className="w-5 h-5" />,
    description: [
      "Built and deployed scalable backend architectures using Node.js, NestJS, and ExpressJS.",
      "Architected distributed systems and optimized database performance for various client projects.",
      "Integrated third-party services and implemented complex business logic for web applications.",
    ],
    isCurrent: false,
  },
  {
    role: "Software Engineering Student",
    company: "DECI Training Program Level 1 & 2",
    location: "Online / Hybrid",
    duration: "10/2022 – 10/2024",
    icon: <GraduationCap className="w-5 h-5" />,
    description: [
      "Completed an intensive training program focused on core computer science and software development.",
      "Achieved major milestones by finishing Level 1 & 2 of the curriculum.",
      "Mastered technologies including Python, JavaScript",
    ],
    isCurrent: false,
  },
];

export function Experience() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden" id="experience">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-soft-purple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth, technical contributions, and the experiences that shaped my engineering mindset.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/50 via-soft-purple/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center z-10">
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${exp.isCurrent ? "bg-electric-blue/20 text-electric-blue shadow-[0_0_15px_rgba(0,240,255,0.3)]" : "text-gray-500"}`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-8 border-white/5 hover:border-electric-blue/30 transition-all duration-500 group relative">
                    {exp.isCurrent && (
                      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[10px] font-bold uppercase tracking-wider">
                        Current
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-1 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-medium text-gray-300">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for MD screens to handle the timeline point alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
