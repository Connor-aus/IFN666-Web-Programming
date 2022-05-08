import { useState } from "react";

// select stock (search with predictive)
// search button
// industry category selector (drop down)
// table below should show [stock, name, industry]

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <div>
      <input
        aria-labelledby="search-button"
        name="searh"
        id="search"
        type="search"
        value={innerSearch}
        onChange={(e) => setInnerSearch(e.target.value)}
      />
      <button
        id="search=button"
        type="button"
        onClick={() => props.onSubmit(innerSearch)}
      >
        Search
      </button>
    </div>
  );
}
