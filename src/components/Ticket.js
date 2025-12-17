

import React from "react";
import { jsPDF } from "jspdf";


const Ticket = ({ booking }) => {

  const cleanPrice = booking?.price
    ? booking.price.toString().replace(/&/g, "")
    : "N/A";

  const generatePDF = () => {
    const doc = new jsPDF();

    let y = 45;
    doc.text(`Passenger Name : ${booking.name}`, 25, y);
    y += 12;
    doc.text(`Destination: ${booking.place}`, 25, y);
    y += 12;
    doc.text(`Travel Date: ${booking.date}`, 25, y);
    y += 12;
    doc.text(`Seats Booked: ${booking.seats}`, 25, y);
    y += 12;
    doc.text(`Booking ID: ${booking.id}`, 25, y);
    y += 12;
    doc.text(`Package: ${booking.packageType || "N/A"}`, 25, y);
    y += 12;
    doc.text(`Price: ₹${cleanPrice}`, 25, y);

    doc.save("WorldNest_Ticket.pdf");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Booking Confirmed ✅</h2>

      <div
        style={{
          margin: "20px auto",
          padding: "20px",
          maxWidth: "400px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          background: "#f5faff",
          textAlign: "left",
          
        }}
      >
        <p><b>Name:</b> {booking.name}</p>
        <p><b>Place:</b> {booking.place}</p>
        <p><b>Date:</b> {booking.date}</p>
        <p><b>Seats:</b> {booking.seats}</p>
        <p><b>Booking ID:</b> {booking.id}</p>
        <p><b>Package :</b> {booking.packageType}</p>   
      <p><b>Price :</b> ₹{cleanPrice}</p>  
      </div>

      <button
        onClick={generatePDF}
        style={{
          padding: "10px 25px",
          background: "#1e90ff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Download Ticket 
      </button>
    </div>
  );
};

export default Ticket;
