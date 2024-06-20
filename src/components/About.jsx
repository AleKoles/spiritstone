import React from 'react';
import { PiHandshakeLight } from "react-icons/pi";
import { GiGems } from "react-icons/gi";
import { BsGem } from "react-icons/bs";




const About = () => {
  return (
    <div className='w-full bg-white py-24 px-4' id="about">
      <div className='max-w-7xl w-full border-y-4 border-white mx-auto flex gap-12 flex-col'>
        <h2 class="w-full text-center text-3xl sm:text-4xl cormorant font-bold">A gem cutting family business since 1995</h2>
        <div className='w-full flex grid grid-cols-1 md:grid-cols-3 gap-8 items-srtrt justify-between'>
          <div className="flex flex-col gap-2 items-center">
            <BsGem size={45} className="text-theme-blue2"/>
            <p className='text-2xl text-center py-2'>Deep understanding of each gemstone's intricacies</p>
          </div>
          <div className="flex flex-col gap-2 items-center"> 
            <GiGems size={45} className="text-theme-blue2"/>
            <p className='text-2xl text-center py-2'>An extensive selection available for your order</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <PiHandshakeLight size={45} className="text-theme-blue2"/>
            <p className='text-2xl text-center py-2'>Close collaboartion  with companies and individual clients with a personal touch</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default About;
