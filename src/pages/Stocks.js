import StockTable from "../components/StockTable";
import useAPI from "../components/API";
import ErrorAlert from "../components/ErrorAlert";
import LoadingSymbol from "../components/LoadingSymbol";
import "../customcss.css";

import { Container } from "react-bootstrap";

export default function Stocks() {
  const FMP_API_KEY = `e25ee6f07a20300466042dc2892848eb`;
  const stockURL = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=`;
  const { loading, data, error } = useAPI(stockURL, FMP_API_KEY);

  if (loading) {
    return (
      <div className="LoadingSymbol">
        <LoadingSymbol />;
      </div>
    );
  }

  if (error !== null) {
    return <ErrorAlert data={error} />;
  }

  return (
    <Container fluid className="vh-100" id="background">
      <div
        className="Stocks"
        alt="Table containing Naqsdaq 100 company performance"
      >
        <StockTable data={data} />
      </div>
    </Container>
  );
}
