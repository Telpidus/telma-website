import React, { useLayoutEffect } from "react";
import Teaser from "../Teaser/Teaser";
import BannerHome from "../Banner/BannerHome";
import Banner from "../Banner/Banner";
import home from "../../data/home.js";
import Telma from "../../assets/Home/telma_laurentino.png";
import bannerimage from "../../assets/banner_contact_hands.webp";
import "./home.scss";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const teasersArray = home.map((data) => (
    <div key={data.id}>
      <Teaser
        title={data.title}
        description={data.description}
        imgPath={data.img}
        buttonTextFirst={data.button1}
        buttonTextSecond={data.button2}
        imageRight={data.pictureRight}
        linkFirst={data.link1}
        linkSecond={data.link2}
      />
    </div>
  ));
  return (
    <div>
      <BannerHome
        buttonLabel="More About me"
        title="Telma G. Laurentino"
        subTitle="Evolutionary Biologist
        Teacher of trees"
        imgPath={Telma}
        link="about"
      />
      {teasersArray}
      <Banner
        backgroundImage={bannerimage}
        buttonLabel="Email me"
        title="Let’s connect!"
        text="For work enquiries and creative collabrations"
      />
    </div>
  );
}

export default Home;
