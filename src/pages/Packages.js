import { useParams, useNavigate } from "react-router-dom";

const Packages = () => {
  const { type, place } = useParams();
  const navigate = useNavigate();

  const packagePrices = {
    solo: 29000,
    family: 49000,
    friends: 34000,
  };

  const price = packagePrices[type];

  const handleBook = () => {
    navigate("/booking", {
      state: {
        packageType: type,
        price: price,
        place: place,
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{place} - {type.toUpperCase()} Package</h2>
      <h3>Price: ₹{price}</h3>

      <button onClick={handleBook}>Book Now</button>
    </div>
  );
};

export default Packages;
