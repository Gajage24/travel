
import React, { useState, useEffect } from "react";
import '../styles/hero.css'
import image1 from '../assets/image.png'
import image2 from '../assets/family.avif'
import image3 from '../assets/friend.jpg'
import image4 from '../assets/hills.jpg'



const images = [image1,image2,image3,image4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-overlay">
        <h1>Explore The World</h1>
        <p>Travel • Adventure • Memories</p>
      </div>
    </section>
  );
};

export default Hero;
