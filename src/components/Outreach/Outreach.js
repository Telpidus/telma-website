import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import translatingImage from "../../assets/Home/translating.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import "./outreach.scss";

function Outreach() {
  return (
    <div className="outreach-section">
      <BannerImage
        title="Outreach"
        description="I want everyone to be able to learn about the evolution of life on our planet! "
        imgPath={translatingImage}
      />
      <YoutubeEmbed embedId="4o3JLsXH12w?t=10" />

      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Outreach;
