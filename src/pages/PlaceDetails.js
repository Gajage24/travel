import { useParams, useNavigate } from "react-router-dom";
import { placesData } from "../data/PlaceData";

const PlaceDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const place = placesData.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!place) {
    return <h2 style={{ padding: "20px" }}>Place not found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>{place.name} Tour</h2>
      <p>{place.description}</p>

    
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {placesData.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={place.name}
            width="250"
            style={{ borderRadius: "10px" }}
          />
        ))}
      </div>

      <br />

      <button onClick={() => navigate(`/packages/solo/${place.name}`)}>
        Solo Trip
      </button>

      <button onClick={() => navigate(`/packages/family/${place.name}`)}>
        Family Trip
      </button>

      <button onClick={() => navigate(`/packages/friends/${place.name}`)}>
        Friends Trip
      </button>
    </div>
  );
};

export default PlaceDetails;
