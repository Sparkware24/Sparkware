import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

import Project from "./pages/Project";



import Contact from "./pages/Contact";

import WebService from "./sub-pages/services/WebService";
import MobileService from "./sub-pages/services/MobileService";
import GraphicService from "./sub-pages/services/GraphicService";
import SoftwareService from "./sub-pages/services/SoftwareService";
import EmbeddedService from "./sub-pages/services/EmbeddedService";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
          {/* main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          

          {/* service sub pages */}
          <Route path="/service/web" element={<WebService />} />
          <Route path="/service/mobile" element={<MobileService />} />
          <Route path="/service/graphic" element={<GraphicService />} />
          <Route path="/service/software" element={<SoftwareService />} />
          <Route path="/service/embedded" element={<EmbeddedService />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
