import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../pages/style.css";
import styled from "styled-components";

const StyledButton = styled(Button)``;
const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImg = styled(Card.Img)`
  height: 350px;
  object-fit: cover;
`;

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <StyledImg variant="top" src={props.imgPath} alt="card-img" />
      <StyledCardBody>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <StyledButton
          className="viewbtn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          View
        </StyledButton>

        {!props.isBlog && props.demoLink && (
          <StyledButton
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"Demo"}
          </StyledButton>
        )}
      </StyledCardBody>
    </Card>
  );
}
export default ProjectCard;
