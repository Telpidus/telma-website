import React from "react";
import { Link } from "react-router-dom";
import "./banner-image.scss";

function BannerImage(props) {
  return (
    <section className="banner-image">
      <div className="banner-image__wrapper container d-flex justify-content-between">
        <div className="banner-image__content">
          <h2 className="color--secondary">{props.title}</h2>
          <p>{props.description}</p>
          {props.anchorLabel ? (
            <a href={props.anchor} className="button-secondary">
              {props.anchorLabel}
            </a>
          ) : null}

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
          {props.downloadText ? (
            <a
              href={props.pdf}
              className="button-secondary"
              download={props.pdfName}
            >
              {props.downloadText}
            </a>
          ) : null}
        </div>
        <img src={props.imgPath} alt={props.imgAlt}></img>
      </div>
    </section>
  );
}

export default BannerImage;
