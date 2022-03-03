import React from "react";
import { Link } from "react-router-dom";

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2>{props.title}</h2>
          {props.subtitle ? (
            <a href={props.url}>
              <h4>{props.subtitle}</h4>{" "}
            </a>
          ) : null}
          <p>{props.description}</p>
          {props.buttonTextFirst ? (
            <Link
              to={{ pathname: `/${props.linkFirst}` }}
              className="button-secondary"
            >
              {props.buttonTextFirst}
            </Link>
          ) : null}
          {props.buttonTextSecond ? (
            <Link
              to={{ pathname: `/${props.linkSecond}` }}
              className="button-secondary"
            >
              {props.buttonTextSecond}
            </Link>
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
          {props.subtitle ? (
            <a href={props.url}>
              <h4>{props.subtitle}</h4>{" "}
            </a>
          ) : null}
          <p>{props.description}</p>
          {props.buttonTextFirst ? (
            <Link
              to={{ pathname: `/${props.linkFirst}` }}
              className="button-secondary"
            >
              {props.buttonTextFirst}
            </Link>
          ) : null}
          {props.buttonTextSecond ? (
            <Link
              to={{ pathname: `/${props.linkSecond}` }}
              className="button-secondary"
            >
              {props.buttonTextSecond}
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Teaser;
