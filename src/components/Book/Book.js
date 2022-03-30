import React, { Fragment, useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import BookSummary from "./BookSummary";
import { Row, Col, Container } from "react-bootstrap";
import embodyingImage from "../../assets/Home/embodying.png";
import bannerimage from "../../assets/banner_contact_tree.webp";
import readers from "../../data/readers.js";
import "./book.scss";

function Book() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="book">
      <BannerImage
        title="Writtings"
        description={
          <Fragment>
            A love letter <strong>From the Forest</strong> to you, through me.
          </Fragment>
        }
        imgPath={embodyingImage}
      />
      <div className="bg-color-gray">
        <Container>
          <p className="py-5 mb-0 font-size-medium">
            “My chest was full because I was experiencing something that I was
            sure about, that I dedicated my life to studying, but never felt
            that deeply before: I was but one branch in the tree of life and
            connected to all others by ancestry. One might imagine that such a
            realization, when truly sensed, would make you feel tiny and
            insignificant, but no. My body and mind were filled by a new and
            unabashed sense of belonging.”
          </p>
        </Container>
      </div>
      <Container className="margin-top--large">
        <BookSummary />
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="margin-top--large mb-2 color--secondary text-center">
              Readers have said:
            </h2>
          </Col>
          <Carousel data={readers} />
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

export default Book;
