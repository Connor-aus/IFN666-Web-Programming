import { useState } from "react";

export function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <div>
      <input
        aria-labelledby="search-button"
        name="searh"
        id="search"
        type="search"
        value={innerSearch}
        onChange={(e) => {
          setInnerSearch(e.target.value);
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}

export async function filterCompanyData(rowData, search, industrySelection) {
  let filteredData = rowData.filter(
    (row) =>
      row.symbol.toLowerCase().indexOf(search) > -1 ||
      row.name.toLowerCase().indexOf(search) > -1 ||
      row.symbol.toUpperCase().indexOf(search) > -1 ||
      row.name.toUpperCase().indexOf(search) > -1
  );

  if (industrySelection != "All") {
    return filteredData.filter(
      (row) => row.industry.indexOf(industrySelection) > -1
    );
  }
  return filteredData;
}
