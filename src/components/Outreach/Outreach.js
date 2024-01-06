import React, { Fragment, useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import BlogCard from "../Blog/BlogCard";
import BoxCard from "../Card/BoxCard/BoxCard";
import articles from "../../data/articles";
import mediaContent from "../../data/media";
import { Row, Col, Container } from "react-bootstrap";
import translatingImage from "../../assets/Home/translating.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import telmaResume from "../../assets/telma_laurentino_CV.pdf";
import "./outreach.scss";

const mediaArray = mediaContent.map((item) => (
  <Col lg={4} md={6} sm={12} key={item.id} className="mb-5">
    <BoxCard
      url={item.url}
      title={item.title}
      description={item.description}
      icon={item.icon}
      alt={item.alt}
    />
  </Col>
));

const articlesArray = articles.map((article) => (
  <Col lg={4} md={6} sm={12} key={article.id} className="mb-5">
    <BlogCard
      imgPath={article.image}
      link={article.url}
      title={article.title}
      description={article.description}
      alt={article.alt}
    />
  </Col>
));

function Outreach() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="outreach-section">
      <BannerImage
        title="Outreach"
        description={
          <Fragment>
            <span className="color--quarternary d-block">
              Science turned to wonder and belonging, for all!
            </span>{" "}
            <br />
          Biodiversity is the greatest teacher of multisensory and complex ways of being. The wonder we feel when 
          learning the diversity of life on our planet, how it evolves, and how we're connected to it all through common 
          ancestry is a beautiful and powerful source of inspiration for sustainability and inclusion. 
          <br />  
          I break silos that keep scientific knowledge away from the public, so that data can be transformed into diverse communities.
          </Fragment>
        }
        imgPath={translatingImage}
        anchor="#articles"
        anchorLabel="Articles"
        downloadText="Download CV"
        pdf={telmaResume}
        pdfName="telma_laurentino_CV.pdf"
      />
      <div className="bg-color-gray pt-5 pb-5">
        <Container>
          <div className="col-md-12 text-center ">
            <h2 className="mb-2 color--secondary">evALLution</h2>
            <h5 className="color--quarternary mb-5">
              translating evolution into touch
            </h5>
          </div>
          <YoutubeEmbed embedId="4o3JLsXH12w?t=10" />
        </Container>

        <div className="text-center ">
          <p className="container mt-5">
            Check out more videos on{" "}
            <a
              className="fw-bold"
              href="https://www.youtube.com/channel/UC-TIlTueriYu7uhmFKI4uGw"
            >
              Youtube
            </a>
            , all with accessible descriptions for people with blindness.
          </p>
          <p>
            Know more about the project through our{" "}
            <a
              className="fw-bold"
              href="https://evolution-outreach.biomedcentral.com/articles/10.1186/s12052-021-00143-1"
            >
              article
            </a>{" "}
            with supplementary accessible descriptions of all data and figures.
          </p>
        </div>
      </div>
      <Container>
        <Row id="articles">
          <h2 className="margin-top--large mb-2 color--secondary">
            Science for ALL
          </h2>
          <h5 className="color--quarternary mb-5">
            outreach articles I wrote for the general public
          </h5>
        </Row>
        <Row>{articlesArray}</Row>
        <Row>
          <h2 className="margin-top--large mb-2 color--secondary">
            Media Features
          </h2>
          <h5 className="color--quarternary mb-5">
            articles written about my work
          </h5>
        </Row>
        <Row className="mb-5">{mediaArray}</Row>
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

export default Outreach;
