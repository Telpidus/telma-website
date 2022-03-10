import React, { useLayoutEffect } from "react";
import AboutDescription from "./AboutDescription";
import AboutTeaser from "./AboutTeaser";
import { Row, Col, Container } from "react-bootstrap";
import treeOfLife from "../../assets/treeoflife_about.webp";
import "./about.scss";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container className="about">
      <h2 className="about-title">Hi, I'm Telma!</h2>
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
  );
}

export default About;
