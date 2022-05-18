import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import HistoryChart from "../components/HistoryChart.js";
import CompanyInfo from "../components/CompanyInfo.js";
import useAPI from "../components/API";

// import { SelectionHandleType } from "ag-grid-community";

// click on stock name to enter this page
// or click history link and search
// present chart which will show the closing price
// table with [date, opne, high, close, volumes]
// chart below with [price, date] - selectDateFrom widget
// chartJS (https://www.chartjs.org/) or d3 (https://d3js.org/). D3 is an advanced library and you shouldn’t attempt it unless you have prior experience.
// show info about stock https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=xxxx

// import chart from chartjs
// import line from reactcharts-2

const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
const priceHistoryURL2 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=`;

export default function PriceHistory() {
  const { symbol } = useParams("");
  const priceHistoryURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=`;
  const { loading, data, error } = useAPI(priceHistoryURL, AA_API_KEY);
  const [chartLoading, setChartLoading] = useState(true);
  const [stockInfo, setStockInfo] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [rowData, setRowData] = useState([]);

  const columns = [
    { headerName: "Date", field: "date" },
    { headerName: "Open", field: "open" },
    { headerName: "High", field: "high" },
    { headerName: "Low", field: "low" },
    { headerName: "Close", field: "close" },
    { headerName: "Volume", field: "volume" },
  ];

  async function getRowData(stockhistory) {
    // if (stocks == []) return []; // error checking??
    return stockhistory.map((stock) => {
      return {
        date: stock.date,
        open: stock["1. open"],
        high: stock["2. high"],
        low: stock["3. low"],
        close: stock["4. close"],
        volume: stock["5. volume"],
      };
    });
  }

  useEffect(() => {
    (async () => {
      try {
        let metaData = Object.entries(data).map(([data, x]) => ({
          data,
          ...x,
        }));
        setStockInfo(metaData[0]);

        let stockhistory = Object.entries(data["Time Series (Daily)"]).map(
          ([date, x]) => ({
            date,
            ...x,
          })
        );

        setStockData(stockhistory);
        setChartLoading(false);
        setRowData(await getRowData(stockhistory)); // error checking ??
      } catch {
        console.log(`History data still being fetched` + error);
      }
    })();
  }, [data]);

  if (loading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }
  // if (chartLoading) {
  //   return <p>Loading...</p>; // wrong place?, use spinner
  // }

  if (error !== null) {
    return (alert = `${error}`); // this may be wrong, dont use alert
  }

  return (
    <div className="StockHistry">
      <div className="container">
        {/* <SearchBar onSubmit={setSearch} /> */}
        {/* {companyData.map((company) => (
          <Company {...company} />
        ))} */}
      </div>
      <div className="container">
        <CompanyInfo />
      </div>
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Price History - {symbol}</h1>
          <p>
            Showing price history for {stockInfo["2. Symbol"]} - last refeshed{" "}
            {stockInfo["3. Last Refreshed"]}
          </p>
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
          />
          <Button
            color="info"
            size="sm"
            className="mt-3"
            href="https://www.alphavantage.co/documentation/"
            target="_blank"
          >
            Go to open library API
          </Button>
        </div>
      </div>
      <div className="container">
        {error && <p class="error">Error. Please try again later...</p>}
        {loading ? <h1>Loading ...</h1> : <HistoryChart data={stockData} />}
      </div>
    </div>
  );
}

const TSD = {
  "Meta Data": {
    "1. Information": "Daily Time Series with Splits and Dividend Events",
    "2. Symbol": "IBM",
    "3. Last Refreshed": "2022-05-13",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern",
  },
  "Time Series (Daily)": {
    "2022-05-13": {
      "1. open": "133.0",
      "2. high": "133.8",
      "3. low": "131.05",
      "4. close": "133.6",
      "5. adjusted close": "133.6",
      "6. volume": "4195218",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0",
    },
    "2022-05-12": {
      "1. open": "131.27",
      "2. high": "133.62",
      "3. low": "130.41",
      "4. close": "132.9",
      "5. adjusted close": "132.9",
      "6. volume": "5384809",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0",
    },
    "2022-05-11": {
      "1. open": "129.86",
      "2. high": "132.96",
      "3. low": "129.86",
      "4. close": "130.75",
      "5. adjusted close": "130.75",
      "6. volume": "5301131",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0",
    },
  },
};
