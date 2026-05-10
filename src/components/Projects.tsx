"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "University Management System",
    description: "A comprehensive backend system for managing university operations, students, and courses.",
    tech: ["NestJS", "PostgreSQL", "TypeORM", "Docker"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Real-time Chat Architecture",
    description: "Scalable real-time messaging system with horizontal scaling capabilities and Redis pub/sub.",
    tech: ["Node.js", "WebSockets", "Redis", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "gRPC Microservices Platform",
    description: "A distributed e-commerce backend built with gRPC for high-performance internal communication.",
    tech: ["TypeScript", "gRPC", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Advanced API Gateway",
    description: "Custom API gateway with rate limiting, authentication, and load balancing features.",
    tech: ["Express", "Redis", "JWT", "Docker"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  }
];

export function Projects() {
  return (
    <section className="relative py-32 bg-[#050505]" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent engineering projects, focusing on scalable backend architectures and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border-white/5"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                {/* Fallback to div if Next/Image requires configured domains */}
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              <div className="p-8 relative z-20 bg-black/80 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors">
                    <Code className="w-4 h-4" /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
