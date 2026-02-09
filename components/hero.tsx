"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const isVideoReadyRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Smooth video scrubbing - waits for video to be ready and prevents seek queue buildup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track seeking state to prevent queue buildup
    const onSeeking = () => {
      isSeekingRef.current = true;
    };

    const onSeeked = () => {
      isSeekingRef.current = false;
    };

    // Wait for video to be ready for scrubbing
    const onCanPlayThrough = () => {
      isVideoReadyRef.current = true;
    };

    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("canplaythrough", onCanPlayThrough);

    // Check if already ready
    if (video.readyState >= 3) {
      isVideoReadyRef.current = true;
    }

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const smoothUpdate = () => {
      if (!video) return;

      // Lerp factor
      const lerpFactor = 0.08;

      // Smoothly interpolate current time toward target
      currentTimeRef.current = lerp(
        currentTimeRef.current,
        targetTimeRef.current,
        lerpFactor,
      );

      // Only seek if:
      // 1. Video is ready (buffered)
      // 2. Not currently seeking (prevents queue buildup)
      // 3. Meaningful difference exists
      const diff = Math.abs(currentTimeRef.current - video.currentTime);
      const shouldSeek =
        isVideoReadyRef.current && !isSeekingRef.current && diff > 0.03;

      if (shouldSeek) {
        video.currentTime = currentTimeRef.current;
      }

      rafIdRef.current = requestAnimationFrame(smoothUpdate);
    };

    rafIdRef.current = requestAnimationFrame(smoothUpdate);

    return () => {
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const video = videoRef.current;
    if (video) {
      // Force the browser to start loading the entire video
      video.load();

      video.onloadedmetadata = () => {
        const duration = video.duration;

        // Use ScrollTrigger to update target time (not actual video time)
        ScrollTrigger.create({
          trigger: "video",
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            // Set target time based on scroll progress
            targetTimeRef.current = self.progress * duration;
          },
        });
      };
    }
  }, []);
  return (
    <>
      <section
        id="hero"
        className="relative z-10 min-h-dvh w-full border border-transparent"
      >
        <Image
          width={30}
          height={30}
          src="/images/arrow.png"
          alt="arrow"
          className="absolute left-5 bottom-1/2"
        />
        <h1 className="title md:mt-32 mt-40 text-6xl md:text-[20vw] mb-20 leading-none text-center">
          NATI
        </h1>

        <div className="mx-auto max-w-7xl w-full lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
          <div className=" flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end ">
            <div className="space-y-5 hidden md:block">
              <p>Design. Develop. Deploy.</p>
              <p className="subtitle text-6xl text-yellow-500 max-w-xl">
                Crafting Digital <br /> Experiences
              </p>
            </div>

            <div className=" space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
              <p className="subtitle text-center 2xl:text-start">
                Full-stack web developer passionate about building modern,
                performant, and user-friendly applications — turning ideas into
                reality.
              </p>
              <a
                href="#skills"
                className="font-semibold  2xl:text-start text-center hover:text-yellow-600 text-yellow-500 block"
              >
                View skills
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/hero.mp4"
          className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover"
        />
      </div>
    </>
  );
}
