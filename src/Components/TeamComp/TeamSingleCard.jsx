import { Stack, Typography } from '@mui/material'
import React from 'react'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import './Team.css';

const TeamSingleCard = ({persondetail,fliptype}) => {
    // console.log("sdfsd"+persondetail.name);
  return (
    // <Stack width="100%" height="97vh" direction="column" alignItems="center" justifyContent="center" 
    // border="2px solid brown"
    // >

        <Stack 
        // width={{ xs: "160px", sm: "200px", md: "200px", lg: "220px", xl: "220px" }}
        width="220px"
        // border="2px solid red"
        // marginLeft="20px"
        // marginRight="20px"

        data-aos={fliptype}
        data-aos-duration="2500"
        height="220px"
        borderRadius="15px"
        // style={{backgroundColor:"#050811"}}
        className='cardteam'
        >
            <Stack 
            // mb={{xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }} 
            borderRadius="0px 15px 0px 15px" width="100%" height="5px" style={{backgroundColor:"#E3A10F"}}></Stack>
            <Stack width="100%" 
            height={{xs: "100px", sm: "100px", md: "80px", lg: "80px", xl: "80px" }} alignItems="center" 
    
            justifyContent="center"
            >
                <Typography textAlign="center"  fontWeight={700} 
                fontSize={{xs: "15px", sm: "15px", md: "18px", lg: "18px", xl: "18px" }} variant='h6' color="white">{persondetail.name}</Typography>
                <Typography textAlign="center"  
                fontSize={{xs: "14px", sm: "14px", md: "16px", lg: "16px", xl: "16px" }} color="white">{persondetail.position}</Typography>
            </Stack>
            <Stack width="100%" height="140px"
            // border="2px solid yellow"
            direction="row"

            >
                <Stack 
                // border="2px solid green" 
                width="30%"
                direction="column"
                alignItems="center"
                justifyContent="space-around"
                >
                    <a href={`tel:${persondetail.phoneNo}`}>
                    <CallOutlinedIcon  className='teambtns' /></a>
                    <a target="_blank" href={`${persondetail.Linkedin}`}><LinkedInIcon className='teambtns' /></a>
                    <MailOutlineOutlinedIcon onClick={() => window.location = `mailto:${persondetail.Email}`} className='teambtns' />


                </Stack>
                <Stack 
                // border="2px solid blue" 
                width="70%"
                alignItems="center"
                justifyContent="center"
                >
                    <Stack width="65%"
                    border="3px solid #E3A10F"
                    borderRadius="60px"
                    >
                        <img src={persondetail.image}></img>
                    </Stack>

                </Stack>
            </Stack>
        </Stack>

    // </Stack>
  )
}

export default TeamSingleCard


