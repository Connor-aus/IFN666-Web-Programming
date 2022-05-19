import { useState, useEffect } from "react";
import useAPI from "./API";

const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
const industryInfoURL = `//www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=`;

// add industry of this company

export default function CompanyInfo() {
  // const { loading, data, error } = useAPI(industryInfoURL, AA_API_KEY);

  // if (loading) {
  //   return <p>Loading...</p>; // wrong place?, use spinner
  // }

  // if (loading2) {
  //   return <p>Loading...</p>; // wrong place?, use spinner
  // }

  // if (error !== null) {
  //   return (alert = `${error}`); // this may be wrong, dont use alert
  // }

  return (
    <div className="CompanyInfo">
      <div className="container">
        <h1>Description</h1>
        <p>{exampleInfo.Description}</p>
      </div>
    </div>
  );
}

const exampleInfo = {
  Symbol: "IBM",
  AssetType: "Common Stock",
  Name: "International Business Machines Corporation",
  Description:
    "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
  CIK: "51143",
  Exchange: "NYSE",
  Currency: "USD",
  Country: "USA",
  Sector: "TECHNOLOGY",
  Industry: "COMPUTER & OFFICE EQUIPMENT",
  Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US",
  FiscalYearEnd: "December",
  LatestQuarter: "2022-03-31",
  MarketCapitalization: "124023792000",
  EBITDA: "12120001000",
  PERatio: "22.72",
  PEGRatio: "1.48",
  BookValue: "21.18",
  DividendPerShare: "6.57",
  DividendYield: "0.0494",
  EPS: "6.09",
  RevenuePerShareTTM: "65.03",
  ProfitMargin: "0.0946",
  OperatingMarginTTM: "0.105",
  ReturnOnAssetsTTM: "0.0271",
  ReturnOnEquityTTM: "0.245",
  RevenueTTM: "58361000000",
  GrossProfitTTM: "31486000000",
  DilutedEPSTTM: "6.09",
  QuarterlyEarningsGrowthYOY: "-0.239",
  QuarterlyRevenueGrowthYOY: "0.077",
  AnalystTargetPrice: "143.63",
  TrailingPE: "22.72",
  ForwardPE: "13.51",
  PriceToSalesRatioTTM: "2.125",
  PriceToBookRatio: "6.31",
  EVToRevenue: "2.865",
  EVToEBITDA: "13.48",
  Beta: "1.105",
  "52WeekHigh": "140.18",
  "52WeekLow": "111.84",
  "50DayMovingAverage": "130.92",
  "200DayMovingAverage": "129.72",
  SharesOutstanding: "896320000",
  DividendDate: "2022-06-10",
  ExDividendDate: "2022-05-09",
};
