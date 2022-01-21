import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Teaser from "../Teaser/Teaser";
import { Row, Col } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";
import bannerimage from "../../assets/banner_hands.png";
import teasers from "../../data/research.js";

function Workshops() {
  const teasersArray = teasers.map((data) => (
    <Row key={data.id}>
      <Col md={12} className="team-card">
        <Teaser
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          imgPath={data.img}
          buttonTextFirst={data.button1}
          imageRight={data.pictureRight}
          linkFirst={data.link1}
        />
      </Col>
    </Row>
  ));
  return (
    <div className="research-section">
      <BannerImage
        title="Research"
        description="I wanted to understand biodiversity so... 
                      I’ve worked with a bunch of ToL branches but my core work has been done with fish and lizards, who I especially love.
                      Learn about my academic history and see my scientific peer-reviewed publications"
        imgPath={observingImage}
      />
      {teasersArray}
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Workshops;
