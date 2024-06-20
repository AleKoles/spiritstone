import React from 'react';
import videoMP4 from '../assets/desktopHeader.mp4';
import videoWEBM from '../assets/desktopHeader.webm';
import mobileVideoMP4 from '../assets/mobileHeader.mp4';
import mobileVideoWEBM from '../assets/mobileHeader.webm';
import fallbackImage from '../assets/diamond.jpg';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className='text-theme-gray' id="hero">
      <div class="relative w-full  md:w-10/12 mx-auto">
        <video 
          class="mt-24 hidden sm:block"
          autoPlay 
          muted 
          loop 
          poster={fallbackImage}>
          <source src={videoWEBM} ></source>
          <source src={videoMP4} ></source>
          Your browser does not support the video tag.
        </video>
        <video 
          class="mt-24 sm:hidden"
          autoPlay 
          muted 
          loop 
          poster={fallbackImage}>
          <source src={mobileVideoWEBM} />
          <source src={mobileVideoMP4} />
         
          Your browser does not support the video tag.
        </video>
        <div class="absolute bg-black/20 z-20 bottom-0 left-0 h-full w-full flex flex-col justify-end items-center">
          <div class="text-white flex flex-col gap-8 px-4 w-full sm:w-1/2 pb-4 sm:pb-8 xl:pb-16">
            <h2 class="cormorant text-3xl sm:text-4xl text-center">SpiritStone by Myronenko</h2>
            <p class="text-center text-sm sm:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <Link class="rounded-full uppercase bg-white text-theme-blue2 w-fit px-4 py-2 mx-auto cursor-pointer hover:text-theme-blue1" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
