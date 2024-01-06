import React, { useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Teaser from "../Teaser/Teaser";
import BasicCard from "../Card/BasicCard";
import SimpleCard from "../Card/SimpleCard";
import Etics from "./Etics";
import { Row, Col, Container } from "react-bootstrap";
import observingImage from "../../assets/Home/observing.png";
import bannerimage from "../../assets/banner_contact_lizard.webp";
import teasers from "../../data/research.js";
import publications from "../../data/publications";
import collaborations from "../../data/collaborations";
import telmaResume from "../../assets/telma_laurentino_CV.pdf";

const teasersArray = teasers.map((data) => (
  <Col md={12} key={data.id}>
    <Teaser
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      imgPath={data.img}
      imageRight={data.pictureRight}
      linkFirst={data.link1}
      url={data.url}
    />
  </Col>
));

const publicationsArray = publications.map((data) => (
  <Col md={10} sm={12} className="mb-4" key={data.id}>
    <BasicCard
      title={data.title}
      url={data.url}
      author={data.authors}
      date={data.date}
      subtitle1={data.outreachDescription1}
      subtitle2={data.outreachDescription2}
      link1={data.outreachLink1}
      link2={data.outreachLink2}
    />
  </Col>
));

const collaborationsArray = collaborations.map((data) => (
  <Col md={6} sm={12} className="mb-4" key={data.id}>
    <SimpleCard
      title={data.title}
      url={data.url}
      author={data.authors}
      date={data.date}
    />
  </Col>
));

function Workshops() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="research-section">
      <BannerImage
        title="Research"
        description="I was always curious about how biodiversity evolves and how species are in relationship with their 
          communities & ecosystems. Lizards and fish have been some of my main teachers of the genomic details of evolution
          that unravel complex systemic overviews."
        imgPath={observingImage}
        anchor="#publications"
        anchorLabel="Publications"
        downloadText="Download CV"
        pdf={telmaResume}
        pdfName="telma_laurentino_CV.pdf"
      />
      {teasersArray}
      <Container>
        <Row id="publications" className="margin-top--large">
          <div className="col-md-12">
            <h2 className="color--secondary">Scientific publications</h2>
            <h3 className="mt-5 mb-4">First authorships</h3>
          </div>
        </Row>
        {publicationsArray}
        <Row>
          <div className="col-md-12">
            <h3 className="mt-5 mb-4">Collaborations</h3>
          </div>
        </Row>
        <Row>{collaborationsArray}</Row>
        <Row className="mb-5">
          <div className="col-md-12">
            <h2 className="color--secondary margin-top--large">
              Publication ethics
            </h2>
            <Etics />
          </div>
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

export default Workshops;
