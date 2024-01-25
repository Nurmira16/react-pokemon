import { useEffect, useRef, useState } from "react";
import { fetchData, fetchPokemonByName } from "./fetchData";
import Pokemon from "./components/Pokemon";
import "./index.css";
import { useTheme } from "./components/useTheme";

const App = () => {
  const { theme, handleTheme, themeName } = useTheme();
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const inputRef = useRef(null);
  const handleInput = () => {
    fetchPokemonByName(inputRef.current.value).then((data) =>
      setCurrentPokemon(data)
    );
  };
  useEffect(() => {
    fetchData().then((data) => {
      const newData = [...pokemonsList, ...data];
      setPokemonsList(newData);
    });
  }, []);
  console.log(pokemonsList);

  return (
    <>
      <nav>
        <img src={require("./components/pokemonLogo.png")}></img>
        <button className="navBtn" onClick={handleTheme}>
          {themeName}
        </button>
      </nav>
      <div className={`app ${theme}`}>
        <div className="search">
          <input className="input" ref={inputRef}></input>
          <button className="btn" onClick={handleInput}>
            Search
          </button>
        </div>
        <div className="currentPokemon">
          <Pokemon pokemon={currentPokemon}></Pokemon>
        </div>
        <div className="pokemonList">
          {pokemonsList.map((item) => (
            <Pokemon pokemon={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
