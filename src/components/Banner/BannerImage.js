import React from "react";

function BannerImage(props) {
  return (
    <section className="banner-image">
      <div className="container d-flex justify-content-between">
        <div className="banner-image__content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          {/* <button className="button-primary" aria-label={props.buttonLabel}>
            {props.buttonLabel}
          </button> */}
        </div>
        <img src={props.imgPath} alt={props.imgAlt}></img>
      </div>
    </section>
  );
}

export default BannerImage;
