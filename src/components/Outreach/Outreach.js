import React, { useLayoutEffect } from "react";
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
  <Col lg={4} md={6} sm={12} key={item.id}>
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
  <Col lg={4} md={6} sm={12} key={article.id}>
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
        description="I want everyone to be able to learn about the evolution of life on our planet! "
        imgPath={translatingImage}
        anchor="#articles"
        anchorLabel="Articles"
        downloadText="Download CV"
        pdf={telmaResume}
        pdfName="telma_laurentino_CV.pdf"
      />
      <Container>
        <YoutubeEmbed embedId="4o3JLsXH12w?t=10" />
        <Row id="articles">
          <h3>Science for ALL</h3>
        </Row>
        <Row>{articlesArray}</Row>
        <Row>
          <h3>Media Features</h3>
        </Row>
        <Row>{mediaArray}</Row>
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

export default Outreach;
