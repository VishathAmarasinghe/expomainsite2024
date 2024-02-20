import React, { useEffect,useState } from "react";
import { Stack, Typography } from "@mui/material";
import IncrementNumber from "react-increment-number";
import "./About.css";
import Aos from "aos";


const About = () => {
  const [number, setNumber] = useState(0)
  const [speed, setSpeed] = useState(5)

  const handleAnimationEnd = (endValue) => {
    console.log('animation end', endValue)
}
  return (
    <Stack id="ourstory" className="aboutmain" width="100%"
    // border="2px solid red"
    >
      <Stack
        width="100%"
        // height="15vh"
        mt={2}
        mb={3}
        alignItems="center"
        justifyContent="center"
      >
        <h1 className='text-[#B8915A] font-poppins mt-28 text-4xl font-bold'>Our Story</h1>
        {/* <h1 className='text-white font-poppins mt-5 mb-10 text-2xl'>Our Journey</h1> */}
      </Stack>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        // border="2px solid red"
        // mt={10}
        mt={{xs:0,sm:0,md:10,lg:10,xl:10}}
        mb={10}
        width="100%"
        // height="50vh"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack
          data-aos="fade-up"
          width={{ xs: "90%", sm: "90%", md: "35%", lg: "35%", xl: "35%" }}
          mb={{ xs: "20px", sm: "20px", md: "0px", lg: "0px", xl: "0px" }}
          display="flex"
          
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          borderRadius={5}
          className="sliderContainer"
        >
          {/* <img className="w-[300px] h-[250px]" src={academics}></img> */}
          <Stack data-aos="flip-left"  margin={{ xs: "10px", sm: "10px", md: "30px", lg: "30px", xl: "00px" }} width="200px" height="200px" style={{ backgroundColor:"#B8915A",borderRadius:"15px"}} flex flexDirection="column" justifyContent="center" justifyItems="center" alignItems="center">
            <div className="flex flex-row items-center justify-center ">
              <span class="numscroller" className="numscroller font-poppins text-white text-5xl font-semibold" 
              data-min='1' data-max='1000' data-delay='5' data-increment='10'
              >18</span>
              
              <h1 className="font-poppins text-white text-5xl font-semibold">+</h1>
            </div>
            <h1 className="font-poppins mt-3 text-white ">Issues</h1>
          </Stack>

          <Stack data-aos="flip-left" width="200px" height="200px" style={{ backgroundColor:"white",borderRadius:"15px"}} flex flexDirection="column" justifyContent="center" justifyItems="center" alignItems="center">
            <div className="flex flex-row items-center justify-center ">
              <span class="numscroller" className="numscroller font-poppins text-black text-5xl font-semibold" 
              data-min='1' data-max='1000' data-delay='5' data-increment='10'
              >5</span>
              
              <h1 className="font-poppins text-black text-5xl font-semibold">+</h1>
            </div>
            <h1 className="font-poppins mt-3 text-black ">Segments</h1>
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "83%", sm: "83%", md: "45%", lg: "45%", xl: "45%" }}
          data-aos="fade-up"
        >
          <Typography
            data-aos="fade-up"
            data-aos-duration="2000"
            variant="h6"
            color="white"
            textAlign="justify"
            className="font-poppins"
            mt={{ xs: "0", sm: "0", md: "20", lg: "0px", xl: "0" }}
            fontSize={{lg: "20px", xl: "20px" }}
          >
           Encompassing the vision of “A Thought Leader in Digital Transformation,” Exposition strives to bridge the gap between Management and IT through impactful segments such as University Business Magazine, the Edify Inter-University Article Competition, the Entrepreneurial Community, and Industrial Week.
          </Typography>

         
        </Stack>
      </Stack>
     
    </Stack>
  );
};

export default About;
