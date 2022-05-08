import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Quote from "./pages/Quote";
import PriceHistory from "./pages/PriceHistory";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/stocks">Stocks</NavLink>
              </li>
              <li>
                <NavLink to="/quote">Quote</NavLink>
              </li>
              <li>
                <NavLink to="/pricehistory">Price Hostory</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/pricehistory" element={<PriceHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
