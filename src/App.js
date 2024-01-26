import "./index.css";
import { useTheme } from "./components/useTheme";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Sidebar from "./components/SideBar";
import AboutPage from "./components/AboutPage";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const App = () => {
  const { theme, handleTheme, themeName } = useTheme();

  return (
    <>
      <nav>
        <img src={require("./components/pokemonLogo.png")} alt="logo"></img>
        <div className="navright">
          <a href="https://github.com/Nurmira16" target="blank">
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/nurmirazhorobekkyzy/"
            target="blank"
          >
            <FaLinkedin style={{ fontSize: "25px" }} />
          </a>

          <button className={`navBtn ${theme}`} onClick={handleTheme}>
            {themeName}
          </button>
        </div>
      </nav>
      <div className="mainPart">
        <Sidebar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pokemons" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
