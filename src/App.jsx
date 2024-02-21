import About from "./Components/AboutContainer/About";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/NavBaredited/Navbar";
import Aboutnew from "./Components/NewAbout/Aboutnew";
import Pathsection from "./Components/Pathsection";
import Sponsors from "./Components/Slider/Sponsors";
import Gallarynew from "./Components/Teamcompnew/Gallarynew";

import { StickyNavbar } from "./Components/navbar/navbar";
import Footer from "./Footer/Footer";
import OC from "./OrganizingCommitee/OC";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function App() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
  return (
    <div
    className="w-full">
      {/* <StickyNavbar/> */}
      <Navbar/>
      <Hero/>
      <Aboutnew/>
      <Pathsection/>
      <Testimonials/>
      <About/>
      {/* <Gallarynew/> */}
      
      <Gallery/>
      <Sponsors/>
      <OC/>
      <Footer/>
    </div>
  )
}