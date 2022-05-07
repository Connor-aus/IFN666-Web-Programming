import { useState, useEffect } from "react";

const API_KEY = `0a25f094f4f94446b1a2105e99684468`;

async function getHeadlines(search) {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}&q=${search}`;
  let res = await fetch(url);
  let data = await res.json();

  return data.articles;
}

// function getHeadlinesThen(search) {
//   const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data.articles);
// }

export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          setHeadlines(await getHeadlines(search));
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      })();
    }, [search]); // when SEARCH is updated the useEffect will be run again


  // Alternatively use the .then syntax  
  // useEffect(() => {
  //   getHeadlines()
  //     .then((articles) => {
  //       setHeadlines(articles);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);
  return {
    loading,
    headlines,
    error: null,
  };
}
