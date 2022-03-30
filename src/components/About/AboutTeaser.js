import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import researcher from "../../assets/observing.png";
import translating from "../../assets/Home/translating.png";
import writter from "../../assets/writter.png";

const data = [
  {
    id: 1,
    title: "Researcher",
    image: researcher,
    alt: "Head with Tree of Life Illustration",
    link: "/research",
  },
  {
    id: 2,
    title: "Educator",
    image: translating,
    alt: "Tree of Life Illustration",
    link: "/outreach",
  },
  {
    id: 3,
    title: "Writter",
    image: writter,
    alt: "Feet with Tree of Life Illustration",
    link: "/book",
  },
];

const aboutArray = data.map((item) => (
  <Col lg={4} md={12} className="text-center" key={item.id}>
    <div className="about-teaser__image">
      <img src={item.image} alt={item.alt} />
    </div>
    <Link className="teaser__link" to={item.link}>
      <h3 className="fw-bold">{item.title}</h3>
    </Link>
  </Col>
));

function AboutTeaser() {
  return <Row className="margin-top--large pb-5">{aboutArray}</Row>;
}

export default AboutTeaser;
