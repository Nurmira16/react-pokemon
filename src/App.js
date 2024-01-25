import { useEffect, useRef, useState } from "react";
import { fetchData, fetchPokemonByName } from "./fetchData";
import Pokemon from "./components/Pokemon";
import "./index.css";
import { useTheme } from "./components/useTheme";

const App = () => {
  const { theme, handleTheme } = useTheme();
  const [currentPokemon, setCurrentPokemon] = useState({});
  const inputRef = useRef(null);
  const handleInput = () => {
    fetchPokemonByName(inputRef.current.value).then((data) =>
      setCurrentPokemon(data)
    );
  };
  return (
    <>
      <nav></nav>
      <div className={`app ${theme}`}>
        <div className="search">
          <input className="input" ref={inputRef}></input>
          <button className="btn" onClick={handleInput}>
            Search
          </button>
        </div>
        <button onClick={handleTheme}>Change</button>
        <Pokemon pokemon={currentPokemon}></Pokemon>
      </div>
    </>
  );
};

export default App;
