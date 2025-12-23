import React from 'react'
import '../styles/packagecard.css'
import { useNavigate } from "react-router-dom";

 const PackageCard = ({ data, onClick }) => {
  
  return (
    <div className="package-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
      
    </div>
  );
};

export default PackageCard;

