import React from 'react'
import Slider from '../ImageSlider/Slider'

const Testimonials = () => {
  return (
    <div data-aos="fade-up" className="w-full h-2/3 flex flex-col items-center justify-center bg-cover bg-center bg-[url('./assets/backlinesR.png')] ">
        <h1 className='text-[#B8915A] font-poppins mt-16 mb-9 text-4xl font-bold'>Testimonials</h1>
        <div className='w-full  h-2/3 mb-8 flex flex-col items-center justify-center'>
            <Slider/>
        </div>
        
    </div>
  )
}

export default Testimonials