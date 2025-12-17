import React from 'react'
import '../styles/footer.css';
import '../styles/footer.css';
import fb from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import yt from "../assets/youtube.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>WorldNest Tours</h3>
          <p>Your trusted partner for Solo, Family & Group Travel.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/services">Packages</a>
          <a href="/about">About Us</a>
          <a href="/booking">Booking</a>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: worldnesttours@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, India</p>
        </div>
      </div>
        
      <div className="social-icons">
        
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={fb} alt="Facebook" height="30" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={insta} alt="Instagram" height="30" />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <img src={yt} alt="YouTube" height="30" />
        </a>

      </div>

    </footer>
  );
}

export default Footer;

        
    
    

