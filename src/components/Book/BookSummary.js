import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bookImage from "../../assets/book.png";

function BookSummary() {
  return (
    <Row className="book-summary">
      <Col md={4}>
        <div>
          <img src={bookImage} alt="A love letter from the forest book"></img>
        </div>
      </Col>
      <Col md={6}>
        <div>
          <p>
            Telma G. Laurentino embodies the voices and poems of the forest and
            shares how these moments changed her and inspired her deep and
            irreversible love for the Earth.
          </p>
          <p>
            {" "}
            She takes us on a multisensory journey along the tree of life,
            across 5 continents. Through joy and heartbreak, alone or in
            community, she listens deeply to the forest, to her evolutionary
            kin, who seem to always hold the answers that nourish healing,
            growth and grounding.
          </p>
          <p>
            {" "}
            In this love letter from the forest, science and spirit, prose and
            poem, interlace in a deep testimony of life as an eternal journey to
            find oneself, to find purpose, wonder and belonging, with nature as
            our most generous and loving teacher.
          </p>

          <p>
            Check the{" "}
            <Link to="/gallery">
              <b>Gallery</b>
            </Link>{" "}
            &nbsp;for photos and descriptions of moments that have inspired the
            book!
          </p>

          <a
            href="https://www.bookdepository.com/"
            className="button-secondary"
          >
            Order Book
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default BookSummary;
