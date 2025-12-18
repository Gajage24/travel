import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">WorldNest Tours</Link>

     
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          &#8942;
        </div>

        <nav className={`menu ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
