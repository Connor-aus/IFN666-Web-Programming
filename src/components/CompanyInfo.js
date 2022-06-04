import useAPI from "./API";
import ErrorAlert from "./ErrorAlert";

import { Container, Row, Col } from "react-bootstrap";

export default function CompanyInfo(symbol) {
  const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
  const industryInfoURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol.data}&apikey=`;
  const { loading, data, error } = useAPI(industryInfoURL, AA_API_KEY);

  if (loading) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="auto" id="skinny">
            <p>Loading Company Info...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error !== null) {
    return <ErrorAlert data={"API failed to retrieve data"} />;
  }

  return (
    <div className="CompanyInfo">
      <div className="container">
        <h1>Description</h1>
        <p>Industry: {data.Sector}</p>
        <p>{data.Description}</p>
      </div>
    </div>
  );
}
