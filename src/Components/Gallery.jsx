import React from 'react'
import ex3 from "../assets/ex3.webp"
import ex1 from "../assets/ex1.webp"
import ex2 from "../assets/ex2.webp"
import ex4 from "../assets/ex4.webp"
import ex5 from "../assets/ex5.webp"
import ex6 from "../assets/ex6.webp"
import ex7 from "../assets/ex7.webp"
import ex8 from "../assets/ex8.webp"
import ex9 from "../assets/ex9.webp"
import ex11 from "../assets/ex11.webp"
import ex12 from "../assets/ex12.webp"
import ex13 from "../assets/ex13.webp"
import ex14 from "../assets/ex14.webp"
import ex15 from "../assets/ex15.webp"
import ex16 from "../assets/ex16.webp"
import ex23 from '../assets/ex23.webp'
import ex24 from '../assets/ex24.webp'
import ex25 from '../assets/ex25.webp'
import ex27 from '../assets/ex27.webp'
import ex28 from '../assets/ex28.webp'

const Gallery = () => {
  return (
    <div id='memories' className="w-full flex flex-col align-middle justify-center items-center bg-cover bg-center bg-[url('./assets/backlinesR.png')]  ">
        <h1 className='text-[#B8915A] font-poppins mt-28 text-4xl font-bold text-center'>Our Memories</h1>
        <h1 className='text-white font-poppins mt-5 mb-10 text-2xl text-center'>A Collection Of Unforgettable Moments</h1>

    
    <div className=" w-[95%] lg:h-4/5 md:h-4/5  grid grid-cols-2 gap-4 md:grid-cols-4  mb-10">
      <div className="grid gap-4">
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex1}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={ex3}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex6}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex5}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex8}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex2}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={ex7}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex9}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={ex13}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={ex15}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex14}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex16}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex27}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex28}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex23}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex24}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex25}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery