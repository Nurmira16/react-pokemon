import { useEffect, useRef, useState } from "react";
import { fetchData, fetchPokemonByName } from "./fetchData";
import Pokemon from "./components/Pokemon";
import "./index.css";
import { useTheme } from "./components/useTheme";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "./components/Skeleton";
import { sortClass, sortPokemons } from "./components/helper";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Sidebar from "./components/SideBar";

const App = () => {
  const { theme, handleTheme, themeName } = useTheme();

  return (
    <>
      <nav>
        <img src={require("./components/pokemonLogo.png")}></img>
        <button className="navBtn" onClick={handleTheme}>
          {themeName}
        </button>
      </nav>
      <div className="mainPart">
        <Sidebar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<>Hello</>}></Route>
            <Route path="/pokemons" element={<MainPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
