"use client";
import { contactInfo, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type IconType } from "react-icons";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ContactForm from "./contact-form";

const socialIcons: Record<string, IconType | undefined> = {
  linkedin: SiLinkedin,
  github: SiGithub,
};

export default function Contact() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });
  });
  return (
    <footer
      id="contact"
      className="relative md:mt-20 mt-0 px-4 w-full overflow-hidden radial-gradient"
    >
      <div className="container mx-auto lg:py-14 2xl:py-32 py-16 min-h-dvh flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5">
            Let&apos;s build something that ships.
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/80">
            Have a product idea, a redesign, or a feature that needs to get over
            the finish line? Send a note — I read every message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2 text-white/80">
                Availability
              </h3>
              <p className="lg:text-2xl 2xl:text-3xl text-lg">
                {contactInfo.availability}
              </p>
            </div>

            <div>
              <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2 text-white/80">
                Based in
              </h3>
              <p className="lg:text-2xl 2xl:text-3xl text-lg">
                {contactInfo.location}
              </p>
            </div>

            <div>
              <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2 text-white/80">
                Elsewhere
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg text-yellow-500 hover:text-yellow-400 font-semibold underline underline-offset-4"
                  >
                    {socialIcons[social.icon]
                      ? (() => {
                          const SocialIcon = socialIcons[social.icon];
                          return SocialIcon ? (
                            <SocialIcon
                              className="text-xl"
                              aria-hidden="true"
                            />
                          ) : null;
                        })()
                      : null}
                    {/* {social.name} */}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-white/70">
                Prefer email?{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white underline underline-offset-4 hover:text-white/90"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 text-left rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
            <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2 text-white/80">
              Send a message
            </h3>
            <p className="text-white/70 mb-6">
              Tell me a bit about what you&apos;re building and the timeline. If
              you have links (repo, figma, brief), drop them in.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
