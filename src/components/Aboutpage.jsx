import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../Assets/AboutImage.png";

import "../pages/style.css";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a Costa Rican graduate of Ironhack's Web Development Bootcamp,
              equipped with expertise in both front-end and back-end
              technologies. Proficient in HTML, CSS, JavaScript, React.js,
              Node.js, and Express.js, I specialize in crafting sleek interfaces
              and scalable server-side solutions. With a collaborative spirit
              and a knack for problem-solving, I'm ready to contribute
              effectively to any development team.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={100}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage">
              <img src={AboutImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
