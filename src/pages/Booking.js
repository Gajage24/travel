import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Ticket from "../components/Ticket";
import "../styles/booking.css";

const Booking = () => {
  const location = useLocation();
  const selectedPlace = location.state?.place;

  const packages = {
    Solo: 29999,
    Family: 49999,
    Friends: 34999,
  };

  const [selectedPackage, setSelectedPackage] = useState("");
  const [price, setPrice] = useState("");
  const [booking, setBooking] = useState(null);

  const handlePackageChange = (e) => {
    const pkg = e.target.value;
    setSelectedPackage(pkg);
    setPrice(packages[pkg] || "");
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const bookingData = {
      id: Math.floor(Math.random() * 100000),
      name: formData.get("name"),
      place: selectedPlace?.name || formData.get("place"),
      date: formData.get("date"),
      seats: formData.get("seats"),
      packageType: selectedPackage,
      price: price,
    };

    setBooking(bookingData);
  };

  if (booking) {
    return <Ticket booking={booking} />;
  }

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Booking for: {selectedPlace?.name}</h2>

        <form onSubmit={handleBooking}>
          <input name="name" placeholder="Enter your name" required />

          <input value={selectedPlace?.name || "place"}  />

          <input name="date" type="date" required />

          <input
            name="seats"
            type="number"
            min="1"
            placeholder="Seats"
            required
          />
          <select
            value={selectedPackage}
            onChange={handlePackageChange}
            required
          >
            <option value="">Select Package</option>
            <option value="Solo">Solo Trip</option>
            <option value="Family">Family Trip</option>
            <option value="Friends">Friends Trip</option>
          </select>
          <input
            value={price ? `₹${price}` : ""}
            placeholder="Price"
            readOnly
          />
           

          <button type="submit">Book Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
