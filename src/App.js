import { useEffect, useRef, useState } from "react";
import { fetchData, fetchPokemonByName } from "./fetchData";
import Card from "./components/Card";
import Pokemon from "./components/Pokemon";

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const inputRef = useRef(null);
  const handleInput = () => {
    fetchPokemonByName(inputRef.current.value).then((data) =>
      setCurrentPokemon(data)
    );
  };
  console.log(currentPokemon);
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={handleInput}>Search</button>
      <Pokemon pokemon={currentPokemon}></Pokemon>
    </div>
  );
};

export default App;
