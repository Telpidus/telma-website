import React from "react";
import { Row, Col } from "react-bootstrap";
import phylogeneticTree from "../../assets/phylogenetic-tree.png";
import worldviewTree from "../../assets/worldview-tree.png";

import "./teaching.scss";

function TeachingTrees() {
  return (
    <div className="teaching-trees">
      <Row>
        <Col md={5} sm={12}>
          <div className="teaching-trees__content">
            <img src={phylogeneticTree} alt="Phylogenetic Tree" />
            <h5>The Phylogenetic tree of life</h5>
            <h5>based on genomic data</h5>
          </div>
        </Col>
        <Col md={2} sm={12}>
          <div className="teaching-trees__separator">
            <h5>&</h5>
          </div>
        </Col>
        <Col md={5} sm={12}>
          <div className="teaching-trees__content">
            <img src={worldviewTree} alt="World View Tree" />
            <h5>The Worldview tree of life</h5>
            <h5>based on our evolution</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TeachingTrees;
