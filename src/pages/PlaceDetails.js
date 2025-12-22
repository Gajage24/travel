import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import packageInfo from "../data/packageInfo"; 

const PlaceDetails = () => {
  const { type } = useParams(); 
  const navigate = useNavigate();

  const info = packageInfo[type]; 

  if (!info) {
    return <h2>Package not found</h2>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1>{info.title}</h1>
      <p>{info.description}</p>

      <h3>What’s Included</h3>
      <ul>
        {info.includes.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Benefits</h3>
      <ul>
        {info.benefits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Services</h3>
      <ul>
        {info.services.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2f6bed",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default PlaceDetails;
