import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliderimages.css';
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import team5 from '../../assets/team5.png'
import team6 from '../../assets/team6.png'
import team7 from '../../assets/team7.png'
import team8 from '../../assets/team8.png'
import team9 from '../../assets/team9.png'
import team10 from '../../assets/team10.png'
import team11 from '../../assets/team11.png'
import team12 from '../../assets/team12.png'
import team13 from '../../assets/team13.png'
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
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Slidertwo() {
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