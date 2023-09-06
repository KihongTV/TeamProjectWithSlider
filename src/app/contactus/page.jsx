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
function contactus() {
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
                    delay: 0.2}} className=' xl:w-5/6 w-full  flex lg:flex-row flex-col mx-auto justify-start mt-3 md:mt-0 2xl:justify-center  items-center h-full' alt="" >
                      <div className='flex  max-w-lg lg:h-[600px]  flex-col items-center  bg-inherit lg:bg-[#242323]  lg:py-40 sm:py-3 py-1 lg:px-4 xl:px-6 md:rounded-r-3xl text-white'>
         <h5 className='font-bold sm:text-2xl xl:text-3xl 2xl:text-5xl  md:text-2xl text-xl tracking-wider mb-1 sm:mb-3  '>
          ارتباط با تیم ما
         </h5>
         <h3 className='text-center lg:text-right mb-2 2xl:mb-5 mt-1 px-3 text-base md:text-xl xl:text-2xl 2xl:text-center 2xl:font-bold'>
          دوست داری با تیم ما در ارتباط باشی ؟<br></br> فرم رو پر کن تا تیم ما متوجه بشه و تو اولین فرصت باهات ارتباط برقرار کنه
         </h3>
         <div className=' items-center md:flex hidden gap-2'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

         <div className='text-xl 2xl:text-2xl font-bold'>09924339863</div>
         </div>
         <div className=" items-center md:flex hidden gap-2 mb-1">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

         <h6 className='text-base md:text-xl 2xl:text-2xl  mb-1'>ایران , تهران</h6>
         </div>
         
         <h2 className='md:mt-10  lg:block hidden 2xl:mt-16 mt-1 sm:mt-3 text-base md:text-2xl text-center md:text-right'>مارا در شبکه های مجازی هم دنبال کنید</h2>
         <div className=" py-2  justify-center lg:flex hidden gap-2">
                                      

                                      <a href="https://www.instagram.com/kihong81/" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      
                      viewBox="0,0,256,256"
                      className="text-white md:w-7 md:h-7 h-6 w-6  hover:rotate-[360deg] duration-500">
                      <g fill-opacity="0" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                      </svg></a>
                                      <a href="https://www.linkedin.com/in/hossein-moazez-8652a5208/?originalSubdomain=ir" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     
                      viewBox="0,0,256,256"
                      className="text-white md:w-7 md:h-7 h-6 w-6 hover:rotate-[360deg] duration-500">
                      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><path d="M8.421,14h0.052v0c2.79,0 4.527,-2 4.527,-4.5c-0.052,-2.555 -1.737,-4.5 -4.474,-4.5c-2.737,0 -4.526,1.945 -4.526,4.5c0,2.5 1.736,4.5 4.421,4.5zM4,17h9v26h-9zM44,26.5c0,-5.247 -4.253,-9.5 -9.5,-9.5c-3.053,0 -5.762,1.446 -7.5,3.684v-3.684h-9v26h9v-15v0c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4v15h9c0,0 0,-15.045 0,-16.5z"></path></g></g>
                      </svg></a>
                                      <a href="https://twitter.com/KihongTv" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     
                      viewBox="0,0,256,256"
                      className="text-white hover:rotate-[360deg] md:w-7 md:h-7 h-6 w-6 duration-500">
                      <g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path></g></g>
                      </svg></a>
                                      <a href="https://github.com/KihongTV" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   
                      viewBox="0,0,256,256"
                      className="text-white hover:rotate-[360deg] md:w-7 md:h-7 h-6 w-6 duration-500">
                      <g fill="#fff9f9" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                      </svg></a>
                                    </div>
    </div>
    <form className='lg:bg-[#2f2f33]  md:rounded-l-3xl lg:h-[600px] flex flex-col items-center justify-center lg:p-6 xl:p-12 p-0 sm:p-12'>
          <div className='flex md:flex-row flex-col md:gap-8 gap-3 py-3'>
                            <div className="flex flex-col">
                            <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>نام</label>
                            <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-white text-white border-b-2 border-b-white'  placeholder='لطفا نام خود را وارد کنید' />
                            </div>
                            <div className="flex flex-col">
                            <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>نام خانوادگی</label>
                            <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-white text-white border-b-2 border-b-white'  placeholder='لطفا نام خانوادگی خود را وارد کنید' />
                            </div>
          </div>
          <div className='flex md:flex-row flex-col md:gap-8 gap-3 py-3'>
                            <div className="flex flex-col">
                            <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>ایمیل</label>
                            <input type="email" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-white text-white border-b-2 border-b-white'  placeholder='لطفا ایمیل خود را وارد کنید' />
                            </div>
                            <div className="flex flex-col">
                            <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>شماره تلفن</label>
                            <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-white text-white border-b-2 border-b-white'  placeholder='لطفا شماره تلفن خود را وارد کنید' />
                            </div>
          </div>
          <button className='py-2 px-28 sm:px-32 md:mt-12 sm:mt-4 mt-2 rounded-md  text-xl font-bold  bg-orange-600 backdrop-blur-lg drop-shadow-md shadow-black text-white' href='?'>ارسال</button>
    </form>
                      </m.section>

               </LazyMotion>
    </SwiperSlide>
   </Swiper>
  )
}

export default contactus