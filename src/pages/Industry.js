import IndustryTable from "../components/IndustryTable";
import useAPI from "../components/API";
import ErrorAlert from "../components/ErrorAlert";
import LoadingSymbol from "../components/LoadingSymbol";
import "../customcss.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

export default function Industry() {
  const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
  const industryURL = `https://www.alphavantage.co/query?function=SECTOR&apikey=&apikey=`;
  const { loading, data, error } = useAPI(industryURL, AA_API_KEY);

  if (loading) {
    return (
      <div className="LoadingSymbol">
        <LoadingSymbol />;
      </div>
    );
  }

  if (error !== null) {
    return <ErrorAlert data={"API failed to retrieve data"} />;
  }

  return (
    <Container fluid className="vh-100" id="background">
      <div
        className="Industry"
        alt="Table displaying industry performance data"
      >
        <IndustryTable data={data} />
      </div>
      <Row></Row>
    </Container>
  );
}
