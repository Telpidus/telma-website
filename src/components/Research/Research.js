import React from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Teaser from "../Teaser/Teaser";
import BasicCard from "../Card/BasicCard";
import SimpleCard from "../Card/SimpleCard";
import { Row, Col, Container } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import teasers from "../../data/research.js";
import publications from "../../data/publications";
import collaborations from "../../data/collaborations";

function Workshops() {
  const teasersArray = teasers.map((data) => (
    <Row>
      <Col md={12}>
        <Teaser
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          imgPath={data.img}
          imageRight={data.pictureRight}
          linkFirst={data.link1}
          url={data.url}
          key={data.id}
        />
      </Col>
    </Row>
  ));

  const publicationsArray = publications.map((data) => (
    <Row>
      <Col md={10} sm={12} className="mb-4">
        <BasicCard
          title={data.title}
          url={data.url}
          author={data.authors}
          date={data.date}
          key={data.id}
          subtitle1={data.outreachDescription1}
          subtitle2={data.outreachDescription2}
          link1={data.outreachLink1}
          link2={data.outreachLink2}
        />
      </Col>
    </Row>
  ));

  const collaborationsArray = collaborations.map((data) => (
    <Row>
      <Col md={10} sm={12} className="mb-4">
        <SimpleCard
          title={data.title}
          url={data.url}
          author={data.authors}
          date={data.date}
          key={data.id}
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
      <Container>
        {teasersArray}
        <Row className="mt-5">
          <div className="col-md-12">
            <h3>Scientific publications</h3>
            <h4>First authorships</h4>
          </div>
        </Row>
        {publicationsArray}
        <Row className="mt-5">
          <div className="col-md-12">
            <h4>Collaborations</h4>
          </div>
        </Row>
        {collaborationsArray}
      </Container>

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
