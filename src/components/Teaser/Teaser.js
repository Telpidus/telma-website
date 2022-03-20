import React from "react";
import { Link } from "react-router-dom";
import "./teaser.scss";

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="teaser teaser--right">
        <div className="teaser__wrapper container">
          <div className="teaser__content">
            <h2 className="color--secondary">{props.title}</h2>
            {props.subtitle ? (
              <a className="teaser__link" href={props.url}>
                <h4>{props.subtitle}</h4>{" "}
              </a>
            ) : null}
            <p className="mt-3">{props.description}</p>
            <div className="button-wrapper">
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
          <div className="teaser__image">
            <img
              src={props.imgPath}
              alt="teaser with icon and text"
              width="360"
              height="360"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="teaser teaser--left">
        <div className="teaser__wrapper container">
          <div className="teaser__image">
            <img
              src={props.imgPath}
              alt="teaser with icon and text"
              width="360"
              height="360"
              className="teaser__image"
            />
          </div>
          <div className="teaser__content">
            <h2 className="color--secondary">{props.title}</h2>
            {props.subtitle ? (
              <a className="teaser__link" href={props.url}>
                <h4>{props.subtitle}</h4>{" "}
              </a>
            ) : null}
            <p className="mt-3">{props.description}</p>
            <div className="button-wrapper">
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
        </div>
      </div>
    );
  }
}

export default Teaser;
