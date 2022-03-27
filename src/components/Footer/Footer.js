import React from "react";
import { Container } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div>
        <h5>Copyright © {year} Telma G. Laurentino</h5>
      </div>

      <ul className="footer-icons">
        <li className="social-icons">
          <a href="https://twitter.com/" style={{ color: "white" }}>
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/tgl_from_forest/"
            style={{ color: "white" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://medium.com/@telma.laurentino"
            style={{ color: "white" }}
          >
            <i className="fab fa-medium"></i>
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
