import React from "react";
import { Link } from "react-router-dom";

function BannerHome(props) {
  return (
    <section className="banner-home">
      <div className="container d-flex justify-content-between">
        <div className="banner-home__content">
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
          <Link to={{ pathname: `/${props.link}` }}>
            <button className="button-primary" aria-label={props.buttonLabel}>
              {props.buttonLabel}
            </button>
          </Link>
        </div>
        <img src={props.imgPath} alt={props.imgAlt}></img>
      </div>
    </section>
  );
}

export default BannerHome;

// <section className={`wrapper searchDiv ${props.title}`}>
