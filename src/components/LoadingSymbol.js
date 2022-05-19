import ReactLoading from "react-loading";
import { Container, Row } from "react-bootstrap";
import "../customcss.css";

export default function LoadingSymbol() {
  return (
    <Container>
      <Row className="justify-content-sm-center" alt="Loading symbol">
        <ReactLoading
          type={"bars"}
          color={"#03fc4e"}
          height={100}
          width={100}
          id="LoadingSymbol"
        />
      </Row>
    </Container>
  );
}
