"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const newsItems = [
  {
    title: "My Experience with gRPC",
    description: "My Experience with gRPC and first distributed system using Protocol Buffers. It was a great experience.",
    image: "/news/grpc.png", // Placeholder
    link: "https://www.linkedin.com/posts/abdelrahman-mohie-dev_%D9%85%D9%86-%D8%A7%D9%84%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D9%84%D9%8A-%D9%84%D8%A7%D9%8A%D8%B3%D8%B9-%D9%84%D8%A3%D9%8A-developer-%D8%AC%D9%87%D9%84%D9%87%D8%A7-ugcPost-7458550209443418114-WsIp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERxFicBLtHkh-N5Pxb6Z_9BfsmSzrplHBU",
    date: "2 Weeks Ago"
  },
  {
    title: "My Participation In Mega MU Job Fair",
    description: "My participation in Mega MU Job Fair at Mansoura University. I met great people who inspires me to be better in the future. It was a great experience.",
    image: "/news/elzero.jpeg", // Placeholder
    link: "https://www.linkedin.com/posts/abdelrahman-mohie-dev_%D8%A7%D8%B3%D8%AA%D9%83%D9%85%D8%A7%D9%84%D8%A7-%D9%84%D8%B1%D8%AD%D8%A9-%D8%A7%D9%84-events-%D8%A7%D9%84%D9%84%D9%8A-%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%AF-%D9%85%D8%B3%D8%AD%D9%88%D9%84-share-7454593454724046848--OtC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERxFicBLtHkh-N5Pxb6Z_9BfsmSzrplHBU",
    date: "3 Weeks Ago"
  },
  {
    title: "My Participation In The TCCD Job Fair",
    description: "My participation in The TCCD Job Fair at Cairo University.",
    image: "/news/tccd.png", // Placeholder
    link: "https://www.linkedin.com/posts/abdelrahman-mohie-dev_%D8%A7%D9%85%D8%A8%D8%A7%D8%B1%D8%AD-%D9%83%D8%A7%D9%86%D8%AA-%D8%A3%D9%88%D9%84-%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9-%D9%84%D9%8A%D8%A7-%D9%81%D9%8A-%D8%AD%D8%B6%D9%88%D8%B1-%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9-ugcPost-7453110748668637185-Zo7o?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERxFicBLtHkh-N5Pxb6Z_9BfsmSzrplHBU",
    date: "1 Month Ago"
  },
  {
    title: "Attend Mega fair MU",
    description: "I’m excited to announce that I will be member in Mega Job Fair at the Mansoura University. .",
    image: "/news/attend-photo.png", // Placeholder
    link: "https://www.linkedin.com/posts/abdelrahman-mohie-dev_megfair-megaabrteam-shapingabrfutures-share-7450469000762966016-joAO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERxFicBLtHkh-N5Pxb6Z_9BfsmSzrplHBU",
    date: "1 Month Ago"
  },
  {
    title: "Joining Meta Software",
    description: "Excited to share that I've joined Meta Software as a Backend Developer! Building scalable systems in Smart Village.",
    image: "/news/meta-logo.png", // Placeholder
    link: "https://www.linkedin.com/posts/after-a-rigorous-review-of-334-applications-share-7448013648666759170-oVre?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAERxFicBLtHkh-N5Pxb6Z_9BfsmSzrplHBU",
    date: "3 Months Ago"
  }
];

export function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (newsItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (newsItems.length - 2)) % (newsItems.length - 2));
  };

  const visibleItems = newsItems.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden" id="news">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">News</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Recent updates, technical insights, and professional milestones from my journey.
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-electric-blue/50 transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-electric-blue/50 transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${currentIndex}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card group overflow-hidden border-white/5 hover:border-electric-blue/30 transition-all duration-500"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-white transition-colors group/link"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Read on LinkedIn</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/abdelrahman-mohie-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium uppercase tracking-widest">Follow my journey on LinkedIn</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
