import React, { useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
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
        description="Photography it is how I capture and hold without harming.
        Memories and details of the wonder & stories that cross my path, that I get to share with others."
        imgPath={observingImage}
        buttonTextFirst="Blog"
        linkFirst="blog"
        buttonTextSecond="Book"
        linkSecond="book"
      />
      <div className="masonry">{imagesArray}</div>
      <div className="mt-5 mb-5 text-center">
        <a
          href="https://www.instagram.com/tgl_from_forest/"
          className="font-size-medium"
        >
          More on instagram <i className="fab fa-instagram"></i>tgl_from_forest
        </a>
      </div>
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collaborations"
      />
    </div>
  );
}

export default Gallery;
