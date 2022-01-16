import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TeamCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          Link
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TeamCard;
