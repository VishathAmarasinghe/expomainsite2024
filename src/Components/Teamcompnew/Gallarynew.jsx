import { Stack,Typography } from '@mui/material'
import React from 'react'
import './Gallary.css';
import Slider from './Slider';
// import SwipeSlider from '../SwipeSlider/SwipeSlider';



const Gallarynew = () => {
  
  return (
    <Stack id="team"
    
    // border="2px solid green"
    width="100%" className='gallaryImageContainer' direction="column" alignItems="center" >
        <Typography marginTop={5} fontWeight={600} textAlign="center" data-aos="fade-up" fontSize={{xs:"30px",sm:"30px",md:"45px",lg:"50px",xl:"50px"}} color="#E3A10F"  mt={10} mb={10}>OUR TEAM</Typography>
        <Stack 
        zIndex={5}
        // border="2px solid purple"
        // alignItems="center"
        justifyContent="center"
        width="90%" mb={{xs:10,sm:10,md:0,lg:10,xl:10}}>
            {/* <SwipeSlider/> */}
            <Slider/>
        </Stack>
    </Stack>
  )
}

export default Gallarynew