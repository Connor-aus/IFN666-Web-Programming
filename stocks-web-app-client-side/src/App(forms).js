import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
const [name, setName] = useState("");
const [error, setError] = useState(null);

  return (
    <div className="App">
      {name !== "" ? <h1>Hello, {name}</h1> : null}
      {error !== null ? <p>Error: {error}</p> : null}
      <form onSubmit={(event) => {
        event.preventDefault();
        if(error == null) {
          alert(`You are submitting ${name}`); //avoid ALERT as its ugly
        }
      }}>
        <input 
          type="text" 
          value={name} 
          onChange={(event) => {
            if (!/[0-9]/.test(event.target.value)) {
              setError(null);
            } else {
              setError(`Names are not allowed to include numbers`)
            }
            setName(event.target.value);
          }}
        />
        <input
          type="submit" />
      </form>
    </div>
  );
}

export default App;
