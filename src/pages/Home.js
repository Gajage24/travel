import React, { useState } from 'react';
import { placesData } from "../data/PlaceData";
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import '../styles/home.css';
import image1 from '../assets/package.png';
import image2 from '../assets/parental-control.png';
import image3 from '../assets/friends (1).png';
import { useNavigate } from "react-router-dom";


const packages = [
  {img:image1, title: "Solo Trip", summary: "Best for solo travellers", price: "₹29,999" },
  {img:image2, title: "Family Trip", summary: "Perfect for families", price: "₹49,999" },
  {img:image3, title: "Friends Trip", summary: "Fun group adventure", price: "₹34,999" }
];

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const result = placesData.find(
      (place) => place.name.toLowerCase() === search.toLowerCase()
      

    );

    if (result) {
      
      navigate("/booking", { state: { place: result } });
    } else {
      alert("Place not found");
    

    }
  };


  return (
     <div className="home-page"> 
      <Hero />
      <section className="place-search" style={{ padding: "20px", textAlign: "center" }}>
        <h2>Search Place</h2>
        <input
          type="text"
          placeholder="Type place name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "250px", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button 
          onClick={handleSearch}
          style={{ padding: "8px 12px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}
        >
          Search
        </button>
      </section>


      <section className="packages">
        <h2>Popular Packages</h2>
        <div className="packages-grid">
          {packages.map((p, i) => <PackageCard key={i} data={p} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
