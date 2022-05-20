import ReactLoading from "react-loading";
import { Container, Row, Col } from "react-bootstrap";
import "../customcss.css";

export default function LoadingSymbol() {
  return (
    <Container alt="Loading symbol">
      <Row className="justify-content-md-center">
        <Col sm="auto" id="skinny">
          <ReactLoading
            type={"bars"}
            color={"#03fc4e"}
            height={100}
            width={100}
            id="LoadingSymbol"
          />
        </Col>
      </Row>
    </Container>
  );
}
