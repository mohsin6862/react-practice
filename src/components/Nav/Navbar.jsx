import React, { useState } from 'react';
import { Bars3Icon, BeakerIcon , XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen]= useState(false)
    return (
        <nav className='bg-amber-600 p-2 items-center'>
           
         <div className=' items-center justify-center'>
            <h1 className='text-3xl font-bold ml-12'>React Practice</h1>
         <div  onClick={()=> setOpen(!open)}>
            <span className='lg:hidden'>
                {open === true?  <XMarkIcon className="h-8 w-8 text-blue-500 "/> : <Bars3Icon className="h-8 w-8 text-blue-500 "/>}
            </span>

             
             </div>
           <div>
           <ul className={` absolute `}>
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