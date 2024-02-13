import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const PathCard = ({image, desctext,url, title}) => {
    return (
        <Card data-aos="fade-up" className="mt-6 h-auto mb-10 lg:mb-0  md:mb-0  lg:w-80 md:w-80 w-90 border z-10 border-gray-300 shadow-2xl rounded-lg hover:bg-[#B8915A] ">
          <CardHeader  className="">
            <img
              src={image}
              className='h-auto'
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography  variant="h5" color="blue-gray" className="mb-2 ">
              {title}
            </Typography>
            <Typography variant='paragraph' className='text-[22px] sm:text-[20px] md:text-[17px] '>
              {desctext}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href={url}>
                <Button className='w-full'>Read More</Button>
            </a>
            
          </CardFooter>
        </Card>
      );
}

export default PathCard