import React from "react";
import { Row, Col } from "react-bootstrap";
import researcher from "../../assets/observing.png";
import translating from "../../assets/Home/translating.png";
import writter from "../../assets/writter.png";

function AboutTeaser() {
  return (
    <Row>
      <Col lg={4} md={12} className="text-center">
        <img src={researcher} alt="Tree of Life Illustration" />
        <h5>Researcher</h5>
      </Col>
      <Col lg={4} md={12} className="text-center">
        <img src={translating} alt="Tree of Life Illustration" />
        <h5>Educator</h5>
      </Col>
      <Col lg={4} md={12} className="text-center">
        <img src={writter} alt="Tree of Life Illustration" />
        <h5>Writter</h5>
      </Col>
    </Row>
  );
}

export default AboutTeaser;
