import React from "react";
import { Container, Row } from "react-bootstrap";

function Events() {
  return (
    <Container fluid className="events-section">
      <Container>
        <Row>
          <h2 className="events-heading">Eventos</h2>
          <p className="events-description">Descrição eventos..</p>
        </Row>
      </Container>
    </Container>
  );
}

export default Events;
