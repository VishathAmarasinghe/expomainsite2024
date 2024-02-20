import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./sliderimages.css";
import evonsis from "./evonsys.webp";
import fortude from "./fortude.webp";
import gtn from "./gnt.webp";
import icbt from "./icbt.webp";
import logicare from "./logicare.webp";
import mas from "./mas.webp";
import mawbima from "./printed1.webp";
import xignix from "./xigenix.png";
import cylondaily from "./printed2.webp";
import steam from "./digital.webp";
import connex from './connex.webp';
import elephanthouse from './elephanthouse.webp';
import expert from './expert.webp';
import industrytv from './industrytv.webp';
import lsge from './lsge.webp';
import strechline from './strechline.webp';
import vidulakara from './vidulakara.webp';




const Sponsors = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="sponsors" className="w-full  bg-[url('./assets/whitebg.png')]  flex flex-col align-middle justify-center items-center">
      <div className="w-full flex flex-col align-middle justify-center items-center">
        <h1 className="text-[#B8915A] font-poppins mt-28 text-4xl font-bold text-center">
          Our Sponsors
        </h1>
        <h1 className="text-black font-poppins mt-5 mb-10 text-2xl text-center">
          Thank You for Partnering Up with Us
        </h1>
      </div>

    <div data-aos="fade-up" className="w-4/5 mb-20">

    
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={200}
        customTransition="all 1s linear"
        arrows={false}
      >
        <div className="imageMargin">
          <img src={evonsis} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={mas} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={fortude} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={icbt} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={gtn} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={xignix} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={logicare} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={mawbima} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={cylondaily} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={steam} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={connex} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={elephanthouse} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={expert} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={industrytv} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={lsge} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={strechline} className="imagesslide" />
        </div>
        <div className="imageMargin">
          <img src={vidulakara} className="imagesslide" />
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
