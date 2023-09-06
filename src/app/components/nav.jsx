"use client"
import { motion } from 'framer-motion';
import {useState} from 'react'
import { usePathname} from 'next/navigation';
import Link from 'next/link'
function nav() {
  const pathname = usePathname();

    const [open,setOpen]=useState(false);
    const togglehandler=()=>{
        setOpen(!open)
        
  }
  return (
    <nav className='w-full text-white '>
                 <div className='container flex items-center justify-between md:justify-around flex-row-reverse rounded-t-lg mx-auto py-3 px-6 mt-5   bg-[#28282B]  drop-shadow-xl'>
                          <div className='flex  items-center relative'>
                                 
                                 <h1 className='md:text-2xl text-xl ml-2 font-bold  tracking-wider '><span className='text-orange-500'>بکس</span> نویس</h1>
                                 <img src='../img/logo.jpg' className='md:w-16 h-12 w-12 md:h-16 rounded-full'></img>
                           </div>
                           <div onClick={togglehandler} className='block md:hidden'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                           </div>
                           <div className={`md:flex ${open==false?'hidden':'flex flex-col right-0 rounded-b-2xl drop-shadow-xl   top-[69px]  bg-[#28282B] text-center py-5 px-24 w-full z-20'} transition-all ease-linear  duration-300 absolute md:static  gap-8 text-xl font-semibold  text-white`}>
                             <Link href="/" className={pathname          == "/"          ? "text-orange-500" : ""}>خانه</Link>  
                             <Link href="/contactus" className={pathname == "/contactus" ? "text-orange-500" : ""}>ارتباط با ما</Link>  
                             <Link href="/aboutus" className={pathname   == "/aboutus"   ? "text-orange-500" : ""} >درباره ما</Link>  
                             <Link href="/project"  className={pathname  == "/project"   ? "text-orange-500" : ""}>پروژه ها</Link>  
                             
                           </div> 
                          
                 </div>
           </nav>
  )
}

export default nav