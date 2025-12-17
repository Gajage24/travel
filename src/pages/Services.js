import React from "react";
import "../styles/services.css";

export default function Services() {

  const packages = [
    {
      title: "Solo Travel Packages",
      desc: "Perfect for independent travelers who love exploring at their own pace.",

      features: [
        "Day-wise planned itinerary",
        "Safe & comfortable accommodations",
        "Adventure & cultural activities",
      ],

      food: [
        "Daily breakfast included",
        "Optional lunch & dinner",
        "Local food experiences",
      ],
    },

    {
      title: "Family Travel Packages",
      desc: "Designed for families looking for a relaxed and enjoyable vacation.",

      features: [
        "Kid-friendly itineraries",
        "Resorts & spacious rooms",
        "Beach, safari & amusement activities",
      ],

      food: [
        "Breakfast + Dinner",
        "Kids special meals",
        "Veg & Non-veg options",
      ],
    },

    {
      title: "Friends & Group Travel",
      desc: "Perfect for adventure and fun-filled group experiences.",

      features: [
        "Flexible group itineraries",
        "Shared/group accommodations",
        "Trekking, camping & nightlife tours",
      ],

      food: [
        "Group meal plans",
        "Buffet-style food",
        "Bonfire & BBQ nights",
      ],
    },
  ];

  return (
    <div className="services-container">
      <h1 className="heading">Our Travel Packages</h1>

      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <div className="card" key={i}>
            <h2>{pkg.title}</h2>
            <p>{pkg.desc}</p>

            <h4>Package Includes</h4>
            <ul>
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>

            <h4>Food Facilities</h4>
            <ul className="food-list">
              {pkg.food.map((foodItem, k) => (
                <li key={k}>{foodItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
