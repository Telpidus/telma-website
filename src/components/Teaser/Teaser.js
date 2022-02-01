import React from "react";
import { Link } from "react-router-dom";

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2>{props.title}</h2>
          {props.subtitle ? <h4>{props.subtitle}</h4> : null}
          <p>{props.description}</p>
          <Link to={{ pathname: `/${props.linkFirst}` }}>
            <button className="button-secondary">
              {props.buttonTextFirst}
            </button>
          </Link>
          {props.buttonTextSecond ? (
            <button className="button-secondary">
              {props.buttonTextSecond}
            </button>
          ) : null}
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
          {props.subtitle ? <h4>{props.subtitle}</h4> : null}
          <p>{props.description}</p>
          <Link to={{ pathname: `/${props.linkFirst}` }}>
            <button className="button-secondary">
              {props.buttonTextFirst}
            </button>
          </Link>
          {props.buttonTextSecond ? (
            <button className="button-secondary">
              {props.buttonTextSecond}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Teaser;
