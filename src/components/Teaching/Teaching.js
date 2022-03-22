import React, { useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import TeachingDescription from "./TeachingDescription";
import TeachingTrees from "./TeachingTrees";
import { Row, Col, Container } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="margin-top--large mb-5 color--secondary text-center">
              Teaching and Inspiring
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <TeachingDescription />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2 className="margin-top--large mb-5 color--secondary text-center">
              My two favorite trees to teach & learn about
            </h2>
          </Col>
        </Row>
        <TeachingTrees />
        <Row className="justify-content-center mb-5">
          <Col md={12}>
            <h2 className="margin-top--large mb-2 color--secondary text-center">
              Students have said:
            </h2>
          </Col>
          <Carousel data={students} />
        </Row>
      </Container>

      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collaborations"
      />
    </div>
  );
}

export default Teaching;
