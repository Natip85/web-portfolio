import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { skills, featuredProjects } from '@/constants';

const Projects = () => {
 useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#projects',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#c-footer-tag', {
		x: 100, y: 100
	})
 })
 
 return (
	<section id="projects" className="relative min-h-dvh w-full overflow-hidden">
	 {/* <img src="/images/nav-tag.png" alt="l-leaf" id="c-nav-tag" className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-24 lg:w-32 xl:w-40 w-20" /> */}
	 <img src="/images/footer-tag.png" alt="r-leaf" id="c-footer-tag" className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-24 lg:w-32 xl:w-40 w-20" />
	 
	 <div className=" max-w-7xl mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
		<div className="space-y-2 w-full md:w-fit pb-20 md:pb-0 ">
		 <h2 className="text-xl font-medium">Skills & Technologies:</h2>
		 
		 <ul className="space-y-6">
			{skills.map(({ name, tech, detail, link }) => (
			 <li key={name} className="flex justify-between items-start">
				<div className="me-10">
				 <h3 className="2xl:text-3xl text-xl text-yellow-500">{name}</h3>
				 <p className="text-sm">{tech} | {detail}</p>
				</div>
				{/* <span className="text-xl font-medium">- {link}</span> */}
			 </li>
			))}
		 </ul>
		</div>
		<div className="space-y-2 w-full md:w-fit ">
		 <h2 className="text-xl font-medium">Featured Projects:</h2>
		 
		 <ul className="space-y-6">
			{featuredProjects.map(({ name, tech, detail, link }) => (
			 <li key={name} className="flex justify-between items-start">
				<div className="md:me-10">
				 <h3 className="2xl:text-3xl text-xl text-yellow-500">{name}</h3>
				 <p className="text-sm">{tech} | {detail}</p>
				</div>
				<span className="text-xl font-medium">- {link}</span>
			 </li>
			))}
		 </ul>
		</div>
		

	 </div>
	</section>
 )
}

export default Projects