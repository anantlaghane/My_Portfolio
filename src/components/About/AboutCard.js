import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anant Laghane </span>
            from <span className="purple"> Pune, Maharashtra.</span>
            <br />
            I am currently Freshers as a software developer.
            <br />
            I have completed Integrated (MCA) in Master Of Computer Application at MGM's Jawaharlal Nehru Enginerring College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cocking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
