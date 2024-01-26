import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to={"/pokemons"}>{<BiCategory />}Pokemons</NavLink>
      <Link>About</Link>
    </div>
  );
};
export default Sidebar;
