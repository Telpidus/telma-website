import React from "react";
import { Row, Col } from "react-bootstrap";
import phylogeneticTree from "../../assets/phylogenetic-tree.png";
import worldviewTree from "../../assets/worldview-tree.png";

import "./teaching.scss";

function TeachingTrees() {
  return (
    <Row className="teaching-trees justify-content-center">
      <Col xl={5} md={5} sm={12}>
        <div className="teaching-trees__content">
          <img
            src={phylogeneticTree}
            alt="Phylogenetic Tree"
            className="teaching-trees__img"
          />
          <h4 className="mt-4">The Phylogenetic tree of life</h4>
          <h5 className="color--quarternary">based on genomic data</h5>
        </div>
      </Col>
      <Col xl={2} md={2} sm={12}>
        <div className="teaching-trees__separator">
          <h5>&</h5>
        </div>
      </Col>
      <Col xl={5} md={5} sm={12}>
        <div className="teaching-trees__content">
          <img
            src={worldviewTree}
            alt="World View Tree"
            className="teaching-trees__img"
          />
          <h4 className="mt-4">The Worldview tree of life</h4>
          <h5 className="color--quarternary">based on our evolution</h5>
        </div>
      </Col>
    </Row>
  );
}

export default TeachingTrees;
