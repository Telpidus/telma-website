import React from "react";
import "./simple-card.scss";

function SimpleCard(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="simple-card"
    >
      <p className="simple-card__headline">{props.date}</p>

      <h3 className="simple-card__title">{props.title}</h3>

      <p className="simple-card__info">{props.author}</p>
    </a>
  );
}

export default SimpleCard;
