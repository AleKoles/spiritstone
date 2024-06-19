import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { TfiInstagram } from "react-icons/tfi";
import { PiFacebookLogoLight } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex fixed top-0 z-50 bg-white/80 backdrop-blur-lg  w-full px-4 border-t-4 border-theme-blue1'>
      <nav class="justify-between w-full flex items-center h-24 max-w-7xl mx-auto">
        <ul className='hidden md:flex gap-4 items-center justify-start text-theme-gray2 basis-1/3'>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><TfiInstagram size={20} /></li>
            <li className='hover:text-black duration-150 ease-in-out cursor-pointer'><PiFacebookLogoLight size={27} /></li>
        </ul>   
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><h1 className='basis-1/3 cursor-pointer w-full text-3xl font-semibold text-theme-gray cormorant'>SpiritStone</h1></Link>
        <ul className='hidden md:flex items-center justify-end text-theme-gray2 gap-4 basis-1/3'>
          <li className='group relative hover:text-black duration-150 ease-in-out tracking-wide cursor-pointer'><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link><span class="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-blue1 transition-all duration-150"></span></li>
          <li className='group relative hover:text-black duration-150 ease-in-out tracking-wide cursor-pointer'><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Products</Link><span class="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-blue1 transition-all duration-150"></span></li>
          <li className='group relative hover:text-black duration-150 ease-in-out traking-wide cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link><span class="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-blue1 transition-all duration-150"></span></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'><Link>Products</Link></li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Navbar;
