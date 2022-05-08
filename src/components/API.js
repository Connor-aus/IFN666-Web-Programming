import { useEffect, useState } from "react";

const FMP_API_KEY = `e25ee6f07a20300466042dc2892848eb`;

async function getData(endPoint, API_KEY, ...props) {
  const url = `${endPoint}${API_KEY}`;
  let res = await fetch(url); // json array
  let data = await res.json();

  return data;

  // console.log(companyData[0].name);
  // return companyData.map((company) => {
  //   return {
  //     symbol: company.symbol,
  //     name: company.name,
  //     industry: company.sector,
  //   };
  // });

  //return res;
}

export default function useAPI(endPoint, API_KEY, ...props) {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setStocks(await getData(endPoint, API_KEY, ...props));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    stocks,
    error: null,
  };
}
