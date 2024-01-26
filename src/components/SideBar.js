import { NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { BiDockLeft } from "react-icons/bi";
import { useTheme } from "./useTheme";
const Sidebar = () => {
  const { theme } = useTheme();
  return (
    <div className={`sidebar ${theme}`}>
      <NavLink className={`navlink ${theme}`} to={"/pokemons"}>
        {<BiCategory />}Pokemons
      </NavLink>
      <NavLink className={`navlink ${theme}`} to={"/about"}>
        {<BiDockLeft />}About
      </NavLink>
    </div>
  );
};
export default Sidebar;
