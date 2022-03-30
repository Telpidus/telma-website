import React, { useLayoutEffect } from "react";
import AboutDescription from "./AboutDescription";
import AboutTeaser from "./AboutTeaser";
import Banner from "../Banner/Banner";
import { Row, Col, Container } from "react-bootstrap";
import bannerimage from "../../assets/banner_contact_about.webp";
import treeOfLife from "../../assets/treeoflife_about.webp";
import "./about.scss";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="about">
      <Container className="about__container">
        <h2 className="about__title">Hi, I'm Telma!</h2>
        <Row>
          <Col lg={8} md={12}>
            <img src={treeOfLife} alt="Tree of Life Illustration" />
          </Col>
          <Col lg={4} md={12}>
            <AboutDescription />
          </Col>
        </Row>
        <AboutTeaser />
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

export default About;
