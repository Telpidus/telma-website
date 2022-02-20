import React from "react";
import "./basic-card.scss";

function BasicCard(props) {
  return (
    <div className="basic-card">
      <p className="basic-card__headline">{props.date}</p>

      <a href={props.url} className="basic-card__link">
        <h3>{props.title}</h3>
      </a>
      <p className="basic-card__info">{props.author}</p>
      <div>
        {props.link1 ? (
          <a href={props.link1} className="basic-card__link-secondary">
            {props.subtitle1}{" "}
          </a>
        ) : null}
        {props.link2 ? (
          <a href={props.link2} className="basic-card__link-secondary">
            {props.subtitle2}{" "}
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default BasicCard;
