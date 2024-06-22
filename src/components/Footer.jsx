import React from 'react';
import { Link } from 'react-scroll';
import { TfiInstagram } from "react-icons/tfi";
import { PiFacebookLogoLight, PiWhatsappLogoLight, PiTelegramLogoLight } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import ScrollToTop from 'react-scroll-up';
import { SlArrowUp } from "react-icons/sl";


const Footer = () => {
  return (
    <section id="contact" className='w-full bg-theme-gray1 pb-8'>
      <div className="max-w-7xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
      
      <Link to="hero" className="w-full text-center md:text-start" spy={true} smooth={true} offset={50} duration={500}><span className='basis-1/3 cursor-pointer w-full text-3xl font-semibold cormorant '>SpiritStone</span></Link>
      <ul className='flex gap-4 items-center justify-center text-theme-blue2 basis-1/3'>
        <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><TfiInstagram size={20} /></li>
        <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><PiFacebookLogoLight size={27} /></li>
        <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><PiWhatsappLogoLight size={27} /></li>
        <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><PiTelegramLogoLight size={27} /></li>
        <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><GoMail size={25} /></li>
      </ul>

      </div>
      <p className="cols-span-full w-full text-center text-theme-gray2 text-sm">© 2024 SpiritStone</p>
      <ScrollToTop showUnder={160}>
        <div className="text-theme-blue2 hover:text-theme-gray2 duration-150 ease-in-out flex flex-col">
          <SlArrowUp className="-mt-4" size={27}/>
        </div>
      </ScrollToTop>
    </section>
  );
};

export default Footer;
