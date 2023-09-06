"use client"
import React from 'react'
import Nav from '../components/nav'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyMotion, domAnimation, m } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Pagination ,Mousewheel} from 'swiper/modules';
function project() {
  return (
    <Swiper
        direction={'vertical'}
        scrollbar={true}
        
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination,Mousewheel]}
        className="mySwiper"
      >
    <SwiperSlide>
    <Nav></Nav>
   
 <LazyMotion features={domAnimation}>
               <m.section initial={{ y: 10, opacity: 0 }} exit={{ y: -10, opacity: 0 }} animate={{opacity:1,y:0}}   transition={{
                           duration: 1,
                    delay: 0.2}} className='  w-full  flex flex-col  justify-start mt-12 lg:mt-0  items-center h-full' alt="" >
                          <img src='../img/search.svg' width={500} height={500}></img>
                          <h2 className='text-white font-bold md:text-4xl mx-3  text-2xl'>این بخش به زودی اضافه میشود</h2>
                      </m.section>

               </LazyMotion>
    </SwiperSlide>
   </Swiper>
  )}
export default project