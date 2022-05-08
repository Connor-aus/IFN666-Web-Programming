import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";

import { useState, useEffect } from "react";

import { useNewsArticles } from "./../api";
import Headline from "./../components/Headline";
import { SearchBar } from "./../components/SearchBar";

// show intro to webpage (about)
// table with [symbol, name, industry]
// table with industry performance ??

// Health Care
// Financials
// Industrials
// Real Estate
// Consumer Discretionary
// Materials
// Information Technology
// Energy
// Consumer Staples
// Telecommunication Services
// Utilities

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

export default function Home() {
  const [rowData, setRowData] = useState([]);

  const [search, setSearch] = useState("");
  const { loading, headlines, error } = useNewsArticles(search);

  const table = {
    columns: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ],
    rowData: [
      { make: "Toyota", model: "Camry", price: 28000 },
      { make: "Ford", model: "Focus", price: 16700 },
      { make: "Hyandai", model: "Kona", price: 23500 },
    ],
  };

  const columns = [
    { headerName: "Title", field: "title" },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" },
  ];

  async function getLibrary() {
    let res = await fetch(
      "https://openlibrary.org/subjects/drama.json?published_in=2000"
    );
    let data = await res.json();
    let works = await data.works;

    return works.map((book) => {
      return {
        title: book.title,
        author: book.authors[0].name,
        editionCount: book.edition_count,
        id: book.cover_id,
      };
    });
  }

  useEffect(() => {
    (async () => {
      setRowData(await getLibrary());
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Home">
      <div className="container">
        <SearchBar onSubmit={setSearch} />
        {headlines.map((headline) => (
          <Headline {...headline} />
        ))}
      </div>

      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Home</h1>
          <Badge colour="success">{rowData.length}</Badge> Books published
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
          />
          <Button
            color="info"
            size="sm"
            className="mt-3"
            href="http://openlibrary.org/developers/api"
            target="_blank"
          >
            Go to open library API
          </Button>
        </div>
      </div>
    </div>
  );
}
