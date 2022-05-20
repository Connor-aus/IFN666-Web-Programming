import { useEffect, useState } from "react";

async function getData(endPoint, API_KEY, ...props) {
  const url = `${endPoint}${API_KEY}`;
  let res = await fetch(url); // json array

  try {
    // check res.status and data.status
    let stuff = await res.json();
    return stuff;
  } catch {
    return res;
  }
}

export default function useAPI(endPoint, API_KEY, ...props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await getData(endPoint, API_KEY, ...props));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    data,
    error,
  };
}
