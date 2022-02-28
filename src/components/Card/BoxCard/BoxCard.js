import React from "react";
import "./box-card.scss";

function BoxCard(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="box-card"
    >
      <p className="box-card__headline">{props.date}</p>

      <h4 className="box-card__title">{props.title}</h4>

      <p className="box-card__info">{props.description}</p>
      <img src={props.icon} alt={props.alt} className="box-card__icon" />
    </a>
  );
}

export default BoxCard;
