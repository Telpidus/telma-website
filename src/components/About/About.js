import React from "react";
import AboutDescription from "./AboutDescription";
import { Row, Col, Container } from "react-bootstrap";
import treeOfLife from "../../assets/treeoflife_about.webp";
import "./about.scss";

function About() {
  return (
    <Container className="about">
      <h2 className="about-title">Hi, I'm Telma!</h2>
      <Row>
        <Col md={8}>
          <img src={treeOfLife} alt="Tree of Life Illustration" />
        </Col>
        <Col md={4}>
          <AboutDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
