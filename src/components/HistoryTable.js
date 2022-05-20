import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function HistoryTable({ data }) {
  const [stockInfo, setStockInfo] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState();
  const [tableLoading, setTableLoading] = useState(true);

  // check for updated data then set rerender
  setTimeout(() => {
    setDataUpdate(data);
  }, 100);

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
        setRowData(await getRowData(stockhistory));
        setTableLoading(false);
      } catch {
        console.log(`History Table still being constructed`);
      }
    })();
  }, [dataUpdate]);

  if (tableLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="HistoryTable">
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%", marginBottom: "150px" }}
        >
          <h1>Price History - {stockInfo["2. Symbol"]}</h1>
          <p>
            Showing price history for {stockInfo["2. Symbol"]} - last refeshed{" "}
            {stockInfo["3. Last Refreshed"]}
          </p>
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
            defaultColDef={{
              flex: 1,
              resizable: true,
              columnHoverHighlight: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

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
