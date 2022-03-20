import React, { useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import { Row } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";
import bannerimage from "../../assets/banner_contact_lizard.webp";
import photos from "../../data/gallery";
import "./gallery.scss";

function Gallery() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const imagesArray = photos.map((data) => (
    <a
      className="masonry-brick"
      key={data.id}
      href={data.url}
      target="_blank"
      rel="noreferrer"
    >
      <img src={data.src} alt={data.alt} />
      <span>{data.description}</span>
    </a>
  ));

  return (
    <div className="gallery-section">
      <BannerImage
        title="Witnessing biodiversity"
        description="capture life with my camera inspires my scientific work.
          Also get to share the moments that inspired my writtings  "
        imgPath={observingImage}
        buttonTextFirst="Blog"
        linkFirst="blog"
        buttonTextSecond="Book"
        linkSecond="book"
      />
      <div className="masonry">{imagesArray}</div>
      <div className="mt-5 mb-5">
        <h2 className="color--secondary text-center">
          For more photos check my &nbsp;
          <a href="https://www.instagram.com/tgl_from_forest/">instagram 📸</a>
        </h2>
      </div>
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Gallery;
