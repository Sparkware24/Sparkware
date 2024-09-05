import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Styles.css";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import logo from "../constants/images/logo.png";

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-indigo-950 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-16 xl:justify-items-center py-8 px-4 md:px-10">
        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            ABOUT US
          </h1>
          <div className="flex flex-row mt-2">
            <p className="text-md pr-8 lg:text-justify">
              Sparkware is one of the startup IT companies in Sri Lanka. We
              specialize in delivering next-generation digital services that are
              both visually appealing and user-friendly, helping our clients
              achieve successful business growth.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            Contact
          </h1>
          <p className="text-md mt-2">
            <span>Sparkware, </span>
            <br />
            <span>Galle - Udugama Road,</span> <br />
            <span>Tellambura,</span> <br />
            <span>Nakiyadeniya. 80000</span>
            <br />
            <span>Email : sparkware24@gmail.com</span>
            <br />
            <span>Phone : +9478 654 2882</span>
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            QUICK LINKS
          </h1>
          <ul className="list-none mt-2">
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/sparkware" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/about" onClick={scrollToTop}>
                About
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/service/web" onClick={scrollToTop}>
                Service
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/project" onClick={scrollToTop}>
                Project
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/contact" onClick={scrollToTop}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[250px] h-auto mx-auto sm:mx-0"
          />
        </div>
      </div>

      <div className="pl-4 sm:pl-0">
        <p className="text-base font-mono text-start sm:text-center">
          &copy; {new Date().getFullYear()} Sparkware. All Rights Reserved.
        </p>

        <div className="flex flex-row justify-start sm:justify-center gap-3 lg:gap-5 mt-2 mb-5">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-white h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with us on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
