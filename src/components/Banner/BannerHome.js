import React from "react";
import { Link } from "react-router-dom";
import "./banner-home.scss";

function BannerHome(props) {
  return (
    <section className="banner-home">
      <div className="banner-home__container container">
        <div className="banner-home__content">
          <h1>{props.title}</h1>
          <h2 className="color--secondary">{props.subTitle}</h2>
          <Link to={{ pathname: `/${props.link}` }}>
            <button className="button-primary" aria-label={props.buttonLabel}>
              {props.buttonLabel}
            </button>
          </Link>
        </div>
        <div className="banner-home__image">
          <img
            src={props.imgPath}
            alt={props.imgAlt}
            width="550"
            height="550"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default BannerHome;
