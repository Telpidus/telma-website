import React, { Fragment } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import bannerimage from "../../assets/banner_contact_lizard.webp";
import BlogContent from "./BlogContent";
import { Container } from "react-bootstrap";

import embodyingImage from "../../assets/Home/embodying.png";

function Blog() {
  return (
    <div className="book-section">
      <BannerImage
        title="Writtings"
        description={
          <Fragment>
            <span>
              Follow the thoughts and news from this branch of the Tree of Life
            </span>{" "}
            <br />
            My wonder for the evolution of the outside world reflects inwards in
            the branching pattern of my personal growth. Belonging in the
            tree-of-life, for me, means that I search for non-duality and
            interbeing, with nature as my biggest teacher, and I love to write
            about this!
          </Fragment>
        }
        imgPath={embodyingImage}
      />
      <Container>{BlogContent()}</Container>
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collaborations"
      />
    </div>
  );
}

export default Blog;
