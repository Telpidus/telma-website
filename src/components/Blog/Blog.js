import React, { Fragment } from "react";
import BannerImage from "../Banner/BannerImage";
import BlogContent from "./BlogContent";
import { Container, Row } from "react-bootstrap";

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
    </div>
  );
}

export default Blog;
