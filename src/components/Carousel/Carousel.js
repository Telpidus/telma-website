import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

function HomeCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselArray = props.data.map((slide, i) => (
    <Carousel.Item key={slide.id}>
      <Carousel.Caption>
        <div className="carousel-description mb-4">
          <i>"{slide.description}"</i>
        </div>
        <div>
          <small>{slide.name}</small>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      {carouselArray}
    </Carousel>
  );
}
export default HomeCarousel;
