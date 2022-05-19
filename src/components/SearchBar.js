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

// add both cases
export async function filterCompanyData(rowData, search) {
  return rowData.filter(
    (row) =>
      row.symbol.toLowerCase().indexOf(search) > -1 ||
      row.name.toLowerCase().indexOf(search) > -1 ||
      row.symbol.toUpperCase().indexOf(search) > -1 ||
      row.name.toUpperCase().indexOf(search) > -1
  );
}
