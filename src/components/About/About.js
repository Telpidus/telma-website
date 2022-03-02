import React from "react";
import AboutDescription from "./AboutDescription";
import { Row, Col, Container } from "react-bootstrap";
import treeOfLife from "../../assets/ToL_about.webp";
import "./about.scss";

function About() {
  return (
    <Container className="about">
      <h2 className="about-title">Hi, I'm Telma!</h2>
      <Row>
        <Col md={8}>
          <figure>
            <img src={treeOfLife} alt="Tree of Life Illustration" />
            <figcaption>
              Tree of life built with the students from the Hellen Keller
              inclusive school
            </figcaption>
          </figure>
        </Col>
        <Col md={4}>
          <AboutDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
