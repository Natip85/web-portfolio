"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const sectionIds = useMemo(() => ["hero", ...navLinks.map((l) => l.id)], []);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    // Scroll-position based "active section" is more stable (especially with GSAP pinning).
    let rafId = 0;

    const computeActive = () => {
      // Pick a point in the viewport that represents "where the user is"
      const markerY = window.innerHeight * 0.35;

      // First try: section that contains markerY
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= markerY && rect.bottom >= markerY) {
          return section.id;
        }
      }

      // Fallback: last section above markerY
      let lastAbove = sections[0]?.id ?? "hero";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= markerY) lastAbove = section.id;
      }
      return lastAbove;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const next = computeActive();
        setActiveSection((prev) => (prev === next ? prev : next));
      });
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [sectionIds]);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <nav className="fixed z-50 w-full">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a
          href="#hero"
          className={[
            "flex items-center gap-2 cursor-pointer text-nowrap md:text-base text-sm transition-colors",
            activeSection === "hero"
              ? "text-yellow-500"
              : "text-white/90 hover:text-white",
          ].join(" ")}
        >
          <p className="text-3xl -mb-2">NP</p>
        </a>

        <ul className="flex justify-center items-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={[
                  "cursor-pointer text-nowrap md:text-base text-sm transition-colors",
                  activeSection === link.id
                    ? "text-yellow-500"
                    : "text-white/90 hover:text-yellow-400",
                ].join(" ")}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
