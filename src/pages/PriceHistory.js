import HistoryChart from "../components/HistoryChart.js";
import HistoryTable from "../components/HistoryTable.js";
import CompanyInfo from "../components/CompanyInfo.js";
import useAPI from "../components/API";
import ErrorAlert from "../components/ErrorAlert.js";
import LoadingSymbol from "../components/LoadingSymbol.js";
import "../customcss.css";

import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

export default function PriceHistory() {
  const { symbol = "" } = useParams("");
  const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
  const priceHistoryURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=`;
  const { loading, data, error } = useAPI(priceHistoryURL, AA_API_KEY);

  if (symbol == "") {
    return (
      <ErrorAlert
        data={
          "You must select a company from the Stocks page to view its Price History!"
        }
      />
    );
  }

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
      <div className="StockHistry">
        <Row>
          <CompanyInfo data={symbol} />
        </Row>
        <Row id="marginTop">
          <HistoryTable
            data={data}
            alt="Table displaying company performance"
          />
        </Row>
        <Row>
          <Container>
            <HistoryChart
              data={data}
              alt="Chart displaying company performance"
            />
          </Container>
        </Row>
      </div>
    </Container>
  );
}
