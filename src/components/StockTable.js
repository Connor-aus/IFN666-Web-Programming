import { Link } from "react-router-dom";

export function getColumnData(data) {
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

export async function getRowData(stocks) {
  // if (stocks == []) return []; // error checking??

  return stocks.map((stock) => {
    return {
      symbol: stock.symbol,
      name: stock.name,
      industry: stock.sector,
    };
  });
}
