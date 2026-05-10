"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Code, Briefcase, MessageCircle, Mail, Camera, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section className="relative py-32 bg-[#080808] overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you have a project in mind, want to discuss backend architectures, or just say hello—my inbox is always open.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting technical challenges, or potential collaborations.
            </p>

            <div className="space-y-4 mb-12">
              <ContactLink href="mailto:[EMAIL_ADDRESS]" icon={<Mail />} text="obaydafarow@gmail.com" />
              <ContactLink href="https://github.com/mohie-dev/" icon={<Code />} text="GitHub" />
              <ContactLink href="https://www.linkedin.com/in/abdelrahman-mohie-dev/" icon={<Briefcase />} text="LinkedIn" />
              <ContactLink href="https://www.instagram.com/mohie.dev/" icon={<MessageCircle />} text="Instagram" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                placeholder="John Doe"
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                placeholder="john@example.com"
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all resize-none"
                placeholder="How can we help each other?"
                suppressHydrationWarning
              />
            </div>
            <Button className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-gray-400 hover:text-electric-blue transition-colors group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-electric-blue/10 transition-colors">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </a>
  );
}
