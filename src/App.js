import "./App.css";

import React from "react";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import PriceHistory from "./pages/PriceHistory";
import PageNotFound from "./pages/PageNotFound";
import Industry from "./pages/Industry";
import NavLayout from "./components/NavLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavLayout />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/pricehistory" element={<PriceHistory />}>
          <Route path=":symbol" element={<PriceHistory />} />
        </Route>
        <Route path="/industry" element={<Industry />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
