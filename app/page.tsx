"use client";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
 <main className="w-full overflow-x-hidden">
  <Navbar />
  <Hero/>
  <Projects/>
  <About/>
 <Contact/>
 </main>
  );
}
