import React, { Fragment, useLayoutEffect } from "react";
import BannerImage from "../Banner/BannerImage";
import Banner from "../Banner/Banner";
import bannerimage from "../../assets/banner_tinysnake.webp";
import BlogContent from "./BlogContent";
import { Container } from "react-bootstrap";

import embodyingImage from "../../assets/Home/embodying.png";

function Blog() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="book-section">
      <BannerImage
        title="I N T E R L A C I N G S"
        description={
          <Fragment>
            <span className="color--quarternary d-block">
              I find great curiosity, awe & discomfort in weaving through the epistemologies that underlie systemic socio-ecological issues. Writing helps me process. 
            </span>{" "}
            <br />
            I have no solution nor crave absolutisms, but I hold multitudes of baskets overflowing with interlaced questions and 
            uncertainties that want to be voiced and moved through in multisensory community. 
            In a deeply rooted intuition that our common ancestry with all life on earth is a 
            r*evolution*ary guide towards sustainable and just systemic change.
          </Fragment>
        }
        imgPath={embodyingImage}
      />

      <div className="bg-color-gray pt-5">
        <Container>
          <h2 className="color--secondary mb-4">latest musings</h2>
          {BlogContent()}
        </Container>
      </div>

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
