import { useEffect, useState } from "react";

const FMP_API_KEY = `e25ee6f07a20300466042dc2892848eb`;
const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;

async function getData(endPoint, API_KEY, ...props) {
  const url = `${endPoint}${API_KEY}`;
  let res = await fetch(url); // json array
  // console.log("res = " + res); ////

  try {
    let stuff = await res.json(); // check res.status and data.status
    // console.log("stuff = " + stuff); ////

    return stuff;
  } catch {
    return res;
  }
}

export default function useAPI(endPoint, API_KEY, ...props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  // console.log("API FUNCTION called"); ////

  useEffect(() => {
    (async () => {
      try {
        setData(await getData(endPoint, API_KEY, ...props));
        setLoading(false);
        console.log("API called"); ////
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  // console.log("data = " + data); ////

  return {
    loading,
    data,
    error: null,
  };
}
