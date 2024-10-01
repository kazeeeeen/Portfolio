import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import mylogo from '../assets/images/mylogo.png';

function Header() {
  return (
    <header className='flex border-b-2 border-white py-4 sm:px-10 bg-primaryBlack min-h-[70px] tracking-wide relative z-50'>
      <div className='flex items-center justify-between w-full'>
        {/* Left side: Logo and Title */}
        <div className='flex items-center gap-5'>
          <a href='javascript:void(0)'>
            <img src={mylogo} alt="Logo" className="w-16" />
          </a>
          <div className='mt-5 ml-4'>
            <div className='flex flex-col'>
              <a className="uppercase font-poppins text-white font-bold">
                Cayenne Ezra Gagno
              </a>
              <a className='font-poppins text-white text-xs'> 
                Front-end Developer, UI/UX Developer
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Navigation Menu */}
        <div id="collapseMenu" className='flex items-center'>
          <ul className='flex space-x-5'>
            <li>
              <a href='javascript:void(0)'
                className='lg:hover:text-primaryPink text-white block font-semibold text-[15px]'>Home</a>
            </li>
            <li>
              <a href='javascript:void(0)'
                className='lg:hover:text-primaryPink text-white block font-semibold text-[15px]'>Projects</a>
            </li>
            <li>
              <a href='javascript:void(0)'
                className='lg:hover:text-primaryPink text-white block font-semibold text-[15px]'>About</a>
            </li>
            <li>
              <a href='javascript:void(0)'
                className='lg:hover:text-primaryPink text-white block font-semibold text-[15px]'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;


