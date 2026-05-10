"use client";

import { motion } from "framer-motion";
import { Server, Database, Container, Code } from "lucide-react";

const skills = [
  {
    category: "Backend Architecture",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "NestJS", "Express", "RESTful APIs", "GraphQL", "Microservices", "WebSockets", "AI Automation (n8n)"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "TypeORM", "Database Design"],
  },
  {
    category: "DevOps & Cloud",
    icon: <Container className="w-6 h-6" />,
    items: ["Docker", "Linux", "CI/CD", "AWS basics", "VMs", "Vercel", "Railway"],
  },
  {
    category: "Languages & Core",
    icon: <Code className="w-6 h-6" />,
    items: ["TypeScript", "JavaScript", "C++", "Python","System Design", "OOP", "Data Structures"],
  },
];

export function Skills() {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills, specializing in scalable backend technologies and robust architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-electric-blue/10 text-electric-blue group-hover:bg-electric-blue group-hover:text-black transition-colors duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-4">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-soft-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
