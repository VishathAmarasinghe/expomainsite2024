import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliderimages.css';
import test1 from '../../assets/test1.jpg'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'
import test4 from '../../assets/test4.png'
import test5 from '../../assets/test5.png'
import { Stack } from "@mui/material";


// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import img4 from "../Assets/Images"
// import img5 from "../../assets/gallery/5.jpg"
// import img6 from "../../assets/gallery/6.jpg"
// import img7 from "../../assets/gallery/7.jpg"
// import img8 from "../../assets/gallery/8.jpg"
// import img9 from "../../assets/gallery/9.jpg"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Slider() {
    return (
        <Stack width={{
            xs: "90%",
            sm: "90%",
            md: "80%",
            lg: "90%",
            xl: "90%",
        }} >

        
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            customTransition="all 1s linear"
            arrows={true}
            className="z-10"
        >
            <div className="m-4" >
                <img src={test1} className="imagesslide"/>
            </div>
            <div className="m-4" >
                <img src={test2} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={test3} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={test4} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={test5} className="imagesslide"/>
            </div>
            
        </Carousel>
        </Stack>
    );
}

export default Slider;