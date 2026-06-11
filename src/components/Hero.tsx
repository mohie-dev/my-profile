"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Code, Briefcase, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "../../public/profile-web.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-purple/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-electric-blue/30 blur-2xl rounded-full -z-10" />
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-electric-blue/50 p-1 bg-black/50 backdrop-blur-sm overflow-hidden">
            <Image
              src={profilePic}
              alt="Mohie"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-electric-blue/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="text-sm font-medium text-gray-300 tracking-wide">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="text-gradient">Mohie</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-400 font-medium mb-8 max-w-3xl"
        >
          Software Engineer | Athlete
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-md text-gray-500 max-w-2xl mb-12 leading-relaxed"
        >
          Building scalable systems, modern backend architectures, and meaningful digital experiences, AI Automation, And DevOps Engineering. Let&apos;s build the future together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <Button size="lg" className="w-full sm:w-auto"  onClick={() => window.location.href = "#projects"}>
            View Projects
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = "#contact"}>
            Contact Me
          </Button>
          <Button href="/Mohie_CV.pdf" download variant="outline" size="lg" className="w-full sm:w-auto">
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center gap-6"
        >
          <SocialLink href="https://github.com/mohie-dev/" icon={<Code />} />
          <SocialLink href="https://www.linkedin.com/in/abdelrahman-mohie-dev/" icon={<MessageCircle />} />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[30px] h-[48px] rounded-full border-2 border-white/20 flex justify-center items-start pt-2">
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 rounded-full bg-electric-blue shadow-[0_0_10px_#00f0ff]"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium hover:text-electric-blue transition-colors cursor-pointer" onClick={() => window.location.href = "#experience"}>Scroll</span>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
