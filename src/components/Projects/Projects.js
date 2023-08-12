import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bacaalquran from "../../Assets/Projects/bacaalquran.png";
import kamihikouki from "../../Assets/Projects/kamihikouki.png";
import pokemon from "../../Assets/Projects/pokemon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bacaalquran}
              isBlog={false}
              title="Baca Alquran"
              description="Al-Quran versi web adalah bentuk digital dari kitab suci Islam yang dapat diakses melalui internet. Ini memungkinkan pengguna untuk membaca, mencari, dan mempelajari isi Al-Quran secara online, termasuk terjemahan, audio, dan fitur tambahan untuk pemahaman yang lebih baik."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kamihikouki}
              isBlog={false}
              title="Kamihikouki Airliness"
              description="Kamihikouki Airliness adalah sebuah website yang dibuat untuk mempermudah pengguna dalam mencari tiket pesawat yang sesuai dengan kriteria yang diinginkan. ini merupakan project akhir Frontend Javascript x Backend java di Binar Academy"
              ghLink="https://github.com/fahmi-azzuhri/Kamihikouki-fe"
              demoLink="https://kamihikouki.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokemon"
              description="Sebagai latihan reactjs dengan axios, saya membuat project pokemon"
              ghLink="https://github.com/fahmi-azzuhri/my-pokemon"
              demoLink="https://mypokemon-ten.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
