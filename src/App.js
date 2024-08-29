import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Chat from "./components/Chat";
import WebService from "./sub-pages/services/WebService";
import MobileService from "./sub-pages/services/MobileService";
import GraphicService from "./sub-pages/services/GraphicService";
import SoftwareService from "./sub-pages/services/SoftwareService";
import EmbeddedService from "./sub-pages/services/EmbeddedService";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for images/data to load
    const loadData = async () => {
      // Simulate loading data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    loadData();
  }, []);

  // Return loader until loading is complete
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
            {/* main pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            {/* service sub pages */}
            <Route path="service/web" element={<WebService />} />
            <Route path="service/mobile" element={<MobileService />} />
            <Route path="service/graphic" element={<GraphicService />} />
            <Route path="service/software" element={<SoftwareService />} />
            <Route path="service/embedded" element={<EmbeddedService />} />
        </Routes>
      </div>
      <Footer />

      {/* Chat button */}
      {<Chat />}
    </div>
  );
};

export default App;
