import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Juancho from "../Assets/images/Juancho.png";
import "../pages/style.css";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={5}>
            <h2 className="headtext">
              Hello <span className="wave"> 🥳</span>
            </h2>
            <h2 className="nametext">Im Juan I. Solis</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/juanisolis1111");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/juanisolis/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
              <img src={Juancho} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
