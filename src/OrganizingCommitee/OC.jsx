import React from 'react'
import Slidertwo from '../Components/ImageSlider/Slidertwo'

const OC = () => {
  return (
    <div id='ourteam' className="w-full pt-12 pb-8 h-2/3 flex flex-col items-center justify-center bg-cover bg-center bg-[url('./assets/whitebg.png')] ">
        <h1 className='text-[#B8915A] font-poppins mt-10 mb-9 text-4xl font-bold'>Our Team</h1>
        <div data-aos="fade-up" className='w-full  h-2/3 mb-8 flex flex-col items-center justify-center'>
            <Slidertwo/>
        </div>
        
    </div>
  )
}

export default OC