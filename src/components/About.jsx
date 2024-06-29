import React, { useEffect, useRef } from 'react';
import { PiHandshakeLight } from "react-icons/pi";
import { GiGems, GiGemPendant } from "react-icons/gi";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current, 
      { x: -200, opacity: 0 },  
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.3, 
        ease: "sine.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          once: true,
        }
      }
    );
  }, []);

  

  return (
    <div className='w-full bg-white py-24 px-4' id="about">
      <div className='max-w-7xl w-full mx-auto flex gap-12 flex-col'>
        <h2 className="w-full text-center text-3xl sm:text-5xl cormorant font-bold">A gem cutting family business since 1995</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between'>
          <p className="col-span-full lg:text-lg">With our deep understanding of each gemstone&apos;s intricacies, we proudly offer an extensive selection available for your order. We collaborate closely with companies and individual clients with a personal touch.</p>
          <div 
            ref={(el) => cardsRef.current[0] = el} 
            className="flex flex-col gap-2 items-center"
          > 
            <GiGems size={45} className="text-theme-blue2"/>
            <h3 className="text-xl sm:text-2xl text-center">Gemstone Cutting</h3>
            <p className='lg:text-lg text-center py-2'>We bring exceptional quality through exclusive hand-cutting performed by skilled artisans with over 40 years of experience.</p>
          </div>
          <div 
            ref={(el) => cardsRef.current[1] = el} 
            className="flex flex-col gap-2 items-center"
          >
            <PiHandshakeLight size={45} className="text-theme-blue2"/>
            <h3 className="text-xl sm:text-2xl text-center">Gemstone Sourcing and Custom Selection</h3>
            <p className='lg:text-lg text-center py-2'>We deliver carefully sourced and custom-selected gemstones from around the world, including our special offer -  Ukrainian-origin beryl, aquamarine, topaz, and amber.</p>
          </div>
          <div 
            ref={(el) => cardsRef.current[2] = el} 
            className="flex flex-col gap-2 items-center"
          >
            <GiGemPendant size={45} className="text-theme-blue2"/>
            <h3 className="text-xl sm:text-2xl text-center"> Jewelry Design Creation</h3>
            <p className='lg:text-lg text-center py-2'>We offer innovative designs and expert craftsmanship in jewelry creation using client&apos;s or our selected gemstones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

