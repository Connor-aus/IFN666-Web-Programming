import "./App.css";
import React, { useState } from "react";
import { useNewsArticles } from "./api";
import Headline from "./components/Headline";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const { loading, headlines, error } = useNewsArticles(search);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <SearchBar onSubmit={setSearch}/>
      {headlines.map((headline) => (
        <Headline {...headline} />
      ))}
    </div>
  );
}

export default App;
