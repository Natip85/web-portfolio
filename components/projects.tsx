import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

export default function Projects() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#projects h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid .grid-card, .bottom-grid .grid-card",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });

  return (
    <div
      id="projects"
      className="projects min-h-screen py-28 2xl:px-0 px-5 container mx-auto"
    >
      <div className="mb-16 md:px-0 px-5">
        <div className="content grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="md:col-span-8">
            <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
              Selected projects{" "}
            </p>
            <h2 className="text-5xl md:text-6xl  max-w-lg">
              Designing and shipping modern web experiences
            </h2>
          </div>

          <div className="sub-content md:col-span-4 space-y-5 flex flex-col justify-between">
            <p className="text-lg">
              Every project here started with a real problem and ended with a
              shipped solution. I focus on clean architecture, thoughtful UX,
              and code that’s built to scale — not just demos, but
              production-ready applications.
            </p>

            <div className="flex flex-col justify-between md:gap-2 gap-5">
              <p className="md:text-3xl text-xl font-bold">
                <span className="text-yellow-500 font-bold text-5xl">
                  5+ years
                </span>{" "}
                Building modern web applications
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-0 px-5">
        <a
          target="_blank"
          href="https://quick-jot-web.vercel.app/"
          aria-label="View projects"
          className="grid-card xl:col-span-3 rounded-3xl overflow-hidden h-72 relative group cursor-pointer block"
        >
          <Image
            fill
            src="/images/quick-jot.png"
            alt="Quick Jot project screenshot"
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/30 sm:bg-transparent sm:backdrop-blur-sm flex flex-col justify-end p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-white text-xl font-bold mb-1 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Quick-Jot
            </h3>
            <p className="text-white/70 text-sm translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
              Quick Jot was built for fast, organized writing. It combines a
              clean folder tree with a rich‑text editor that supports modern
              formatting and autosaves edits in the background for a smooth,
              “just write” experience.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://dunzio-web.vercel.app/"
          aria-label="View projects"
          className="grid-card xl:col-span-6 rounded-3xl overflow-hidden h-72 relative group cursor-pointer block"
        >
          <Image
            fill
            src="/images/dunzio.png"
            alt="Dunzio project screenshot"
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/30 sm:bg-transparent sm:backdrop-blur-sm flex flex-col justify-end p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-white text-xl font-bold mb-1 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Dunzio
            </h3>
            <p className="text-white/70 text-sm translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
              Dunzio is a full‑stack, type‑safe project management web app where
              teams can organize projects into Kanban boards, manage tasks
              through a workflow, and collaborate in a structured workspace.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://ecommerce-web-livid-gamma.vercel.app/"
          aria-label="View projects"
          className="grid-card xl:col-span-3 rounded-3xl overflow-hidden h-72 relative group cursor-pointer block"
        >
          <Image
            fill
            src="/images/ecomm.png"
            alt="Ecommerce project screenshot"
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/30 sm:bg-transparent sm:backdrop-blur-sm flex flex-col justify-end p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-white text-xl font-bold mb-1 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Ecommerce
            </h3>
            <p className="text-white/70 text-sm translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
              Ecommerce covers the complete shopping journey—from browsing and
              searching products to cart, checkout, and order
              confirmation—backed by a real database and an admin dashboard.
            </p>
          </div>
        </a>
      </div>

      <div className="bottom-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5">
        <a
          target="_blank"
          href="https://math-wiz-web.vercel.app/"
          aria-label="View projects"
          className="grid-card md:col-span-8 rounded-3xl overflow-hidden h-72 relative group cursor-pointer block"
        >
          <Image
            fill
            src="/images/wiz-kids.png"
            alt="Wiz Kids project screenshot"
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/30 sm:bg-transparent sm:backdrop-blur-sm flex flex-col justify-end p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-white text-xl font-bold mb-1 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Wiz Kids
            </h3>
            <p className="text-white/70 text-sm translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
              Wiz kids is an AI powered learning platform that turns practice
              into a structured “playground” of short, trackable quiz sessions.
              Users sign in, configure a quiz, and work through interactive
              question formats with progress saved across sessions and a
              built‑in leaderboard to keep motivation high.
            </p>
          </div>
        </a>

        <div className="grid-card md:col-span-4 rounded-3xl overflow-hidden h-72 relative group cursor-pointer block">
          <Image
            fill
            src="/images/noise.png"
            alt="Coming Soon..."
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-black/30 sm:bg-transparent sm:backdrop-blur-sm flex flex-col justify-end p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-white text-xl font-bold mb-1 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Coming Soon...
            </h3>
            <p className="text-white/70 text-sm translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
              Your next project is just around the corner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
