import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getColumnData, getRowData } from "../components/StockTable";
import SearchBar from "./../components/SearchBar";
import useAPI from "../components/API";

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

const FMP_API_KEY = `e25ee6f07a20300466042dc2892848eb`;
const stockURL = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=`;

const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
const industryURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=`;

export default function Stocks() {
  const { loading, data, error } = useAPI(stockURL, FMP_API_KEY);
  const [gridColumnApi, setGridColumnApi] = useState();
  const [gridApi, setGridApi] = useState();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [coloumnData, setColumnData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  // function symbolFinder(params) {
  //   let rowLength = data.length;
  //   let count = 0;
  //   let notFound = `not found`;
  //   while (count < rowLength) {
  //     if (data[count].name == params.value) return data[count].symbol;
  //     count++;
  //   }
  //   return notFound;
  // }

  // async function getRowData(stocks) {
  //   // if (stocks == []) return []; // error checking??

  //   return stocks.map((stock) => {
  //     return {
  //       symbol: stock.symbol,
  //       name: stock.name,
  //       industry: stock.sector,
  //     };
  //   });
  // }

  useEffect(() => {
    (async () => {
      try {
        let rows = await getRowData(data);
        setRowData(rows); // error checking ??
        setSearchData(rows); // error checking ??
        setColumnData(getColumnData(data));
        setTableLoading(false); // correct
        setChartLoading(false); // correct
      } catch {
        console.log(`Stock data still being fetched` + error);
      }
    })();
  }, [data]);

  useEffect(() => {
    (async () => {
      setSearchData(filterData(rowData));
    })();
  }, [search]);

  function filterData(rowData) {
    return rowData.filter(
      (row) =>
        row.symbol.toLowerCase().indexOf(search) > -1 ||
        row.name.toLowerCase().indexOf(search) > -1
    );
  }

  if (loading || chartLoading || tableLoading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }

  if (error !== null) {
    return (alert = `${error}`); // this may be wrong, dont use alert
  }

  return (
    <div className="Stocks">
      <div className="container">
        <h1>Search</h1>
        <SearchBar onChange={setSearch} />
      </div>
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Stocks</h1>
          <Badge colour="success">{rowData.length}</Badge> Companies listed
          <AgGridReact
            columnDefs={coloumnData}
            rowData={searchData}
            pagination={true}
            rowSelection="single"
            onGridReady={onGridReady}
          />
          <Button
            color="info"
            size="sm"
            className="mt-3"
            href="https://site.financialmodelingprep.com/developer/docs"
            target="_blank"
          >
            Go to open library API
          </Button>
        </div>
      </div>
    </div>
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
