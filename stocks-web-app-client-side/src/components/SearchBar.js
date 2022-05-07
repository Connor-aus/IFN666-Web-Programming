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
