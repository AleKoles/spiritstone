import React from 'react';
import { PiHandshakeLight } from "react-icons/pi";
import { GiGems } from "react-icons/gi";
import { GiGemPendant } from "react-icons/gi";




const About = () => {
  return (
    <div className='w-full bg-white py-24 px-4' id="about">
      <div className='max-w-7xl w-full border-y-4 border-white mx-auto flex gap-12 flex-col'>
        <h2 class="w-full text-center text-3xl sm:text-4xl cormorant font-bold">A gem cutting family business since 1995</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-srtrt justify-between'>
          <p class="col-span-full">With our deep understanding of each gemstone's intricacies, we proudly offer an extensive selection available for your order. We collaborate closely with companies and individual clients with a personal touch.</p>
          <div className="flex flex-col gap-2 items-center"> 
            <GiGems size={45} className="text-theme-blue2"/>
            <h3 className="text-xl text-center">Gemstone Cutting</h3>
            <p className='lg:text-lg text-center py-2'>We bring exceptional quality through exclusive hand-cutting performed by skilled artisans with over 40 years of experience.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <PiHandshakeLight size={45} className="text-theme-blue2"/>
            <h3 className="text-xl text-center">Gemstone Sourcing and Custom Selection</h3>
            <p className='lg:text-lg text-center py-2'>We deliver carefully sourced and custom-selected gemstones from around the world, including our special offer -  Ukrainian-origin beryl, aquamarine, topaz, and amber.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GiGemPendant size={45} className="text-theme-blue2"/>
            <h3 className="text-xl text-center"> Jewelry Design Creation</h3>
            <p className='lg:text-lg text-center py-2'>We offer innovative designs and expert craftsmanship in jewelry creation using client’s or our selected gemstones.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default About;
