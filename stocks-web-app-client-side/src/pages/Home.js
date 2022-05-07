import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";

import { useState, useEffect } from "react";

export default function Home() {
  const [rowData, setRowData] = useState([]);

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

  return (
    <div className="container">
      <div
        className="ag-theme-balham"
        style={{ height: "300px", width: "100%" }}
      >
        <h1>Home</h1>
        <Badge colour="success">{rowData.length}</Badge> Books published
        <AgGridReact columnDefs={columns} rowData={rowData} pagination={true} />
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
  );
}
