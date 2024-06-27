import React from 'react';
import headerDesktop from '../assets/headerWide.mp4';
import headerMobile from '../assets/headerMobile.mp4';
import fallbackImage from '../assets/diamond.jpg';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className='text-theme-gray' id="hero">
      <div className="relative w-full">
        <video 
          className="w-full object-cover hidden sm:block"
          autoPlay 
          muted 
          loop 
          poster={fallbackImage}>
          <source src={headerDesktop} ></source>
       
          Your browser does not support the video tag.
        </video>
        <video 
          className="mt-24 w-full object-cover sm:hidden"
          autoPlay 
          muted 
          loop 
          poster={fallbackImage}>
          <source src={headerMobile} />
        
         
          Your browser does not support the video tag.
        </video>
        <div className="absolute bg-black/10 z-20 bottom-0 left-0 h-full w-full flex flex-col justify-end items-center">
          <div className="text-white flex flex-col gap-8 px-4 w-full sm:w-1/2 pb-4 sm:pb-8 xl:pb-16">
            <h1 className="cormorant text-5xl sm:text-6xl text-center">SpiritStone</h1>
            <p className="text-center text-base sm:text-lg">Making Elegance through Artistry</p>
            <Link className="rounded-full uppercase bg-white text-theme-blue2 w-fit px-4 py-2 mx-auto cursor-pointer hover:bg-theme-blue2 hover:text-white" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
