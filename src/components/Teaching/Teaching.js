import React, { Fragment, useLayoutEffect } from "react";
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
import telmaResume from "../../assets/telma_laurentino_CV.pdf";

function Teaching() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="teaching-section">
      <BannerImage
        title="Teaching evolution"
        description={
          <Fragment>
            <span className="color--quarternary d-block">
          <b>
              Science in service of Society & Ecosystem!
          </b>
            </span>{" "}
            <br />
            I dream of creative, culturally-responsive and multidisciplinary education spaces 
            where rigorous scientific practices interlace with phylosophy and arts to co-create something more 
            useful and regenerative than the summ of different disciplines taught in isolation. 
            <br />
            Sometimes, this comes true in my classes!
          </Fragment>
        }
        imgPath={translatingImage}
        downloadText="Download CV"
        pdf={telmaResume}
        pdfName="telma_laurentino_CV.pdf"
      />
      <div className="bg-color-gray pt-5 pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="margin-top--large mb-5 color--secondary text-center">
                Teaching & Inspiring Evolution
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <TeachingDescription />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="margin-top--large mb-5 color--secondary text-center">
              Evolutionary Biology data in service of Systemic Education
            </h2>
          </Col>
        </Row>
        <TeachingTrees />
        <Row className="justify-content-center mb-5">
          <Col md={12}>
            <h2 className="margin-top--large mb-2 color--secondary text-center">
              Students & Colleagues have said:
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
