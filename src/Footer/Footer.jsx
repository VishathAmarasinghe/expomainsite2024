import React from "react";
import footerlogo from "../assets/expwhite.webp";
import fb from '../assets/fb.webp'
import ig from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import phone from '../assets/phone1.webp'
import email from '../assets/mail.webp'


const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://exposition.lk/" className="flex items-center">
              <img src={footerlogo} className="h-14 me-3" alt="FlowBite Logo" />
            </a>
            <p className="text-gray-500 mt-2">
            Department of Industrial Management,<br></br>
Faculty of Science,<br></br>
University of Kelaniya,<br></br>
Dalugama,
Kelaniya,<br></br>
Sri Lanka
            </p>
            <div>
                <div className="flex flex-row mt-2">
                    <img className="w-5 " src={email}></img>
                    <p className="text-gray-500 ml-3">exposition.issue19@gmail.com</p>

                </div>
                <div className="flex flex-row">
                    <img className="w-5 " src={phone}></img>
                    <p className="text-gray-500 ml-3">+94 78 375 9681</p>

                </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Navigation
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#ourstory" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#ourteam" className="hover:underline">
                    Our Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#memories" className="hover:underline">
                    Memories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#sponsors" className="hover:underline">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://blog.exposition.lk/"
                    className="hover:underline "
                    target="_blank"
                  >
                    Exposition Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://emagazine.exposition.lk/"
                    class="hover:underline"
                    target="_blank"
                  >
                    E- magazine
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://edify.exposition.lk/"
                    target="_blank"
                    class="hover:underline"
                  >
                    Edify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" class="hover:underline">
              Exposition™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/Exposition.MIT"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={fb} className="h-5 me-3" alt="FlowBite Logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/theexposition/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <img src={linkedin} className="h-5 me-3" alt="FlowBite Logo" />
            </a>
            <a
              href="https://www.instagram.com/exposition_lk/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <img src={ig} className="h-5 me-3" alt="FlowBite Logo" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
