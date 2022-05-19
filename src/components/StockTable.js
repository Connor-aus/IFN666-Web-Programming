import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IndustryDropDown, filterIndustryData } from "./IndustryDropDown";
import { SearchBar, filterCompanyData } from "./../components/SearchBar";

export default function StockTable({ data }) {
  const [gridColumnApi, setGridColumnApi] = useState();
  const [gridApi, setGridApi] = useState();
  const [dataUpdate, setDataUpdate] = useState();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [industrySelection, setIndustrySelection] = useState("");
  const [rowData, setRowData] = useState([]);
  const [coloumnData, setColumnData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  // check for updated data then set rerender
  setTimeout(() => {
    setDataUpdate(data);
  }, 100);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  useEffect(() => {
    (async () => {
      try {
        let rows = await getRowData(data);
        setRowData(rows); // error checking ??
        setSearchData(rows); // error checking ??
        setColumnData(await getColumnData(data));
        setTableLoading(false);
      } catch {
        console.log(`Stock Table still being constucted.`);
      }
    })();
  }, [dataUpdate, search]);

  useEffect(() => {
    (async () => {
      setSearchData(await filterCompanyData(rowData, search));
    })();
  }, [search]);

  useEffect(() => {
    (async () => {
      setSearchData(await filterIndustryData(rowData, industrySelection));
    })();
  }, [industrySelection]);

  if (tableLoading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }

  return (
    <div className="StockTable">
      <div className="container">
        <h1>Search</h1>
        <SearchBar onChange={setSearch} />
        <IndustryDropDown onChange={setIndustrySelection} />
      </div>
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Stocks</h1>
          <Badge colour="success">{rowData.length}</Badge> Companies list
          <AgGridReact
            columnDefs={coloumnData}
            rowData={searchData}
            pagination={true}
            rowSelection="single"
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
}

async function getColumnData(data) {
  return [
    {
      headerName: "Symbol",
      field: "symbol",
      cellRendererFramework: (params) => (
        <Link to={`/PriceHistory/${params.value}`}>{params.value}</Link>
      ),
    },
    {
      headerName: "Name",
      field: "name",
      cellRendererFramework: (params) => {
        let linkSymbol = symbolFinder(params, data);
        return <Link to={`/PriceHistory/${linkSymbol}`}>{params.value}</Link>;
      },
    },
    {
      headerName: "Industry",
      field: "industry",
      cellRendererFramework: (params) => (
        <Link to={`/Industry`}>{params.value}</Link>
      ),
    },
  ];
}

function symbolFinder(params, data) {
  let rowLength = data.length;
  let count = 0;
  let notFound = `not found`;
  while (count < rowLength) {
    if (data[count].name == params.value) return data[count].symbol;
    count++;
  }
  return notFound;
}

async function getRowData(stocks) {
  // if (stocks == []) return []; // error checking??
  return stocks.map((stock) => {
    return {
      symbol: stock.symbol,
      name: stock.name,
      industry: stock.sector,
    };
  });
}
