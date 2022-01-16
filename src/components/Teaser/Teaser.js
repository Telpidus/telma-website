import React from "react";

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button className="button-secondary">{props.buttonTextFirst}</button>
          <button className="button-secondary">{props.buttonTextSecond}</button>
        </div>

        <img src={props.imgPath} alt="teaser with icon and text" />
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <img src={props.imgPath} alt="teaser with icon and text" />
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button className="button-secondary">{props.buttonTextFirst}</button>
          <button className="button-secondary">{props.buttonTextSecond}</button>
        </div>
      </div>
    );
  }
}

export default Teaser;
