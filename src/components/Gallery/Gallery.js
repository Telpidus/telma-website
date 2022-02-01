import React from "react";
import BannerImage from "../Banner/BannerImage";
import observingImage from "../../assets/Home/observing.png";
import photos from "../../data/gallery";
import "./gallery.scss";

function Gallery() {
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
      />
      <div className="masonry">{imagesArray}</div>
    </div>
  );
}

export default Gallery;
