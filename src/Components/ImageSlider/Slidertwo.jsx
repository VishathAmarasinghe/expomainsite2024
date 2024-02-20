import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliderimages.css';
import team1 from '../../assets/team1.webp'
import team2 from '../../assets/team2.webp'
import team3 from '../../assets/team3.webp'
import team4 from '../../assets/team4.webp'
import team5 from '../../assets/team5.webp'
import team6 from '../../assets/team6.webp'
import team7 from '../../assets/team7.webp'
import team8 from '../../assets/team8.webp'
import team9 from '../../assets/team9.webp'
import team10 from '../../assets/team10.webp'
import team11 from '../../assets/team11.webp'
import team12 from '../../assets/team12.webp'
import team13 from '../../assets/team13.webp'
import { Stack } from "@mui/material";



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Slidertwo() {
    return (
        <Stack width={{
            xs: "60%",
            sm: "90%",
            md: "70%",
            lg: "75%",
            xl: "75%",
        }} >

        
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={100}
            customTransition="all 1s linear"
            arrows={true}
            className="z-10"
        >
            <div className="m-4" >
                <img src={team1} className="imagesslide"/>
            </div>
            <div className="m-4" >
                <img src={team2} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team3} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team4} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team5} className="imagesslide"/>
            </div>
            <div className="m-4" >
                <img src={team6} className="imagesslide"/>
            </div>
            <div className="m-4" >
                <img src={team7} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team8} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team9} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team10} className="imagesslide"/>
            </div>
            <div className="m-4" >
                <img src={team11} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team12} className="imagesslide"/>
            </div>
            <div className="m-4">
                <img src={team13} className="imagesslide"/>
            </div>
           
            
        </Carousel>
        </Stack>
    );
}

export default Slidertwo;