import React from "react";
import { Container, Row } from "react-bootstrap";

function Workshops() {
  return (
    <Container fluid className="workshops-section">
      <Container>
        <Row>
          {" "}
          <h2 className="workshops-heading">Workshops</h2>
          <p className="workshops-description">Descrição sobre workshops</p>
        </Row>
      </Container>
    </Container>
  );
}

export default Workshops;
