import React from 'react'
import PathCard from './PathCard'
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import emagazinecard from '../assets/emagazinecard.png';
import { maincontaintArray } from '../datasource/data';

const Pathsection = () => {
  return (
    <div className="w-full  pb-8 z-10 bg-cover bg-center bg-[url('./assets/whitebg.png')]  flex flex-col md:space-x-10 lg:space-x-10 space-y-7  md:flex-row lg:flex-row  align-middle justify-center items-center
    ">
        <PathCard  image={card2} desctext={maincontaintArray[0].description} url={maincontaintArray[0].sourceLink} title={maincontaintArray[0].title}  />
        <PathCard image={card4} desctext={maincontaintArray[1].description} url={maincontaintArray[1].sourceLink} title={maincontaintArray[1].title}  />
        <PathCard image={card3} desctext={maincontaintArray[2].description} url={maincontaintArray[2].sourceLink} title={maincontaintArray[2].title}  />
        <PathCard image={card1} desctext={maincontaintArray[3].description} url={maincontaintArray[3].sourceLink} title={maincontaintArray[3].title}  />

    </div>
  )
}

export default Pathsection