"use client";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import About from "@/components/about";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
