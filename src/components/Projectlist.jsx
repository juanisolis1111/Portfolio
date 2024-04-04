import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import adoptable from "../Assets/images/adoptable.png";
import doggoadventures from "../Assets/images/doggo-adventures.png";
import hungryhub from "../Assets/images/hungry-hub.jpg";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adoptable}
                isBlog={false}
                title="Adoptable"
                description="A pet adoption website that makes the process of registering and adopting a pet a lot easier. Created using MongoDB, Express.js, React, Node.js and Material UI"
                ghLink="https://samanta-scavassa.github.io/adoptable/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={doggoadventures}
                isBlog={false}
                title="Doggo-Adventures"
                description="A snake-like game where the player goes around the stage rescuing stray dogs from the street. 
Created using JavaScript, CSS, and HTML5"
                ghLink="https://juanisolis1111.github.io/Doggo-Adventures/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hungryhub}
                isBlog={false}
                title="Hungry-Hub"
                description="A food delivery fullstack website created using MongoDB, Express.js, React, Node.js and Material UI."
                ghLink="https://samanta-scavassa.github.io/hungry-hub/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
