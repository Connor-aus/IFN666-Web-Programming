import StockTable from "../components/StockTable";
import useAPI from "../components/API";
import ErrorAlert from "../components/ErrorAlert";
import "../customcss.css";
import LoadingSymbol from "../components/LoadingSymbol";

import { Container } from "react-bootstrap";

// FMP API https://site.financialmodelingprep.com/developer
// API key https://site.financialmodelingprep.com/register
// documentation https://site.financialmodelingprep.com/developer/docs
// list NASDAQ 100 (https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=XXXXXXXXXXXXXXX)
// Company symbols  https://site.financialmodelingprep.com/developer/docs#Symbols-List
// Company symbols endpoint https://financialmodelingprep.com/api/v3/stock/list?apikey=YOUR_API_KEY
// Alpha API  https://www.alphavantage.co/
// Alpha key https://www.alphavantage.co/support/#api-key
// Alpha docs https://www.alphavantage.co/documentation/
// time series delay enpoint (https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=xxxxxx)
// Alpha search SECTOR performance https://www.alphavantage.co/query?function=SECTOR&apikey=xxxxxxxxxxxxxxxxx
// Alpha search by symbols https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ASX&apikey=xxxx
// Alpha search by industry https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=xxxx
// Alpha search for daily trading data https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=xxxx
// Alpha search history https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo

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
    <Container>
      <div className="Stocks" Alt text>
        <StockTable data={data} />
      </div>
    </Container>
  );
}

const companyData = [
  {
    symbol: "ATVI",
    name: "Activision Blizzard",
    sector: "Communication Services",
    subSector: "Communication Services",
    headQuarter: "Santa Monica, CALIFORNIA",
    dateFirstAdded: null,
    cik: "0000718877",
    founded: "1983-06-10",
  },
  {
    symbol: "ADBE",
    name: "Adobe",
    sector: "Technology",
    subSector: "Technology",
    headQuarter: "San Jose, CALIFORNIA",
    dateFirstAdded: null,
    cik: "0000796343",
    founded: "1986-01-08",
  },
  {
    symbol: "ADP",
    name: "ADP",
    sector: "Industrials",
    subSector: "Industrials",
    headQuarter: "Roseland, NEW JERSEY",
    dateFirstAdded: null,
    cik: "0000008670",
    founded: "1961-09-01",
  },
];
