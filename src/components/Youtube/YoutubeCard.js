import React from "react";
import Card from "react-bootstrap/Card";

function YoutubeCard(props) {
  return (
    <a
      className="youtube-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      id={props.id}
    >
      <Card className="youtube-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          className="blog-img"
          width={props.width}
          height={props.height}
        />
        <Card.Footer>
          {props.title}

          <p>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default YoutubeCard;
