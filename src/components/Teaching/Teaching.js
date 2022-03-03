import React, { useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import TeachingDescription from "./TeachingDescription";
import TeachingTrees from "./TeachingTrees";
import { Row, Col } from "react-bootstrap";
import translatingImage from "../../assets/Home/translating.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import students from "../../data/students.js";
import "./teaching.scss";

function Teaching() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="teaching-section">
      <BannerImage
        title="Teacher of trees"
        description="I want everyone to be able to learn about the evolution of life on our planet! "
        imgPath={translatingImage}
      />
      <Row className="justify-content-center">
        <Col md={10}>
          <TeachingDescription />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3 className="text-center">
            My two favorite trees to teach & learn about
          </h3>
        </Col>
      </Row>
      <TeachingTrees />
      <Carousel data={students} />
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
