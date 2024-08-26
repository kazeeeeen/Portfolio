import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

function Header() {
  return (
   <header className='flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 border-white bg-primaryBlack' >
    
    <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <div className='text-primaryPink'>
           logo
        </div>
    <div className='flex flex-col'>
    <a
        href="/"
        className="uppercase font-poppins text-white "
      >
        Cayenne Ezra Gagno
      </a>
      <a className='font-poppins text-white'>
        Front-end Developer, UI/UX Developer
      </a>
    </div>
      
        <a href="#" className="text-white hover:text-secondaryPink font-poppins">
          Home
        </a>
        <a href="#" className="text-white hover:text-secondaryPink font-poppins">
          Projects
        </a>
        <a href="#" className="text-white hover:text-secondaryPink font-poppins">
         About
        </a>
        <a href="#" className="text-white hover:text-secondaryPink font-poppins">
          Contact
        </a>
      </nav>
   </header>
  )
}

export default Header;