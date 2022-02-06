import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

const data = [
  {
    caption: "Caption",
    description: "Description Here",
  },
  {
    caption: "Caption",
    description: "Description Here",
  },
  {
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
