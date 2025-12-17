import React from "react";
import { placesData } from "./data/PlaceData";

function PlaceGallery() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Places</h2>

      {placesData.map((place) => (
        <div key={place.id}>
          <h3>{place.name}</h3>

          <img
            src={place.images[0]}
            alt={place.name}
            width="250"
            style={{ borderRadius: "10px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default PlaceGallery;
