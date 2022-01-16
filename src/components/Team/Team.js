import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Team.scss";
import TeamCard from "./TeamCard";
import teamMembers from "../../data/team.js";

function Team() {
  const teamArray = teamMembers.map((data) => (
    <Col md={4} className="team-card" key={data.id}>
      <TeamCard
        imgPath={data.img}
        isAdmin={data.admin}
        title={data.name}
        description={data.description}
        link={data.url}
        id={data.id}
      />
    </Col>
  ));

  return (
    <Container fluid className="team-section">
      <Container>
        <Row>
          <h2 className="team-heading">Team</h2>
          <p className="team-description">Conhece a Equipa!</p>
        </Row>
        <Row>{teamArray}</Row>
      </Container>
    </Container>
  );
}

export default Team;
