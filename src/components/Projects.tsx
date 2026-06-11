"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Future Platform (LMS)",
    description:
      "Designed and developed a scalable backend intended to serve as a core academic system for college use, based on official regulations and business rules. Implemented complex business logic for academic workflows, including course management, enrollments, and student lifecycle. Built an advanced role-based permission system with fine-grained access control. Developed a GPA/​CGPA engine and delivered professional API documentation.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Docker", "Rate Limiting"],
    github: "https://github.com/mohie-dev/Future-Platform",
    demo: "https://future-platform-indol.vercel.app/",
    image: "/future-cover.png",
  },
  {
    title: "Aqnaeni App | اقنعني",
    description:
      "Aqnaeni is an Arabic interactive game experience for group sessions where players create topics, add questions, approve challenges, and vote to uncover the defender. The application includes a React + Vite frontend and a Node.js + Express backend with MongoDB persistence.",
    tech: ["Express", "TypeScript", "MongoDB", "React", "Tailwind"],
    github: "https://github.com/mohie-dev/aqnaeni-app",
    demo: "https://aqnaeni.vercel.app/",
    image: "/aqnaeni-cover.png",
  },
  {
    title: "Zimmah Platform | ذِمَّة",
    description:
      "A system built to secure and verify ownership of valuable assets. It was a first attempt to work with Next.js(API Routes), MySQL, and Prisma, also I contributed in it as a Backend Developer in this period I was with company called 'Meta Software' in ITIDA | Smart Village",
    tech: ["Next.js(API Routes)", "TypeScript", "MySQL", "Prisma"],
    demo: "https://platform-zimmah.vercel.app/",
    image: "/zimmah-cover.jpeg",
  },
  {
    title: "Ordering System",
    description:
      "Developed a complete backend system for managing restaurant operations, including order creation, updates, and real-time status handling with scalable API design. Implemented the full order lifecycle with proper business logic to ensure consistency and smooth workflow execution. Integrated Stripe for secure online payments and built admin features with analytics to monitor orders, track performance, and manage the system efficiently.",
    tech: [ "Express", "JavaScript","MongoDB", "JWT", "Stripe"],
    github: "https://github.com/mohie-dev/restaurant_management_system_backend",
    image: "/order-cover.png",
  },
  {
    title: "Grade View | نظام عرض النتائج",
    description:
      "A modern, comprehensive web application designed for universities and educational institutions to efficiently manage and display student academic results. Grade View offers a seamless experience for students to query their results securely using their Seat Number and National ID.",
    tech: [      
      "Nestjs",
      "TypeScript",
      "MongoDB",
      "exceljs",
      "Next.js",
      "Tailwind",
    ],
    github: "https://github.com/mohie-dev/grade-view",
    image: "/grade-view-cover.png",
  },
];

export function Projects() {
  return (
    <section
      className="relative py-32 bg-[#050505] overflow-hidden"
      id="projects"
    >
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
            A selection of my recent engineering projects, focusing on scalable
            backend architectures and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const hasGithub = project.github && project.github !== "#";

            const hasDemo = project.demo && project.demo !== "#";

            return (
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

                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                <div className="p-8 relative z-20 bg-black/80 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

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
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors"
                      >
                        <Code className="w-4 h-4" />
                        Code
                      </a>
                    )}

                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
