import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bookImage from "../../assets/book.png";

function BookSummary() {
  return (
    <Row className="book-summary">
      <Col md={4}>
        <div className="book-summary__image">
          <img src={bookImage} alt="A love letter from the forest book"></img>
        </div>
      </Col>
      <Col md={6}>
        <div>
          <p>
            Telma G. Laurentino, Ph.D. is an evolutionary biologist who traveled across 5 continents studying biodiversity and adaptation.
            While learning, she keeps two logbooks: the field notebook to record all scientific data; and a love letter, a heart log, where deeper
            teachings are engraved as she learns from other species.
          </p>
          <p>
          <b>
            {" "}
            She now shares that love letter, from the forest, where science and spirit interlace 
            in a poetic journey of life as an eternal quest for wonder and belonging, with nature 
            as our most generous teacher. Memories, photography, poetry, and fable take us on a 
            multi-sensory walk through the wild woods, from which we emerge more connected to our surrounding evolutionary kin.
          </b>
          </p>
          <p>
            {" "}
            While her scientific research has been published in international peer-review journals since 2012, 
            this more intimate portrait of Telma's relationship with her surrounding ecosystems has remained private, until now. 
            Science ceases to be merely a language of separation and dissection and is reclaimed as a language of wonder and connection. 
            A personal account on healing the artificial divide between scientist and poet, human and non-human.
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
            href="https://www.amazon.com/love-letter-Forest-you-through/dp/194965219X"
            className="button-secondary"
          >
            Order Book
          </a> 
         <p>
         <a
           href="https://www.goodreads.com/book/show/121707535-a-love-letter-from-the-forest-to-you-through-me"
           className="button-secondary"
           style="margin-top: 10px;" <!-- Adjust the margin-top value as needed -->
         >
          Goodreads
          </a>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default BookSummary;
