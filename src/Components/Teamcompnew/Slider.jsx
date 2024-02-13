import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./sliderimages.css";
import { teamdetails } from "../TeamComp/TeamDetails";


import TeamSingleCard from "../TeamComp/TeamSingleCard";



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

function Slider() {
  const [details, setdetails] = useState([]);
  const [values, setvalue] = useState(false);

  useEffect(() => {
    setdetails(teamdetails);
    setvalue(true);
    console.log(details[0]);
  }, []);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={500}
      customTransition="all 1s linear"
      arrows={true}
    >
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[0])} */}
            <TeamSingleCard
              persondetail={teamdetails[0]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[0])} */}
            <TeamSingleCard
              persondetail={teamdetails[1]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[0])} */}
            <TeamSingleCard
              persondetail={teamdetails[2]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div className="imageMargin">
                <img src={img7} className="imagesslide"/>
            </div> */}
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[0])} */}
            <TeamSingleCard
              persondetail={teamdetails[3]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[4])} */}
            <TeamSingleCard
              persondetail={teamdetails[4]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="imageMargin">
        {values ? (
          <>
            {/* {console.log("came here" + details[0])} */}
            <TeamSingleCard
              persondetail={teamdetails[5]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="imageMargin">
        {values ? (
          <>
            {console.log("came here" + details[6])}
            <TeamSingleCard
              persondetail={teamdetails[6]}
            //   fliptype={"flip-left"}
            />
            {/* <TeamSingleCard persondetail={teamdetails[1]} fliptype={"flip-right"} /> */}
          </>
        ) : (
          ""
        )}
      </div>
      
    </Carousel>
  );
}

export default Slider;
