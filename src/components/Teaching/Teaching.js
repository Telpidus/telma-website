import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import translatingImage from "../../assets/Home/translating.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import "./teaching.scss";

function Teaching() {
  return (
    <div className="teaching-section">
      <BannerImage
        title="Teacher of trees"
        description="I want everyone to be able to learn about the evolution of life on our planet! "
        imgPath={translatingImage}
      />
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Teaching;
