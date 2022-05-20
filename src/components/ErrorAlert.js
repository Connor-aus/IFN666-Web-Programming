import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function ErrorAlert(error) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="auto" id="skinny">
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Something went wrong</Alert.Heading>
              <br />
              <p>Error: {error.data}</p>
              <p>Please try refresh or navigate to another page.</p>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  return;
}
