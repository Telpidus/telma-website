import React from "react";
import BannerImage from "../Banner/BannerImage";
import { Container } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";

function Gallery() {
  return (
    <Container fluid className="research-section">
      <BannerImage
        title="Witnessing biodiversity"
        description="capture life with my camera inspires my scientific work.
        Also get to share the moments that inspired my writtings  "
        imgPath={observingImage}
      />
    </Container>
  );
}

export default Gallery;
