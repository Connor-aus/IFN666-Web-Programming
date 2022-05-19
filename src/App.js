import "./App.css";

import React from "react";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import PriceHistory from "./pages/PriceHistory";
import PageNotFound from "./pages/PageNotFound";
import Industry from "./pages/Industry";
import NavLayout from "./components/NavLayout";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div id="background">
      <Router>
        <div className="App">
          <NavLayout />
          <Footer />
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
    </div>
  );
}

export default App;
