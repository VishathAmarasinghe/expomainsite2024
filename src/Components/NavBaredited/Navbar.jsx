import React from 'react'
import { useRef,useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavbarStyles.css';

// import { Link } from 'react-router-dom';

import expoMainlogo from './mainlogo.png';

import { Stack,Button } from '@mui/material';


export default function Navbar() {
  const [cssvalue,setcssvalue]=useState("nav_blur")
  const [blurState,setblurstate]=useState(false);
  const navRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
}, []);


// useEffect(()=>{

// },[])

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav",
      // "nav_blur"
		);
    };

  const blurchecker=()=>{
    // const innerwidth=window.innerWidth;
    // if (innerwidth<=1024) {
    //   console.log(innerwidth);
    // console.log("cheking");
    // setcssvalue(blurState?"nav_blur":"")
    // setblurstate(!blurState);
    // }
    
  }


  return (
    
    <header className="bg-black  border-b-[#B8915A] border-b-2 border-t-0 border-x-0" >
      <Stack 
      // border="2px solid red" 
      width="220px"
      >
      <a to="/">
        <img className='w-44' src={expoMainlogo} alt='logoImage'/>
      </a>
      </Stack>
      <Stack 
      // border="2px solid yellow"
       width={{xs:"7%",sm:"7%",md:"7%",lg:"7%",xl:"7%"}}>

      </Stack>
      <Stack 
      // border="2px solid green" 
      width={{lg:"90%",xl:"90%"}} direction="row" alignItems="flex-end" justifyContent="flex-end">
        <nav ref={navRef}>
        <button
              // className="nav-btn nav-close-btn"
              style={{display:"none"}}
              onClick={()=>{showNavbar();blurchecker()}}>
              <FaTimes />
				</button>
          
            <a  to="#" onClick={()=>{showNavbar();blurchecker()}} smooth>HOME</a>
            
            <a  href="#about" onClick={()=>{showNavbar();blurchecker()}} smooth>ABOUT</a>
            <a  href="#ourstory" onClick={()=>{showNavbar();blurchecker()}} smooth>OUR STORY</a>
            <a  href="#ourteam" onClick={()=>{showNavbar();blurchecker()}} smooth>OUR TEAM</a>
            <a  href="#memories" onClick={()=>{showNavbar();blurchecker()}} smooth>MEMORIES</a>
            <a  href="#sponsors" onClick={()=>{showNavbar();blurchecker()}} smooth>SPONSORS</a>
            <a href="#contact" onClick={()=>{showNavbar();blurchecker()}} smooth>CONTACT</a>
            
            <a className='ml-3 mr-0 m-0'  href="https://emagazine.exposition.lk/" target="_blank">
              <button
                
                className=" bg-[#B8915A] p-2 rounded-md"
              >
                
              <span>E-Magazine</span>
             
              </button>
              </a>
          
           

            
          <button
              className="nav-btn nav-close-btn "
              onClick={()=>{showNavbar();blurchecker()}}>
              <FaTimes />
				</button>
        </nav>
        </Stack>
        {/* <Stack width={{xs:"15%",sm:"15%",md:"15%",lg:"15%",xl:"12%"}} 
        border="2px solid red"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        >
        
        </Stack> */}
        

        <Stack 
        // border="2px solid yellow"
        display={{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"}}
        mr={{xs:"20px",sm:"20px",md:"2px",lg:"0",xl:"0"}}
        >
        <button
          className="nav-btn"
          onClick={()=>{showNavbar();blurchecker()}}>
          <FaBars />
			</button>
      </Stack>
    </header> 
  )
}
