import React from 'react';
import logo from '../assets/logo.png'; 
import family from '../assets/MyronenkoFamily.jpg';
import { Link } from 'react-scroll';
import { TfiInstagram } from "react-icons/tfi";
import { PiPhoneCallLight, PiWhatsappLogoLight, PiTelegramLogoLight } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import ScrollToTop from 'react-scroll-up';
import { SlArrowUp } from "react-icons/sl";


const Footer = () => {
  return (
    <div id="contact">
       <div className="max-w-7xl mx-auto py-12 px-4 bg-white">
       <h2 className="w-full text-center text-3xl sm:text-5xl cormorant font-bold pb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
             <img src={family} alt="Myronenko Family" className="w-full lg:w-64 mx-auto rounded-lg"/> 
             <p className="text-theme-gray2 text-sm w-full lg:w-64 mx-auto">The Myronenko Family (Alex, Vira, Ihor and Eugenia Myronenko)</p>
          </div>
          
          <div className="lg:col-span-2">
            
          <p>SpiritStone is a Ukrainian family business, now in its second generation. Our family continues to create magic working with all kinds of jewels, constantly improving our skills and incorporating new technologies into the work process. An important component of our success is the high level of professionalism we’ve maintained for over 25 years, along with the trust of our clients.</p>
            <ul className='flex pt-8 gap-4 items-center  text-theme-blue2 basis-1/3'>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
              <a href="https://t.me/myrons" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <PiTelegramLogoLight size={35} />
              </a>
            </li>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
              <a href="https://wa.me/380931070489" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <PiWhatsappLogoLight size={35} />
              </a>
            </li>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
              <a href="mailto:spiritstone1995@gmail.com" rel="noopener noreferrer" aria-label="Email">
                <GoMail size={32} />
              </a>
            </li>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
              <a href="tel:+380931070489" rel="noopener noreferrer" aria-label="Mobile Phone">
                <PiPhoneCallLight size={35} />
              </a>
            </li>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><a href="https://www.instagram.com/myronenko_arkenstone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><TfiInstagram size={29} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <section className='w-full pb-8 bg-theme-gray1'>
      
        <div className="max-w-7xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-2">
          <Link to="hero" className="w-full mx-auto text-center md:text-start" spy={true} smooth={true} offset={50} duration={500}><div className='basis-1/3 cursor-pointer w-full text-3xl font-semibold cormorant flex items-center justify-center md:justify-start gap-1'><span>Spirit</span><span><img src={logo} className="h-8" alt="spiritstone logo"/></span><span>Stone</span></div></Link>
          <p className="text-theme-gray2 text-center md:text-start">Making Elegance through Artistry</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-theme-gray2 uppercase text-center">Contact us</p>
          <ul className='flex gap-4 items-center justify-center text-theme-blue2 basis-1/3'>
          <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
            <a href="https://t.me/myrons" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <PiTelegramLogoLight size={27} />
            </a>
          </li>
          <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
            <a href="https://wa.me/380931070489" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <PiWhatsappLogoLight size={27} />
            </a>
          </li>
          <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
            <a href="mailto:spiritstone1995@gmail.com" rel="noopener noreferrer" aria-label="Email">
              <GoMail size={25} />
            </a>
          </li>
          <li className='hover:text-black duration-150 ease-in-out cursor-pointer'>
            <a href="tel:+380931070489" rel="noopener noreferrer" aria-label="Mobile Phone">
              <PiPhoneCallLight size={25} />
            </a>
          </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-theme-gray2 text-center uppercase">Follow us</p>
          <ul className='flex gap-4 items-center justify-center text-theme-blue2 basis-1/3'>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><a href="https://www.instagram.com/myronenko_arkenstone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><TfiInstagram size={20} /></a></li>
          </ul>
        </div>
        

        </div>
        <p className="cols-span-full w-full text-center text-theme-gray2 text-sm">© 2024 SpiritStone</p>
        <ScrollToTop showUnder={160}>
          <div className="text-theme-blue2 hover:text-theme-gray2 duration-150 ease-in-out flex flex-col">
            <SlArrowUp className="-mt-4" size={27}/>
          </div>
        </ScrollToTop>
      </section>
    </div>
  );
};

export default Footer;
