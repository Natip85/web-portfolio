import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const leftBullets = [
  "I care about clarity before complexity",
  "I prefer thoughtful decisions over quick hacks",
  "I enjoy shaping ideas before writing code",
  "I optimize for long-term maintainability",
];

const rightBullets = [
  "Clean structure and predictable systems",
  "Honest trade-offs, not over-engineering",
  "Strong collaboration and clear communication",
  "Products that feel calm and intuitive to use",
];

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    // --- State 1: Entrance stagger animations ---

    // Stagger left bullets line by line
    gsap.from(".about-left li", {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    // Stagger right bullets line by line
    gsap.from(".about-right li", {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    // Bottom line entrance
    gsap.from(".about-bottom-line", {
      opacity: 0,
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
      },
    });

    // --- Scroll-driven mask timeline (State 1 → State 2) ---

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    gsap.set(".masked-img", {
      maskSize: "80%",
      webkitMaskSize: "80%",
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center 40%",
        maskSize: "600%",
        webkitMaskPosition: "center 40%",
        webkitMaskSize: "600%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
      })
      .from(
        ".state2-line",
        {
          opacity: 0,
          yPercent: 60,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3",
      );
  });

  return (
    <div
      id="about"
      className="flex-center flex-col min-h-dvh p-5 mt-10 relative radial-gradient"
    >
      <div className="container mx-auto h-full pt-20">
        {/* State 1: Big background word */}
        <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8">
          ABOUT
        </h2>

        <div className="flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          {/* Left bullets — how you work */}
          <ul className="about-left space-y-4 will-fade">
            {leftBullets.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 overflow-hidden"
              >
                <span className="text-yellow-500 text-lg shrink-0">—</span>
                <p className="text-gray-300">{item}</p>
              </li>
            ))}
          </ul>

          {/* Masked portrait image */}
          <div className="w-[94vw] max-w-[480px] md:w-[min(55vw,620px)] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 aspect-3/4 max-h-[80vh]">
            <div className="relative size-full">
              <Image
                fill
                src="/images/me.jpeg"
                alt="portrait"
                className="abs-center masked-img size-full object-cover object-[50%_20%]"
              />
            </div>
          </div>

          {/* Right bullets — what you value */}
          <ul className="about-right space-y-4 will-fade">
            {rightBullets.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start gap-3 overflow-hidden"
              >
                <span className="text-yellow-500 text-lg shrink-0">—</span>
                <p className="md:w-fit w-60 text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Bottom line — philosophical */}
          <h2 className="will-fade about-bottom-line text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32 overflow-hidden">
            Good software is quiet. It just works.
          </h2>

          {/* State 2: Portrait-focused (revealed after mask zoom) */}
          <div
            id="masked-content"
            className="  opacity-0 md:px-0 px-5 space-y-4 absolute md:bottom-5 bottom-52 left-1/2 -translate-x-1/2"
          >
            <h3 className="bg-black/30 rounded-md py-1 px-2 w-fit mx-auto state2-line md:text-5xl text-3xl text-center font-serif text-white">
              Hi, I&apos;m Nati.
            </h3>
            <p className="bg-black/30 state2-line text-lg text-center md:max-w-2xl max-w-sm mx-auto text-gray-300 leading-relaxed">
              I&apos;m a developer who enjoys the space between design and
              engineering. I like understanding the why before jumping into the
              how, and I care about the experience just as much as the
              implementation.
            </p>
            <p className="state2-line text-lg text-center md:max-w-2xl max-w-sm mx-auto text-gray-300 leading-relaxed">
              When I&apos;m not writing code, you&apos;ll find me hanging out
              with my wife, chasing after our two kids (and our dog), or yelling
              at the TV during NBA games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
