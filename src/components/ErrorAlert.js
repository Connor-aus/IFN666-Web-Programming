import { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function ErrorAlert(error) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Something went wront</Alert.Heading>
        <br />
        <p>Error: {error.data}</p>
        <p>Please try refresh or navigate to another page.</p>
      </Alert>
    );
  }
  return;
}
