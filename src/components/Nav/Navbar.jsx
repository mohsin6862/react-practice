import React, { useState } from 'react';
import { Bars3Icon, BeakerIcon , XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen]= useState(false)
    return (
        <nav className='bg-amber-600 p-2 items-center'>
           
         <div className='flex items-center'>
         <div onClick={()=> setOpen(!open)}>
            <span>
                {open === true?  <Bars3Icon className="h-8 w-8 text-blue-500 "/> :<XMarkIcon className="h-8 w-8 text-blue-500 "/>}
            </span>

             
             </div>
           <div>
           <ul className='m-5  '>
            <a className='mr-5 text-xl font-bold hover:text-white' href="/about">About</a>
            <a className='mr-5 text-xl font-bold hover:text-white' href="/home">Home</a>
            <a className='mr-5 text-xl font-bold hover:text-white' href="/contact">Contact</a>
            <a className='mr-5 text-xl font-bold hover:text-white' href="/login">Log In</a>
           </ul>
           </div>
         </div>
        </nav>
    );
};

export default Navbar;