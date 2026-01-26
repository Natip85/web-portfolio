"use client";
import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function Contact() {
 useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#nav-tag', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#footer-tag', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 return (
<footer id="contact" className="relative md:mt-20 mt-0 px-4 text-center w-full overflow-hidden radial-gradient">
	 <img src="/images/nav-tag.png" alt="nav-tag" id="nav-tag" className="absolute top-0 right-0 pointer-events-none hidden lg:block w-24 h-auto" />
	 <img src="/images/footer-tag.png" alt="footer-tag" id="footer-tag" className="absolute bottom-0 left-0 pointer-events-none w-24 lg:w-32 h-auto" />
	 
	 <div className="container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-10 min-h-dvh">
		<h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5">Where to Find Us</h2>
		
		<div>
		 <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">Visit Our Bar</h3>
		 <p className="lg:text-2xl 2xl:text-3xl text-sm">456, Raq Blvd. #404, Los Angeles, CA 90210</p>
		</div>
		
		<div>
		 <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">Contact Us</h3>
		 <p className="lg:text-2xl 2xl:text-3xl text-sm">(555) 987-6543</p>
		 <p className="lg:text-2xl 2xl:text-3xl text-sm">hello@jsmcocktail.com</p>
		</div>
		
		<div>
		 <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day} className="lg:text-2xl 2xl:text-3xl text-sm">
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">Socials</h3>
		 
		 <div className="items-center flex justify-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	</footer>
	)
}
