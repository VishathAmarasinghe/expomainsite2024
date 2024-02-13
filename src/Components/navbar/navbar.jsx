import React from "react";
import expoMainlogo from './mainlogo.png';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal "
      >
        <a href="#about" className="flex items-center hover:underline font-poppins">
          ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#ourstory" className="flex items-center hover:underline font-poppins">
          OUR STORY
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#ourteam" className="flex items-center hover:underline font-poppins">
          OUR TEAM
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#memories" className="flex items-center hover:underline font-poppins">
          MEMORIES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#sponsors" className="flex items-center hover:underline font-poppins">
          SPONSORS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center hover:underline font-poppins
        ">
          CONTACT
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="sticky top-0 bg-black z-50">
      <Navbar className="sticky  z-50 h-max max-w-full rounded-none px-4 py-2 bg-black  border-b-[#B8915A] border-b-2 border-t-0 border-x-0  lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-black">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className="w-36" src={expoMainlogo}></img>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                // variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-[#B8915A]"
              >
                <a href="https://emagazine.exposition.lk/" target="_blank">
              <span>E-Magazine</span>
              </a>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="z-40" open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="bg-[#B8915A]" onClick={()=>window.location.href("https://emagazine.exposition.lk/")}>
              <a href="https://emagazine.exposition.lk/" target="_blank">
              <span>E-Magazine</span>
              </a>
              
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      </div>
  );
}