import { Stack,Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TeamSingleCard from "./TeamSingleCard";
import { teamdetails } from "./TeamDetails";

const TeamAllComp = () => {
  const [details,setdetails]=useState([]);
  const [values,setvalue]=useState(false);
  

  useEffect(()=>{
    setdetails(teamdetails);
    setvalue(true);
    console.log(details[0]);

  },[])
  return (
    <Stack
    id="team"
      width="100%"
      // height={{ xs: "180vh", sm: "180vh", md: "150vh", lg: "150vh", xl: "150vh" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      
      // border="2px solid brown"
    >
        <Stack
        width="100%"
        // height="15vh"
        mt={2}
        mb={5}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          data-aos="fade-up"
          fontSize={{
            xs: "25px",
            sm: "45px",
            md: "45px",
            lg: "50px",
            xl: "50px",
          }}
          mt={7}
          className="whyHackx fontReservationWB"
        >
          OUR TEAM
        </Typography>
      </Stack>
      <Stack
        // border="2px solid brown"
        overflow="hidden"
        mb={2}
        pb={2}
        width={{ xs: "90%", sm: "60%", md: "60%", lg: "40%", xl: "40%" }}
        direction="row"
        alignContent="center"
        justifyContent="space-between"
      >

        {values?(
            <>
            {console.log("came here"+details[0])}
            <TeamSingleCard persondetail={teamdetails[0]} fliptype={"flip-left"} />
            <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} />
            </>
        ):""}
        
      </Stack>
      <Stack
        width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        direction={{
          xs: "column-reverse",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "column",
        }}
        alignItems="center"
        justifyContent="center"
        // border="2px solid yellow"
      >
        <Stack
          // border="2px solid brown"
          //   overflow="hidden"
          width={{ xs: "90%", sm: "90%", md: "75%", lg: "60%", xl: "60%" }}
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          alignItems="center"
          justifyContent={{
            xs: "center",
            sm: "space-between",
            md: "",
            lg: "space-between",
            xl: "space-between",
          }}
        >
          <Stack
            direction="row"
            mb={{ xs: "30px", sm: "0px", md: "10px", lg: "0", xl: "0" }}
            width={{ xs: "100%", sm: "65%", md: "66%", lg: "66%", xl: "63%" }}
            // border="2px solid purple"
            alignItems="center"
            overflow="hidden"
            justifyContent={{
              xs: "space-between",
              sm: "space-between",
              md: "0",
              lg: "space-between",
              xl: "space-between",
            }}
          >
            {values?(
            <>
            <TeamSingleCard persondetail={details[2]} fliptype={"flip-left"}/>
            <TeamSingleCard persondetail={teamdetails[3]} fliptype={"flip-left"} />
            </>
        ):""}
          </Stack>

          {values?(
            <>
            <TeamSingleCard persondetail={teamdetails[4]} fliptype={"flip-right"} />
            {/* <TeamSingleCard /> */}
            </>
        ):""}
        </Stack>
        <Stack
          // border="2px solid brown"
          overflow="hidden"
          mt={{xs:0,sm:5,md:4,lg:3,xl:3}}
          mb={2}
          pb={2}
          width={{ xs: "90%", sm: "60%", md: "60%", lg: "40%", xl: "40%" }}
          direction="row"
          alignContent="center"
          justifyContent="space-between"
        >
          {values?(
            <>
            <TeamSingleCard persondetail={details[5]} fliptype={"flip-left"} />
            <TeamSingleCard persondetail={teamdetails[6]} fliptype={"flip-right"} />
            </>
        ):""}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TeamAllComp;
