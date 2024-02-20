import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliderimages.css';
import test1 from '../../assets/test1.webp'
import test2 from '../../assets/test2.webp'
import test3 from '../../assets/test3.webp'
import test4 from '../../assets/test4.webp'
import test5 from '../../assets/test5.webp'
import { Stack } from "@mui/material";




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