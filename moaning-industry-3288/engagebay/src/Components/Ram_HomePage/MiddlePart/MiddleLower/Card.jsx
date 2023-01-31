import React from "react";
import "./Card.css";

const Card = ({ src, text, name, post }) => {
  return (
    <div className="Card">
      <h1>Client Testimonials</h1>
      <img src={src} alt="Not-Found" />
      <p>
        <i>{text}</i>
      </p>
      <h2>{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default Card;
