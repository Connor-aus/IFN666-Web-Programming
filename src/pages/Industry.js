import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";
import { useState, useEffect } from "react";

import { getColumnData, getRowData } from "../components/IndustryTable";
import useAPI from "../components/API";

const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
const industryURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=`;

export default function PriceHistory() {
  //const { loading, data, error } = useAPI(industryURL, AA_API_KEY);
  const [industryData, setIndustryData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  // async function getRowData(stockHistory) {
  //   // if (stocks == []) return []; // error checking??
  //   let rows = [];
  //   let temp = {};
  //   let elementArray = [];
  //   let arrayLength = stockHistory.length;
  //   let objectLength = Object.keys(stockHistory[0]).length;

  //   stockHistory.forEach((element) => {
  //     elementArray.push(element.title.slice(8));
  //   });

  //   for (let i = 1; i < objectLength; i++) {
  //     temp = {};
  //     let industryName = Object.keys(stockHistory[0])[i];
  //     temp.industry = industryName;

  //     for (let x = 0; x < arrayLength; x++) {
  //       temp[`${elementArray[x]}`] = stockHistory[x][`${industryName}`];
  //     }
  //     rows.push(temp);
  //   }
  //   return rows;
  // }

  // async function getColumnData(stockHistory) {
  //   // if (stocks == []) return []; // error checking??
  //   let columns = [{ headerName: `Industry`, field: `industry` }];

  //   stockHistory.forEach((element) => {
  //     let coloumn = element.title.slice(8);
  //     columns.push({ headerName: coloumn, field: coloumn });
  //   });
  //   return columns;
  // }

  useEffect(() => {
    (async () => {
      try {
        let industryInfo = Object.entries(exampleIndustry).map(
          ([title, x]) => ({
            title,
            ...x,
          })
        );

        setIndustryData(exampleIndustry);

        industryInfo.shift();
        setColumnData(await getColumnData(industryInfo));
        setRowData(await getRowData(industryInfo)); // error checking ??
      } catch {
        console.log(`Industry data still being fetched `);
      }
    })();
  }, [exampleIndustry]);

  // if (loading || tableLoading) {
  //   return <p>Loading...</p>; // wrong place?, use spinner
  // }

  // if (loading2) {
  //   return <p>Loading...</p>; // wrong place?, use spinner
  // }

  // if (error !== null) {
  //   return (alert = `${error}`); // this may be wrong, dont use alert
  // }

  return (
    <div className="Industry">
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Industry Performance</h1>
          <p>
            Showing Industry performance - last refeshed{" "}
            {tableLoading
              ? "[Not Available]"
              : industryData[`Meta Data`][`Last Refreshed`]}
          </p>
          <AgGridReact
            columnDefs={columnData}
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
      <div className="container"></div>
    </div>
  );
}

const exampleIndustry = {
  "Meta Data": {
    Information: "US Sector Performance (realtime & historical)",
    "Last Refreshed": "2022-05-17 18:35:28 US/Eastern",
  },
  "Rank A: Real-Time Performance": {
    "Information Technology": "2.91%",
    Materials: "2.86%",
    Financials: "2.69%",
    "Consumer Discretionary": "2.68%",
    Industrials: "2.28%",
    "Communication Services": "1.82%",
    "Health Care": "1.38%",
    Energy: "1.14%",
    "Real Estate": "1.05%",
    Utilities: "1.02%",
    "Consumer Staples": "-1.15%",
  },
  "Rank B: 1 Day Performance": {
    Energy: "2.62%",
    "Health Care": "0.69%",
    "Consumer Staples": "0.45%",
    Utilities: "0.33%",
    Industrials: "-0.17%",
    Materials: "-0.19%",
    "Communication Services": "-0.59%",
    Financials: "-0.78%",
    "Real Estate": "-0.80%",
    "Information Technology": "-0.91%",
    "Consumer Discretionary": "-2.12%",
  },
  "Rank C: 5 Day Performance": {
    Energy: "8.66%",
    "Health Care": "2.37%",
    "Communication Services": "1.73%",
    "Consumer Staples": "0.70%",
    Materials: "0.59%",
    "Real Estate": "-0.02%",
    Utilities: "-0.23%",
    Industrials: "-0.38%",
    "Information Technology": "-0.46%",
    "Consumer Discretionary": "-1.25%",
    Financials: "-1.92%",
  },
  "Rank D: 1 Month Performance": {
    Energy: "3.40%",
    "Consumer Staples": "-2.29%",
    Utilities: "-6.16%",
    "Health Care": "-6.69%",
    Industrials: "-7.16%",
    Materials: "-7.58%",
    "Information Technology": "-8.59%",
    Financials: "-10.01%",
    "Communication Services": "-11.25%",
    "Real Estate": "-12.36%",
    "Consumer Discretionary": "-17.36%",
  },
  "Rank E: 3 Month Performance": {
    Energy: "21.90%",
    Utilities: "8.11%",
    "Consumer Staples": "2.78%",
    "Health Care": "-0.74%",
    Materials: "-3.08%",
    "Real Estate": "-5.45%",
    Industrials: "-7.59%",
    "Information Technology": "-15.67%",
    "Communication Services": "-16.63%",
    Financials: "-17.35%",
    "Consumer Discretionary": "-20.48%",
  },
  "Rank F: Year-to-Date (YTD) Performance": {
    Energy: "48.63%",
    "Consumer Staples": "0.13%",
    Utilities: "-0.28%",
    "Health Care": "-8.28%",
    Materials: "-9.27%",
    Industrials: "-12.29%",
    Financials: "-15.09%",
    "Real Estate": "-17.67%",
    "Information Technology": "-22.97%",
    "Communication Services": "-25.74%",
    "Consumer Discretionary": "-27.85%",
  },
  "Rank G: 1 Year Performance": {
    Energy: "56.57%",
    "Consumer Staples": "10.70%",
    Utilities: "8.65%",
    "Health Care": "4.96%",
    "Real Estate": "2.02%",
    "Information Technology": "-1.35%",
    Materials: "-6.36%",
    Industrials: "-11.28%",
    Financials: "-12.25%",
    "Consumer Discretionary": "-14.97%",
    "Communication Services": "-21.43%",
  },
  "Rank H: 3 Year Performance": {
    "Information Technology": "78.57%",
    Materials: "52.38%",
    "Health Care": "48.40%",
    "Consumer Staples": "36.50%",
    Energy: "33.28%",
    "Consumer Discretionary": "26.63%",
    Financials: "24.51%",
    Industrials: "24.41%",
    Utilities: "23.44%",
    "Communication Services": "21.14%",
    "Real Estate": "18.53%",
  },
  "Rank I: 5 Year Performance": {
    "Information Technology": "145.98%",
    "Health Care": "72.45%",
    "Consumer Discretionary": "62.53%",
    Materials: "55.38%",
    "Consumer Staples": "42.27%",
    Financials: "40.29%",
    Utilities: "38.10%",
    "Real Estate": "37.77%",
    Industrials: "37.67%",
    "Communication Services": "26.47%",
    Energy: "25.55%",
  },
  "Rank J: 10 Year Performance": {
    "Information Technology": "413.66%",
    "Health Care": "255.72%",
    "Consumer Discretionary": "237.81%",
    Financials: "184.73%",
    Industrials: "159.36%",
    Materials: "141.04%",
    "Consumer Staples": "131.04%",
    Utilities: "101.06%",
    "Communication Services": "45.20%",
    Energy: "28.43%",
  },
};
