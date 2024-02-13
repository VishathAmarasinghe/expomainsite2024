import React from 'react'
import ex3 from "../assets/ex3.jpg"
import ex1 from "../assets/ex1.jpg"
import ex2 from "../assets/ex2.jpg"
import ex4 from "../assets/ex4.jpg"
import ex5 from "../assets/ex5.jpg"
import ex6 from "../assets/ex6.jpg"
import ex7 from "../assets/ex7.jpg"
import ex8 from "../assets/ex8.jpg"
import ex9 from "../assets/ex9.jpg"
import ex11 from "../assets/ex11.jpg"
import ex12 from "../assets/ex12.jpg"
import ex13 from "../assets/ex13.jpg"
import ex14 from "../assets/ex14.jpg"
import ex15 from "../assets/ex15.jpg"
import ex16 from "../assets/ex16.jpg"

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
            src={ex4}
            alt="gallery-photo"
          />
        </div>
        <div data-aos="zoom-in-up">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={ex12}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery