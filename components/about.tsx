import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function About() {
 useGSAP(() => {
  const titleSplit = SplitText.create('#about h2', {
   type: 'words'
  })
  
  const scrollTimeline = gsap.timeline({
   scrollTrigger: {
   trigger: '#about',
   start: 'top center'
   }
  })
  
  scrollTimeline
   .from(titleSplit.words, {
   opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
  })
   .from('.top-grid div, .bottom-grid div', {
   opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
  }, '-=0.5')
  })


  // #abouttttt {
  //  @apply min-h-screen py-28 2xl:px-0 px-5 container mx-auto;

  //  .content {
  //      @apply grid grid-cols-1 lg:grid-cols-12 gap-5;

  //      h2 {
  //          @apply text-5xl md:text-6xl font-modern-negra max-w-lg;
  //      }

  //      .sub-content {
  //          @apply md:col-span-4 space-y-5 flex flex-col justify-between;

  //          p {
  //              @apply text-lg;
  //          }

  //          div {
  //              @apply flex flex-col justify-between md:gap-2 gap-5;

  //              span {
  //                  @apply text-yellow font-bold text-5xl;
  //              }
  //          }
  //      }
  //  }
 return (
<div id="about" className="about min-h-screen py-28 2xl:px-0 px-5 container mx-auto">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content grid grid-cols-1 lg:grid-cols-12 gap-5">
		 <div className="md:col-span-8">
			<p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">Best Cocktails</p>
			<h2 className="text-5xl md:text-6xl  max-w-lg">
			 Where every detail matters <span className="text-white">-</span>
				from muddle to garnish
			</h2>
		 </div>
		 
		 <div className="sub-content md:col-span-4 space-y-5 flex flex-col justify-between">
			<p className="text-lg">
			 Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
			</p>
			
			<div className="flex flex-col justify-between md:gap-2 gap-5">
			 <p className="md:text-3xl text-xl font-bold">
				<span className="text-yellow-500 font-bold text-5xl">4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +12000 customers
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-0 px-5">
		<div className="xl:col-span-3 rounded-3xl overflow-hidden h-72 relative">
		 <div  className="noisy" />
		 <img src="/images/nav-tag.png" alt="grid-img-1" className="object-cover w-full h-full" />
		</div>
		
		<div className="xl:col-span-6 rounded-3xl overflow-hidden h-72 relative">
		 <div  className="noisy" />
		 <img src="/images/nav-tag.png" alt="grid-img-2" className="object-cover w-full h-full" />
		</div>
		
		<div className="xl:col-span-3 rounded-3xl overflow-hidden h-72 relative">
		 <div  className="noisy" />
		 <img src="/images/nav-tag.png" alt="grid-img-5" className="object-cover w-full h-full" />
		</div>
	 </div>
	 
	 <div className="bottom-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5">
		<div className="md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
		 <div  className="noisy" />
		 <img src="/images/nav-tag.png" alt="grid-img-3" className="object-cover w-full h-full" />
		</div>
		
		<div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
		 <div  className="noisy" />
		 <img src="/images/nav-tag.png" alt="grid-img-4" className="object-cover w-full h-full" />
		</div>
	 </div>
	 
	</div>
 );
}