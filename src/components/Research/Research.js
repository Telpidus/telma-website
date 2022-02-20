import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Teaser from "../Teaser/Teaser";
import BasicCard from "../Card/BasicCard";
import { Row, Col } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import teasers from "../../data/research.js";

function Workshops() {
  const teasersArray = teasers.map((data) => (
    <Row key={data.id}>
      <Col md={12}>
        <Teaser
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          imgPath={data.img}
          imageRight={data.pictureRight}
          linkFirst={data.link1}
          url={data.url}
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
      <Row className="justify-content-md-center">
        <div className="col-md-8">
          <h3>First authorships</h3>
          <BasicCard />
        </div>
      </Row>
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
