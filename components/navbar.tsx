"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
 useGSAP(() => {
  const navTween = gsap.timeline({
   scrollTrigger: {
   trigger: 'nav',
   start: 'bottom top'
   }
  });
  
  navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
   backgroundColor: '#00000050',
   backdropFilter: 'blur(10px)',
   duration: 1,
   ease: 'power1.inOut'
  });
  })
  return (
    <nav className="fixed z-50 w-full">
    <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
     <a href="#home" className="flex items-center gap-2 cursor-pointer text-nowrap md:text-base text-sm">
      <p className="text-3xl -mb-2">NP</p>
     </a>
     
     <ul className="flex justify-center items-center lg:gap-12 gap-7">
      {navLinks.map((link) => (
       <li key={link.id}>
        <a href={`#${link.id}`} className="cursor-pointer text-nowrap md:text-base text-sm">{link.title}</a>
       </li>
      ))}
     </ul>
    </div>
   </nav>
  );
}