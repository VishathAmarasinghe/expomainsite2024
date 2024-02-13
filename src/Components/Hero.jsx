import React from 'react'
import expologo from '../assets/expwhite.png';

const Hero = () => {
  return (
    <div className="w-full h-screen  z-10  bg-cover bg-center bg-[url('./assets/mainback.png')]
    flex flex-col align-middle justify-center items-center
    
    
    ">
        <img data-aos="zoom-in" data-aos-duration="2500" className='lg:w-[40%] sm:w-[70%] md:w-[70%] w-[75%]'  src={expologo}></img>
        <h1 data-aos="zoom-in" data-aos-duration="2500" className='text-white font-monbait text-xl tracking-widest text-center mt-14 font-medium uppercase'>The premier university business magazine </h1>
    </div>
  )
}

export default Hero