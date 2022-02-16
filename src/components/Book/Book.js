import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import embodyingImage from "../../assets/Home/embodying.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import readers from "../../data/readers.js";

function Book() {
  return (
    <div className="book-section">
      <BannerImage
        title="BOOKS"
        description="A love letter From the Forest to you, through me"
        imgPath={embodyingImage}
      />
      <Carousel data={readers} />
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Book;
