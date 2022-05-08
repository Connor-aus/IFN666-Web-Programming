import { useState, useEffect } from "react";

const AA_API_KEY = `NHGS3IDIQ0OIJCEX`;
const FMP_API_KEY = `e25ee6f07a20300466042dc2892848eb`;

export async function getCompanies() {
  const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${FMP_API_KEY}`;
  let res = await fetch(url); // json array

  console.log(`in API as res`);
  console.log(typeof res);
  console.log(typeof res);
  console.log(typeof res[0]);
  console.log(res[0].name);

  let data = await res.json();

  console.log(`in API as data`);
  console.log(typeof res);
  console.log(typeof res);
  console.log(typeof res[0]);
  console.log(res[0].name);
  console.log(`fetch done + ${res}`);

  return res;
}
