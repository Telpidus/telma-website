import { Container, Row } from "react-bootstrap";
import React from "react";
import ContactsForm from "./Form";

function Contacts() {
  return (
    <Container fluid className="contacts-section">
      <Container>
        <Row>
          <h2 className="contacts-heading">Contatos</h2>
          <p className="contacts-description">
            Entra em contato connosco através do seguinte formulário ou
            encontra-nos nas redes sociais!
          </p>
        </Row>
        <Row>
          <ContactsForm />
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
