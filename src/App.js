import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PlaceGallery from "./PlaceGallery";
import PlaceSearch from "./pages/PlaceSearch";
import PlaceDetails from "./pages/PlaceDetails";
import Packages from "./pages/Packages";




function App() {
  const location = useLocation();

  return (
    <>
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placesearch" element={<PlaceSearch />} />
        <Route path="/place/:name" element={<PlaceDetails/>} />
        <Route path="/packages/:type/:place" element={<Packages />} />
        <Route path="/places" element={<PlaceGallery />} />
      </Routes>

   
      {location.pathname === "/" && <Footer />}
      
    </>
  );
}



export default App;
