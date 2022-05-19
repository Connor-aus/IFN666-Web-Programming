import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function IndustryTable({ data }) {
  const [rowData, setRowData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState();
  const [tableLoading, setTableLoading] = useState(true);

  // check for updated data then set rerender
  setTimeout(() => {
    setDataUpdate(data);
  }, 100);

  useEffect(() => {
    (async () => {
      try {
        let industryInfo = Object.entries(data).map(([title, x]) => ({
          title,
          ...x,
        }));

        industryInfo.shift();
        setColumnData(await getColumnData(industryInfo));
        setRowData(await getRowData(industryInfo)); // error checking ??
        setTableLoading(false);
      } catch {
        console.log(`Industry data still being fetched `);
      }
    })();
  }, [dataUpdate]);

  if (tableLoading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }

  return (
    <div className="IndustryTable">
      <div
        className="ag-theme-balham"
        style={{ height: "300px", width: "100%" }}
      >
        <h1>Industry Performance</h1>
        <p>
          Showing Industry performance - last refeshed{" "}
          {data[`Meta Data`][`Last Refreshed`]}
        </p>
        <AgGridReact
          columnDefs={columnData}
          rowData={rowData}
          pagination={true}
        />
      </div>
    </div>
  );
}

async function getRowData(stockHistory) {
  // if (stocks == []) return []; // error checking??
  let rows = [];
  let temp = {};
  let elementArray = [];
  let arrayLength = stockHistory.length;
  let objectLength = Object.keys(stockHistory[0]).length;

  stockHistory.forEach((element) => {
    elementArray.push(element.title.slice(8));
  });

  for (let i = 1; i < objectLength; i++) {
    temp = {};
    let industryName = Object.keys(stockHistory[0])[i];
    temp.industry = industryName;

    for (let x = 0; x < arrayLength; x++) {
      temp[`${elementArray[x]}`] = stockHistory[x][`${industryName}`];
    }
    rows.push(temp);
  }
  return rows;
}

async function getColumnData(stockHistory) {
  // if (stocks == []) return []; // error checking??
  let columns = [{ headerName: `Industry`, field: `industry` }];

  stockHistory.forEach((element) => {
    let coloumn = element.title.slice(8);
    columns.push({ headerName: coloumn, field: coloumn });
  });
  return columns;
}
