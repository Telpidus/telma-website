import React from "react";
import { Container } from "react-bootstrap";
import kofi from "../../assets/kofi.png";
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
          <a
            href="https://twitter.com/TelmaLaurentino"
            style={{ color: "white" }}
          >
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
            href="https://telmaglaurentino.substack.com/"
            style={{ color: "white" }}
          >
            <i className="fa-solid fa-feather"></i>
          </a>
        </li>
      </ul>
      <a href="https://ko-fi.com/telmagl" target="_blank" rel="noreferrer">
        <img src={kofi} alt="Kofi button" />
      </a>
    </Container>
  );
}

export default Footer;
