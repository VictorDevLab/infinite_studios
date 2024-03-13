import React from "react";
import "./ServiceCard.css";

function ServiceCard({ number, image, name, description }) {
  return (
    <div
      className="service-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),url(${image})`,
      }}
    >
      <div className="service-card-number">{number}</div>

      <h2 className="service-card-name">{name}</h2>
      <p className="service-card-description">{description}</p>
    </div>
  );
}

export default ServiceCard;
