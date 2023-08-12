import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Fahmi Azzuhri Efki </span>
            from <span className="purple"> Bekasi, Indonesia.</span>
            <br /> graduated from bina sarana informatika university majoring in
            information systems. have experience as a Frontend Web Developer for
            six months at Binar Academy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Ora ngoding ora smile!" </p>
          <footer className="blockquote-footer">Fahmi Azzuhri Efki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
