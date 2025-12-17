import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'


const Navbar=() =>{
return (
<header className="navbar">
<div className="nav-container">
<Link to="/" className="logo">WorldNest Tours</Link>
<nav className="menu">
<NavLink to="/">Home</NavLink>
<NavLink to="/services">Services</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/gallery">Gallery</NavLink>
<NavLink to="/booking">Booking</NavLink>
<NavLink to="/contact">Contact</NavLink>
</nav>
</div>
</header>
)
}
export default Navbar;
