import ErrorAlert from "../components/ErrorAlert";
import "../customcss.css";

import { Container } from "react-bootstrap";

export default function ErrorPage() {
  const error = "This page was not found!";

  return (
    <Container fluid className="vh-100" id="background">
      <ErrorAlert data={error} alt="Page not found" />;
    </Container>
  );
}
