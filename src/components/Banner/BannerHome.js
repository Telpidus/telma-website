import React from "react";
import { Link } from "react-router-dom";

function BannerHome(props) {
  return (
    <section className="banner-home">
      <div className="banner-home__container container d-flex justify-content-between">
        <div className="banner-home__content">
          <h1>{props.title}</h1>
          <h2 className="color--secondary">{props.subTitle}</h2>
          <Link to={{ pathname: `/${props.link}` }}>
            <button className="button-primary" aria-label={props.buttonLabel}>
              {props.buttonLabel}
            </button>
          </Link>
        </div>
        <img
          src={props.imgPath}
          alt={props.imgAlt}
          width="600"
          height="600"
        ></img>
      </div>
    </section>
  );
}

export default BannerHome;

// <section className={`wrapper searchDiv ${props.title}`}>
