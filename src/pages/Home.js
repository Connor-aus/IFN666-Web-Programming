import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, badge, Badge } from "reactstrap";

import { useState, useEffect } from "react";

import useAPI from "../components/API";

// show intro to webpage (about)

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Home</h1>
          <p>This is where the information will go</p>
        </div>
      </div>
    </div>
  );
}
