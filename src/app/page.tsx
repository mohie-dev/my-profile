import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Floating Header / Nav could be added here */}
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center bg-[#050505]">
        <p className="text-gray-500 text-sm" suppressHydrationWarning>
          © {new Date().getFullYear()} Abdelrahman. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
