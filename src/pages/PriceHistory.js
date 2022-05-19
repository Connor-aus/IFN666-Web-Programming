import { Button, badge, Badge } from "reactstrap";
import { useParams } from "react-router-dom";

import HistoryChart from "../components/HistoryChart.js";
import HistoryTable from "../components/HistoryTable.js";
import CompanyInfo from "../components/CompanyInfo.js";
import useAPI from "../components/API";

export default function PriceHistory() {
  const { symbol } = useParams("");
  const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
  const priceHistoryURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=`;
  const { loading, data, error } = useAPI(priceHistoryURL, AA_API_KEY);

  if (loading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }

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
        <CompanyInfo data={symbol} />
      </div>
      <HistoryTable data={data} />
      <Button
        color="info"
        size="sm"
        className="mt-3"
        href="https://www.alphavantage.co/documentation/"
        target="_blank"
      >
        Go to open library API
      </Button>
      <div className="container">
        {loading ? <h1>Loading ...</h1> : <HistoryChart data={data} />}
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
