import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placesData } from "../data/PlaceData";

const PlaceSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPlaces = placesData.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Search Places</h2>

      <input
        type="text"
        placeholder="Search place..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "220px",
            }}
            onClick={() => navigate(`/place/${place.name}`)}
          >
            <img
              src={place.images[1]}
              alt={place.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>
              {place.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceSearch;
