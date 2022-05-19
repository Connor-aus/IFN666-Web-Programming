import { useState } from "react";

// select stock (search with predictive)
// search button
// industry category selector (drop down)
// table below should show [stock, name, industry]

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
          props.onChange(innerSearch);
        }}
      />
      {/* <button
        id="search=button"
        type="button"
        onClick={() => props.onSubmit(innerSearch)}
      >
        Search
      </button> */}
    </div>
  );
}

export async function filterData(rowData, search) {
  return rowData.filter(
    (row) =>
      row.symbol.toLowerCase().indexOf(search) > -1 ||
      row.name.toLowerCase().indexOf(search) > -1
  );
}
