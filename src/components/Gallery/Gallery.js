import React from "react";
import BannerImage from "../Banner/BannerImage";
import observingImage from "../../assets/Home/observing.png";

function Gallery() {
  return (
    <div className="gallery-section">
      <BannerImage
        title="Witnessing biodiversity"
        description="capture life with my camera inspires my scientific work.
        Also get to share the moments that inspired my writtings  "
        imgPath={observingImage}
      />
    </div>
  );
}

export default Gallery;
