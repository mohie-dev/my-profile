"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Code, Briefcase, Mail, Camera, Phone } from "lucide-react";
import { saveContactMessage } from "@/app/actions";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      // 1. Log message locally
      await saveContactMessage(formData);

      // 2. Submit to Web3Forms directly from the browser (bypasses Cloudflare block)
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE" || accessKey.trim() === "") {
        setStatus("error");
        setErrorMessage("Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env.local file.");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error("Web3Forms API error response:", {
          status: response.status,
          statusText: response.statusText,
          contentType,
          body: errorText,
        });
        setStatus("error");
        setErrorMessage(`Mail service returned an error (Status ${response.status}). Please try again later.`);
        return;
      }

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to forward your message via Web3Forms.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your network connection and try again.");
    }
  };

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
              <ContactLink href="mailto:obaydafarow@gmail.com" icon={<Mail />} text="obaydafarow@gmail.com" />
              <ContactLink href="https://wa.me/+201094790608" icon={<Phone />} text="+20 109 479 0608" />
              <ContactLink href="https://github.com/mohie-dev/" icon={<Code />} text="GitHub" />
              <ContactLink href="https://www.linkedin.com/in/abdelrahman-mohie-dev/" icon={<Briefcase />} text="LinkedIn" />
              <ContactLink href="/Mohie_CV.pdf" icon={<Briefcase />} text="Download CV" download />
              <ContactLink href="https://www.instagram.com/mohie.dev/" icon={<Camera />} text="Instagram" />
            </div>
          </motion.div>

          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-6 h-full min-h-[450px]"
                >
                  <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue animate-bounce">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed">
                      Thank you for reaching out! Your message has been received successfully. I will review it and get back to you as soon as possible.
                    </p>
                  </div>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="glass-card p-8 space-y-6 h-full"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      disabled={status === "submitting"}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                      }`}
                      placeholder="Mohamed Ahmed"
                      suppressHydrationWarning
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      disabled={status === "submitting"}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                      }`}
                      placeholder="mo@example.com"
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      disabled={status === "submitting"}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-electric-blue focus:ring-electric-blue"
                      }`}
                      placeholder="How can we help each other?"
                      suppressHydrationWarning
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full relative overflow-hidden"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2 justify-center">
                        <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, text, download = false }: { href: string; icon: React.ReactNode; text: string; download?: boolean }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-gray-400 hover:text-electric-blue transition-colors group"
      target="_blank"
      rel="noopener noreferrer"
      {...(download ? { download: "" } : {})}
    >
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-electric-blue/10 transition-colors">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </a>
  );
}
