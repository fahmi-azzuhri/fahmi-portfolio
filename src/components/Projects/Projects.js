import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bacaalquran from "../../Assets/Projects/bacaalquran.png";
import kamihikouki from "../../Assets/Projects/kamihikouki.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import pluit from "../../Assets/Projects/pluit-sakti.png";
import micommerce from "../../Assets/Projects/micommerce.png";

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
              ghLink="https://github.com/fahmi-azzuhri/baca-alquran"
              demoLink="https://bacaalquran.vercel.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pluit}
              isBlog={false}
              title="Pluit Sakti"
              description="Tes untuk Frontend Web Dev di salah satu perusahaan, saya slicing website Pluit Sakti yang ada di figma menggunakan vite.js dan API MovieDB untuk di consume. masih ada beberapa kekurangan seperti search belum berfungsi dan belum responsif"
              ghLink="https://github.com/fahmi-azzuhri/fe-test"
              demoLink="https://pluitsakti.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micommerce}
              isBlog={false}
              title="Micommerce"
              description="
              Membangun platform e-commerce dengan menggunakan API dari FakestoreAPI untuk mengambil informasi produk dan menampilkannya di situs web. Proyek ini dikembangkan menggunakan Vite.js dan Tailwind CSS."
              ghLink="https://github.com/fahmi-azzuhri/micommerce"
              demoLink="https://micommerce.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
