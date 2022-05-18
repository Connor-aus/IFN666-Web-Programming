import "./App.css";

import React, { useState } from "react";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Quote from "./pages/Quote";
import PriceHistory from "./pages/PriceHistory";
import ErrorPage from "./pages/ErrorPage";
import Industry from "./pages/Industry";

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
            {/*make navbar into a map function */}
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
                <NavLink to="/pricehistory">Price History</NavLink>
              </li>
              <li>
                <NavLink to="/industry">Industry</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/pricehistory" element={<PriceHistory />}>
          <Route path=":symbol" element={<PriceHistory />} />
        </Route>
        <Route path="/industry" element={<Industry />}>
          <Route path=":industry" element={<Industry />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
