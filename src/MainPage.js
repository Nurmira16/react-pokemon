import { useEffect, useRef, useState } from "react";
import { fetchData, fetchPokemonByName } from "./fetchData";
import Pokemon from "./components/Pokemon";
import "./index.css";

import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "./components/Skeleton";
import { sortClass, sortPokemons } from "./components/helper";
import { useTheme } from "./components/useTheme";

const MainPage = () => {
  const { theme } = useTheme();
  const [pag, setPag] = useState({
    from: 1,
    till: 20,
  });
  const [sortBy, setSortBy] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const inputRef = useRef(null);
  const handleInput = () => {
    fetchPokemonByName(inputRef.current.value)
      .then((data) => {
        setCurrentPokemon(data);
      })
      .catch((error) => {
        console.log("Error handling input:", error);
      });
  };
  const handleType = (e) => {
    setSortBy(e.target.name);
  };
  // useEffect(() => {
  //   fetchData(pag.from, pag.till).then((data) => {
  //     const newData = [...pokemonsList, ...data];
  //     setPokemonsList(newData);
  //   });
  // }, [pag]);
  useEffect(() => {
    submitPokemons();
  }, []);
  const nextPage = () => {
    setPag((prev) => ({ ...prev, from: prev.from + 20, till: prev.till + 20 }));
  };
  const submitPokemons = () => {
    fetchData(pag.from, pag.till)
      .then((data) => {
        const newData = pokemonsList.concat(data);
        setPokemonsList(newData);
      })
      .then(() => {
        setPag((prev) => ({
          ...prev,
          from: prev.from + 20,
          till: prev.till + 20,
        }));
      });
  };
  // console.log(pokemonsList);
  return (
    <>
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
        <div className="compareBtn">
          <button
            name="weight"
            id={sortClass(sortBy === "weight", "active")}
            onClick={handleType}
          >
            most fat
          </button>
          <button
            name="attack"
            id={sortClass(sortBy === "attack", "active")}
            onClick={handleType}
          >
            strongest
          </button>
        </div>
        <div className="pokemonList">
          <InfiniteScroll
            hasMore={true}
            next={submitPokemons}
            dataLength={pokemonsList.length}
            loader={
              <div>
                {[...Array(20)].map((item) => (
                  <Skeleton />
                ))}
              </div>
            }
          >
            {sortPokemons(pokemonsList, sortBy).map((item) => (
              <Pokemon pokemon={item} />
            ))}
          </InfiniteScroll>
        </div>
        <button onClick={nextPage}>Next</button>
        <button>Prev</button>
      </div>
    </>
  );
};
export default MainPage;
