import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/placegallery.css";

const Gallery = () => {
  const location = useLocation();
  const place = location.state?.place;

  if (!place) {
    return 
  }

  

  return (
    <div style={{ padding: "20px" }}>
      <h2>{place.name}</h2>
      <p>{place.description}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {place.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="place"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
