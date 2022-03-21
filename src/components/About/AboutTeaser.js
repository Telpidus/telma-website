import React from "react";
import { Row, Col } from "react-bootstrap";
import researcher from "../../assets/observing.png";
import translating from "../../assets/Home/translating.png";
import writter from "../../assets/writter.png";

function AboutTeaser() {
  return (
    <Row className="margin-top--large pb-5">
      <Col lg={4} md={12} className="text-center">
        <div className="about-teaser__image">
          <img src={researcher} alt="Tree of Life Illustration" />
        </div>
        <h3 className="color--quarternary fw-bold">Researcher</h3>
      </Col>
      <Col lg={4} md={12} className="text-center">
        <div className="about-teaser__image">
          <img src={translating} alt="Tree of Life Illustration" />
        </div>

        <h3 className="color--quarternary fw-bold">Educator</h3>
      </Col>
      <Col lg={4} md={12} className="text-center">
        <div className="about-teaser__image">
          <img
            src={writter}
            alt="Tree of Life Illustration"
            width="355"
            height="345"
          />
        </div>

        <h3 className="color--quarternary fw-bold">Writter</h3>
      </Col>
    </Row>
  );
}

export default AboutTeaser;
